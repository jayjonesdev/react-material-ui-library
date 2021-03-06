import React from 'react';
import { MenuItem, MenuItemProps } from '@material-ui/core';
import clsx from 'clsx';
import useStyles from './menuButtonItem.style';

const MenuButtonItem:React.FC<IProps & MenuItemProps> = (props) => {
    const classes = useStyles();

    return (
        <MenuItem
            color={props.color}
            onClick={props.onClick}
            className={classes.root}
            classes={{
                root: props.color === 'secondary' ? clsx(classes.root, classes.secondary) : clsx(classes.root, classes.primary)
            }}
            >
            {props.children}
        </MenuItem>
    )
}

export default MenuButtonItem;

interface IProps {
    color?: 'default' | 'inherit' | 'primary' | 'secondary';
    variant?: 'contained' | 'outlined' | 'text';
}