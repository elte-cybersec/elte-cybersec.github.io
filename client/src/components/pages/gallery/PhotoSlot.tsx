import { galleryBasePath, defaultPhoto } from "../../../data/galleryData";
import { usePCBPalette } from "./parts/Usepcbpalette";

interface PhotoSlotProps {
  x: number;
  y: number;
  width: number;
  height: number;
  filename: string;
  pinSpacing?: number;
}

export default function PhotoSlot({
  x,
  y,
  width,
  height,
  filename,
  pinSpacing = 15,
}: PhotoSlotProps) {
  const palette = usePCBPalette();
  const isDefault = filename === defaultPhoto;

  const pinLength = 6;
  const pinThickness = 2;
  const pinInset = 10;
  const frameStroke = 2.5;
  const inset = frameStroke / 2;

  const horizontalPinCount = Math.floor((width - pinInset * 2) / pinSpacing);
  const verticalPinCount = Math.floor((height - pinInset * 2) / pinSpacing);

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

  const leftPins = Array.from({ length: verticalPinCount }, (_, i) => (
    <rect
      key={`l-${i}`}
      x={x - pinLength}
      y={y + pinInset + i * pinSpacing}
      width={pinLength}
      height={pinThickness}
      fill={palette.traceGold}
    />
  ));

  const rightPins = Array.from({ length: verticalPinCount }, (_, i) => (
    <rect
      key={`r-${i}`}
      x={x + width}
      y={y + pinInset + i * pinSpacing}
      width={pinLength}
      height={pinThickness}
      fill={palette.traceGold}
    />
  ));

  return (
    <g>
      <image
        href={`${galleryBasePath}${filename}`}
        x={x + inset}
        y={y + inset}
        width={width - frameStroke}
        height={height - frameStroke}
        preserveAspectRatio="xMidYMid slice"
        opacity={isDefault ? 0.4 : 1}
      />
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        rx={3}
        fill="none"
        stroke={palette.chipFrame}
        strokeWidth={frameStroke}
      />
      {isDefault && (
        <text
          x={x + width / 2}
          y={y + height / 2}
          fontFamily="ui-monospace, monospace"
          fontSize={11}
          fill={palette.label}
          textAnchor="middle"
          opacity={0.6}
        >
          [ empty ]
        </text>
      )}
      {topPins}
      {bottomPins}
      {leftPins}
      {rightPins}
      <circle cx={x + 5} cy={y + 5} r={1.8} fill={palette.tealDim} />
    </g>
  );
}