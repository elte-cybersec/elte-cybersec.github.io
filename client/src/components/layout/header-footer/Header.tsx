import {
  AppBar,
  Toolbar,
  Container,
  Box,
  IconButton,
  Tooltip,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useThemeMode } from "../../../MyThemeProvider";
import HeaderNavTabs from "./HeaderNavTabs";
import UnderConstructionBadge from "./UnderConstructionBadge";
import ElteInformaticsLogo from "./ElteInformaticsLogo";
import AnimatedTitle from "./AnimatedTitle";

interface HeaderProps {
  sticky?: boolean;
}

export default function Header({ sticky = true }: HeaderProps) {
  const { mode, toggle } = useThemeMode();
  const theme = useTheme();
  const isLight = mode === "light";
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));
  const isMd = useMediaQuery(theme.breakpoints.down("md"));

  const logoHeight = isXs ? 30 : isMd ? 36 : 44;

  const baseNavyColor = isLight ? "brandNavy.light" : "#ffffff"  ;
  const hoverNavyColor = isLight ? "#ffffff" : "brandNavy.dark" ;

  return (
    <>
      <AppBar
        position={sticky ? "sticky" : "static"}
        elevation={0}
        sx={{
          bgcolor: isLight ? "primary.light" : "primary.dark",
          color: "common.white",
          backgroundImage: "none",
          borderBottom: 0,
          overflow: "hidden",
        }}
      >
        <UnderConstructionBadge />

        <Container maxWidth="xl" disableGutters>
          <Toolbar
            sx={{
              minHeight: { xs: 64, md: 80 },
              display: "grid",
              gridTemplateColumns: { xs: "auto 1fr auto", md: "1fr auto 1fr" },
              alignItems: "center",
              px: { xs: 2, md: 3 },
              gap: { xs: 1, md: 2 },
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifySelf: "start",
                minWidth: 0,
              }}
            >
              <ElteInformaticsLogo
                height={logoHeight}
                color={baseNavyColor}
                hoverColor={hoverNavyColor}
              />
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                justifySelf: "center",
                minWidth: 0,
                overflow: "hidden",
              }}
            >
              <AnimatedTitle title="Cybersecurity-Lab" />
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                justifySelf: "end",
              }}
            >
              <Tooltip title={isLight ? "Switch to dark" : "Switch to light"}>
                <IconButton
                  onClick={toggle}
                  aria-label="toggle theme"
                  sx={{
                    color: baseNavyColor,
                    "&:hover": {
                      color: hoverNavyColor,
                    },
                  }}
                >
                  {isLight ? <DarkModeIcon /> : <LightModeIcon />}
                </IconButton>
              </Tooltip>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Box sx={{ pt: { xs: 1.5, md: 2 }, pb: { xs: 1, md: 1.5 } }}>
        <HeaderNavTabs />
      </Box>
    </>
  );
}