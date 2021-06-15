import React from 'react';
import { Typography, IconButton } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import useStyles from './style';

const FlyInHeader: React.FC<IProps> = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography data-testid='flyin-header-text' variant={'h6'}>{props.title}</Typography>
            <IconButton data-testid='flyin-header-close-btn' onClick={props.onClose}>
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