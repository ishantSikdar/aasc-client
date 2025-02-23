import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const hoverLinkClasses =
  "relative before:absolute before:bottom-[-1px] before:left-0 before:w-full before:h-[1px] before:bg-white before:content-[''] before:scale-x-0 before:origin-bottom-right before:transition-transform before:duration-300 hover:before:scale-x-100 hover:before:origin-bottom-left"
