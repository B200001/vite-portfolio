import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const navItems = [
  { label: 'ABOUT', href: '#about' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'RESUME', href: 'https://drive.google.com/file/d/190_nggczUxofa_Y9JcIhlIRkHQ0BErg0/view?usp=sharing', newTab: true },
  { label: 'CONTACT', href: '#contact' },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      <AppBar
        position="sticky"
        color="default"
        sx={{
          backgroundColor: theme.palette.background.paper,
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h6" sx={{ fontWeight: '400', textDecoration: "underline", fontFamily: "Montserrat serif", fontSize: "20px", height: "28px" }}>
            BHUWAN JAIN
          </Typography>

          {isMobile ? (
            <IconButton edge="end" onClick={toggleMenu} aria-label="menu" sx={{ pr: '2em', pt: '14px' }}>
              <MenuIcon />
            </IconButton>
          ) : (
            <Box display="flex" gap={3} sx={{paddingRight : "80px"}}>
              {navItems.map((item) => (
                <Typography
                  key={item.label}
                  component="a"
                  href={item.href}
                  target={item.newTab ? '_blank': undefined}
                  rel={item.newTab ? 'noopener noreferrer' : undefined}
                  sx={{
                    textDecoration: 'none',
                    color: 'text.primary',
                    fontWeight: 500,
                    fontSize: "12px",
                    height: "20px",
                    '&:hover': {
                      color: 'primary.main',
                    },
                  }}
                >
                  {item.label}
                </Typography>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={isMenuOpen} onClose={toggleMenu}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleMenu}
          onKeyDown={toggleMenu}
        >
          <List>
            {navItems.map((item) => (
              <ListItem key={item.label} disablePadding>
                <ListItemButton component="a" href={item.href}>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
