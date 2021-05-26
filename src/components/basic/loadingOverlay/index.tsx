import React from 'react';
import { Box, Typography, CircularProgress, LinearProgress } from '@material-ui/core';
import useStyles from './style';

export default (props: IProps) => {
    const { label, color, type } = props;
    const classes = useStyles();

    return (
        <Box position="fixed" className={classes.root}>
            <Box
                top={0}
                left={0}
                bottom={0}
                right={0}
                position="absolute"
                display="flex"
                flexDirection={type === 'circular' ? 'row' : 'column-reverse'}
                alignItems="center"
                justifyContent="center"
            >
                {type === 'circular' ? <CircularProgress color={color} thickness={5} className={classes.circular} /> :
                    <LinearProgress color={color} className={classes.linear} />}
                <Typography variant='h5' color={color}>{label}</Typography>
            </Box>
        </Box>
    )
}

interface IProps {
    label: string;
    type: 'circular' | 'linear';
    color?: "primary" | "secondary";
}