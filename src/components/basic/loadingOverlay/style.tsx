import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
    root: {
        opacity: .65, 
        zIndex: 105, 
        width: '100%', 
        height: '100%', 
        backgroundColor: theme.palette.common.black
    },
    circular: { marginRight: theme.spacing(2) },
    linear: { height: 10, width: '25%', marginTop: theme.spacing(2) }
}));