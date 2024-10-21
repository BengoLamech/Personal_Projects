import  { useState } from 'react';
import {
  AppBar,
  Box,
  CssBaseline,
  Drawer,
  IconButton,
  
  Toolbar,
  Typography,
  
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';


const defaultDrawerWidth = 240;
const collapsedDrawerWidth = 60;

function SampleSideBar() {
  // State to control whether the sidebar is expanded or collapsed
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Toggle sidebar open/close state
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      {/* Header / AppBar */}
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={toggleSidebar}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            <a href="#">The L&B Tech</a>
          </Typography>
          
         
          
        </Toolbar>
      </AppBar>

      {/* Sidebar / Drawer */}
      <Drawer
        variant="permanent"
        sx={{
          width: isSidebarOpen ? defaultDrawerWidth : collapsedDrawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: isSidebarOpen ? defaultDrawerWidth : collapsedDrawerWidth,
            boxSizing: 'border-box',
            transition: 'width 0.3s ease', // Animate sidebar expansion/shrink
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <Typography variant="h6" noWrap>
            {isSidebarOpen ? 'Expanded Sidebar' : 'Shrunk Sidebar'}
          </Typography>
          <Typography variant="body1" noWrap>
            {isSidebarOpen ? 'Sidebar Content' : 'Icons or Minimized Content'}
          </Typography>
        </Box>
      </Drawer>

      {/* Main Content Area */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          transition: 'margin-left 0.3s ease', // Animate content shift
          marginLeft: isSidebarOpen ? `${defaultDrawerWidth}px` : `${collapsedDrawerWidth}px`,
        }}
      >
        <Toolbar />
        <Typography variant="h4" gutterBottom>
          Main Content
        </Typography>
        <Typography paragraph>
          This is the main content area. The sidebar can shrink or expand by toggling the hamburger icon in the header.
        </Typography>
      </Box>
    </Box>
  );
}

export default SampleSideBar;
