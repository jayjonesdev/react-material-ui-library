import React from 'react';
import { Typography, CircularProgress, LinearProgress, Backdrop } from '@material-ui/core';
import useStyles from './style';

export default (props: IProps) => {
    const { label, color, type, open } = props;
    const classes = useStyles({ type });

    return (
        <Backdrop className={classes['$.MuiBackdrop-root']} open={open} invisible={open} onClick={() => { }}>
            <div className={classes.content}>
                {type === 'circular' ? <CircularProgress color={color} thickness={5} className={classes.circular} /> :
                    <LinearProgress color={color} className={classes.linear} />}
                <Typography variant='h5' color={color}>{label}</Typography>
            </div>
        </Backdrop>
    )
}

interface IProps {
    label: string;
    open: boolean;
    type: 'circular' | 'linear';
    color?: "primary" | "secondary";
}