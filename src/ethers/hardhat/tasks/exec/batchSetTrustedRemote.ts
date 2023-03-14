import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { TLocalDeployment } from '../../../../shared';
import { TapiocaOFT__factory } from '../../../../typechain';
import { Multicall3 } from '../../../../typechain/utils/MultiCall';
import { Multicall3__factory } from '../../../../typechain/utils/MultiCall/factories';

// npx hardhat BatchSetTrustedRemote --network arbitrum_goerli --contract 'MarketsProxy'
export const BatchSetTrustedRemote__task = async (
    taskArgs: { contract: string; tag?: string },
    hre: HardhatRuntimeEnvironment,
) => {
    const { contract, tag } = taskArgs;
    const currentChainId = String(hre.network.config.chainId);

    console.log('[+] Setting adapter params for contract: ', contract);

    const oftFactory = (await hre.ethers.getContractFactory(
        contract as 'TapiocaOFT',
    )) as TapiocaOFT__factory;

    const deployments = hre.SDK.db.readDeployment('local', {
        tag,
        project: hre.config.SDK.project,
    }) as TLocalDeployment;

    const oftEntryData = hre.SDK.utils.getTapiocaOFTEntities(
        deployments,
        taskArgs.contract,
        oftFactory,
    );

    const chainTransactions = oftEntryData.filter(
        (a: { srChain: string }) => a.srChain == currentChainId,
    );

    console.log(`[+] Total entries: ${chainTransactions.length}`);
    chainTransactions.forEach((e) => {
        console.log(
            '\t',
            '* Setting ',
            // @ts-ignore
            hre.SDK.config.NETWORK_MAPPING_CHAIN_TO_LZ[e.srChain],
            '->',
            // @ts-ignore
            hre.SDK.config.NETWORK_MAPPING_CHAIN_TO_LZ[e.dstLzChain],
        );
    });

    const calls: Multicall3.Call3Struct[] = [];
    for (const entry of chainTransactions) {
        const ctr = await hre.ethers.getContractAt(
            taskArgs.contract,
            entry.srcAddress,
        );
        calls.push({
            target: entry.srcAddress,
            callData: ctr.interface.encodeFunctionData('setTrustedRemote', [
                entry.dstLzChain,
                entry.trustedRemotePath,
            ]),
            allowFailure: false,
        });
    }
    const multicall = Multicall3__factory.connect(
        hre.SDK.config.MULTICALL_ADDRESS,
        hre.ethers.provider,
    );

    const tx = await (await multicall.aggregate3(calls)).wait(3);
    console.log('[+] Batch call Tx: ', tx.transactionHash);
};
