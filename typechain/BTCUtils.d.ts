/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractTransaction, EventFilter, Signer } from "ethers";
import { Listener, Provider } from "ethers/providers";
import { Arrayish, BigNumber, BigNumberish, Interface } from "ethers/utils";
import {
  TransactionOverrides,
  TypedEventDescription,
  TypedFunctionDescription
} from ".";

interface BTCUtilsInterface extends Interface {
  functions: {
    DIFF1_TARGET: TypedFunctionDescription<{ encode([]: []): string }>;

    ERR_BAD_ARG: TypedFunctionDescription<{ encode([]: []): string }>;

    RETARGET_PERIOD: TypedFunctionDescription<{ encode([]: []): string }>;

    RETARGET_PERIOD_BLOCKS: TypedFunctionDescription<{
      encode([]: []): string;
    }>;
  };

  events: {};
}

export class BTCUtils extends Contract {
  connect(signerOrProvider: Signer | Provider | string): BTCUtils;
  attach(addressOrName: string): BTCUtils;
  deployed(): Promise<BTCUtils>;

  on(event: EventFilter | string, listener: Listener): BTCUtils;
  once(event: EventFilter | string, listener: Listener): BTCUtils;
  addListener(eventName: EventFilter | string, listener: Listener): BTCUtils;
  removeAllListeners(eventName: EventFilter | string): BTCUtils;
  removeListener(eventName: any, listener: Listener): BTCUtils;

  interface: BTCUtilsInterface;

  functions: {
    DIFF1_TARGET(): Promise<BigNumber>;

    ERR_BAD_ARG(): Promise<BigNumber>;

    RETARGET_PERIOD(): Promise<BigNumber>;

    RETARGET_PERIOD_BLOCKS(): Promise<BigNumber>;
  };

  DIFF1_TARGET(): Promise<BigNumber>;

  ERR_BAD_ARG(): Promise<BigNumber>;

  RETARGET_PERIOD(): Promise<BigNumber>;

  RETARGET_PERIOD_BLOCKS(): Promise<BigNumber>;

  filters: {};

  estimate: {
    DIFF1_TARGET(): Promise<BigNumber>;

    ERR_BAD_ARG(): Promise<BigNumber>;

    RETARGET_PERIOD(): Promise<BigNumber>;

    RETARGET_PERIOD_BLOCKS(): Promise<BigNumber>;
  };
}
