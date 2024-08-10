import { ComponentProps, ReactNode } from 'react'

interface SelectProps extends ComponentProps<'select'> {
  children: ReactNode
}

export const Select = ({ children, ...props }: SelectProps) => {
  return (
    <div className="">
      <select
        {...props}
        id="countries"
        className="text-md block w-full rounded-lg border border-zinc-900 bg-zinc-800 p-2 text-zinc-400 focus:border-zinc-600"
      >
        {children}
      </select>
    </div>
  )
}
