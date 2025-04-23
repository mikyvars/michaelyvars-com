import { ReactNode } from 'react'

const Button = ({ children }: { children: ReactNode }) => {
  return (
    <button
      type="button"
      className="px-2 py-1.5 bg-gray-900 text-gray-50 rounded-xl hover:bg-gray-700 active:bg-gray-800 transition-colors duration-200">
      {children}
    </button>
  )
}

export default Button
