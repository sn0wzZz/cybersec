import { cn } from '@/lib/utils'

type ContainerProps = {
  children: React.ReactNode
  className?: string
  outer?: string
  as?: React.ElementType
}

export default function Container({
  children,
  className,
  outer,
  as: Component = 'div',
}: ContainerProps) {
  return (
    <div className={outer}>
      <Component className={cn(`container max-w-[1440px] mx-auto ${className}`)}>
        {children}
      </Component>
    </div>
  )
}
