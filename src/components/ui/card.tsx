import * as React from 'react'
import { cn } from '@/lib/utils'

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    icon?: React.ReactNode
    
  }
>(({ className, icon, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'rounded-[40px] bg-background  flex gap-4 p-6 text-card-foreground shadow-[0px_34px_94px_0px_hsla(240,100%,96%,0.7)]', className)}
  >
    {icon && (
      <div>
        <div
          className={cn(
            'flex items-center justify-center w-[40px] h-[40px] rounded-full bg-muted text-primary'
          )}
          {...props}
        >
          {icon}
        </div>
      </div>
    )}
    <div className={'flex flex-col gap-4'} {...props}>
      {children}
    </div>
  </div>
))
Card.displayName = 'Card'

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    icon?: React.ReactNode
  }
>(({ className, icon, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex items-center space-x-4', className)}
    {...props}
  >
    {icon && (
      <div>
        <div
          className={cn(
            'flex items-center justify-center w-[56px] h-[56px] rounded-full bg-primary-gradient text-white'
          )}
          {...props}
        >
          {icon}
        </div>
      </div>
    )}
    <div className='flex flex-col gap-4'>{children}</div>
  </div>
))
CardHeader.displayName = 'CardHeader'

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      'font-semibold leading-none tracking-tight text-primary display-xs',
      className
    )}
    {...props}
  />
))
CardTitle.displayName = 'CardTitle'

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-sm text-muted-foreground', className)}
    {...props}
  />
))
CardDescription.displayName = 'CardDescription'

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(' pt-0 text-foreground', className)}
    {...props}
  />
))
CardContent.displayName = 'CardContent'

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex items-center  pt-0', className)}
    {...props}
  />
))
CardFooter.displayName = 'CardFooter'

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
