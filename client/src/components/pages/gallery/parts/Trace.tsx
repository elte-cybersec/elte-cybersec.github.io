import { usePCBPalette } from "./Usepcbpalette";

interface TraceProps {
  d: string;
  weight?: "primary" | "secondary";
}

export default function Trace({ d, weight = "primary" }: TraceProps) {
  const palette = usePCBPalette();

  if (weight === "secondary") {
    return (
      <path
        d={d}
        stroke={palette.traceGoldDim}
        strokeWidth={0.7}
        fill="none"
        opacity={0.7}
      />
    );
  }
  return (
    <path
      d={d}
      stroke={palette.traceGold}
      strokeWidth={1.3}
      fill="none"
      opacity={0.9}
    />
  );
}