import { ComponentProps, ReactNode } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const buttonVariants = tv({
  base: 'flex items-center gap-2 rounded-md justify-center',
  variants: {
    variant: {
      primary:
        'bg-zinc-800 border border-zinc-900 text-zinc-400 hover:bg-zinc-900 hover:text-zinc-600 hover:border-zinc-600 disabled:text-zinc-600 disabled:bg-zinc-900 disabled:border-0',
      secondary:
        'bg-green-600 border border-zinc-900 hover:border-green-800 hover:bg-green-700 disabled:bg-green-800 disabled:border-0',
      cancel:
        'bg-red-600 border border-zinc-900 hover:border-red-800 hover:bg-red-700',
    },
    size: {
      default: 'p-2',
      full: 'h-11 w-full',
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'default',
  },
})

interface ButtonProps
  extends ComponentProps<'button'>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode
}

export function Button({ children, variant, size, ...props }: ButtonProps) {
  return (
    <button {...props} className={buttonVariants({ variant, size })}>
      {children}
    </button>
  )
}
