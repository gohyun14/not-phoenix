import React from "react";
import moment from "moment";
import {
  ArrowUpRightIcon,
  ChevronDoubleUpIcon,
} from "@heroicons/react/24/outline";

export default function RecentTrades() {
  return (
    <div className="h-min w-full rounded-[16px] bg-white shadow-[0px_10px_25px_-15px_rgba(0,0,0,0.3)]">
      <h2 className="px-[20px] pb-[15px] pt-[30px] text-[24px] font-[300] leading-[120%] tracking-[-0.03em] text-[#575151]">
        Recent Trades
      </h2>
      <TradesTable />
    </div>
  );
}

function TradesTable() {
  const trades = [
    {
      time: moment().format("HH:mm:ss A"),
      price: "30.654",
      size: "1.012",
    },
    {
      time: moment().format("HH:mm:ss A"),
      price: "30.654",
      size: "1.012",
    },
    {
      time: moment().format("HH:mm:ss A"),
      price: "30.654",
      size: "1.012",
    },
    {
      time: moment().format("HH:mm:ss A"),
      price: "30.654",
      size: "1.012",
    },
    {
      time: moment().format("HH:mm:ss A"),
      price: "30.654",
      size: "1.012",
    },
  ];

  return (
    <table className="mt-[15px] w-full">
      <thead>
        <tr className="mb-[10px] flex flex-row items-center gap-x-[10px] px-[20px] text-left">
          <th className="basis-[30%] text-[11.5px] font-[500] uppercase leading-[12px] tracking-[0.05em] text-[#575151]">
            Time
          </th>
          <th className="basis-[30%] text-[11.5px] font-[500] uppercase leading-[12px] tracking-[0.05em] text-[#575151]">
            Price<span className="ml-[2px] opacity-60">USDC</span>
          </th>
          <th className="basis-[30%] text-[11.5px] font-[500] uppercase leading-[12px] tracking-[0.05em] text-[#575151]">
            Size<span className="ml-[2px] opacity-60">SOL</span>
          </th>
          <th className="basis-[10%] text-center text-[11.5px] font-[500] uppercase leading-[12px] tracking-[0.05em] text-[#575151]">
            Link
          </th>
        </tr>
      </thead>

      <tbody className="mb-[15px] flex flex-col overflow-y-auto px-[10px]">
        {trades.map((trade, index) => (
          <TradeRow key={index} trade={trade} />
        ))}
      </tbody>
    </table>
  );
}

function TradeRow({
  trade,
}: {
  trade: {
    time: string;
    price: string;
    size: string;
  };
}) {
  return (
    <tr className="flex flex-row items-center gap-x-[10px] border-b border-[#575151] border-opacity-25 p-[10px] text-left last:border-none">
      <th className="basis-[30%] text-[12.5px] font-[400] leading-[12px] tracking-[0.05em] text-[#575151]">
        {trade.time}
      </th>
      <th className="flex basis-[30%] flex-row items-center gap-x-[4px] text-[12.5px] font-[400] leading-[12px] tracking-[0.05em] text-[#575151]">
        <span className="rounded-full bg-[#a8dea340] px-[10px] py-[5px] text-black">
          {trade.price}
        </span>
        <ChevronDoubleUpIcon className="h-[14px] w-[14px] stroke-[2] text-green-400" />
      </th>
      <th className="basis-[30%] text-[12.5px] font-[400] leading-[12px] tracking-[0.05em] text-[#575151]">
        {trade.size}
      </th>
      <th className="flex basis-[10%] items-center justify-center">
        <button
          aria-label="Link"
          className="transition-all duration-150 hover:opacity-60"
        >
          <ArrowUpRightIcon className="h-[16px] w-[16px] stroke-[#575151] stroke-[2.5]" />
        </button>
      </th>
    </tr>
  );
}
