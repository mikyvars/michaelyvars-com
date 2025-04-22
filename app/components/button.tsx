import { ReactNode } from 'react'

const Button = ({ children }: { children: ReactNode }) => {
  return (
    <button
      type="button"
      className="px-2 py-1.5 bg-gray-100 text-gray-900 rounded-xl hover:bg-gray-300 active:bg-gray-200 transition-colors duration-200">
      {children}
    </button>
  )
}

export default Button
