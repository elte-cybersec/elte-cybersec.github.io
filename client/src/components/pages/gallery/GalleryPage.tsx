import { useEffect, useMemo, useRef, useState } from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { galleryBasePath, galleryPhotos } from "../../../data/galleryData";
import {
  buildGalleryPages,
  type GalleryPage as Page,
} from "../../../utils/buildGalleryPages";
import BoardSectionA from "./desktop/BoardSectionA";
import BoardSectionB from "./desktop/BoardSectionB";
import BoardSectionC from "./desktop/BoardSectionC";
import BoardSectionMobile from "./mobile/BoardSectionMobile";
import ImageLightbox from "./ImageLightbox";
import NavButton from "./NavButton";

import { usePCBPalette } from "./parts/Usepcbpalette";

const TRANSITION_MS = 500;

function renderBoard(page: Page, onPhotoClick: (filename: string) => void) {
  switch (page.sectionId) {
    case "A":
      return <BoardSectionA photos={page.photos} onPhotoClick={onPhotoClick} />;
    case "B":
      return <BoardSectionB photos={page.photos} onPhotoClick={onPhotoClick} />;
    case "C":
      return <BoardSectionC photos={page.photos} onPhotoClick={onPhotoClick} />;
    case "MOBILE":
      return (
        <BoardSectionMobile
          photos={page.photos}
          onPhotoClick={onPhotoClick}
        />
      );
  }
}

export default function GalleryPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isDark = theme.palette.mode === "dark";
  const palette = usePCBPalette();

  const pages = useMemo(
    () => buildGalleryPages(galleryPhotos, isMobile),
    [isMobile],
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [incomingIndex, setIncomingIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedImageTitle, setSelectedImageTitle] = useState<string>("");

  const transitionTimeoutRef = useRef<number | null>(null);
  const incomingRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    return () => {
      if (transitionTimeoutRef.current !== null) {
        window.clearTimeout(transitionTimeoutRef.current);
      }
    };
  }, []);

  const isTransitioning = incomingIndex !== null;

  useEffect(() => {
    if (incomingIndex === null) return;

    const el = incomingRef.current;
    if (!el) return;

    const startTransform =
      direction === "right" ? "translateX(100%)" : "translateX(-100%)";

    el.style.transition = "none";
    el.style.transform = startTransform;

    const rafId = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (!incomingRef.current) return;

        incomingRef.current.style.transition = `transform ${TRANSITION_MS}ms cubic-bezier(0.4, 0, 0.2, 1)`;
        incomingRef.current.style.transform = "translateX(0)";
      });
    });

    return () => cancelAnimationFrame(rafId);
  }, [incomingIndex, direction]);

  const goTo = (nextIndex: number, dir: "left" | "right") => {
    if (isTransitioning) return;
    if (nextIndex < 0 || nextIndex >= pages.length) return;

    setDirection(dir);
    setIncomingIndex(nextIndex);

    transitionTimeoutRef.current = window.setTimeout(() => {
      setCurrentIndex(nextIndex);
      setIncomingIndex(null);
      transitionTimeoutRef.current = null;
    }, TRANSITION_MS);
  };

  const handleNext = () => goTo(currentIndex + 1, "right");
  const handlePrev = () => goTo(currentIndex - 1, "left");

  const handlePhotoClick = (filename: string) => {
    setSelectedImage(`${galleryBasePath}${filename}`);
    setSelectedImageTitle(filename);
  };

  const handleLightboxClose = () => {
    setSelectedImage(null);
    setSelectedImageTitle("");
  };

  if (pages.length === 0) {
    return (
      <Box
        sx={{
          minHeight: "60vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography color="text.secondary">No photos to display.</Typography>
      </Box>
    );
  }

  const currentPage = pages[currentIndex];
  const incomingPage = incomingIndex !== null ? pages[incomingIndex] : null;

  const currentTransform = isTransitioning
    ? direction === "right"
      ? "translateX(-100%)"
      : "translateX(100%)"
    : "translateX(0)";

  const boardShadow = isDark
    ? "0 18px 40px rgba(0, 0, 0, 0.55), 0 4px 12px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.04)"
    : "0 18px 40px rgba(20, 35, 70, 0.35), 0 4px 12px rgba(20, 35, 70, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.12)";

  return (
    <Box sx={{ position: "relative", width: "100%", py: { xs: 4, md: 6 } }}>
      <Box sx={{ textAlign: "center", mb: { xs: 3, md: 4 }, px: 2 }}>
        <Typography
          variant="body2"
          sx={{
            color: "text.secondary",
            mt: 1,
            fontFamily: "ui-monospace, monospace",
            letterSpacing: 1.5,
          }}
        >
          {String(currentIndex + 1).padStart(2, "0")} /{" "}
          {String(pages.length).padStart(2, "0")}
        </Typography>
      </Box>

      <Box
        sx={{
          position: "relative",
          maxWidth: 1200,
          mx: "auto",
          px: { xs: 1, md: 2 },
        }}
      >
        <Box
          sx={{
            position: "relative",
            overflow: "hidden",
            borderRadius: { xs: 2, md: 3 },
            boxShadow: boardShadow,
            backgroundColor: palette.substrateEdge,
          }}
        >
          <Box
            sx={{
              transform: currentTransform,
              transition: isTransitioning
                ? `transform ${TRANSITION_MS}ms cubic-bezier(0.4, 0, 0.2, 1)`
                : "none",
            }}
          >
            {renderBoard(currentPage, handlePhotoClick)}
          </Box>

          {incomingPage && (
            <Box
              ref={incomingRef}
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
            >
              {renderBoard(incomingPage, handlePhotoClick)}
            </Box>
          )}
        </Box>

        <NavButton
          direction="left"
          onClick={handlePrev}
          disabled={currentIndex === 0 || isTransitioning}
        />

        <NavButton
          direction="right"
          onClick={handleNext}
          disabled={currentIndex === pages.length - 1 || isTransitioning}
        />
      </Box>

      <ImageLightbox
        open={Boolean(selectedImage)}
        src={selectedImage}
        title={selectedImageTitle}
        onClose={handleLightboxClose}
      />
    </Box>
  );
}