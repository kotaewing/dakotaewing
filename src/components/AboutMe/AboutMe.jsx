import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';


function AboutMe() {
    const useStyles = makeStyles({
        img: {
            width: '15rem',
            height: '50vh',
            margin: '1.5rem'
        },
        bio: {
            textAlign: 'center',
            lineHeight: '1.3rem'
        }
    })

    const classes = useStyles();

    return (
        <div>
            <Grid container spacing={1} justifyContent='center' alignItems='center' direction="column">
                <Grid item xs={12} sm={6}>
                    <Card className={classes.img}>
                        <CardMedia
                            className={classes.img}
                            component="img"
                            alt='Dakota at Antelope Island'
                            image={require(`../../images/dakota.jpg`).default}
                        />
                    </Card>
                </Grid>
                <Grid item xs={12} sm={7} className={classes.bio}>
                        Hey, my name is Dakota!  I am a web dev bootcamp graduate, computer science student, and working professional located in Salt Lake City, UT.
                        I love everything computers, even more so when it comes to coding.  I love to learn and I learn fast.
                        When I'm not working, I'm either in the mountains or in the studio.  Music is a huge passion of mine, and I try to incorporate
                        it into everything I do.  Checkout my portfolio to see all the awesome work I've created, and check in often to keep
                        up to date on what I'm up to.  Feel free to reach out to me through the contact form!

                </Grid>
            </Grid>
        </div>
    )
}

export default AboutMe;