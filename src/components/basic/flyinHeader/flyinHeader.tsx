import React from 'react';
import { Typography, IconButton } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import useStyles from './flyinHeader.style';

const FlyInHeader: React.FC<IProps> = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography variant={'h6'}>{props.title}</Typography>
            <IconButton onClick={props.onClose}>
                <Close />
            </IconButton>
        </div>
    )
}

export default FlyInHeader;

interface IProps {
    title: string;
    onClose: () => void;
}