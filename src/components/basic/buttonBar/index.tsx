import React from 'react';
import useStyles from './index.style';

const ButtonBar: React.FC<IProps> = (props) => {
    const classes = useStyles();

    return (<div data-testid='button-bar-children' className={classes.root}>{props.children}</div>);
}

export default ButtonBar;

interface IProps {
    children: React.ReactNode;
}