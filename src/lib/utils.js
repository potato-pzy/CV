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
  
  // Check for touch capability first (catches most modern mobile devices including iPhone 16)
  const hasTouchScreen = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  
  // iPadOS 13+ reports desktop UA; detect via platform + touch
  const isIPad = navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1;
  
  // iOS detection (iPhone 16 and newer iPhones often report as Safari/Mac)
  const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent) || isIPad;
  
  // Aggressive iOS detection: check for Safari on touch-enabled device
  const isSafariTouch = /Safari/i.test(navigator.userAgent) && 
                        !/Chrome|CriOS|FxiOS|EdgiOS/i.test(navigator.userAgent) && 
                        hasTouchScreen;
  
  // Standard mobile detection
  const isStandardMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile/i.test(navigator.userAgent);
  
  return isIOS || isIPad || isSafariTouch || isStandardMobile;
}

/** True when we should use Who Are We fallbacks (Safari, mobile, or narrow viewport). */
export function useWhoAreWeFallbacks() {
  // Always use fallback for narrow viewports (mobile-sized screens)
  const narrowViewport = typeof window !== "undefined" && window.innerWidth <= 768;
  
  // Use fallback for Safari (has webkit mask/animation issues)
  const isSafariBrowser = isSafari();
  
  // Use fallback for all mobile devices
  const isMobileDevice = isMobile();
  
  // Conservative: if any condition is true, use the lightweight version
  return narrowViewport || isSafariBrowser || isMobileDevice;
}

