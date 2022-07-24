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
            <Container className={classes.h}>
                <Paper elevation={24} className={classes.paper2} >
                    <Typography>
                        <Home />
                    </Typography>
                </Paper>
            </Container>
            <Container className={classes.apc}>
                <Paper variant="outlined" className={classes.paper1} id='about'>
                    <About />
                </Paper>
                <Paper variant="outlined" className={`${classes.paper1} ${classes.project}`} id='project' >
                    <Project />
                </Paper>
                <Paper variant="outlined" className={`${classes.paper1} ${classes.contact}`} id='contact' >
                    <Contact />
                </Paper >
            </Container>
        </Container >
    )
}

export default Layout;