import { Box, IconButton, Tooltip, Typography, Divider } from "@mui/material";
import { NavLink as RouterNavLink } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { siteConfig } from "../../../data/siteConfig";
import { useThemeMode } from "../../../MyThemeProvider";
import ElteInformaticsLogo from "./ElteInformaticsLogo";

interface FooterIconProps {
  label: string;
  icon: React.ReactNode;
  href?: string;
  to?: string;
  external?: boolean;
}

function FooterIconLink({ label, icon, href, to, external }: FooterIconProps) {
  const buttonSx = {
    width: 40,
    height: 40,
    border: "1px solid rgba(255,255,255,0.22)",
    borderRadius: "10px",
    color: "rgba(255,255,255,0.85)",
    transition: "all 0.2s ease",
    "&:hover": {
      color: "#ffffff",
      borderColor: "rgba(255,255,255,0.6)",
      backgroundColor: "rgba(255,255,255,0.08)",
    },
  };

  const inner = (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 0.5,
      }}
    >
      <Tooltip title={label} placement="top">
        <IconButton sx={buttonSx} size="small" disableRipple aria-label={label}>
          <Box sx={{ fontSize: "1.15rem", display: "flex" }}>{icon}</Box>
        </IconButton>
      </Tooltip>
      <Typography
        sx={{
          fontSize: "0.65rem",
          color: "rgba(255,255,255,0.55)",
          letterSpacing: "0.04em",
          textTransform: "uppercase",
          lineHeight: 1,
        }}
      >
        {label}
      </Typography>
    </Box>
  );

  if (to) {
    return (
      <Box
        component={RouterNavLink}
        to={to}
        style={{ textDecoration: "none" }}
      >
        {inner}
      </Box>
    );
  }

  return (
    <Box
      component="a"
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      style={{ textDecoration: "none" }}
    >
      {inner}
    </Box>
  );
}

export default function Footer() {
  const { mode } = useThemeMode();
  const isLight = mode === "light";
  const year = new Date().getFullYear();

  return (
    <footer>
      <Box
        sx={{
          bgcolor: isLight ? "brandNavy.light" : "brandNavy.dark",
          color: "brandNavy.contrastText",
          mt: 6,
        }}
      >
        <Box
          sx={{
            maxWidth: 1400,
            mx: "auto",
            px: { xs: 2.5, md: 5 },
            pt: { xs: 3.5, md: 4.5 },
            pb: { xs: 2, md: 2.5 },
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: { xs: 3, md: 4 },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1.2,
              minWidth: 0,
            }}
          >
            <ElteInformaticsLogo height={40} color="#ffffff" />

            <Typography
              sx={{
                color: "rgba(255,255,255,0.92)",
                fontSize: "0.85rem",
                fontWeight: 600,
                lineHeight: 1.4,
                mt: 0.5,
              }}
            >
              Cybersecurity Lab · Department of Computer Algebra
            </Typography>

            <Typography
              sx={{
                color: "rgba(255,255,255,0.72)",
                fontSize: "0.78rem",
                lineHeight: 1.55,
              }}
            >
              H-1117 Budapest, Pázmány Péter sétány 1/C
              <br />
              Eötvös Loránd University · Faculty of Informatics
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              gap: 2,
              flexShrink: 0,
              mt: { xs: 0, md: 0.5 },
            }}
          >
            <FooterIconLink
              label="Contact"
              icon={<MdOutlineMailOutline />}
              to="/contact"
            />
            <FooterIconLink
              label="GitHub"
              icon={<FaGithub />}
              href="https://github.com/elte-cybersec"
              external
            />
          </Box>
        </Box>

        <Divider sx={{ borderColor: "rgba(255,255,255,0.12)" }} />

        <Box
          sx={{
            maxWidth: 1400,
            mx: "auto",
            px: { xs: 2.5, md: 5 },
            py: 1.6,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              color: "rgba(255,255,255,0.6)",
              fontSize: "0.72rem",
              letterSpacing: "0.02em",
              textAlign: "center",
            }}
          >
            © {year} Eötvös Loránd University ·{" "}
            {siteConfig.siteTitle.replaceAll("-", " ")}. All rights reserved.
          </Typography>
        </Box>
      </Box>
    </footer>
  );
}