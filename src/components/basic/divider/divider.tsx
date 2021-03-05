import React from 'react';
import { Divider, DividerProps } from '@material-ui/core';
import useStyles from './divider.style';

export default (props: IProps & DividerProps) => {
    const { color = 'primary', size = 0 } = props;
    const classes = useStyles({ color: color, size: size });

    return (<Divider className={classes.root} />)
}

interface IProps {
    color?: 'primary' | 'secondary';
    size?: number;
}