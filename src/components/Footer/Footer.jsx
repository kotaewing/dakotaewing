import React from 'react';
import { BottomNavigation } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

function Footer() {

    const useStyles = makeStyles({
        root: {
            position: 'absolute',
            bottom: '0px',
            width: '100vw'
        }
    })

    const classes = useStyles();

    return (
        <BottomNavigation className={classes.root}>
            <h3>Dakota</h3>
        </BottomNavigation>
    )
}

export default Footer;