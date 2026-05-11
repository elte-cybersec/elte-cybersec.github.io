import CloseIcon from "@mui/icons-material/Close";
import {
  Backdrop,
  Box,
  Fade,
  IconButton,
  Modal,
  Typography,
  alpha,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

interface ImageLightboxProps {
  open: boolean;
  src: string | null;
  title?: string;
  onClose: () => void;
}

export default function ImageLightbox({
  open,
  src,
  title,
  onClose,
}: ImageLightboxProps) {
  const theme = useTheme();

  return (
    <Modal
      open={open}
      onClose={onClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 250,
          sx: {
            backgroundColor: "rgba(0, 0, 0, 0.78)",
          },
        },
      }}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 2,
      }}
    >
      <Fade in={open} timeout={250}>
        <Box
          sx={{
            position: "relative",
            width: "100%",
            maxWidth: 1100,
            maxHeight: "90vh",
            backgroundColor: "background.paper",
            borderRadius: 3,
            border: `1px solid ${theme.palette.divider}`,
            boxShadow: `0 24px 70px ${alpha("#000", 0.55)}`,
            overflow: "hidden",
            outline: "none",
          }}
        >
          <IconButton
            aria-label="Close image preview"
            onClick={onClose}
            sx={{
              position: "absolute",
              top: 10,
              right: 10,
              zIndex: 2,
              color: "text.primary",
              backgroundColor: alpha(theme.palette.background.paper, 0.85),
              border: `1px solid ${theme.palette.divider}`,
              "&:hover": {
                backgroundColor: "background.paper",
              },
            }}
          >
            <CloseIcon fontSize="small" />
          </IconButton>

          <Box
            sx={{
              p: { xs: 1.5, sm: 2 },
              minHeight: { xs: 280, sm: 420 },
              maxHeight: "82vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor:
                theme.palette.mode === "dark"
                  ? "rgba(255, 255, 255, 0.03)"
                  : "rgba(0, 0, 0, 0.03)",
            }}
          >
            {src && (
              <Box
                component="img"
                src={src}
                alt={title ?? "Gallery image"}
                sx={{
                  display: "block",
                  maxWidth: "100%",
                  maxHeight: "78vh",
                  objectFit: "contain",
                }}
              />
            )}
          </Box>

          {title && (
            <Box
              sx={{
                px: 2.5,
                py: 1.5,
                borderTop: `1px solid ${theme.palette.divider}`,
              }}
            >
              <Typography
                sx={{
                  fontSize: 12,
                  color: "text.secondary",
                  fontFamily: "ui-monospace, monospace",
                  wordBreak: "break-word",
                }}
              >
                {title}
              </Typography>
            </Box>
          )}
        </Box>
      </Fade>
    </Modal>
  );
}