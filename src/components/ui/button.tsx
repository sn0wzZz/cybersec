import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-base font-bold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 ',
  {
    variants: {
      variant: {
        default:
          'text-primary-foreground shadow bg-gradient-to-b  from-primary to-primary-gradient dark:from-input dark:to-input  hover:bg-gradient-to-b hover:from-primary-gradient hover:to-primary transition-all duration-500 bg-size-200 bg-pos-0 hover:bg-pos-100  dark:text-muted dark:hover:from-muted dark:hover:to-primary-foreground  dark:hover:text-primary',

        destructive:
          'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
        outline:
          'border border-input bg-background shadow-sm hover:bg-input text-accent hover:text-accent-foreground dark:bg-gradient-to-b dark:from-muted dark:to-primary-foreground dark:border-input dark:hover:from-primary-foreground dark:hover:to-muted dark:border-0',
        secondary:
          'bg-muted border text-primary hover:text-muted text-bold shadow-sm hover:bg-primary bg-gradient-to-b from-muted to-primary-muted  hover:bg-gradient-to-b hover:from-primary-gradient hover:to-primary hover:border-0',
        ghost: ' text-primary hover:text-primary/80 !p-0 !m-0',
        link: 'text-primary underline-offset-4 hover:underline',
        icon: 'w-[39px] h-[39px] bg-muted !p-0 !flex !justify-center !items-center !rounded-full  text-primary hover:bg-muted/70 dark:bg-[hsla(236,100%,97%,1)] dark:text-muted dark:hover:bg-primary/80',
      },
      size: {
        default: 'h-11 px-6 py-4 rounded-[14px]',
        sm: 'h-8 rounded-md px-3 text-xs',
        lg: 'h-[62px] rounded-[24px] p-[24px]',
        icon: 'h-[39px] w-[39px]',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
