'use client';

import Image from 'next/image';
import { useState } from 'react';
import { InformationCircleIcon } from '@heroicons/react/24/solid';
import * as Tooltip from '@radix-ui/react-tooltip';

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

          <div className="shrink-0 font-[500] text-black text-opacity-30">
            {' '}
            |{' '}
          </div>

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

        {/* order form */}
        {orderType === 'limit' ? (
          <LimitOrderForm isBuy={orderAction === 'buy'} />
        ) : (
          <MarketOrderForm isBuy={orderAction === 'buy'} />
        )}
      </div>
    </div>
  );
}

const USDCImgSrc =
  'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v/logo.png';
const SOLImgSrc =
  'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png';

function LimitOrderForm({ isBuy = true }: { isBuy?: boolean }) {
  return (
    <div>
      <p className="pt-[20px] text-[11.5px] font-[500] uppercase leading-[12px] tracking-[0.05em] text-[#575151]">
        Limit Price
      </p>
      <div className="relative my-[5px] w-full">
        <input
          inputMode="decimal"
          placeholder="0.00"
          spellCheck="false"
          pattern="^[0-9]*[.,]?[0-9]*$"
          className="w-full rounded-[16px] bg-black/5 py-[12px] pl-[45px] pr-[25px] text-[18px] font-[400] leading-[100%] tracking-[0.05rem] text-[#575151] focus:outline-none focus:ring-2 focus:ring-orange-400"
        />

        <Image
          src={USDCImgSrc}
          alt="USDC"
          height={25}
          width={25}
          className="absolute left-[10px] top-1/2 h-[25px] w-[25px] translate-y-[-50%] transform rounded-full object-cover"
        />
      </div>

      <p className="pt-[20px] text-[11.5px] font-[500] uppercase leading-[12px] tracking-[0.05em] text-[#575151]">
        Size
      </p>
      <p className="mt-[10px] text-[11.5px] font-[500] uppercase leading-[12px] tracking-[0.05em] text-[#575151]/60">
        Deposit Amount
      </p>
      <div className="relative my-[5px] w-full">
        <input
          inputMode="decimal"
          placeholder="0.00"
          spellCheck="false"
          pattern="^[0-9]*[.,]?[0-9]*$"
          className="w-full rounded-[16px] bg-black/5 py-[12px] pl-[45px] pr-[25px] text-[18px] font-[400] leading-[100%] tracking-[0.05rem] text-[#575151] focus:outline-none focus:ring-2 focus:ring-orange-400"
        />

        <Image
          src={isBuy ? USDCImgSrc : SOLImgSrc}
          alt={isBuy ? 'USDC' : 'SOL'}
          height={25}
          width={25}
          className="absolute left-[10px] top-1/2 h-[25px] w-[25px] translate-y-[-50%] transform rounded-full object-cover"
        />
      </div>

      <p className="mt-[15px] text-[11.5px] font-[500] uppercase leading-[12px] tracking-[0.05em] text-[#575151]/60">
        Receive up to
      </p>
      <div className="relative my-[5px] w-full">
        <input
          inputMode="decimal"
          placeholder="0.00"
          spellCheck="false"
          pattern="^[0-9]*[.,]?[0-9]*$"
          className="w-full rounded-[16px] bg-black/5 py-[12px] pl-[45px] pr-[25px] text-[18px] font-[400] leading-[100%] tracking-[0.05rem] text-[#575151] focus:outline-none focus:ring-2 focus:ring-orange-400"
        />

        <Image
          src={!isBuy ? USDCImgSrc : SOLImgSrc}
          alt={!isBuy ? 'USDC' : 'SOL'}
          height={25}
          width={25}
          className="absolute left-[10px] top-1/2 h-[25px] w-[25px] translate-y-[-50%] transform rounded-full object-cover"
        />
      </div>

      <div className="mt-[20px] flex w-full flex-row items-center justify-between">
        <div className="flex w-full flex-row items-center gap-[3px]">
          <p className="text-[11.5px] font-[500] uppercase leading-[12px] tracking-[0.05em] text-[#575151]/60">
            Est. fee
          </p>
          <Tooltip.Provider delayDuration={0}>
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <InformationCircleIcon className="h-[13px] w-[13px] shrink-0 fill-[#575151]/60" />
              </Tooltip.Trigger>
              <Tooltip.Portal>
                <Tooltip.Content
                  className="flex flex-col gap-y-[12px] rounded-[8px] bg-[#f1f1f1] px-[15px] py-[10px] text-[15px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px]"
                  side="top"
                  sideOffset={8}
                >
                  <p className="max-w-[150px] text-[11.5px] font-[500] leading-[14px] tracking-[0.05em] text-[#575151]">
                    SOL/USDC fees are 0.02% for taker orders and 0% for maker
                    orders
                  </p>
                </Tooltip.Content>
              </Tooltip.Portal>
            </Tooltip.Root>
          </Tooltip.Provider>
        </div>

        <div className="flex shrink-0 flex-row items-center justify-end gap-[7px]">
          <p className="text-[11.5px] font-[500] uppercase leading-[12px] tracking-[0.05em] text-[#575151]/60">
            ---
          </p>
          <Image
            src={USDCImgSrc}
            alt="USDC"
            height={25}
            width={25}
            className=" h-[25px] w-[25px] rounded-full object-cover"
          />
        </div>
      </div>

      <button className="my-[20px] w-full rounded-full bg-orange-400 py-[10px] text-[16px] font-[500] uppercase tracking-[0.04em] text-white transition-transform duration-100 ease-in-out hover:scale-[1.02] active:scale-100">
        Place Order
      </button>
    </div>
  );
}

function MarketOrderForm({ isBuy = true }: { isBuy?: boolean }) {
  return (
    <div>
      <p className="pt-[20px] text-[11.5px] font-[500] uppercase leading-[12px] tracking-[0.05em] text-[#575151]">
        Size
      </p>
      <p className="mt-[10px] text-[11.5px] font-[500] uppercase leading-[12px] tracking-[0.05em] text-[#575151]/60">
        Pay
      </p>
      <div className="relative my-[5px] w-full">
        <input
          inputMode="decimal"
          placeholder="0.00"
          spellCheck="false"
          pattern="^[0-9]*[.,]?[0-9]*$"
          className="w-full rounded-[16px] bg-black/5 py-[12px] pl-[45px] pr-[25px] text-[18px] font-[400] leading-[100%] tracking-[0.05rem] text-[#575151] focus:outline-none focus:ring-2 focus:ring-orange-400"
        />

        <Image
          src={isBuy ? USDCImgSrc : SOLImgSrc}
          alt={isBuy ? 'USDC' : 'SOL'}
          height={25}
          width={25}
          className="absolute left-[10px] top-1/2 h-[25px] w-[25px] translate-y-[-50%] transform rounded-full object-cover"
        />
      </div>

      <p className="mt-[15px] text-[11.5px] font-[500] uppercase leading-[12px] tracking-[0.05em] text-[#575151]/60">
        Receive
      </p>
      <div className="relative my-[5px] w-full">
        <input
          inputMode="decimal"
          placeholder="0.00"
          spellCheck="false"
          pattern="^[0-9]*[.,]?[0-9]*$"
          className="w-full rounded-[16px] bg-black/5 py-[12px] pl-[45px] pr-[25px] text-[18px] font-[400] leading-[100%] tracking-[0.05rem] text-[#575151] focus:outline-none focus:ring-2 focus:ring-orange-400"
        />

        <Image
          src={!isBuy ? USDCImgSrc : SOLImgSrc}
          alt={!isBuy ? 'USDC' : 'SOL'}
          height={25}
          width={25}
          className="absolute left-[10px] top-1/2 h-[25px] w-[25px] translate-y-[-50%] transform rounded-full object-cover"
        />
      </div>

      <button className="my-[20px] w-full rounded-full bg-orange-400 py-[10px] text-[16px] font-[500] uppercase tracking-[0.04em] text-white transition-transform duration-100 ease-in-out hover:scale-[1.02] active:scale-100">
        Place Order
      </button>

      <p className="mb-[8px] mt-[15px] text-[11.5px] font-[500] uppercase leading-[12px] tracking-[0.05em] text-[#575151]">
        Summary
      </p>
      <div className="h-[1px] w-full bg-[#575151]" />

      <div className="mt-[10px] flex w-full flex-row items-center justify-between">
        <p className="text-[14px] font-[400] leading-[16px] text-[#575151]/90">
          Est. Average Price
        </p>

        <div className="flex shrink-0 flex-row items-center justify-end gap-[7px]">
          <p className="text-[11.5px] font-[500] uppercase leading-[12px] tracking-[0.05em] text-[#575151]/60">
            ---
          </p>
          <Image
            src={USDCImgSrc}
            alt="USDC"
            height={25}
            width={25}
            className=" h-[25px] w-[25px] rounded-full object-cover"
          />
        </div>
      </div>

      <div className="mt-[10px] flex w-full flex-row items-center justify-between">
        <div className="flex w-full flex-row items-center gap-[3px]">
          <p className="text-[14px] font-[400] leading-[16px] text-[#575151]/90">
            Est. Fee
          </p>
          <Tooltip.Provider delayDuration={0}>
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <InformationCircleIcon className="h-[13px] w-[13px] shrink-0 fill-[#575151]/60" />
              </Tooltip.Trigger>
              <Tooltip.Portal>
                <Tooltip.Content
                  className="flex flex-col gap-y-[12px] rounded-[8px] bg-[#f1f1f1] px-[15px] py-[10px] text-[15px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px]"
                  side="top"
                  sideOffset={8}
                >
                  <p className="max-w-[150px] text-[11.5px] font-[500] leading-[14px] tracking-[0.05em] text-[#575151]">
                    SOL/USDC fees are 0.02% for taker orders and 0% for maker
                    orders
                  </p>
                </Tooltip.Content>
              </Tooltip.Portal>
            </Tooltip.Root>
          </Tooltip.Provider>
        </div>

        <div className="flex shrink-0 flex-row items-center justify-end gap-[7px]">
          <p className="text-[11.5px] font-[500] uppercase leading-[12px] tracking-[0.05em] text-[#575151]/60">
            ---
          </p>
          <Image
            src={USDCImgSrc}
            alt="USDC"
            height={25}
            width={25}
            className=" h-[25px] w-[25px] rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
