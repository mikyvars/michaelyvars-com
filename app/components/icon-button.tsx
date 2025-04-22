import { cva, VariantProps } from 'class-variance-authority'
import { LucideIcon } from 'lucide-react'

const iconButtonVariants = cva('text-gray-600', {
  variants: {
    variant: {
      md: 'h-9 w-9',
      lg: 'h-11 w-11'
    }
  }
})

interface IconButtonProps extends VariantProps<typeof iconButtonVariants> {
  icon: LucideIcon
}

const IconButton = ({ icon: IconComponent, variant = 'md' }: IconButtonProps) => {
  return <IconComponent className={iconButtonVariants({ variant })} />
}

export default IconButton
