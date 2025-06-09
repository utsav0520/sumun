import React from 'react';
import { AppBar as MuiAppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

function AppBar() {
  return (
    <MuiAppBar position="static" sx={{ backgroundColor: '#2f3036' }}>
      <Toolbar>
        {/* Logo */}
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, textDecoration: 'none', color: 'white' }}
        >
          <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
            SUMUN
          </Link>
        </Typography>

        {/* Nav Links */}
        <Box>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/about">About</Button>
          <Button color="inherit" component={Link} to="/committes-agenda">Committees</Button>
          <Button color="inherit" component={Link} to="/register">Register</Button>
          <Button color="inherit" component={Link} to="/resources">Resources</Button>
        </Box>
      </Toolbar>
    </MuiAppBar>
  );
}

export default AppBar;
