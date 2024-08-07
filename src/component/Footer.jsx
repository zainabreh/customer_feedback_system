import * as React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import MailIcon from '@mui/icons-material/Mail';

function Footer() {
  return (
    <BottomNavigation>
      <BottomNavigationAction label="Home" icon={<HomeIcon />} />
      <BottomNavigationAction label="About" icon={<InfoIcon />} />
      <BottomNavigationAction label="Contact" icon={<MailIcon />} />
    </BottomNavigation>
  );
}

export default Footer;
