'use client';

import { useState } from 'react';

export default function PlaceOrder() {
  const [orderType, setOrderType] = useState<'limit' | 'market'>('limit');
  const [orderAction, setOrderAction] = useState<'buy' | 'sell'>('buy');

  return (
    <div className="h-min shrink-0 basis-1/4 rounded-[16px] bg-white shadow-[0px_10px_25px_-15px_rgba(0,0,0,0.3)]">
      {/* header */}
      <div className="mt-[15px] px-[20px] py-[15px]">
        <h2 className="text-[24px] font-[300] leading-[120%] tracking-[-0.03em] text-[#575151]">
          Place Order
        </h2>
      </div>

      {/* body */}
      <div className="px-[20px] py-[15px]">
        {/* order type */}
        <div className="mb-[10px] flex w-full flex-row items-center justify-between gap-[5px]">
          <div className="flex flex-row items-center">
            <button
              aria-label="Limit Order"
              onClick={() => setOrderType('limit')}
              data-active={orderType === 'limit' ? true : null}
              className="group rounded-full border border-transparent px-[12px] py-[8px] data-[active]:border-[#575151] data-[active]:bg-black/[0.03]"
            >
              <p className="text-[11.5px] font-[500] uppercase leading-[12px] tracking-[0.05em] text-[#575151] text-opacity-50 group-data-[active]:text-opacity-100">
                Limit
              </p>
            </button>

            <button
              aria-label="Market Order"
              onClick={() => setOrderType('market')}
              data-active={orderType === 'market' ? true : null}
              className="group rounded-full border border-transparent px-[12px] py-[8px] data-[active]:border-[#575151] data-[active]:bg-black/[0.03]"
            >
              <p className="text-[11.5px] font-[500] uppercase leading-[12px] tracking-[0.05em] text-[#575151] text-opacity-50 group-data-[active]:text-opacity-100">
                Market
              </p>
            </button>
          </div>

          <div className="font-[500] text-black text-opacity-40"> | </div>

          <div className="flex flex-row items-center">
            <button
              aria-label="Buy Order"
              onClick={() => setOrderAction('buy')}
              data-active={orderAction === 'buy' ? true : null}
              className="group rounded-full border border-transparent px-[12px] py-[8px] data-[active]:border-green-400 data-[active]:bg-green-400/10"
            >
              <p className="text-[11.5px] font-[500] uppercase leading-[12px] tracking-[0.05em] text-[#575151] text-opacity-50 group-data-[active]:text-green-400 group-data-[active]:text-opacity-100">
                Buy
              </p>
            </button>

            <button
              aria-label="Sell Order"
              onClick={() => setOrderAction('sell')}
              data-active={orderAction === 'sell' ? true : null}
              className="group rounded-full border border-transparent px-[12px] py-[8px] data-[active]:border-red-400 data-[active]:bg-red-400/10"
            >
              <p className="text-[11.5px] font-[500] uppercase leading-[12px] tracking-[0.05em] text-[#575151] text-opacity-50 group-data-[active]:text-red-400 group-data-[active]:text-opacity-100">
                Sell
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
