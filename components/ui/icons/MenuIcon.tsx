// =============================================================================
// Menu Icon Component (Hamburger / Close)
// =============================================================================

interface MenuIconProps {
  className?: string;
  isOpen?: boolean;
}

export default function MenuIcon({ className = "w-6 h-6", isOpen = false }: MenuIconProps) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      {isOpen ? (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 18L18 6M6 6l12 12"
        />
      ) : (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16m-7 6h7"
        />
      )}
    </svg>
  );
}

