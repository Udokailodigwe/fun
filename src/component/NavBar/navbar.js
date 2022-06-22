import React from 'react';
import { AppBar, Toolbar, Divider, Typography, MenuItem, Box } from '@material-ui/core';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import PersonIcon from '@material-ui/icons/Person';
import WorkIcon from '@material-ui/icons/Work';



import useStyles from './style';

const NavBar = () => {
    const classes = useStyles();

    return (

        <AppBar className={classes.appBar} >
            <Toolbar className={classes.toolbar}>
                <Box>
                    {/* <MenuItem className={classes.menu}>
                        <HomeIcon />
                        <Typography className={classes.navlink}>
                            HOME
                        </Typography>
                    </MenuItem> */}
                    <MenuItem className={classes.menu}>
                        <PersonIcon />
                        <Typography className={classes.navlink}>
                            ABOUT
                        </Typography>
                    </MenuItem>
                    <Divider variant="middle" component="li" />
                    <MenuItem className={classes.menu}>
                        <WorkIcon />
                        <Typography className={classes.navlink}>
                            PROJECT
                        </Typography>
                    </MenuItem>
                    <Divider variant="middle" component="li" />
                    <MenuItem className={classes.menu}>
                        <AlternateEmailIcon />
                        <Typography className={classes.navlink}>
                            CONTACT
                        </Typography>
                    </MenuItem>
                </Box>
            </Toolbar >
        </AppBar >
    )
}

export default NavBar;