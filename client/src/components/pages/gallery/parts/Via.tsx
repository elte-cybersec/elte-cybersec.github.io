import { usePCBPalette } from "./Usepcbpalette";

interface ViaProps {
  cx: number;
  cy: number;
  r?: number;
}

export default function Via({ cx, cy, r = 2.2 }: ViaProps) {
  const palette = usePCBPalette();
  return <circle cx={cx} cy={cy} r={r} fill={palette.viaCore} opacity={0.95} />;
}