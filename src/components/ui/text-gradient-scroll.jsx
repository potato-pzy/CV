import React, { createContext, useContext, useRef, memo, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const TextGradientScrollContext = createContext({});

function useGradientScroll() {
  const context = useContext(TextGradientScrollContext);
  return context;
}

// iOS/Safari detection
const isIOS = () => {
  if (typeof window === 'undefined') return false;
  return /iPad|iPhone|iPod/.test(navigator.userAgent) ||
    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
};

const isSafari = () => {
  if (typeof window === 'undefined') return false;
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
};

const TextGradientScroll = memo(function TextGradientScroll({
  text,
  className,
  type = "letter",
  textOpacity = "soft",
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [shouldSimplify] = useState(() => isIOS() || isSafari());

  useEffect(() => {
    // FIX 1: For iOS/Safari, show immediately without scroll animation
    if (shouldSimplify) {
      setIsVisible(true);
      return;
    }

    // FIX 2: Use simpler Intersection Observer for non-iOS
    if (typeof window === 'undefined' || !ref.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // FIX 3: Unobserve after becoming visible to prevent re-triggering
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px 0px 50px 0px', // More forgiving margins
      }
    );

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [shouldSimplify]);

  const words = text.split(" ");

  // FIX 4: Simplified rendering for iOS/Safari - no complex animations
  if (shouldSimplify) {
    return (
      <p
        ref={ref}
        className={cn("relative flex m-0 flex-wrap gap-x-1.5 gap-y-0", className)}
        style={{
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.5s ease-in-out',
        }}
      >
        {text}
      </p>
    );
  }

  // FIX 5: For non-iOS, use CSS-only scroll animations instead of framer-motion
  return (
    <TextGradientScrollContext.Provider value={{ textOpacity, type, isVisible }}>
      <p
        ref={ref}
        className={cn("relative flex m-0 flex-wrap gap-x-1.5 gap-y-0", className)}
      >
        {words.map((word, i) => {
          const delay = i * 0.05; // Stagger effect
          return type === "word" ? (
            <WordSimple key={i} delay={delay}>
              {word}
            </WordSimple>
          ) : (
            <LetterSimple key={i} delay={delay}>
              {word}
            </LetterSimple>
          );
        })}
      </p>
    </TextGradientScrollContext.Provider>
  );
});

export { TextGradientScroll };

// FIX 6: Simplified Word component using CSS transitions
const WordSimple = memo(({ children, delay }) => {
  const { isVisible } = useGradientScroll();
  const { textOpacity } = useGradientScroll();

  const opacityClass =
    textOpacity === "none" ? "opacity-0" :
      textOpacity === "medium" ? "opacity-30" :
        "opacity-10"; // soft (default)

  return (
    <span className="relative inline-block">
      <span className={`absolute ${opacityClass}`}>{children}</span>
      <span
        style={{
          opacity: isVisible ? 1 : 0,
          transition: `opacity 0.5s ease-in-out ${delay}s`,
        }}
      >
        {children}
      </span>
    </span>
  );
});

// FIX 7: Simplified Letter component using CSS transitions
const LetterSimple = memo(({ children, delay }) => {
  const { isVisible, textOpacity } = useGradientScroll();

  if (typeof children === "string") {
    const opacityClass =
      textOpacity === "none" ? "opacity-0" :
        textOpacity === "medium" ? "opacity-30" :
          "opacity-10"; // soft (default)

    return (
      <span className="relative inline-block">
        {children.split("").map((char, i) => {
          const charDelay = delay + (i * 0.02); // Character stagger
          return (
            <span key={`c_${i}`} className="relative inline-block">
              <span className={`absolute ${opacityClass}`}>{char}</span>
              <span
                style={{
                  opacity: isVisible ? 1 : 0,
                  transition: `opacity 0.3s ease-in-out ${charDelay}s`,
                }}
              >
                {char}
              </span>
            </span>
          );
        })}
      </span>
    );
  }
  return null;
});

// Fallback components (not used in fixed version, but kept for compatibility)
const Word = WordSimple;
const Letter = LetterSimple;
const Char = memo(({ children }) => {
  const { textOpacity } = useGradientScroll();
  const opacityClass =
    textOpacity === "none" ? "opacity-0" :
      textOpacity === "medium" ? "opacity-30" :
        "opacity-10";

  return (
    <span>
      <span className={`absolute ${opacityClass}`}>{children}</span>
      <span>{children}</span>
    </span>
  );
});