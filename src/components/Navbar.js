import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, useScrollTrigger, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'certificates', 'aiesec'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AppBar position="fixed" sx={{
      background: 'linear-gradient(90deg, rgba(75, 0, 130, 0.95) 0%, rgba(138, 43, 226, 0.95) 100%)',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
      transition: '0.3s ease-in-out'
    }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontFamily: "'Fira Code', monospace", color: '#00ff9f' }}>
          <CodeIcon sx={{ mr: 1 }} />
          Portfolio
        </Typography>
        <IconButton edge="end" color="inherit" onClick={() => setMobileMenuOpen(true)} sx={{ display: { xs: 'block', md: 'none' } }}>
          <MenuIcon />
        </IconButton>
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          {['Home', 'About', 'Projects', 'Certificates', 'AIESEC'].map((item) => (
            <Button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              sx={{ my: 2, color: 'white', display: 'block', '&:hover': { backgroundColor: 'rgba(0, 255, 159, 0.1)', transform: 'scale(1.05)', transition: '0.3s' } }}
            >
              {item}
            </Button>
          ))}
        </Box>
      </Toolbar>
      <Drawer anchor="right" open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)}>
        <List>
          {['Home', 'About', 'Projects', 'Certificates', 'AIESEC'].map((item) => (
            <ListItem button key={item} onClick={() => { scrollToSection(item.toLowerCase()); setMobileMenuOpen(false); }}>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
