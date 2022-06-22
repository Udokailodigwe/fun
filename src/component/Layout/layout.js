import React from 'react';
import Home from '../Home/home';
import About from '../About/about';
import Project from '../Project/project';
import Contact from '../Contact/contact';
import { Paper, Container, Typography } from '@material-ui/core';

import useStyles from './styleLayout';

const Layout = () => {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <Paper variant="outlined" className={classes.paper1}>
                <Typography variant="h5">
                    <About />
                    <Project />
                    <Contact />
                </Typography>
            </Paper >
            <Paper elevation={24} className={classes.paper2}>
                <Typography variant="h5">
                    <Home />
                </Typography>
            </Paper>
        </Container>
    )
}

export default Layout;