import React from "react";
import {
  AppBar as MuiAppBar,
  Toolbar,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";
import {sumunHorizontalLogo,sumunVerticalLogo} from '../../../src/Storage';

function AppBar() {
  return (
    <MuiAppBar position="static" sx={{ backgroundColor: "#ffffff" }}>
      <Toolbar>
        <div class="flex flex-col items-center gap-4">
          <img
            src={sumunHorizontalLogo}
            alt="SUMUN Horizontal Logo"
            className="w-30 sm:w-40 hidden sm:block"
          />
          <img
            src={sumunVerticalLogo}
            alt="SUMUN Vertical Logo"
            className="w-30 sm:w-40 block sm:hidden"
          />
        </div>

        {/* Nav Links */}
        <Box>
          <Button color="inherit" className="nav-link" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/about">
            About
          </Button>
          <Button color="inherit" component={Link} to="/committes-agenda">
            Committees
          </Button>
          <Button color="inherit" component={Link} to="/resources">
            Resources
          </Button>
          <Button color="inherit" component={Link} to="/register">
            Register
          </Button>
        </Box>
      </Toolbar>
    </MuiAppBar>
  );
}

export default AppBar;
