import React, { Suspense } from "react";

import PairChart, { PairChartLoading } from "~/components/PairChart/PairChart";
import RecentTrades from "~/components/RecentTrades/RecentTrades";
import Orderbook from "~/components/Orderbook/Orderbook";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-row gap-x-[10px] bg-zinc-100 px-[20px]">
      <div className="grid h-min w-full grid-flow-row grid-cols-2 gap-[10px]">
        <div className="col-span-2">
          <Suspense fallback={<PairChartLoading />}>
            <PairChart />
          </Suspense>
        </div>
        <div className="col-span-1">
          <RecentTrades />
        </div>
        <div className="col-span-1">
          <Orderbook />
        </div>
      </div>
      <PlaceOrder />
    </main>
  );
}

function PlaceOrder() {
  return (
    <div className="h-min w-[350px] rounded-[16px] bg-white px-[20px] py-[15px] shadow-[0px_10px_25px_-15px_rgba(0,0,0,0.3)]">
      Place Order
    </div>
  );
}
