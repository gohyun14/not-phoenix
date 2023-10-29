import { ChevronDoubleUpIcon } from "@heroicons/react/24/outline";

import ChangePair from "./ChangePair";

type TradingPairInfo = {
  pairCode: string;
  pairName: string;
  lastTradedPrice: string;
  volume: string;
  priceChange: string;
};

export default async function PairChart() {
  const mockApiRequest = () => {
    // Simulate a 500ms delay using setTimeout
    return new Promise<TradingPairInfo>((resolve) => {
      setTimeout(() => {
        // Return prefilled data as a resolved promise
        const mockData: TradingPairInfo = {
          pairCode: "1",
          pairName: "SOL/USDC",
          lastTradedPrice: "30.672",
          volume: "13.55M",
          priceChange: "3.80%",
        };
        resolve(mockData);
      }, 500);
    });
  };

  const pairInfo = await mockApiRequest()
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("API Request Error:", error);
      return null;
    });

  return (
    <div className="h-min w-full rounded-[16px] bg-white shadow-[0px_10px_25px_-15px_rgba(0,0,0,0.3)]">
      {/* header */}
      {pairInfo && <PairChartHeader pairInfo={pairInfo} />}

      {/* tradingview chart */}
      <div className="flex h-[350px] w-full items-center justify-center rounded-b-[16px] bg-zinc-300">
        Fancy TradingView chart here!
      </div>
    </div>
  );
}

function PairChartHeader({ pairInfo }: { pairInfo: TradingPairInfo }) {
  return (
    <div className="flex flex-row items-center gap-x-[20px] px-[10px]">
      <ChangePair />

      <div className="flex flex-col gap-y-[5px]">
        <p className="text-[11.5px] font-[400] uppercase leading-[12px] tracking-[0.05em] text-[rgb(87,81,81)] text-opacity-60">
          Last Trade Price
        </p>
        <p className="text-[15.5px] font-[300] tracking-[-0.03em] text-[rgb(87,81,81)]">
          {pairInfo.lastTradedPrice}
        </p>
      </div>

      <div className="flex flex-col gap-y-[5px]">
        <p className="text-[11.5px] font-[400] uppercase leading-[12px] tracking-[0.05em] text-[rgb(87,81,81)] text-opacity-60">
          24h Volume
        </p>
        <p className="text-[15.5px] font-[300] tracking-[-0.03em] text-[rgb(87,81,81)]">
          {pairInfo.volume}
        </p>
      </div>

      <div className="flex flex-col gap-y-[5px]">
        <p className="text-[11.5px] font-[400] uppercase leading-[12px] tracking-[0.05em] text-[rgb(87,81,81)] text-opacity-60">
          24h Change
        </p>
        <div className="flex flex-row items-center gap-x-[3px] text-[15.5px] font-[300] tracking-[-0.03em] text-[rgb(87,81,81)]">
          <ChevronDoubleUpIcon className="h-[14px] w-[14px] stroke-[2] text-green-400" />
          {pairInfo.priceChange}
        </div>
      </div>
    </div>
  );
}

export function PairChartLoading() {
  return (
    <div className="h-min w-full rounded-[16px] bg-white shadow-md">
      {/* header */}
      <div className="flex flex-row items-center gap-x-[20px] px-[10px]">
        <div className="my-[7px] flex w-[250px] animate-pulse flex-row items-center rounded-[8px] bg-[#575151] bg-opacity-50  px-[10px] py-[5px]">
          <p className="invisible m-[5px] text-[24px] font-[300] leading-[120%] tracking-[-0.03em] text-white">
            A
          </p>
        </div>

        <div className="my-[7px] flex w-[100px] animate-pulse flex-row items-center rounded-[8px] bg-[#575151] bg-opacity-50  px-[10px] py-[5px]">
          <p className="invisible m-[5px] text-[24px] font-[300] leading-[120%] tracking-[-0.03em] text-white">
            A
          </p>
        </div>

        <div className="my-[7px] flex w-[100px] animate-pulse flex-row items-center rounded-[8px] bg-[#575151] bg-opacity-50  px-[10px] py-[5px]">
          <p className="invisible m-[5px] text-[24px] font-[300] leading-[120%] tracking-[-0.03em] text-white">
            A
          </p>
        </div>

        <div className="my-[7px] flex w-[100px] animate-pulse flex-row items-center rounded-[8px] bg-[#575151] bg-opacity-50  px-[10px] py-[5px]">
          <p className="invisible m-[5px] text-[24px] font-[300] leading-[120%] tracking-[-0.03em] text-white">
            A
          </p>
        </div>
      </div>

      {/* tradingview chart */}
      <div className="flex h-[350px] w-full items-center justify-center rounded-b-[16px] bg-zinc-300">
        Chart Loading....
      </div>
    </div>
  );
}
