import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles({
  root: {
    margin: '3rem 2rem',
  },
  buttonLink: {
      color: 'black',
      textDecoration: 'none',
      fontWeight: 'bold'
  }
});

function Project({project}) {
  const classes = useStyles();

  return (
      <Grid item xs={12} sm={6}>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={project.title}
          height="470"
          width="800"
          image={require(`../../images/${project.thumbnail}`).default}
          title={project.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {project.title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
        <a href={project.link} className={classes.buttonLink} rel="noreferrer" target='_blank'>Go to Project</a>
        </Button>
        <Button size="small" color="primary">
          <a href={project.github} className={classes.buttonLink} rel="noreferrer" target='_blank'>GitHub Repository</a>
        </Button>
      </CardActions>
    </Card>
    </Grid>
  );
}

export default Project;