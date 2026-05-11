import PCBBackground from "../PCBBackground";
import PhotoSlot from "../PhotoSlot";
import ChipQFP from "../parts/ChipQFP";
import ChipSOIC from "../parts/ChipSOIC";
import Capacitor from "../parts/Capacitor";
import Resistor from "../parts/Resistor";
import Trace from "../parts/Trace";
import Via from "../parts/Via";
import { usePCBPalette } from "../parts/Usepcbpalette";

export const SECTION_C_SLOTS = 3;

interface BoardSectionCProps {
  photos: string[];
  onPhotoClick: (filename: string) => void;
}

export default function BoardSectionC({
  photos,
  onPhotoClick,
}: BoardSectionCProps) {
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
        patternId="solderMaskC"
        fadeId="boardFadeC"
      />

      <Trace weight="primary" d="M 386 130 L 420 130 L 450 168 L 484 168" />
      <Trace weight="primary" d="M 386 170 L 420 170 L 450 184 L 484 184" />
      <Trace weight="primary" d="M 386 210 L 420 210 L 450 200 L 484 200" />

      <Trace weight="primary" d="M 540 180 L 580 180 L 600 200 L 600 320 L 620 340 L 664 340" />
      <Trace weight="primary" d="M 540 210 L 580 210 L 610 240 L 610 350 L 630 370 L 664 370" />

      <Trace weight="primary" d="M 740 250 L 770 250 L 790 230 L 790 214" />
      <Trace weight="primary" d="M 740 270 L 770 270 L 810 230 L 810 214" />
      <Trace weight="primary" d="M 740 290 L 770 290 L 830 230 L 830 214" />

      <Trace weight="primary" d="M 740 360 L 800 360 L 820 340 L 820 214" />

      <Trace weight="primary" d="M 386 470 L 420 470 L 450 504 L 484 504" />
      <Trace weight="primary" d="M 386 510 L 420 510 L 450 520 L 484 520" />
      <Trace weight="primary" d="M 386 550 L 420 550 L 450 536 L 484 536" />

      <Trace weight="primary" d="M 540 504 L 580 504 L 600 444 L 668 444 L 668 404" />
      <Trace weight="primary" d="M 540 520 L 590 520 L 610 460 L 684 460 L 684 404" />
      <Trace weight="primary" d="M 540 536 L 600 536 L 620 476 L 700 476 L 700 404" />

      <Trace weight="primary" d="M 770 486 L 770 500 L 830 510" />
      <Trace weight="primary" d="M 790 486 L 790 500 L 850 510" />
      <Trace weight="primary" d="M 810 486 L 810 500 L 870 510" />

      <Trace weight="primary" d="M 280 130 L 260 130 L 240 150 L 130 150" />
      <Trace weight="primary" d="M 280 170 L 260 170 L 240 190 L 130 190" />
      <Trace weight="primary" d="M 280 210 L 260 210 L 240 230 L 130 230" />
      <Trace weight="primary" d="M 280 470 L 260 470 L 240 490 L 130 490" />
      <Trace weight="primary" d="M 280 510 L 260 510 L 240 530 L 130 530" />

      <Trace weight="secondary" d="M 60 60 L 130 60 L 150 80 L 230 80" />
      <Trace weight="secondary" d="M 60 280 L 130 280 L 150 300 L 220 300" />
      <Trace weight="secondary" d="M 870 60 L 940 60 L 960 80 L 1040 80" />
      <Trace weight="secondary" d="M 60 620 L 130 620 L 150 640 L 230 640" />
      <Trace weight="secondary" d="M 870 620 L 940 620 L 960 640 L 1040 640" />

      <Via cx={450} cy={168} />
      <Via cx={450} cy={184} />
      <Via cx={450} cy={200} />
      <Via cx={600} cy={200} />
      <Via cx={610} cy={240} />
      <Via cx={620} cy={340} />
      <Via cx={630} cy={370} />
      <Via cx={450} cy={504} />
      <Via cx={450} cy={520} />
      <Via cx={450} cy={536} />
      <Via cx={600} cy={444} />
      <Via cx={610} cy={460} />
      <Via cx={620} cy={476} />
      <Via cx={770} cy={500} />
      <Via cx={790} cy={500} />
      <Via cx={810} cy={500} />
      <Via cx={240} cy={150} />
      <Via cx={240} cy={190} />
      <Via cx={240} cy={230} />
      <Via cx={240} cy={490} />
      <Via cx={240} cy={530} />
      <Via cx={150} cy={80} />
      <Via cx={150} cy={300} />
      <Via cx={960} cy={80} />
      <Via cx={150} cy={640} />
      <Via cx={960} cy={640} />

      <PhotoSlot
        x={60}
        y={100}
        width={320}
        height={240}
        filename={photos[0]}
        onPhotoClick={onPhotoClick}
      />
      <PhotoSlot
        x={740}
        y={240}
        width={320}
        height={240}
        filename={photos[1]}
        onPhotoClick={onPhotoClick}
      />
      <PhotoSlot
        x={60}
        y={440}
        width={320}
        height={200}
        filename={photos[2]}
        onPhotoClick={onPhotoClick}
      />

      <ChipQFP x={484} y={160} width={56} height={80} label="U17" />
      <ChipQFP x={664} y={320} width={76} height={80} label="U21" />
      <ChipQFP x={484} y={480} width={56} height={80} label="U18" />

      <ChipSOIC x={780} y={184} width={60} height={30} label="U22" />
      <ChipSOIC x={820} y={510} width={70} height={26} label="U27" />

      <Capacitor cx={30} cy={380} r={9} />
      <Capacitor cx={30} cy={410} r={7} showPolarity={false} />
      <Capacitor cx={1070} cy={160} r={9} />
      <Capacitor cx={1070} cy={540} r={9} />

      <Resistor x={20} y={140} label="R52" />
      <Resistor x={20} y={160} />
      <Resistor x={1052} y={600} />
      <Resistor x={1052} y={620} />

      <text
        x={40}
        y={28}
        fontFamily="ui-monospace, monospace"
        fontSize={10}
        fill={palette.label}
        letterSpacing={2}
        opacity={0.85}
      >
        SECTION_C // 03 SLOTS
      </text>
    </svg>
  );
}