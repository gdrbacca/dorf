import { ComponentProps } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const input = tv({
  base: 'flex items-center gap-2 rounded-md justify-center',
  variants: {
    variant: {
      primary:
        'bg-zinc-800 border border-zinc-800 text-zinc-400  focus:border-zinc-600 disabled:text-zinc-600 disabled:bg-zinc-900 disabled:border-0 outline-none',
      secondary:
        'bg-green-600 border border-zinc-900 hover:border-green-800 hover:bg-green-700 disabled:bg-green-800 disabled:border-0',
      cancel:
        'bg-red-600 border border-zinc-900 hover:border-red-800 hover:bg-red-700',
    },
    isize: {
      default: 'p-2',
      full: 'h-11 w-full',
      full1: 'p-2 w-full',
    },
  },

  defaultVariants: {
    variant: 'primary',
    isize: 'default',
  },
})

interface InputProps
  extends ComponentProps<'input'>,
    VariantProps<typeof input> {}

export function Input({ variant, isize, ...props }: InputProps) {
  return <input {...props} className={input({ variant, isize })} />
}
