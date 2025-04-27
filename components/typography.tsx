import { cva, VariantProps } from 'class-variance-authority'
import { HTMLAttributes, ReactNode } from 'react'

const typographyVariants = cva('text-gray-600 text-normal', {
  variants: {
    variant: {
      h1: 'text-4xl font-semibold md:font-bold md:text-5xl md:tracking-[-0.02em] lg:text-6xl lg:leading-[72px] text-gray-900',
      h2: 'text-lg md:text-4xl font-semibold tracking-[-0.02em] text-gray-900',
      h3: 'text-2xl md:text-3xl font-semibold tracking-[-0.02em] text-gray-900',
      subtitle: 'text-lg md:text-xl',
      body1: 'text-base md:text-lg',
      body2: 'text-base',
      body3: 'text-sm'
    }
  },
  defaultVariants: {
    variant: 'body2'
  }
})

type TypographyTag = 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span'

const variantTagMap: Record<NonNullable<TypographyProps['variant']>, TypographyTag> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  subtitle: 'p',
  body1: 'p',
  body2: 'p',
  body3: 'p'
}

interface TypographyProps extends HTMLAttributes<HTMLElement>, VariantProps<typeof typographyVariants> {
  children: ReactNode
  as?: TypographyTag
}

const Typography = ({ variant = 'body1', children, className, as, ...props }: TypographyProps) => {
  const Component = as ?? variantTagMap[variant as NonNullable<typeof variant>]
  const classNames = typographyVariants({ variant })

  return (
    <Component className={`${classNames} ${className ?? ''}`} {...props}>
      {children}
    </Component>
  )
}

export default Typography
