import { IconButton } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

interface NavButtonProps {
  direction: "left" | "right";
  onClick: () => void;
  disabled?: boolean;
}

export default function NavButton({ direction, onClick, disabled }: NavButtonProps) {
  const isLeft = direction === "left";

  return (
    <IconButton
      onClick={onClick}
      disabled={disabled}
      sx={{
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        [isLeft ? "left" : "right"]: 16,
        width: 48,
        height: 48,
        backgroundColor: "#0a1410",
        border: "1.5px solid #1d9e75",
        color: "#5dcaa5",
        zIndex: 10,
        transition: "all 0.2s ease",
        "&:hover": {
          backgroundColor: "#0f1f1a",
          borderColor: "#5dcaa5",
          color: "#ffffff",
        },
        "&.Mui-disabled": {
          opacity: 0.3,
          color: "#5dcaa5",
          borderColor: "#1d9e75",
        },
      }}
    >
      {isLeft ? <ChevronLeft /> : <ChevronRight />}
    </IconButton>
  );
}
