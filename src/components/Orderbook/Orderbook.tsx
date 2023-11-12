"use client";

import { useState } from "react";
import OrderbookOptions from "./OrderbookOptions";

export default function Orderbook() {
  const [isBookViewRightView, setIsBookViewRightView] = useState(true);
  const [bookSize, setBookSize] = useState("0.001");

  return (
    <div className="h-min w-full rounded-[16px] bg-white shadow-[0px_10px_25px_-15px_rgba(0,0,0,0.3)]">
      <div className="flex flex-row items-center justify-between px-[20px] pb-[15px] pt-[30px]">
        <h2 className="text-[24px] font-[300] leading-[120%] tracking-[-0.03em] text-[#575151]">
          Orderbook
        </h2>

        <OrderbookOptions
          isBookRightView={isBookViewRightView}
          setIsBookViewRightView={setIsBookViewRightView}
          bookSize={bookSize}
          setBookSize={setBookSize}
        />
      </div>

      <OrderTable />
    </div>
  );
}

function OrderTable() {
  return (
    <table className="w-full px-[20px] py-[15px]">
      <thead>
        <tr className="mb-[10px] flex flex-row items-center gap-x-[10px] px-[20px] text-left">
          <th className="basis-[30%] text-[11.5px] font-[500] uppercase leading-[12px] tracking-[0.05em] text-[#575151]">
            Price<span className="ml-[2px] opacity-60">USDC</span>
          </th>
          <th className="basis-[30%] text-[11.5px] font-[500] uppercase leading-[12px] tracking-[0.05em] text-[#575151]">
            Amount<span className="ml-[2px] opacity-60">SOL</span>
          </th>
          <th className="basis-[30%] text-right text-[11.5px] font-[500] uppercase leading-[12px] tracking-[0.05em] text-[#575151]">
            Amount<span className="ml-[2px] opacity-60">USDC</span>
          </th>
        </tr>
      </thead>

      <tbody className="mb-[15px] flex flex-col overflow-y-auto px-[10px]">
        {/* {trades.map((trade, index) => (
          <TradeRow key={index} trade={trade} />
        ))} */}
      </tbody>
    </table>
  );
}
