import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function truncateAddress(value: string) {
  return `${value.slice(0, 6)}....${value.slice(-5)}`;
}
