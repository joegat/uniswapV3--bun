import { Network, TurbosSdk } from "turbos-clmm-sdk";

export const turbosSdk = {
  mainnet: new TurbosSdk(Network.mainnet),
  testnet: new TurbosSdk(Network.testnet),
};

export const MAX_TICK_INDEX = 443636;
export const MIN_TICK_INDEX = -443636;

export const MAX_SQRT_PRICE = "79226673515401279992447579055";
export const MIN_SQRT_PRICE = "4295048016";
export const BIT_PRECISION = 14;
export const LOG_B_2_X32 = "59543866431248";
export const LOG_B_P_ERR_MARGIN_LOWER_X64 = "184467440737095516";
export const LOG_B_P_ERR_MARGIN_UPPER_X64 = "15793534762490258745";
