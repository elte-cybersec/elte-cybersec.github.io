import PCBBackground from "../PCBBackground";
import PhotoSlot from "../PhotoSlot";
import ChipQFP from "../parts/ChipQFP";
import ChipSOIC from "../parts/ChipSOIC";
import Capacitor from "../parts/Capacitor";
import Resistor from "../parts/Resistor";
import Trace from "../parts/Trace";
import Via from "../parts/Via";
import { usePCBPalette } from "../parts/Usepcbpalette";

export const SECTION_A_SLOTS = 4;

interface BoardSectionAProps {
  photos: string[];
}

export default function BoardSectionA({ photos }: BoardSectionAProps) {
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
        patternId="solderMaskA"
        fadeId="boardFadeA"
      />

      <Trace weight="primary" d="M 386 105 L 420 105 L 460 182 L 510 182" />
      <Trace weight="primary" d="M 386 135 L 425 135 L 465 198 L 510 198" />
      <Trace weight="primary" d="M 386 165 L 430 165 L 470 214 L 510 214" />
      <Trace weight="primary" d="M 386 195 L 435 195 L 475 230 L 510 230" />

      <Trace weight="primary" d="M 714 105 L 680 105 L 640 182 L 590 182" />
      <Trace weight="primary" d="M 714 135 L 675 135 L 635 198 L 590 198" />
      <Trace weight="primary" d="M 714 165 L 670 165 L 630 214 L 590 214" />
      <Trace weight="primary" d="M 714 195 L 665 195 L 625 230 L 590 230" />

      <Trace weight="primary" d="M 386 405 L 420 405 L 460 482 L 510 482" />
      <Trace weight="primary" d="M 386 435 L 425 435 L 465 498 L 510 498" />
      <Trace weight="primary" d="M 386 465 L 430 465 L 470 514 L 510 514" />

      <Trace weight="primary" d="M 714 425 L 680 425 L 640 482 L 590 482" />
      <Trace weight="primary" d="M 714 455 L 675 455 L 635 498 L 590 498" />
      <Trace weight="primary" d="M 714 485 L 670 485 L 630 514 L 590 514" />

      <Trace weight="primary" d="M 522 166 L 522 130 L 460 100 L 442 100" />
      <Trace weight="primary" d="M 538 166 L 538 130 L 476 100 L 458 100" />
      <Trace weight="primary" d="M 562 166 L 562 130 L 622 100 L 642 100" />
      <Trace weight="primary" d="M 578 166 L 578 130 L 638 100 L 658 100" />

      <Trace weight="primary" d="M 522 534 L 522 580 L 460 580 L 442 580" />
      <Trace weight="primary" d="M 538 534 L 538 580 L 476 580 L 458 580" />
      <Trace weight="primary" d="M 562 534 L 562 580 L 632 580 L 652 580" />
      <Trace weight="primary" d="M 578 534 L 578 580 L 648 580 L 668 580" />

      <Trace weight="primary" d="M 530 290 L 530 350 L 442 350" />
      <Trace weight="primary" d="M 570 290 L 570 350 L 622 350" />

      <Trace weight="primary" d="M 460 390 L 460 410 L 530 410 L 530 450" />
      <Trace weight="primary" d="M 622 390 L 622 410 L 570 410 L 570 450" />

      <Trace weight="secondary" d="M 60 60 L 130 60 L 150 80 L 230 80" />
      <Trace weight="secondary" d="M 60 240 L 130 240 L 150 260 L 220 260" />
      <Trace weight="secondary" d="M 870 60 L 940 60 L 960 80 L 1040 80" />
      <Trace weight="secondary" d="M 870 240 L 940 240 L 960 260 L 1040 260" />
      <Trace weight="secondary" d="M 60 410 L 130 410 L 150 430 L 220 430" />
      <Trace weight="secondary" d="M 60 620 L 130 620 L 150 640 L 230 640" />
      <Trace weight="secondary" d="M 870 410 L 940 410 L 960 430 L 1040 430" />
      <Trace weight="secondary" d="M 870 620 L 940 620 L 960 640 L 1040 640" />

      <Via cx={420} cy={105} />
      <Via cx={460} cy={182} />
      <Via cx={465} cy={198} />
      <Via cx={470} cy={214} />
      <Via cx={475} cy={230} />
      <Via cx={680} cy={105} />
      <Via cx={640} cy={182} />
      <Via cx={635} cy={198} />
      <Via cx={630} cy={214} />
      <Via cx={625} cy={230} />
      <Via cx={420} cy={405} />
      <Via cx={460} cy={482} />
      <Via cx={465} cy={498} />
      <Via cx={470} cy={514} />
      <Via cx={680} cy={425} />
      <Via cx={640} cy={482} />
      <Via cx={635} cy={498} />
      <Via cx={630} cy={514} />
      <Via cx={460} cy={100} />
      <Via cx={476} cy={100} />
      <Via cx={622} cy={100} />
      <Via cx={638} cy={100} />
      <Via cx={460} cy={580} />
      <Via cx={476} cy={580} />
      <Via cx={632} cy={580} />
      <Via cx={648} cy={580} />
      <Via cx={530} cy={350} />
      <Via cx={570} cy={350} />
      <Via cx={150} cy={80} />
      <Via cx={960} cy={80} />
      <Via cx={150} cy={260} />
      <Via cx={960} cy={260} />
      <Via cx={150} cy={430} />
      <Via cx={960} cy={430} />
      <Via cx={150} cy={640} />
      <Via cx={960} cy={640} />

      <PhotoSlot x={60} y={80} width={320} height={240} filename={photos[0]} />
      <PhotoSlot x={720} y={60} width={320} height={260} filename={photos[1]} />
      <PhotoSlot x={60} y={380} width={320} height={240} filename={photos[2]} />
      <PhotoSlot x={720} y={400} width={320} height={220} filename={photos[3]} />

      <ChipQFP x={510} y={170} width={80} height={120} label="U17" />
      <ChipQFP x={510} y={450} width={80} height={80} label="U22" />
      <ChipSOIC x={430} y={350} width={60} height={40} label="U23" />
      <ChipSOIC x={610} y={350} width={60} height={40} label="U24" />
      <ChipSOIC x={430} y={560} width={50} height={36} label="U25" />
      <ChipSOIC x={620} y={560} width={50} height={36} label="U26" />
      <ChipSOIC x={430} y={80} width={60} height={40} label="U27" />
      <ChipSOIC x={610} y={80} width={60} height={40} label="U28" />

      <Capacitor cx={30} cy={350} r={9} />
      <Capacitor cx={30} cy={380} r={7} showPolarity={false} />
      <Capacitor cx={1070} cy={350} r={9} />
      <Capacitor cx={1070} cy={380} r={7} showPolarity={false} />

      <Resistor x={20} y={160} label="R52" />
      <Resistor x={20} y={180} />
      <Resistor x={1052} y={160} label="R53" />
      <Resistor x={1052} y={180} />
      <Resistor x={20} y={500} />
      <Resistor x={1052} y={500} />

      <text
        x={40}
        y={28}
        fontFamily="ui-monospace, monospace"
        fontSize={10}
        fill={palette.label}
        letterSpacing={2}
        opacity={0.85}
      >
        SECTION_A // 04 SLOTS
      </text>
    </svg>
  );
}