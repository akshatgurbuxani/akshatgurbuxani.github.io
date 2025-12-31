"use client";

import { ReactNode } from "react";

// =============================================================================
// Card Component - Simple Section Wrapper
// =============================================================================

interface CardProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

/**
 * Simple wrapper for sections to maintain consistent spacing and layout.
 */
export default function Card({ children, className = "", id }: CardProps) {
  return (
    <section id={id} className={`w-full ${className}`}>
      <div className="relative w-full">
        {children}
      </div>
    </section>
  );
}
