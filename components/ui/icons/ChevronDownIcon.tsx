// =============================================================================
// Chevron Down Icon Component
// =============================================================================

interface ChevronDownIconProps {
  className?: string;
}

export default function ChevronDownIcon({ className = "w-8 h-8" }: ChevronDownIconProps) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 14l-7 7m0 0l-7-7m7 7V3"
      />
    </svg>
  );
}

