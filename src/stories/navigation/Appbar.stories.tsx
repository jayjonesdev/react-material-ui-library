import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';

import { ButtonBar, NavDropdownMenu, NavDropdownMenuItem } from '../../components/basic';
import { Appbar } from '../../components/complex';
import { AccountCircle as AccountIcon } from '@material-ui/icons';
import { IconButton, makeStyles, Typography } from '@material-ui/core';

// This default export determines where your story goes in the story list
export default {
    title: 'Navigation/Appbar',
    component: Appbar
};

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        padding: theme.spacing(.5, .5),
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
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
}));

const Template: Story<ComponentProps<typeof Appbar>> = (args) => {
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
        <Appbar {...args}>
            <img className={classes.logo} src={"https://cdn.logo.com/hotlink-ok/logo-social-sq.png"} alt="logo" />
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
    )
}

export const Main = Template.bind({});
Main.args = {
    position: "fixed"
};