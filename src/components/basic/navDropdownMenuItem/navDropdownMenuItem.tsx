import { MenuItem, withStyles } from '@material-ui/core';

const NavDropdownMenuItem = withStyles((theme) => ({
    root: {
        height: 50,
        padding: theme.spacing(2,2),
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.common.white,
        '&:focus': {
            backgroundColor: theme.palette.primary.light,
            color: theme.palette.common.white,
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.white,
            },
        },
        '&:hover': {
            backgroundColor: theme.palette.primary.dark,
        }
    },
}))(MenuItem);

export default NavDropdownMenuItem;