import { Box, Button, alpha } from "@mui/material";
import { NavLink as RouterNavLink } from "react-router-dom";
import { navigationItems } from "../../../data/navigationItems";

export default function HeaderNavTabs() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        px: 2,
        backgroundColor: "transparent",
      }}
    >
      <Box
        sx={(theme) => ({
          display: "inline-flex",
          flexWrap: { xs: "wrap", md: "nowrap" },
          justifyContent: "center",
          alignItems: "center",
          gap: 0.75,
          p: 0.75,
          border: 1,
          borderColor: "divider",
          borderRadius: 999,
          bgcolor: "background.paper",
          boxShadow:
            theme.palette.mode === "dark"
              ? "0 6px 24px rgba(0,0,0,0.45)"
              : "0 6px 22px rgba(0,0,0,0.12)",
          width: "fit-content",
          maxWidth: "calc(100% - 16px)",
        })}
      >
        {navigationItems.map((item) => (
          <Button
            key={item.path}
            component={RouterNavLink}
            to={item.path}
            sx={(theme) => {
              const isDark = theme.palette.mode === "dark";
              const normalText = theme.palette.secondary.main;
              const selectedText = isDark
                ? theme.palette.primary.light
                : theme.palette.primary.dark;

              const hoverBg = alpha(
                isDark
                  ? theme.palette.primary.light
                  : theme.palette.primary.dark,
                isDark ? 0.12 : 0.08
              );

              const selectedBg = alpha(
                isDark
                  ? theme.palette.primary.light
                  : theme.palette.primary.dark,
                isDark ? 0.18 : 0.14
              );

              return {
                textTransform: "none",
                fontWeight: 700,
                fontSize: { xs: "0.92rem", md: "1.08rem" },
                px: { xs: 1.1, md: 1.9 },
                py: { xs: 0.8, md: 0.95 },
                borderRadius: 999,
                minWidth: 0,
                flex: "0 0 auto",
                letterSpacing: 0.2,
                color: normalText,
                transition:
                  "background-color 0.2s ease, color 0.2s ease, box-shadow 0.2s ease",

                "&:hover": {
                  backgroundColor: hoverBg,
                  color: normalText,
                },

                "&.active": {
                  backgroundColor: selectedBg,
                  color: selectedText,
                },

                "&.active:hover": {
                  backgroundColor: selectedBg,
                  color: selectedText,
                },
              };
            }}
          >
            {item.label}
          </Button>
        ))}
      </Box>
    </Box>
  );
}