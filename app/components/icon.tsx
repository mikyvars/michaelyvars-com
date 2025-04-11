import { cva, VariantProps } from 'class-variance-authority'
import { LucideIcon } from 'lucide-react'

const iconVariants = cva('text-gray-600', {
  variants: {
    variant: {
      md: 'h-6 w-6',
      lg: 'h-8 w-8'
    }
  }
})

interface IconProps extends VariantProps<typeof iconVariants> {
  icon: LucideIcon
}

const Icon = ({ icon: IconComponent, variant = 'md' }: IconProps) => {
  return <IconComponent className={iconVariants({ variant })} />
}

export default Icon
