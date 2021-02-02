import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    appBar: {
        padding: theme.spacing(.5, .5),
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        ...theme.mixins.toolbar,
    },
}));