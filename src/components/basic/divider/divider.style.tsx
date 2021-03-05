import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
    root: {
        backgroundColor: (props: IStyleProps) => props.color === 'primary' ? theme.palette.primary.main : theme.palette.secondary.main,
        color: (props: IStyleProps) => props.color === 'primary' ? theme.palette.primary.main : theme.palette.secondary.main,
        marginBottom: theme.spacing(),
        height: (props: IStyleProps) => `${props.size}px`
    }
}));

interface IStyleProps {
    color: 'primary' | 'secondary';
    size: number;
}