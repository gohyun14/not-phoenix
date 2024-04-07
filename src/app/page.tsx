import React, { Suspense } from 'react';

import PairChart, { PairChartLoading } from '~/components/PairChart/PairChart';
import RecentTrades from '~/components/RecentTrades/RecentTrades';
import Orderbook from '~/components/Orderbook/Orderbook';
import PlaceOrder from '~/components/PlaceOrder/PlaceOrder';

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
