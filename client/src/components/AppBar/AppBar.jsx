import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
// import sumunVerticalLogo from "../../../src/Storage/sumun-vertical.svg";
import { useStyles } from "../../styles";

function AppBar() {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();

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
    <Box>
      <MuiAppBar
        position="fixed"
        elevation={1}
        style={{
          backgroundColor: "transparent",
          boxShadow: "none",
          color: "#000000",
        }}
        className=" flex mt-4 justify-between items-center "
      >
        <Toolbar className="mx-auto w-[80%] max-w-[1200px] flex justify-between items-center rounded-[20px] shadow-lg color-headbackground">
          {/* Logo */}
          <div className="flex flex-col items-center gap-4">
            <img
              src={sumunHorizontalLogo}
              alt="SUMUN Horizontal Logo"
              className="w-30 sm:w-40 ml-2 pl-2"
              onClick={() => navigate("/")}
            />
            {/* <img
              src={sumunVerticalLogo}
              alt="SUMUN Vertical Logo"
              className="w-15 h-14 pl-2 ml-2 sm:w-30 block sm:hidden"
            /> */}
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

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            backgroundColor: "rgba(255, 255, 255, 0.4)",
            backdropFilter: "blur(30px)",
            boxShadow: "none",
          },
        }}
      >
        <Box
          sx={{ width: "100%", height: 200 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {navLinks.map(
              ({ text, path, isShown }) =>
                isShown && (
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
                    className="list-hoverClass font-[Poppins] text-[15px] transition-all duration-200"
                  >
                    <ListItemText primary={text} />
                  </ListItem>
                )
            )}
            <ListItem>
              <div className="w-[130px]">
                <Button
                  key="Register"
                  className={classes.ButtonUI}
                  component={Link}
                  to="/register"
                >
                  Register
                </Button>
              </div>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}

export default AppBar;
