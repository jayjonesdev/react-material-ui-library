import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
    '$.MuiBackdrop-root': {
        zIndex: theme.zIndex.drawer + 1,
        backgroundColor: 'rgba(255, 255, 255, 0.45);',
    },
    content: {
        display: 'flex',
        flexDirection: (props: IStyleProps) => props.type === 'circular' ? 'row' : 'column-reverse',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    circular: { marginRight: theme.spacing(2) },
    linear: { height: 10, width: '25%', marginTop: theme.spacing(2) }
}));

interface IStyleProps {
    type: 'circular' | 'linear';
}