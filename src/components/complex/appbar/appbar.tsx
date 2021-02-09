import React from 'react';
import { AppBar, AppBarProps, Toolbar } from '@material-ui/core';
import useStyles from './appbar.style';

const Appbar: React.FC<AppBarProps> = (props) => {
    const classes = useStyles();

    return (
        <AppBar
            className={classes.appBar}
            {...props}
        >
            <Toolbar className={classes.toolbar}>
                {props.children}
            </Toolbar>
        </AppBar>
    )
}

export default Appbar;