import { usePCBPalette } from "./Usepcbpalette";

interface CapacitorProps {
  cx: number;
  cy: number;
  r?: number;
  showPolarity?: boolean;
}

export default function Capacitor({
  cx,
  cy,
  r = 9,
  showPolarity = true,
}: CapacitorProps) {
  const palette = usePCBPalette();

  return (
    <g opacity={0.85}>
      <circle
        cx={cx}
        cy={cy}
        r={r}
        fill={palette.chipBody}
        stroke={palette.traceGold}
        strokeWidth={1}
      />
      {r >= 8 && (
        <circle
          cx={cx}
          cy={cy}
          r={r * 0.55}
          fill="none"
          stroke={palette.traceGold}
          strokeWidth={0.6}
        />
      )}
      {showPolarity && (
        <line
          x1={cx - r * 0.7}
          y1={cy}
          x2={cx + r * 0.7}
          y2={cy}
          stroke={palette.traceGold}
          strokeWidth={0.7}
        />
      )}
    </g>
  );
}