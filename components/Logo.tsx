/**
 * The Kokum Labs mark — a kokum fruit reduced to two arcs, with the calyx notch
 * at the top. Reads at 20px in a favicon and at 200px on a wall.
 */
export default function Logo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" className={className}>
      <circle cx="16" cy="17.5" r="11.5" className="fill-kokum" />
      <path
        d="M16 6.5c0 3.2-2.1 5.2-5.2 5.6C11.4 8.4 13.2 6.3 16 6.5Z"
        className="fill-palm"
      />
      <path
        d="M9.6 13.4a8.6 8.6 0 0 1 5-3.6"
        stroke="currentColor"
        strokeOpacity="0.28"
        strokeWidth="1.4"
        strokeLinecap="round"
        className="text-paper"
      />
    </svg>
  );
}
