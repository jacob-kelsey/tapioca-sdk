/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  ModuleManager,
  ModuleManagerInterface,
} from "../../../usdo/modules/ModuleManager";

const _abi = [
  {
    inputs: [],
    name: "ModuleManager__ModuleNotAuthorized",
    type: "error",
  },
] as const;

export class ModuleManager__factory {
  static readonly abi = _abi;
  static createInterface(): ModuleManagerInterface {
    return new utils.Interface(_abi) as ModuleManagerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ModuleManager {
    return new Contract(address, _abi, signerOrProvider) as ModuleManager;
  }
}
