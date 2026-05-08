import { usePCBPalette } from "./parts/Usepcbpalette";

interface PCBBackgroundProps {
  width: number;
  height: number;
  patternId: string;
  fadeId: string;
}

export default function PCBBackground({
  width,
  height,
  patternId,
  fadeId,
}: PCBBackgroundProps) {
  const palette = usePCBPalette();

  const edgeFadeId = `${fadeId}-edge`;
  const topLightId = `${fadeId}-top`;

  return (
    <>
      <defs>
        <radialGradient id={fadeId} cx="50%" cy="50%" r="65%">
          <stop offset="0%" stopColor={palette.substrateAccent} stopOpacity={1} />
          <stop offset="55%" stopColor={palette.substrate} stopOpacity={1} />
          <stop offset="100%" stopColor={palette.substrateEdge} stopOpacity={1} />
        </radialGradient>

        <radialGradient id={edgeFadeId} cx="50%" cy="50%" r="55%">
          <stop offset="0%" stopColor="#000000" stopOpacity={0} />
          <stop offset="75%" stopColor="#000000" stopOpacity={0} />
          <stop offset="100%" stopColor={palette.substrateEdge} stopOpacity={0.85} />
        </radialGradient>

        <linearGradient id={topLightId} x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity={0.06} />
          <stop offset="30%" stopColor="#ffffff" stopOpacity={0} />
          <stop offset="70%" stopColor="#000000" stopOpacity={0} />
          <stop offset="100%" stopColor="#000000" stopOpacity={0.18} />
        </linearGradient>

        <pattern
          id={patternId}
          width={4}
          height={4}
          patternUnits="userSpaceOnUse"
        >
          <rect width={4} height={4} fill="transparent" />
          <circle cx={2} cy={2} r={0.6} fill={palette.substrateEdge} opacity={0.6} />
        </pattern>
      </defs>

      <rect x={0} y={0} width={width} height={height} fill={`url(#${fadeId})`} />
      <rect x={0} y={0} width={width} height={height} fill={`url(#${patternId})`} />
      <rect x={0} y={0} width={width} height={height} fill={`url(#${topLightId})`} />
      <rect x={0} y={0} width={width} height={height} fill={`url(#${edgeFadeId})`} />
    </>
  );
}