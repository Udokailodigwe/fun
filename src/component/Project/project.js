import React from 'react';
import { Container, Typography } from '@material-ui/core';

import useStyles from './styleProject';

const Project = () => {
    const classes = useStyles();

    return (
        <Container >
            <Typography className={classes.projectintro}>
                
            </Typography>

        </Container>
    )
}
export default Project;