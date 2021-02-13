import { makeStyles } from "@material-ui/core";

export default makeStyles(theme => ({
    denseButtonGroupMargin: {
        marginTop: theme.spacing(),
        marginBottom: theme.spacing(.5),
        display: 'flex'
    },
    normalButtonGroupMargin: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(),
        display: 'flex'
    },
    noButtonGroupMargin: {
        marginTop: 0,
        marginBottom: 0,
        display: 'flex'
    },
    buttonGroup: {
        display: 'flex',
        justifyContent: 'flex-end'
    }
}));