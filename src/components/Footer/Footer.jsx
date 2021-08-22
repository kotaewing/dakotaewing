import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

function Footer() {

    const useStyles = makeStyles({
        root: {
            position: 'fixed',
            bottom: '0px',
            width: '100vw',
            backgroundColor: 'black',
            color: 'white',
            display: 'flex',
            justifyContent: 'center'
        }
    })

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <h3>DAKOTA EWING 2021</h3>
        </div>
    )
}

export default Footer;