import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
    root: {
        zIndex: theme.zIndex.drawer + 1,
        color: theme.palette.common.black,
    },
    circular: { marginRight: theme.spacing(2) },
    linear: { height: 10, width: '25%', marginTop: theme.spacing(2) }
}));