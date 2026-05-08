import { usePCBPalette } from "./Usepcbpalette";

interface ResistorProps {
  x: number;
  y: number;
  width?: number;
  height?: number;
  label?: string;
}

export default function Resistor({
  x,
  y,
  width = 28,
  height = 10,
  label,
}: ResistorProps) {
  const palette = usePCBPalette();

  return (
    <g opacity={0.7}>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        rx={1}
        fill={palette.chipBody}
        stroke={palette.traceGold}
        strokeWidth={0.6}
      />
      {label && (
        <text
          x={x + width / 2}
          y={y + height - 2}
          fontFamily="ui-monospace, monospace"
          fontSize={5}
          fill={palette.label}
          textAnchor="middle"
        >
          {label}
        </text>
      )}
    </g>
  );
}