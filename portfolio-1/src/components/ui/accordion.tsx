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
      className={cn("flex flex-col items-start p-0 gap-5 w-[361px] flex-none self-stretch flex-grow-0", className)}
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
      className={cn("not-last:border-b border-[#E9EAEB]", "flex flex-col items-start gap-[12px] w-[361px] py-4 flex-none self-stretch grow-0", className)}
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
    "group/accordion-trigger relative flex flex-1 items-center justify-between gap-3 rounded-lg border border-transparent py-2.5 text-left text-sm font-medium transition-all outline-none cursor-pointer focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:after:border-ring disabled:pointer-events-none disabled:opacity-50",
    className
  )}
  {...props}
>
  <div className="flex flex-row items-baseline gap-3 min-w-0">
    {children}
  </div>

  <div className="box-border flex flex-row items-center p-[7.41px] gap-[7.41px] w-8 h-8 bg-white border-[0.69px] border-[#D5D7DA] rounded-full flex-none group-aria-expanded/accordion-trigger:hidden">
    <Minus data-slot="accordion-trigger-icon" className="pointer-events-none shrink-0" />
  </div>
  <div className="flex flex-row items-center p-[7.41px] gap-[7.41px] w-8 h-8 bg-[#B76080] rounded-full flex-none hidden group-aria-expanded/accordion-trigger:flex">
    <Plus data-slot="accordion-trigger-icon" className="pointer-events-none shrink-0 text-white!" />
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
      className="overflow-hidden text-sm data-open:animate-accordion-down data-closed:animate-accordion-up w-full h-auto font-['Montserrat'] font-medium text-[14px] leading-[28px] text-[#414651] flex-none order-1 self-stretch grow-0"
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
