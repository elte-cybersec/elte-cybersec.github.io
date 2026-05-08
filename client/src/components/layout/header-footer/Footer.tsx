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
    width: 44,
    height: 44,
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
        gap: 0.6,
      }}
    >
      <Tooltip title={label} placement="top">
        <IconButton sx={buttonSx} size="small" disableRipple aria-label={label}>
          <Box sx={{ fontSize: "1.25rem", display: "flex" }}>{icon}</Box>
        </IconButton>
      </Tooltip>

      <Typography
        sx={{
          fontSize: "0.68rem",
          color: "rgba(255,255,255,0.62)",
          letterSpacing: "0.05em",
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

          // Keep this 0 so the gray space before the footer stays removed.
          mt: 0,
        }}
      >
        <Box
          sx={{
            maxWidth: 1400,
            mx: "auto",
            px: { xs: 2.5, md: 5 },

            // This brings back nice spacing inside the footer.
            pt: { xs: 2.5, md: 3 },
            pb: { xs: 2.4, md: 3 },

            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "flex-start", md: "center" },
            justifyContent: "space-between",
            gap: { xs: 3, md: 5 },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: { xs: "flex-start", sm: "center" },
              gap: { xs: 1.6, sm: 3 },
              minWidth: 0,
            }}
          >
            <ElteInformaticsLogo height={48} color="#ffffff" />

            <Divider
              orientation="vertical"
              flexItem
              sx={{
                display: { xs: "none", sm: "block" },
                borderColor: "rgba(255,255,255,0.35)",
                height: 54,
                alignSelf: "center",
              }}
            />

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 0.8,
              }}
            >
              <Typography
                sx={{
                  color: "rgba(255,255,255,0.94)",
                  fontSize: { xs: "0.82rem", md: "0.9rem" },
                  fontWeight: 700,
                  lineHeight: 1.35,
                }}
              >
                Cybersecurity Lab · Department of Computer Algebra
              </Typography>

              <Typography
                sx={{
                  color: "rgba(255,255,255,0.75)",
                  fontSize: { xs: "0.76rem", md: "0.82rem" },
                  lineHeight: 1.65,
                  letterSpacing: "0.01em",
                }}
              >
                H-1117 Budapest, Pázmány Péter sétány 1/C
                <br />
                Eötvös Loránd University · Faculty of Informatics
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              gap: 2.2,
              flexShrink: 0,
              transform: { xs: "none", md: "translateY(-6px)" },
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