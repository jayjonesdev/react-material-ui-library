import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
    root: {
        backgroundColor: (props: IStyleProps) => props.color === 'primary' ? theme.palette.primary.main : theme.palette.secondary.main,
        color: (props: IStyleProps) => props.color === 'primary' ? theme.palette.primary.main : theme.palette.secondary.main,
        height: (props: IStyleProps) => `${props.size}px`,
        marginBottom: theme.spacing()
    }
}));

interface IStyleProps {
    color: 'primary' | 'secondary';
    size: number;
}