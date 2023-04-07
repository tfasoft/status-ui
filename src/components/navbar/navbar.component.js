import { useState } from "react";
import Link from "next/link";

import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";

import { GitHub, Menu as MenuIcon } from "@mui/icons-material";

const Navbar = () => {
  const apps = [
    {
      id: 1,
      label: "TFAsoft",
      url: "https://tfasoft.org",
    },
  ];

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: "none",
          backdropFilter: "blur(5px)",
          WebkitBackdropFilter: "blur(5px)",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Link href="/" style={{ textDecoration: "none" }}>
              <Typography
                variant="h4"
                color="primary"
                fontWeight="bold"
                sx={{
                  display: { xs: "none", md: "flex" },
                }}
              >
                TFASoft
              </Typography>
            </Link>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="primary"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {apps.map((app) => (
                  <MenuItem key={app.id} onClick={() => window.open(app.url)}>
                    <Typography textAlign="center">{app.label}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Link href="/" style={{ textDecoration: "none" }}>
              <Typography
                variant="h6"
                color="primary"
                sx={{
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  fontWeight: 700,
                }}
              >
                TFASoft
              </Typography>
            </Link>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {apps.map((app) => (
                <Button
                  key={app.id}
                  variant="text"
                  onClick={() => window.open(app.url)}
                  sx={{ mt: 1, ml: 3, display: "block" }}
                >
                  {app.label}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <IconButton
                onClick={() =>
                  window.open("https://github.com/tfasoft/status-ui")
                }
              >
                <GitHub color="primary" />
              </IconButton>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {apps.map((app) => (
                  <MenuItem key={app.id} onClick={() => window.open(app.url)}>
                    <Typography textAlign="center">{app.label}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Navbar;
