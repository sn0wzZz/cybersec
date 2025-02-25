import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function serializeParams(
  params: Record<string, unknown>,
  prefix: string
): string {
  const serializedParams = Object.entries(params)
    .map(([key, value]) => {
      if (typeof value === 'object' && value !== null) {
        return Object.entries(value)
          .map(([subKey, subValue]) => {
            return `${prefix}[${key}][${subKey}]=${subValue}`
          })
          .join('&')
      }
      return `${prefix}[${key}]=${value}`
    })
    .join('&')
  return serializedParams
}