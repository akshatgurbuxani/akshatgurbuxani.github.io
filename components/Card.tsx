"use client";

import { ReactNode } from "react";

// =============================================================================
// Card Component - Deck of Cards UI
// =============================================================================

interface CardProps {
  children: ReactNode;
  index: number;
  className?: string;
  id?: string;
}

/**
 * Card wrapper component for the deck-of-cards UI.
 * Each card is sticky and stacks on top of the previous one as you scroll.
 */
export default function Card({ children, index, className = "", id }: CardProps) {
  // Base z-index starts at 10, increments by 1 for each card
  const zIndex = 10 + index;

  return (
    <section
      id={id}
      className={`sticky top-0 w-full ${className}`}
      style={{ zIndex }}
    >
      {/* Card content with shadow for depth effect - content can exceed viewport height */}
      {/* This div's height determines the section's height in document flow */}
      <div className="w-full bg-[var(--background)] shadow-[0_-20px_60px_-15px_rgba(0,0,0,0.3)] dark:shadow-[0_-20px_60px_-15px_rgba(0,0,0,0.5)]">
        {children}
      </div>
    </section>
  );
}

