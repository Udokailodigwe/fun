import React from 'react';
import { Container, Typography, Divider, Grid } from '@material-ui/core';

import api from '../Assets/api.png';

import Remark from '../Remarks/remarks';
import useStyles from './styleAbout';

const About = () => {
    const classes = useStyles();
    const data = [
        {
            Title: 'Servers and RESTfull API services',
            Description: 'I have designed scalable servers and RESTful API architechture with dedicated endpoints to specific client requests.'
        },
        {
            Title: 'Business logic and Database management',
            Description: 'I have built simple and flexible layer models for database and server interactions.'
        },
        {
            Title: 'Client',
            Description: 'I have developed customized user interaction platforms, with simplified functionality for rich user experience.'
        },
        {
            Title: 'Security',
            Description: 'I have built systems that authenticates and authorizes users requests, providing a safe and secure application for clients.'
        },
    ];

    return (
        <Container className={classes.aboutContainer} >
            <Typography className={classes.aboutintro} >
                I am Udodigwe Tochukwu Udoka, Frontend and Backend developer based in Finland. I have rich experience in Web Development.
            </Typography>
            <br></br>
            <Typography variant='h4' className={classes.aboutintro}>
                My services include:
            </Typography>
            <Divider className={classes.divider} variant="middle" />
            <Grid className={classes.grid}>
                {data.map(({ Title, Description }, index) => (
                    <Grid key={index} className={classes.gridChild}>
                        <img src={api} alt="apilogo" height="60" />
                        <Typography className={classes.gridChildTitle} >{Title}</Typography>
                        <Typography className={classes.gridChildDescription}>{Description}</Typography>
                    </Grid>
                ))}
            </Grid>
            <Remark />
        </Container>
    )
}

export default About;