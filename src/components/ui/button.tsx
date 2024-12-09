import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 ',
  {
    variants: {
      variant: {
        default:
          'bg-gradient-to-b from-primary to-primary-gradient text-primary-foreground shadow  hover:bg-gradient-to-b hover:from-primary-gradient hover:to-primary transition-all duration-500 bg-size-200 bg-pos-0 hover:bg-pos-100',

        destructive:
          'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
        outline:
          'border border-input bg-background shadow-sm hover:bg-input text-accent hover:text-accent-foreground',
        secondary:
          'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
        ghost: ' text-primary hover:text-primary/80 !p-0 !m-0',
        link: 'text-primary underline-offset-4 hover:underline',
        icon: 'w-[39px] h-[39px] bg-muted flex justify-center items-center !rounded-full text-primary hover:bg-muted/80',
      },
      size: {
        default: 'h-11 px-6 py-4 rounded-[14px]',
        sm: 'h-8 rounded-md px-3 text-xs',
        lg: 'h-[62px] rounded-[24px] p-[24px]',
        icon: 'h-9 w-9',
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
