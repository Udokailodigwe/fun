import React from 'react';
import { Typography, Box, Divider } from '@material-ui/core';
import TypeWriterEffect from 'react-typewriter-effect';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';


import image from '../Assets/image.jpeg';
import CV from '../Assets/CV.pdf';
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
                    UDODIGWE TOCHUKWU UDOKA
                </Typography>
                <Typography className={classes.title}>
                    <TypeWriterEffect
                        startDelay={2000}
                        cursorColor='rgba(255, 255, 255, 0)'
                        multiText={[
                            'Software Engineer',
                            'Front-end Developer',
                            'Back-end Developer',
                            'Freelancer'
                        ]}
                        multiTextDelay={2000}
                        typeSpeed={40}
                        multiTextLoop="true"
                        hideCursor="true"
                    />
                </Typography>
                <Box className={classes.clickableIcon}>
                    <LinkedInIcon className={classes.icon} fontSize='small' onClick={linkedInPage} />
                    <GitHubIcon className={classes.icon} fontSize='small' onClick={githubPage} />
                </Box>
                <Divider className={classes.divider} variant="middle" />
                <Box>
                    <a href={CV} className={classes.downloadcv} target="_blank" rel="noreferrer">
                        <Typography>Download CV</Typography>
                        <CloudDownloadIcon />
                    </a>
                </Box>
            </Box>


        </>
    )
}
export default Home; 
