import React from 'react';
import Box from '@material-ui/core/Box';
import { NavMenu, NavItem } from '@mui-treasury/components/menu/navigation';
import { useZoomNavigationMenuStyles } from '@mui-treasury/styles/navigationMenu/zoom';
import { makeStyles } from '@material-ui/core';


  function Nav(props) {
    const {
          setRenderAbout,
          setRenderPortfolio,
          setRenderContact,
          setRenderResume,
    } = props
    
    const useStyles = makeStyles(() => ({
        navBar: {
            background: 'black',
            color: 'white'
        },
        navButton: {
          color: 'white'
        }
    }));

    const classes = useStyles();

    return (
      <Box height={64} display={'flex'} className={classes.navBar}>
          <NavMenu useStyles={useZoomNavigationMenuStyles}>
            <NavItem className={classes.navButton} onClick={() => {
              window.location.reload(false);
            }}>
              <h2>Dakota Ewing</h2>
            </NavItem>
            <NavItem className={classes.navButton} onClick={() => {
              setRenderAbout(true);
              setRenderPortfolio(false);
              setRenderContact(false);
              setRenderResume(false);
            }}>
              About Me
            </NavItem>
            <NavItem className={classes.navButton} onClick={() => {
              setRenderAbout(false);
              setRenderPortfolio(true);
              setRenderContact(false);
              setRenderResume(false);
            }}>
              Portfolio
            </NavItem>
            <NavItem className={classes.navButton} onClick={() => {
              setRenderAbout(false);
              setRenderPortfolio(false);
              setRenderContact(true);
              setRenderResume(false);
            }}>
              Contact
            </NavItem>
            <NavItem className={classes.navButton} onClick={() => {
              setRenderAbout(false);
              setRenderPortfolio(false);
              setRenderContact(false);
              setRenderResume(true);
            }}>
              Resume
            </NavItem>
          </NavMenu>
      </Box>
    );
  }


export default Nav