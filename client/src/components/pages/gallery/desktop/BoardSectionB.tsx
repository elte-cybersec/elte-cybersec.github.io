import PCBBackground from "../PCBBackground";
import PhotoSlot from "../PhotoSlot";
import ChipQFP from "../parts/ChipQFP";
import ChipSOIC from "../parts/ChipSOIC";
import Capacitor from "../parts/Capacitor";
import Resistor from "../parts/Resistor";
import Trace from "../parts/Trace";
import Via from "../parts/Via";
import { usePCBPalette } from "../parts/Usepcbpalette";

export const SECTION_B_SLOTS = 3;

interface BoardSectionBProps {
  photos: string[];
}

export default function BoardSectionB({ photos }: BoardSectionBProps) {
  const palette = usePCBPalette();

  return (
    <svg
      viewBox="0 0 1100 700"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "auto", display: "block" }}
    >
      <PCBBackground
        width={1100}
        height={700}
        patternId="solderMaskB"
        fadeId="boardFadeB"
      />

      <Trace weight="primary" d="M 530 220 L 580 220 L 600 240 L 600 290" />
      <Trace weight="primary" d="M 530 250 L 570 250 L 590 270 L 590 290" />
      <Trace weight="primary" d="M 530 280 L 565 280 L 580 295 L 580 320" />

      <Trace weight="primary" d="M 530 380 L 580 380 L 600 400 L 600 430" />
      <Trace weight="primary" d="M 530 410 L 575 410 L 595 425 L 595 430" />
      <Trace weight="primary" d="M 530 440 L 565 440 L 585 425 L 600 425" />

      <Trace weight="primary" d="M 680 320 L 700 320 L 715 300 L 715 240 L 720 220" />
      <Trace weight="primary" d="M 680 305 L 695 305 L 710 285 L 710 240 L 720 220" />

      <Trace weight="primary" d="M 680 430 L 700 430 L 715 450 L 715 530 L 720 540" />
      <Trace weight="primary" d="M 680 445 L 695 445 L 710 465 L 710 530 L 720 540" />

      <Trace weight="primary" d="M 530 130 L 560 130 L 580 110 L 600 110" />
      <Trace weight="primary" d="M 530 150 L 555 150 L 575 130 L 600 130" />
      <Trace weight="primary" d="M 530 540 L 560 540 L 580 560 L 600 560" />
      <Trace weight="primary" d="M 530 560 L 555 560 L 575 580 L 600 580" />

      <Trace weight="primary" d="M 1080 250 L 1095 250" />
      <Trace weight="primary" d="M 1080 260 L 1095 260" />
      <Trace weight="primary" d="M 1080 450 L 1095 450" />
      <Trace weight="primary" d="M 1080 460 L 1095 460" />

      <Trace weight="primary" d="M 60 200 L 100 200 L 120 180 L 200 180" />
      <Trace weight="primary" d="M 60 220 L 100 220 L 120 200 L 200 200" />
      <Trace weight="primary" d="M 60 470 L 100 470 L 120 490 L 200 490" />
      <Trace weight="primary" d="M 60 490 L 100 490 L 120 510 L 200 510" />

      <Trace weight="secondary" d="M 60 60 L 130 60 L 150 80 L 230 80" />
      <Trace weight="secondary" d="M 60 320 L 130 320 L 150 340 L 230 340" />
      <Trace weight="secondary" d="M 870 60 L 940 60 L 960 80 L 1040 80" />
      <Trace weight="secondary" d="M 870 320 L 940 320 L 960 340 L 1040 340" />
      <Trace weight="secondary" d="M 60 620 L 130 620 L 150 640 L 230 640" />
      <Trace weight="secondary" d="M 870 620 L 940 620 L 960 640 L 1040 640" />

      <Via cx={600} cy={290} />
      <Via cx={590} cy={290} />
      <Via cx={580} cy={320} />
      <Via cx={600} cy={430} />
      <Via cx={595} cy={430} />
      <Via cx={600} cy={425} />
      <Via cx={715} cy={285} />
      <Via cx={715} cy={465} />
      <Via cx={580} cy={110} />
      <Via cx={580} cy={560} />
      <Via cx={1095} cy={250} />
      <Via cx={1095} cy={260} />
      <Via cx={1095} cy={450} />
      <Via cx={1095} cy={460} />
      <Via cx={120} cy={180} />
      <Via cx={120} cy={200} />
      <Via cx={120} cy={490} />
      <Via cx={120} cy={510} />
      <Via cx={150} cy={80} />
      <Via cx={150} cy={340} />
      <Via cx={960} cy={80} />
      <Via cx={960} cy={340} />
      <Via cx={150} cy={640} />
      <Via cx={960} cy={640} />

      <PhotoSlot x={80} y={100} width={450} height={500} filename={photos[0]} />
      <PhotoSlot x={720} y={100} width={320} height={220} filename={photos[1]} />
      <PhotoSlot x={720} y={380} width={320} height={220} filename={photos[2]} />

      <ChipQFP x={550} y={290} width={130} height={50} label="U17" />
      <ChipQFP x={550} y={400} width={130} height={50} label="U18" />

      <ChipSOIC x={600} y={100} width={60} height={36} label="U22" />
      <ChipSOIC x={600} y={550} width={60} height={36} label="U23" />
      <ChipSOIC x={1040} y={220} width={40} height={50} label="U25" />
      <ChipSOIC x={1040} y={400} width={40} height={50} label="U26" />

      <Capacitor cx={30} cy={180} r={9} />
      <Capacitor cx={30} cy={220} r={7} showPolarity={false} />
      <Capacitor cx={30} cy={470} r={9} />
      <Capacitor cx={30} cy={510} r={7} showPolarity={false} />

      <Resistor x={20} y={60} label="R52" />
      <Resistor x={20} y={80} />
      <Resistor x={20} y={600} />
      <Resistor x={20} y={620} />

      <text
        x={40}
        y={28}
        fontFamily="ui-monospace, monospace"
        fontSize={10}
        fill={palette.label}
        letterSpacing={2}
        opacity={0.85}
      >
        SECTION_B // 03 SLOTS
      </text>
    </svg>
  );
}