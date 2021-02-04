import React from 'react';
import useStyles from './buttonBar.style';

const ButtonBar: React.FC<IProps> = (props) => {
    const classes = useStyles();

    return (<div className={classes.root}>{props.children}</div>);
}

export default ButtonBar;

interface IProps {
    children: React.ReactNode;
}