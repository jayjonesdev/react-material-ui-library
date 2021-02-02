import useStyles from './button-bar.style';

const ButtonBar = (props: IProps) => {
    const classes = useStyles();

    return (<div className={classes.root}>{props.children}</div>);
}

export default ButtonBar;

interface IProps {
    children: any;
}