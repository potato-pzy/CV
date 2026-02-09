import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

/** Safari/WebKit detection for iOS compatibility fallbacks. */
export function isSafari() {
  if (typeof navigator === "undefined") return false;
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}

export function isMobile() {
  if (typeof navigator === "undefined") return false;
  // iPadOS 13+ reports desktop UA; detect via platform + touch
  const isIPad = navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1;
  return isIPad || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile/i.test(navigator.userAgent);
}

/** True when we should use Who Are We fallbacks (Safari, mobile, or narrow viewport). */
export function useWhoAreWeFallbacks() {
  const narrowViewport = typeof window !== "undefined" && window.innerWidth <= 768;
  return narrowViewport || isSafari() || isMobile();
}

