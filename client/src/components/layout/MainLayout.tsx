import { Box } from "@mui/material";
import Header from "./header-footer/Header";
import Footer from "./header-footer/Footer";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        bgcolor: "background.default",
      }}
    >
      <Header />

      <Box
        component="main"
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Outlet />
      </Box>

      <Footer />
    </Box>
  );
}