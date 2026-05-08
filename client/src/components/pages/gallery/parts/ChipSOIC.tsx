import { usePCBPalette } from "./Usepcbpalette";

interface ChipSOICProps {
  x: number;
  y: number;
  width: number;
  height: number;
  label?: string;
  pinSpacing?: number;
}

export default function ChipSOIC({
  x,
  y,
  width,
  height,
  label,
  pinSpacing = 8,
}: ChipSOICProps) {
  const palette = usePCBPalette();
  const pinLength = 4;
  const pinThickness = 2;
  const pinInset = 4;

  const horizontalPinCount = Math.floor((width - pinInset * 2) / pinSpacing);

  const topPins = Array.from({ length: horizontalPinCount }, (_, i) => (
    <rect
      key={`t-${i}`}
      x={x + pinInset + i * pinSpacing}
      y={y - pinLength}
      width={pinThickness}
      height={pinLength}
      fill={palette.traceGold}
    />
  ));

  const bottomPins = Array.from({ length: horizontalPinCount }, (_, i) => (
    <rect
      key={`b-${i}`}
      x={x + pinInset + i * pinSpacing}
      y={y + height}
      width={pinThickness}
      height={pinLength}
      fill={palette.traceGold}
    />
  ));

  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        rx={1}
        fill={palette.chipBody}
        stroke={palette.tealDim}
        strokeWidth={0.5}
      />
      {topPins}
      {bottomPins}
      {label && (
        <text
          x={x + width / 2}
          y={y + height / 2 + 2.5}
          fontFamily="ui-monospace, monospace"
          fontSize={6}
          fill={palette.label}
          textAnchor="middle"
        >
          {label}
        </text>
      )}
    </g>
  );
}