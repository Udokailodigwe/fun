import React from 'react';
import { Link } from 'react-scroll';
import { AppBar, Toolbar, MenuList, Typography, Box } from '@material-ui/core';

import useStyles from './style';

const NavBar = () => {
    const classes = useStyles();



    return (
        <AppBar className={classes.appBar} >
            <Toolbar className={classes.toolbar}>
                <Box>
                    <MenuList className={classes.menu}>
                        <Link to="about" spy={true} smooth={true} offset={0} duration={500} >
                            <Typography className={classes.navlink}>
                                ABOUT
                            </Typography>
                        </Link>
                    </MenuList>
                    <MenuList className={classes.menu}>
                        <Link to="project" spy={true} smooth={true} offset={0} duration={500}>
                            <Typography className={classes.navlink}>
                                PROJECT
                            </Typography>
                        </Link>
                    </MenuList>
                    <MenuList className={classes.menu}>
                        <Link to="contact" spy={true} smooth={true} offset={0} duration={500}>
                            <Typography className={classes.navlink}>
                                CONTACT
                            </Typography>
                        </Link>
                    </MenuList>
                </Box>
            </Toolbar >
        </AppBar >
    )
}

export default NavBar;