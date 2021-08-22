import React from 'react';
import Box from '@material-ui/core/Box';
import { NavMenu, NavItem } from '@mui-treasury/components/menu/navigation';
import { useZoomNavigationMenuStyles } from '@mui-treasury/styles/navigationMenu/zoom';
import { makeStyles } from '@material-ui/core';


  function Nav() {
    const useStyles = makeStyles(() => ({
        navBar: {
            background: 'black',
        }
    }));

    const classes = useStyles();

    return (
      <Box height={64} display={'flex'} className={classes.navBar}>
          <NavMenu useStyles={useZoomNavigationMenuStyles}>
            <NavItem>
              <h2>Dakota Ewing</h2>
            </NavItem>
            <NavItem>
              About Me
            </NavItem>
            <NavItem>
              Portfolio
            </NavItem>
            <NavItem>
              Contact
            </NavItem>
            <NavItem>
              Resume
            </NavItem>
          </NavMenu>
      </Box>
    );
  }


export default Nav