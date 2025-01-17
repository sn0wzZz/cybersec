import { cn } from '@/lib/utils'

type ContainerProps = {
  children: React.ReactNode
  className?: string
  outer?: string
  as?: React.ElementType
  global?: boolean
}

export default function Container({
  children,
  className,
  outer,
  as: Component = 'div',
  global
}: ContainerProps) {
  return (
    <div className={outer}>
      <Component
        className={cn(
          `container max-w-[1440px] mx-auto  `, global ? 'flex flex-col gap-24' : '',className
        )}
      >
        {children}
      </Component>
    </div>
  )
}
