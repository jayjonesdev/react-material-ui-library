import React from 'react';
import useStyles from './buttonBar.style';

const ButtonBar = (props: IProps) => {
    const classes = useStyles();

    return (<div className={classes.root}>{props.children}</div>);
}

export default ButtonBar;

interface IProps {
    children: any;
}