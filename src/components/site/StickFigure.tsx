type Props = {
  className?: string;
  color?: string;
  pose?: "jump" | "wave" | "stand";
};

/**
 * Hand-drawn stick figure echoing the Trotsvast logo character.
 * Pure inline SVG so it inherits color via `color` prop.
 */
export function StickFigure({ className, color = "currentColor", pose = "jump" }: Props) {
  return (
    <svg
      viewBox="0 0 120 160"
      className={className}
      fill="none"
      stroke={color}
      strokeWidth={2.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {/* head */}
      <circle cx="60" cy="26" r="16" />
      {/* eyes */}
      <circle cx="54" cy="24" r="1.6" fill={color} stroke="none" />
      <circle cx="66" cy="24" r="1.6" fill={color} stroke="none" />
      {/* smile */}
      <path d="M52 30 Q60 37 68 30" />
      {/* body */}
      <path d="M60 42 L60 96" />
      {pose === "jump" && (
        <>
          {/* arms up */}
          <path d="M60 56 L36 32" />
          <path d="M60 56 L84 32" />
          {/* legs in run */}
          <path d="M60 96 L42 134 q-4 8 -10 10" />
          <path d="M60 96 L78 132" />
          <circle cx="22" cy="146" r="2.4" fill={color} stroke="none" />
        </>
      )}
      {pose === "wave" && (
        <>
          <path d="M60 58 L40 78" />
          <path d="M60 58 L86 30" />
          <path d="M60 96 L46 134" />
          <path d="M60 96 L74 134" />
        </>
      )}
      {pose === "stand" && (
        <>
          <path d="M60 60 L38 80" />
          <path d="M60 60 L82 80" />
          <path d="M60 96 L48 134" />
          <path d="M60 96 L72 134" />
        </>
      )}
    </svg>
  );
}

/** A small hand-drawn squiggly underline. */
export function Squiggle({ className, color = "currentColor" }: { className?: string; color?: string }) {
  return (
    <svg
      viewBox="0 0 200 16"
      className={className}
      fill="none"
      stroke={color}
      strokeWidth={4}
      strokeLinecap="round"
      aria-hidden
    >
      <path d="M4 10 Q 30 -2 56 10 T 108 10 T 160 10 T 196 10" />
    </svg>
  );
}

/** A simple hand-drawn leaf (Trotsvast botanical accent). */
export function Leaf({ className, color = "currentColor" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke={color} strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M10 54 C 18 18, 46 10, 56 8 C 54 30, 42 54, 10 54 Z" />
      <path d="M16 50 Q 32 30 52 14" />
    </svg>
  );
}
