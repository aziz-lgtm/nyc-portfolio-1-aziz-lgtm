"use client"

import * as React from "react"
import { Accordion as AccordionPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"
import { Plus, Minus } from "lucide-react"

function Accordion({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return (
    <AccordionPrimitive.Root
      data-slot="accordion"
      className={cn("flex flex-col items-start p-0 gap-5 w-[361px] h-[628px] flex-none self-stretch flex-grow-0", className)}
      {...props}
    />
  )
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("not-last:border-b", "flex flex-row items-start gap-[12px] w-[361px] h-[64px] flex-none  self-stretch grow-0", "data-[state=open]:h-[212px] data-[state=open]:bg-slate-50 bg-amber-300", className)}
      {...props}
    />
  )
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "group/accordion-trigger relative flex flex-1 items-start justify-between rounded-lg border border-transparent py-2.5 text-left text-sm font-medium transition-all outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:after:border-ring disabled:pointer-events-none disabled:opacity-50 **:data-[slot=accordion-trigger-icon]:ml-auto **:data-[slot=accordion-trigger-icon]:size-4 **:data-[slot=accordion-trigger-icon]:text-muted-foreground", "w-[286px]! h-[64px] font-['Montserrat']! font-semibold text-[18px] leading-[32px] tracking-[-0.03em] text-[#0A0D12] flex-none order-0 self-stretch grow-0 bg-amber-200" ,
          className
        )}
        {...props}
      >
        {children}
        <div>
        <Minus data-slot="accordion-trigger-icon" className="pointer-events-none shrink-0 group-aria-expanded/accordion-trigger:hidden" />
        </div>
        <div className="flex flex-row items-center p-[7.41px] gap-[7.41px] w-[32px] h-[32px] bg-[#B76080] rounded-[92.59px] flex-none order-2 grow-0 hidden group-aria-expanded/accordion-trigger:inline">
        <div className="w-[16.67px] h-[16.67px] flex-none flex-grow-0">
        <Plus data-slot="accordion-trigger-icon" className="pointer-events-none hidden shrink-0 group-aria-expanded/accordion-trigger:inline text-white! " />
        </div>
        </div>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="overflow-hidden text-sm data-open:animate-accordion-down data-closed:animate-accordion-up w-[286px] h-[140px] font-['Montserrat'] font-medium text-[14px] leading-[28px] text-[#414651] flex-none order-1 self-stretch grow-0"
      {...props}
    >
      <div
        className={cn(
          "h-(--radix-accordion-content-height) pt-0 pb-2.5 [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground [&_p:not(:last-child)]:mb-4",
          className
        )}
      >
        {children}
      </div>
    </AccordionPrimitive.Content>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
