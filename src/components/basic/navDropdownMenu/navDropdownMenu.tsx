import React from 'react';
import Menu, { MenuProps } from '@material-ui/core/Menu';
import { Theme, withStyles } from '@material-ui/core';

const NavDropdownMenu = withStyles((theme: Theme) => ({
    paper: {
        backgroundColor: theme.palette.primary.light,
        minWidth: 150,
        marginTop: 5
    },
}))((props: MenuProps) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        getContentAnchorEl={null}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        {...props}
    />
));

export default NavDropdownMenu;