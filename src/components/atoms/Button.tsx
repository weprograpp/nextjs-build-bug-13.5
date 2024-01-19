// ./src/stories/Button.js
import type { ButtonHTMLAttributes, PropsWithChildren } from 'react'
import { useMemo } from 'react'

const sizeClasses = {
  small: 'px-3 py-2',
  large: 'px-4 py-6',
  medium: 'p-3',
}

type Size = keyof typeof sizeClasses

const modelClasses = {
  tertiary: 'bg-transparent',
  secondary: 'text-primary border-2 border-primary dark:text-secondary dark:border-secondary',
  primary:
    'text-white bg-primary dark:bg-white dark:text-primary dark:disabled:bg-primary dark:disabled:text-primary-clear',
}

type Model = keyof typeof modelClasses

export interface IButtonProps extends PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> {
  buttonStyle?: Model
  size?: Size
  childrenClasses?: string
}

export const Button = ({
  buttonStyle = 'primary',
  size = 'medium',
  childrenClasses = '',
  children,
  ...props
}: IButtonProps) => {
  const computedClasses = useMemo(() => {
    const modelClass = modelClasses[buttonStyle]
    const sizeClass = sizeClasses[size]
    return [modelClass, sizeClass].join(' ')
  }, [buttonStyle, size])

  return (
    <button
      data-testid="button"
      className={`inline-flex items-center justify-center rounded-lg font-paragraph disabled:cursor-not-allowed disabled:border-gray-100 disabled:bg-tertiary-dark disabled:text-secondary-clear ${computedClasses} ${childrenClasses}`}
      {...props}>
      {children}
    </button>
  )
}
