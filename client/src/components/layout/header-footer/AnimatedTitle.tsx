import * as React from "react";
import { Box, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

interface AnimatedTitleProps {
  title: string;
}

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

function randomChar() {
  return CHARS[Math.floor(Math.random() * CHARS.length)];
}

function makeEncryptedChars(target: string) {
  return target.split("").map((char) => (char === " " ? " " : randomChar()));
}

export default function AnimatedTitle({ title }: AnimatedTitleProps) {
  const chars = React.useMemo(() => title.split(""), [title]);

  const highlightedIndexes = React.useMemo(() => {
    const result = new Set<number>();
    let highlightNext = true;

    chars.forEach((char, index) => {
      if (char === " " || char === "-") {
        highlightNext = true;
        return;
      }

      if (highlightNext) {
        result.add(index);
        highlightNext = false;
      }
    });

    return result;
  }, [chars]);

  const [displayChars, setDisplayChars] = React.useState<string[]>(() =>
    makeEncryptedChars(title)
  );

  React.useEffect(() => {
    let frame = 0;

    const intervalId = window.setInterval(() => {
      setDisplayChars(
        chars.map((char, index) => {
          if (char === " ") return " ";

          const revealPoint = index * 4;
          return frame >= revealPoint ? char : randomChar();
        })
      );

      frame += 1;

      if (frame > chars.length * 4) {
        clearInterval(intervalId);
        setDisplayChars(chars);
      }
    }, 75);

    return () => clearInterval(intervalId);
  }, [chars]);

  return (
    <Box
      component={RouterLink}
      to="/"
      sx={(theme) => {
        const isLight = theme.palette.mode === "light";
        const navyBorder = isLight
          ? theme.palette.brandNavy.light
          : theme.palette.brandNavy.dark;
        const navyHover = theme.palette.brandNavy.main;

        return {
          position: "relative",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          maxWidth: "100%",
          px: { xs: 1.5, sm: 2.5, md: 3.5 },
          py: { xs: 0.9, sm: 1.25, md: 1.25 },
          my: { xs: 1, sm: 2, md: 2.5 },
          textDecoration: "none",
          border: { xs: `3px solid ${navyBorder}`, md: `5px solid ${navyBorder}` },
          borderRadius: 999,
          color: theme.palette.text.primary,
          overflow: "hidden",
          minHeight: { xs: 42, sm: 66, md: 74 },
          backgroundColor: isLight
            ? "rgba(17, 45, 82, 0.06)"
            : "rgba(17, 45, 82, 0.10)",
          transition: "all 0.25s ease",
          "&:hover": {
            backgroundColor: isLight
              ? "rgba(17, 45, 82, 0.10)"
              : "rgba(17, 45, 82, 0.16)",
            borderColor: navyHover,
          },
        };
      }}
    >
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          alignItems: "stretch",
          justifyContent: "center",
          minWidth: 0,
        }}
      >
        {displayChars.map((char, index) => {
          const isSpace = chars[index] === " ";
          const highlightCell = highlightedIndexes.has(index) && !isSpace;

          return (
            <Box
              key={index}
              sx={(theme) => {
                const isLight = theme.palette.mode === "light";
                const navyHighlight = isLight
                  ? theme.palette.brandNavy.light
                  : theme.palette.brandNavy.dark;

                return {
                  minWidth: { xs: "0.75ch", sm: "1ch", md: "1.05ch" },
                  px: { xs: 0.04, sm: 0.12, md: 0.16 },
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderLeft:
                    index === 0
                      ? "none"
                      : `1px solid ${theme.palette.divider}`,
                  backgroundColor: highlightCell ? navyHighlight : "transparent",
                  transition: "background-color 0.25s ease",
                };
              }}
            >
              <Typography
                sx={(theme) => ({
                  fontFamily: '"Roboto Condensed", "Roboto", sans-serif',
                  fontWeight: 500,
                  fontSize: { xs: "0.65rem", sm: "1.9rem", md: "2.8rem" },
                  lineHeight: 1,
                  letterSpacing: 0,
                  color: isSpace
                    ? "transparent"
                    : highlightCell
                      ? theme.palette.brandNavy.contrastText
                      : theme.palette.text.primary,
                  textAlign: "center",
                  userSelect: "none",
                  transition: "color 0.25s ease",
                })}
              >
                {isSpace ? "M" : char}
              </Typography>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}