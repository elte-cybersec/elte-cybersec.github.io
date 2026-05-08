import PCBBackground from "../PCBBackground";
import PhotoSlot from "../PhotoSlot";
import ChipQFP from "../parts/ChipQFP";
import ChipSOIC from "../parts/ChipSOIC";
import Capacitor from "../parts/Capacitor";
import Resistor from "../parts/Resistor";
import Trace from "../parts/Trace";
import Via from "../parts/Via";
import { usePCBPalette } from "../parts/Usepcbpalette";

export const SECTION_MOBILE_SLOTS = 1;

interface BoardSectionMobileProps {
  photos: string[];
}

export default function BoardSectionMobile({ photos }: BoardSectionMobileProps) {
  const palette = usePCBPalette();

  return (
    <svg
      viewBox="0 0 380 700"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "auto", display: "block" }}
    >
      <PCBBackground
        width={380}
        height={700}
        patternId="solderMaskMobile"
        fadeId="boardFadeMobile"
      />

      <Trace weight="primary" d="M 165 106 L 165 130 L 141 154 L 141 194" />
      <Trace weight="primary" d="M 185 106 L 185 130 L 161 154 L 161 194" />
      <Trace weight="primary" d="M 205 106 L 205 130 L 181 154 L 181 194" />
      <Trace weight="primary" d="M 225 106 L 225 130 L 201 154 L 201 194" />

      <Trace weight="primary" d="M 65 150 L 75 150 L 95 170 L 95 180 L 121 194" />
      <Trace weight="primary" d="M 305 150 L 295 150 L 285 170 L 285 180 L 261 194" />

      <Trace weight="primary" d="M 65 130 L 50 130 L 50 160 L 81 194" />
      <Trace weight="primary" d="M 305 130 L 320 130 L 320 160 L 301 194" />

      <Trace weight="primary" d="M 65 614 L 80 614 L 80 580 L 81 526" />
      <Trace weight="primary" d="M 65 645 L 60 645 L 60 580 L 61 580 L 101 540 L 101 526" />
      <Trace weight="primary" d="M 315 614 L 300 614 L 300 580 L 261 526" />
      <Trace weight="primary" d="M 315 645 L 320 645 L 320 580 L 281 526" />

      <Trace weight="primary" d="M 165 574 L 165 540 L 141 526" />
      <Trace weight="primary" d="M 185 574 L 185 540 L 161 526" />
      <Trace weight="primary" d="M 205 574 L 205 540 L 201 526" />
      <Trace weight="primary" d="M 225 574 L 225 540 L 221 526" />

      <Trace weight="primary" d="M 30 320 L 44 320" />
      <Trace weight="primary" d="M 30 360 L 44 360" />
      <Trace weight="primary" d="M 350 320 L 336 320" />
      <Trace weight="primary" d="M 350 360 L 336 360" />

      <Trace weight="secondary" d="M 20 30 L 80 30 L 100 50 L 160 50" />
      <Trace weight="secondary" d="M 220 30 L 280 30 L 300 50 L 360 50" />
      <Trace weight="secondary" d="M 20 660 L 80 660 L 100 680 L 160 680" />
      <Trace weight="secondary" d="M 220 660 L 280 660 L 300 680 L 360 680" />

      <Via cx={141} cy={194} />
      <Via cx={161} cy={194} />
      <Via cx={181} cy={194} />
      <Via cx={201} cy={194} />
      <Via cx={121} cy={194} />
      <Via cx={261} cy={194} />
      <Via cx={81} cy={194} />
      <Via cx={301} cy={194} />
      <Via cx={50} cy={130} />
      <Via cx={320} cy={130} />
      <Via cx={141} cy={526} />
      <Via cx={161} cy={526} />
      <Via cx={201} cy={526} />
      <Via cx={221} cy={526} />
      <Via cx={81} cy={526} />
      <Via cx={101} cy={526} />
      <Via cx={261} cy={526} />
      <Via cx={281} cy={526} />
      <Via cx={44} cy={320} />
      <Via cx={44} cy={360} />
      <Via cx={336} cy={320} />
      <Via cx={336} cy={360} />
      <Via cx={100} cy={50} />
      <Via cx={300} cy={50} />
      <Via cx={100} cy={680} />
      <Via cx={300} cy={680} />

      <ChipSOIC x={140} y={70} width={100} height={36} label="U22" pinSpacing={10} />
      <ChipSOIC x={50} y={120} width={60} height={30} label="U23" pinSpacing={9} />
      <ChipSOIC x={270} y={120} width={60} height={30} label="U24" pinSpacing={9} />

      <PhotoSlot
        x={50}
        y={200}
        width={280}
        height={320}
        filename={photos[0]}
        pinSpacing={20}
      />

      <ChipQFP x={140} y={580} width={100} height={70} label="U17" pinSpacing={10} />
      <ChipSOIC x={40} y={600} width={50} height={30} label="U25" pinSpacing={9} />
      <ChipSOIC x={290} y={600} width={50} height={30} label="U26" pinSpacing={9} />
      <ChipSOIC x={40} y={640} width={50} height={26} label="U27" pinSpacing={9} />
      <ChipSOIC x={290} y={640} width={50} height={26} label="U28" pinSpacing={9} />

      <Capacitor cx={20} cy={300} r={8} />
      <Capacitor cx={360} cy={300} r={8} />
      <Capacitor cx={20} cy={400} r={6} showPolarity={false} />
      <Capacitor cx={360} cy={400} r={6} showPolarity={false} />

      <Resistor x={10} y={250} label="R52" />
      <Resistor x={10} y={460} />
      <Resistor x={342} y={250} label="R53" />
      <Resistor x={342} y={460} />

      <text
        x={20}
        y={28}
        fontFamily="ui-monospace, monospace"
        fontSize={9}
        fill={palette.label}
        letterSpacing={2}
        opacity={0.85}
      >
        SECTION_M // 01 SLOT
      </text>
    </svg>
  );
}