import React from 'react';
import { Button, Menu } from '@material-ui/core';
import clsx from 'clsx';
import useStyles from './menu-button.styles';

const MenuButton = React.forwardRef((props: IProps, ref: any) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const { color } = props;
    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    React.useImperativeHandle(ref, () => ({
        closeMenu() { handleClose(); }
    }));

    return (
        <div>
            <Button
                startIcon={props.icon}
                disabled={props.disabled}
                color={color}
                variant={props.variant}
                size={props.size}
                onClick={handleMenu}>
                {props.text}
            </Button>
            <Menu
                classes={{
                    paper: color === 'secondary' ? clsx(classes.root, classes.secondary)
                        : clsx(classes.root, classes.primary)
                }}
                color={color}
                anchorEl={anchorEl}
                onClose={handleClose}
                elevation={0}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                getContentAnchorEl={null}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                open={open}
            >
                <div>
                    {props.children}
                </div>
            </Menu>
        </div>
    )
});

export default MenuButton;

interface IProps {
    icon?: JSX.Element;
    text?: string;
    color?: 'default' | 'inherit' | 'primary' | 'secondary';
    disabled?: boolean;
    size?: 'large' | 'medium' | 'small';
    children?: any;
    variant?: 'contained' | 'outlined' | 'text';
    ref?: React.RefObject<any>;
}