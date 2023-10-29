"use client";

import * as Popover from "@radix-ui/react-popover";
import React from "react";
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

export default function ChangePair() {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button
          className="group my-[7px] flex flex-row items-center rounded-[8px] px-[10px] py-[5px] transition-colors duration-100 ease-in hover:bg-[#f1f1f1] focus:bg-[#f1f1f1] focus:outline-none data-[state=open]:bg-[#f1f1f1]"
          aria-label="Change Trading Pair"
        >
          <img
            src="https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png"
            alt="SOL"
            className="mr-[5px] h-[25px] w-[25px] rounded-[8px]"
          />
          <p className="m-[5px] text-[24px] font-[300] leading-[120%] tracking-[-0.03em] text-[rgb(87,81,81)]">
            SOL/USDC
          </p>
          <ChevronDownIcon className="h-[14px] w-[14px] transform stroke-[rgb(87,81,81)] stroke-[3] transition-transform duration-100 ease-in group-data-[state=open]:rotate-180" />
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          className="data-[state=open]:data-[side=top]:animate-slideDownAndFade data-[state=open]:data-[side=bottom]:animate-slideUpAndFade flex w-[--radix-popover-trigger-width] flex-col rounded-[8px] bg-white p-[5px] shadow-[0px_10px_25px_-15px_rgba(0,0,0,0.3)]"
          side="bottom"
          sideOffset={1}
        >
          <div className="relative my-[5px]">
            <input
              className="w-full rounded-full bg-[#f1f1f1] py-[10px] pl-[33px] pr-[15px] text-[13.33px] placeholder:text-[#575151] placeholder:text-opacity-60 focus:outline-2 focus:outline-[#ff773d]"
              placeholder="Search"
            />
            <MagnifyingGlassIcon className="absolute left-[10px] top-1/2 h-[16px] w-[16px] -translate-y-1/2 stroke-[#575151] stroke-[2.5]" />
          </div>
          <button
            onClick={() => console.log("Trading pair changed!")}
            className="flex flex-row items-center rounded-[8px] px-[5px] py-[10px] transition-colors duration-100 ease-in hover:bg-[#f1f1f1] focus:bg-[#f1f1f1] focus:outline-none"
          >
            <img
              src="https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png"
              alt="SOL"
              className="mr-[5px] h-[25px] w-[25px] rounded-[8px]"
            />
            <p className="m-[5px] text-[15.5px] font-[300] leading-[15.5px] tracking-[-0.465px] text-[#575151] text-opacity-60">
              SOL/USDC
            </p>
          </button>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
