"use client";

import React, { useState } from "react";
import * as Tooltip from "@radix-ui/react-tooltip";
import { motion } from "framer-motion";

import OrderbookOptions from "./OrderbookOptions";

const asks = [
  {
    id: "ask-1",
    amount1: 5.914,
    amount2: 343.905,
  },
  {
    id: "ask-2",
    amount1: 19.86,
    amount2: 1150,
  },
  {
    id: "ask-3",
    amount1: 56.74,
    amount2: 3300,
  },
  {
    id: "ask-4",
    amount1: 96.439,
    amount2: 5610,
  },
];

const bids = [
  {
    id: "bid-1",
    amount1: 5.676,
    amount2: 329.974,
  },
  {
    id: "bid-2",
    amount1: 19.869,
    amount2: 1155,
  },
  {
    id: "bid-3",
    amount1: 56.773,
    amount2: 33000,
  },
  {
    id: "bid-4",
    amount1: 0.03,
    amount2: 1.744,
  },
];

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
  const [askHoverRowIndex, setAskHoverRowIndex] = useState<number | undefined>(
    undefined,
  );
  const [bidHoverRowIndex, setBidHoverRowIndex] = useState<number | undefined>(
    undefined,
  );

  const price = (
    (asks[0]!.amount2 / asks[0]!.amount1 +
      bids[0]!.amount2 / bids[0]!.amount1) /
    2
  ).toFixed(3);

  const calculateAskRowStats = (index: number | undefined) => {
    // get reversed index of ask since asks are reversed in the rendered table
    const askIndex = index !== undefined && asks.length - index - 1;

    return (
      askIndex !== false &&
      asks.slice(0, askIndex + 1).reduce(
        (acc, ask) => {
          acc.amount1 += ask.amount1;
          acc.amount2 += ask.amount2;

          return acc;
        },
        { amount1: 0, amount2: 0 },
      )
    );
  };

  const calculateBidRowStats = (index: number | undefined) => {
    return (
      index !== undefined &&
      bids.slice(0, index + 1).reduce(
        (acc, bid) => {
          acc.amount1 += bid.amount1;
          acc.amount2 += bid.amount2;

          return acc;
        },
        { amount1: 0, amount2: 0 },
      )
    );
  };

  return (
    <table className="w-full">
      <thead>
        <tr className="mx-[20px] mb-[10px] flex flex-row items-center gap-x-[10px] px-[5px] text-left">
          <th className="basis-1/3 text-[11.5px] font-[500] uppercase leading-[12px] tracking-[0.05em] text-[#575151]">
            Price<span className="ml-[2px] opacity-60">USDC</span>
          </th>
          <th className="basis-1/3 text-[11.5px] font-[500] uppercase leading-[12px] tracking-[0.05em] text-[#575151]">
            Amount<span className="ml-[2px] opacity-60">SOL</span>
          </th>
          <th className="basis-1/3 text-right text-[11.5px] font-[500] uppercase leading-[12px] tracking-[0.05em] text-[#575151]">
            Amount<span className="ml-[2px] opacity-60">USDC</span>
          </th>
        </tr>
      </thead>

      <tbody className="mb-[15px] flex flex-col overflow-y-auto px-[20px]">
        {[...asks].reverse().map((ask, index) => (
          <AskRow
            key={index}
            index={index}
            ask={ask}
            askHoverRowIndex={askHoverRowIndex}
            setAskHoverRowIndex={setAskHoverRowIndex}
            calculateStats={calculateAskRowStats}
          />
        ))}
        <tr className="flex flex-row items-center gap-x-[10px] bg-[#f1f1f1] p-[5px] text-left">
          <th className="text-[11.5px] font-[500] uppercase leading-[12px] tracking-[0.05em] text-[#575151]">
            {price}
          </th>
        </tr>
        {bids.map((bid, index) => (
          <BidRow
            key={index}
            index={index}
            bid={bid}
            bidHoverRowIndex={bidHoverRowIndex}
            setBidHoverRowIndex={setBidHoverRowIndex}
          />
        ))}
      </tbody>
    </table>
  );
}

function AskRow({
  index,
  ask,
  askHoverRowIndex,
  setAskHoverRowIndex,
  calculateStats,
}: {
  index: number;
  ask: { id: string; amount1: number; amount2: number };
  askHoverRowIndex: number | undefined;
  setAskHoverRowIndex: React.Dispatch<React.SetStateAction<number | undefined>>;
  calculateStats: (
    index: number | undefined,
  ) => { amount1: number; amount2: number } | false;
}) {
  const handleHoverStart = () => {
    setAskHoverRowIndex(index);
  };

  const handeHoverEnd = () => {
    setAskHoverRowIndex(undefined);
  };

  const isHovered = askHoverRowIndex !== undefined && index >= askHoverRowIndex;

  const stats = isHovered && calculateStats(index);

  return (
    <Tooltip.Provider delayDuration={0}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <motion.tr
            onHoverStart={handleHoverStart}
            onHoverEnd={handeHoverEnd}
            data-hovered={isHovered ? true : null}
            className="group flex flex-row items-center gap-x-[10px] p-[5px] text-left data-[hovered]:bg-[#f1f1f1]"
          >
            <th className="basis-1/3 text-[11.5px] font-[500] uppercase leading-[12px] tracking-[0.05em] text-[#ff9a9a]">
              {(ask.amount2 / ask.amount1).toFixed(3)}
            </th>
            <th className="basis-1/3 text-[11.5px] font-[500] uppercase leading-[12px] tracking-[0.05em] text-[#575151]">
              {ask.amount1}
            </th>
            <th className="basis-1/3 text-right text-[11.5px] font-[500] uppercase leading-[12px] tracking-[0.05em] text-[#575151]">
              {ask.amount2}
            </th>
          </motion.tr>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className="flex flex-col gap-y-[12px] rounded-[8px] bg-[#f1f1f1] px-[15px] py-[10px] text-[15px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px]"
            side="left"
            sideOffset={5}
          >
            <div className="flex flex-row items-center justify-between gap-x-[24px]">
              <p className="text-[11.5px] font-[500] uppercase leading-[12px] tracking-[0.05em] text-[#575151]">
                Sum<span className="ml-[2px] opacity-60">SOL</span>
              </p>
              <p className="text-[11.5px] font-[500] uppercase leading-[12px] tracking-[0.05em] text-[#ff9a9a]">
                {stats ? stats.amount1.toFixed(3) : null}
              </p>
            </div>

            <div className="flex flex-row items-center justify-between gap-x-[24px]">
              <p className="text-[11.5px] font-[500] uppercase leading-[12px] tracking-[0.05em] text-[#575151]">
                Sum<span className="ml-[2px] opacity-60">USDC</span>
              </p>
              <p className="text-[11.5px] font-[500] uppercase leading-[12px] tracking-[0.05em] text-[#ff9a9a]">
                {stats ? stats.amount2.toFixed(3) : null}
              </p>
            </div>

            <div className="flex flex-row items-center justify-between gap-x-[24px]">
              <p className="text-[11.5px] font-[500] uppercase leading-[12px] tracking-[0.05em] text-[#575151]">
                Avg. Price<span className="ml-[2px] opacity-60">USDC</span>
              </p>
              <p className="text-[11.5px] font-[500] uppercase leading-[12px] tracking-[0.05em] text-[#ff9a9a]">
                {stats ? (stats.amount2 / stats.amount1).toFixed(3) : null}
              </p>
            </div>
            <Tooltip.Arrow className="fill-[#f1f1f1]" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}

function BidRow({
  index,
  bid,
  bidHoverRowIndex,
  setBidHoverRowIndex,
}: {
  index: number;
  bid: { id: string; amount1: number; amount2: number };
  bidHoverRowIndex: number | undefined;
  setBidHoverRowIndex: React.Dispatch<React.SetStateAction<number | undefined>>;
}) {
  const handleHoverStart = () => {
    setBidHoverRowIndex(index);
  };

  const handeHoverEnd = () => {
    setBidHoverRowIndex(undefined);
  };
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <motion.tr
            onHoverStart={handleHoverStart}
            onHoverEnd={handeHoverEnd}
            data-hovered={
              bidHoverRowIndex !== undefined && index <= bidHoverRowIndex
                ? true
                : null
            }
            className="group flex flex-row items-center gap-x-[10px] p-[5px] text-left data-[hovered]:bg-[#f1f1f1]"
          >
            <th className="basis-1/3 text-[11.5px] font-[500] uppercase leading-[12px] tracking-[0.05em] text-[#a8dea3]">
              {(bid.amount2 / bid.amount1).toFixed(3)}
            </th>
            <th className="basis-1/3 text-[11.5px] font-[500] uppercase leading-[12px] tracking-[0.05em] text-[#575151]">
              {bid.amount1}
            </th>
            <th className="basis-1/3 text-right text-[11.5px] font-[500] uppercase leading-[12px] tracking-[0.05em] text-[#575151]">
              {bid.amount2}
            </th>
          </motion.tr>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className="rounded-[4px] bg-white px-[15px] py-[10px] text-[15px] leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px]"
            sideOffset={5}
          >
            Add to library
            <Tooltip.Arrow className="fill-white" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}
