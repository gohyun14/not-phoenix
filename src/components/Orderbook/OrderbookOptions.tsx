"use client";

import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import * as Select from "@radix-ui/react-select";

export default function OrderbookOptions({
  isBookRightView,
  setIsBookViewRightView,
  bookSize,
  setBookSize,
}: {
  isBookRightView: boolean;
  setIsBookViewRightView: React.Dispatch<React.SetStateAction<boolean>>;
  bookSize: string;
  setBookSize: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <div className="flex flex-row items-center gap-x-[4px]">
      <button
        type="button"
        aria-label="Change Orderbook View: Balanced"
        onClick={() => setIsBookViewRightView(false)}
        data-active={!isBookRightView ? true : null}
        className="rounded-full px-[12px] py-[8px] transition-all duration-100 ease-in hover:bg-[#f1f1f1] focus:bg-[#f1f1f1] active:bg-transparent data-[active]:border data-[active]:border-black"
      >
        <svg
          viewBox="-1 -1 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-[16px] w-[16px] cursor-pointer stroke-black"
        >
          <line y1="0" x1="18" x2="10" y2="0"></line>
          <line y1="4" x1="18" x2="10" y2="4"></line>
          <line x1="18" y1="8" x2="0" y2="8"></line>
          <line x1="8" y1="12" x2="0" y2="12"></line>
          <line x1="8" y1="16" x2="0" y2="16"></line>
        </svg>
      </button>

      <button
        type="button"
        aria-label="Change Orderbook View: Balanced"
        onClick={() => setIsBookViewRightView(true)}
        data-active={isBookRightView ? true : null}
        className="rounded-full px-[12px] py-[8px] transition-all duration-100 ease-in hover:bg-[#f1f1f1] focus:bg-[#f1f1f1] active:bg-transparent data-[active]:border data-[active]:border-black"
      >
        <svg
          viewBox="-1 -1 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-[16px] w-[16px] cursor-pointer stroke-black"
        >
          <line x1="18" y1="0" y2="0"></line>
          <line x1="18" x2="4" y1="4" y2="4"></line>
          <line x1="18" x2="8" y1="8" y2="8"></line>
          <line x1="18" x2="4" y1="12" y2="12"></line>
          <line x1="18" y1="16" y2="16"></line>
        </svg>
      </button>

      <ChangeBookSize bookSize={bookSize} setBookSize={setBookSize} />
    </div>
  );
}

function ChangeBookSize({
  bookSize,
  setBookSize,
}: {
  bookSize: string;
  setBookSize: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <Select.Root value={bookSize} onValueChange={setBookSize}>
      <Select.Trigger
        aria-label="Change Book Size View"
        className="group my-[5px] flex flex-row items-center gap-x-[2px] rounded-full px-[10px] py-[5px] transition-colors duration-100 ease-in hover:bg-[#f1f1f1] focus:bg-[#f1f1f1] focus:outline-none data-[state=open]:bg-[#f1f1f1]"
      >
        <Select.Value asChild>
          <p className="text-[12.5px] font-[400] leading-[100%] tracking-[0.05em] text-[#575151]">
            {bookSize}
          </p>
        </Select.Value>
        <Select.Icon asChild>
          <ChevronDownIcon className="h-[14px] w-[14px] transform stroke-[#575151] stroke-[2.5] transition-transform duration-100 ease-in group-data-[state=open]:rotate-180" />
        </Select.Icon>
      </Select.Trigger>

      <Select.Content
        className="data-[state=open]:data-[side=top]:animate-slideDownAndFade data-[state=open]:data-[side=bottom]:animate-slideUpAndFade flex w-[--radix-popover-trigger-width] min-w-[65px] flex-col rounded-[8px] bg-white p-[5px] shadow-[0px_10px_25px_-15px_rgba(0,0,0,0.3)]"
        position="popper"
        side="bottom"
        sideOffset={1}
      >
        <Select.Item
          value="0.001"
          aria-label="Change Book Size View"
          className="group my-[5px] flex flex-row items-center rounded-full px-[10px] py-[5px] transition-colors duration-100 ease-in hover:cursor-pointer hover:bg-[#f1f1f1] focus:bg-[#f1f1f1] focus:outline-none data-[state=open]:bg-[#f1f1f1]"
        >
          <p className="text-[12.5px] font-[400] leading-[100%] tracking-[0.05em] text-[#575151]">
            0.001
          </p>
        </Select.Item>

        <Select.Item
          value="0.01"
          aria-label="Change Book Size View"
          className="group my-[5px] flex flex-row items-center rounded-full px-[10px] py-[5px] transition-colors duration-100 ease-in hover:cursor-pointer hover:bg-[#f1f1f1] focus:bg-[#f1f1f1] focus:outline-none data-[state=open]:bg-[#f1f1f1]"
        >
          <p className="text-[12.5px] font-[400] leading-[100%] tracking-[0.05em] text-[#575151]">
            0.01
          </p>
        </Select.Item>

        <Select.Item
          value="0.1"
          aria-label="Change Book Size View"
          className="group my-[5px] flex flex-row items-center rounded-full px-[10px] py-[5px] transition-colors duration-100 ease-in hover:cursor-pointer hover:bg-[#f1f1f1] focus:bg-[#f1f1f1] focus:outline-none data-[state=open]:bg-[#f1f1f1]"
        >
          <p className="text-[12.5px] font-[400] leading-[100%] tracking-[0.05em] text-[#575151]">
            0.1
          </p>
        </Select.Item>

        <Select.Item
          value="1"
          aria-label="Change Book Size View"
          className="group my-[5px] flex flex-row items-center rounded-full px-[10px] py-[5px] transition-colors duration-100 ease-in hover:cursor-pointer hover:bg-[#f1f1f1] focus:bg-[#f1f1f1] focus:outline-none data-[state=open]:bg-[#f1f1f1]"
        >
          <p className="text-[12.5px] font-[400] leading-[100%] tracking-[0.05em] text-[#575151]">
            1
          </p>
        </Select.Item>
      </Select.Content>
    </Select.Root>
  );
}
