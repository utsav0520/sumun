import React, { useState } from "react";
import {
  AppBar as MuiAppBar,
  Toolbar,
  Button,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import sumunHorizontalLogo from "../../../src/Storage/sumun-horizontal.svg";
import sumunVerticalLogo from "../../../src/Storage/sumun-vertical.svg";
import { useStyles } from "../../styles";

function AppBar() {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const navLinks = [
    { text: "Home", path: "/", isShown: true },
    { text: "About", path: "/about", isShown: true },
    { text: "Committees", path: "/committes-agenda", isShown: true },
    { text: "Resources", path: "/resources", isShown: true },
    { text: "Register", path: "/register", isShown: false },
  ];

  return (
    <>
      <MuiAppBar
        position="fixed"
        style={{
          boxShadow: "none",
          color: "#000000",
        }}
        className=" flex mt-4 justify-between items-center "
        >
        <Toolbar className="flex justify-between gap-13 color-baground rounded-lg shadow-lg w-[90%] ">
          {/* Logo */}
          <div className="flex flex-col items-center gap-4">
            <img
              src={sumunHorizontalLogo}
              alt="SUMUN Horizontal Logo"
              className="w-30 sm:w-40 hidden sm:block"
            />
            <img
              src={sumunVerticalLogo}
              alt="SUMUN Vertical Logo"
              className="w-20 sm:w-30 block sm:hidden"
            />
          </div>

          {/* Hamburger Menu (only on small screens) */}
          <Box className="sm:hidden">
            <IconButton edge="end" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
          </Box>

          {/* Nav Links (only on medium and larger screens) */}
          <Box className="hidden sm:flex gap-4 ml-auto items-center font-color-primary">
            {navLinks.map(
              ({ text, path, isShown }) =>
                isShown && (
                  <div>
                    <Button
                      key={text}
                      className={classes.NavBarButtonUI}
                      component={Link}
                      to={path}
                      style={{
                        color: "#0a0909ff",
                        fontFamily: "canva-sans",
                        fontSize: "15px",
                      }}
                    >
                      {text}
                    </Button>
                  </div>
                )
            )}
          </Box>

          <Box className="hidden sm:flex gap-4 ml-auto items-center ">
            <div>
              <Button
                key="Register"
                className={classes.ButtonUI}
                component={Link}
                to="/register"
              >
                Register
              </Button>
            </div>
          </Box>
        </Toolbar>
      </MuiAppBar>

      {/* Drawer for small screen menu */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 150, height: 200 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {navLinks.map(({ text, path }) => (
              <ListItem 
                button
                key={text}
                component={Link}
                to={path}
                style={{
                  color: "#0a0909ff",
                  fontFamily: "Poppins",
                  fontSize: "15px",
                }}
                className="hover:bg-black hover:border-l-4 hover:border-black-500 text-[#0a0909] font-[Poppins] text-[15px] transition-all duration-200"
              >
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}

export default AppBar;
