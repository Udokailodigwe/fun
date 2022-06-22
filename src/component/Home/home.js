import React from 'react';
import { Typography, Box } from '@material-ui/core';
import TypeWriterEffect from 'react-typewriter-effect';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';


import image from '../Assets/image.jpeg';
import useStyles from './styleHome';

const Home = () => {
    const classes = useStyles();

    const linkedInPage = () => {
        window.open("https://www.linkedin.com/in/udoka-ilodigwe-073872105/", '_blank');
    }
    const githubPage = () => {
        window.open("https://github.com/Udokailodigwe", '_blank');
    }

    return (
        <>
            <img src={image} className={classes.image} alt="myPix" />
            <Box>
                <Typography className={classes.name} component="div">
                    UDOKA ILODIGWE
                </Typography>
                <Typography className={classes.title}>
                    <TypeWriterEffect
                        startDelay={1500}
                        cursorColor='rgba(255, 255, 255, 0)'
                        multiText={[
                            'Software Engineer',
                            'Front-end Developer',
                            'Back-end Developer',
                            'Freelancer'
                        ]}
                        multiTextDelay={1500}
                        typeSpeed={30}
                        multiTextLoop="true"
                        hideCursor="true"
                        blink="true"
                    />
                </Typography>
                <Box className={classes.clickableIcon}>
                    <LinkedInIcon className={classes.icon} fontSize='small' onClick={linkedInPage} />
                    <GitHubIcon className={classes.icon} fontSize='small' onClick={githubPage} />
                </Box>
            </Box>


        </>
    )
}
export default Home; 
