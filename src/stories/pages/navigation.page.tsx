import React from 'react';
import { ButtonBar, NavDropdownMenu, NavDropdownMenuItem, NavItem } from '../../components/basic';
import { AccountCircle as AccountIcon, Settings as SettingsIcon, Email as EmailIcon, CalendarToday as CalendarIcon } from '@material-ui/icons';
import { IconButton, makeStyles, Typography } from '@material-ui/core';
import { Appbar, Drawer } from '../../components/complex';
import logo from '../../assets/MenuLogo.png';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    menuButton: {
        marginRight: 36,
    },

    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(1, 0),
    },
    logo: {
        height: 42,
        boxSizing: 'border-box'
    }
}),
);

const Navigation = () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const menuOpen = Boolean(anchorEl);

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={classes.root}>
            <Appbar position="fixed">
                <img className={classes.logo} src={logo} alt="logo" />
                <ButtonBar>
                    <IconButton
                        color="inherit"
                        aria-label="User Guide"
                    >
                        <Typography variant={'subtitle1'}>User Guide</Typography>
                    </IconButton>
                    <IconButton
                        aria-label="menu action"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenu}
                        color="inherit"
                    >
                        <AccountIcon fontSize={'large'} />
                    </IconButton>
                    <NavDropdownMenu anchorEl={anchorEl} open={menuOpen} onClose={handleClose}>
                        <NavDropdownMenuItem onClick={handleClose}>Logout</NavDropdownMenuItem>
                    </NavDropdownMenu>
                </ButtonBar>
            </Appbar>
            <Drawer variant="permanent">
                <NavItem link="/home/email" text={'Email'} icon={<EmailIcon />} />
                <NavItem link="/home/system-settings" text={'System Settings'} icon={<SettingsIcon />} />
                <NavItem link="/home/calendar" text={'Calendar'} icon={<CalendarIcon />} />
            </Drawer>
        </div>
    )
}

export default Navigation;