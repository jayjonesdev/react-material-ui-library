import React from 'react';
import { Typography } from '@material-ui/core';
import useStyles from './page-header-style';

const PageHeader = (props: IProps) => {
    const classes = useStyles();

    return (
        <header className={classes.root}>
            <Typography variant={'h4'}>{props.text}</Typography>
        </header>
    )
}

export default PageHeader;

interface IProps {
    text: string;
}