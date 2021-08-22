import Project from '../Project'
import Grid from '@material-ui/core/Grid';

function Portfolio({ projects }) {
    return (
        <div>
            <Grid container spacing={3}>
            {projects.map((project, idx) => {
                return (
                    <Project key={idx} project={project}/>
                    )
                })}
            </Grid>
        </div>
    )
}

export default Portfolio;