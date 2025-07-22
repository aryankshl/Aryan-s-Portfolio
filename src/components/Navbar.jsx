import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Paper,
} from "@mui/material";

const Navbar = () => {
  return (
    <Paper
      elevation={3}
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 999,
        borderRadius: 3,
        m: 1,
        px: 2,
        backdropFilter: "blur(8px)",
        backgroundColor: "rgba(255,255,255,0.7)",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", fontFamily: "inherit" }}
        >
          Aryan's Portfolio
        </Typography>
        <Box>
          <Button color="primary" href="#home" sx={{ mx: 1 }}>
            Home
          </Button>
          <Button color="primary" href="#projects" sx={{ mx: 1 }}>
            Projects
          </Button>
          <Button color="primary" href="#about" sx={{ mx: 1 }}>
            About
          </Button>
          <Button color="primary" href="#contact" sx={{ mx: 1 }}>
            Contact
          </Button>
        </Box>
      </Toolbar>
    </Paper>
  );
};

export default Navbar;
