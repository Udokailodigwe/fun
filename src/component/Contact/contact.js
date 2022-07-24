import React from 'react';
import { Container, Typography } from '@material-ui/core';

import useStyles from './styleContact';
const Contact = () => {
    const classes = useStyles();

    return (
        <Container >

            <Typography className={classes.contactintro}>
                
            </Typography>

        </Container>
    )
}
export default Contact;