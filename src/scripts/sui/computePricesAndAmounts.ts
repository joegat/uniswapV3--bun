import { computePricesAndAmounts } from "../../helpers/sui";
import { NetworksEnum } from "../../lib/sui";
import { turbosSdk } from "../../lib/turbos";

async function main() {
  const network = NetworksEnum.Testnet;
  const sdk = turbosSdk[network];
  const data = {
    coinTypeA:
      "0x24db9c5d841bcff7649e364d0cdc1e225045d6a1563b8854295e1743fe0454d6::coin::COIN", // Base token
    coinTypeB:
      "0xda6ec1c870f2d76639752dfe761704c06f57eacd199c4023a90d0995db663ea2::my_coin::MY_COIN", // Quote token
    priceLower: 0.00001,
    priceUpper: 0.1,
    priceCurrent: 0.001,
    liquidity: 20201028069.364117,
  };

  // const [coinAMetadata, coinBMetadata] = await Promise.all([
  //   await sdk.coin.getMetadata(data.coinTypeA),
  //   await sdk.coin.getMetadata(data.coinTypeB),
  // ]);

  // const decimalsA = coinAMetadata.decimals;
  // const decimalsB = coinBMetadata.decimals;

  const decimalsA = 9;
  const decimalsB = 6;

  const tickLower = sdk.math.priceToTickIndex(
    data.priceLower,
    decimalsA,
    decimalsB
  );
  const tickUpper = sdk.math.priceToTickIndex(
    data.priceUpper,
    decimalsA,
    decimalsB
  );
  const tickCurrent = sdk.math.priceToTickIndex(
    data.priceCurrent,
    decimalsA,
    decimalsB
  );

  const { priceLower, priceUpper, priceCurrent, amount0, amount1 } =
    computePricesAndAmounts(tickLower, tickUpper, tickCurrent, data.liquidity);
  console.log({
    tickLower,
    tickUpper,
    tickCurrent,
    priceLower,
    priceUpper,
    priceCurrent,
    amount0,
    amount1,
  });
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

/**
 
bun run src/scripts/sui/computePricesAndAmounts.ts

 */
