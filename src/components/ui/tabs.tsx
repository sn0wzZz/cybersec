"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@/lib/utils"

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex  md:h-[120px] items-center justify-center rounded-[50px] bg-background dark:bg-muted p-1 text-muted-foreground ",
      className
    )}
    {...props}
  />
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> & {
    noBullet?: boolean
  }
>(({ className, children, noBullet, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      'inline-flex items-center justify-center whitespace-nowrap rounded-full py-[19px] px-[19px] md:py-[38px] md:px-[38px] display-xxs data-[state=inactive]:text-[hsla(240,17%,45%,1)] font-semibold ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-gradient-to-b from-primary-item to-primary-item data-[state=active]:text-white data-[state=active]:shadow data-[state=inactive]:from-background data-[state=inactive]:to-background dark:data-[state=inactive]:from-white dark:data-[state=inactive]:to-white  data-[state=inactive]:bg-gradient-to-b gap-3 [&[data-state=active]_div]:bg-[hsla(240,17%,45%,1)] [&[data-state=active]_span]:bg-background  duration-500 [&[data-state=active]_div]:bg-size-200 [&[data-state=active]_div]:bg-pos-0 [&[data-state=active]_div]:hover:bg-pos-100',
      className
    )}
    {...props}
  >
    {!noBullet && (
      <div className='h-[14px] w-[14px] rounded-full flex-center bg-muted/50 dark:bg-input'>
        <span className='h-1 w-1 rounded-full bg-[hsla(257,69%,60%,1)]'></span>
      </div>
    )}
    {children}
  </TabsPrimitive.Trigger>
))

TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-[42px] ring-offset-background dark:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    )}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }
