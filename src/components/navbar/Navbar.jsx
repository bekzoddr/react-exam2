import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import { NavLink } from "react-router-dom";
import Subnav from "../subNav/Subnav";
import navLogo from "../../assets/images/nav__logo.svg";

const pages = ["Products", "Pricing", "Blog"];

function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Subnav />
      <AppBar
        color="background"
        className={`navbar ${isSticky ? "sticky" : ""}`}
        position="sticky"
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component={NavLink}
              to="#"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <NavLink to={"/"}>
                <img src={navLogo} alt="" />
              </NavLink>
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
                onClick={handleMenuClick}
              >
                <MenuIcon />
              </IconButton>
            </Box>

            <div className="nav">
              <Typography
                className="response__logo"
                variant="h5"
                noWrap
                component={NavLink}
                to="#"
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                <NavLink to={"/"}>
                  <img src={navLogo} alt="" />
                </NavLink>{" "}
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                <div className={`nav__links ${isMenuOpen ? "open" : ""}`}>
                  <NavLink to={"/"} onClick={handleMenuClick}>
                    <span>Home</span>
                  </NavLink>
                  <NavLink to={"/somewhere"} onClick={handleMenuClick}>
                    <span>Bags</span>
                  </NavLink>
                  <NavLink to={"/somewhere"} onClick={handleMenuClick}>
                    <span>Sneakers</span>
                  </NavLink>
                  <NavLink to={"/somewhere"} onClick={handleMenuClick}>
                    <span>Belt</span>
                  </NavLink>
                  <NavLink to={"/contact"} onClick={handleMenuClick}>
                    <span>Contact</span>
                  </NavLink>
                </div>
              </Box>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

export default Navbar;
