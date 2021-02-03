import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    root: {
        minWidth: 150,
        marginTop: 5
    },
    secondary: {
        backgroundColor: theme.palette.secondary.dark
    },
    primary: {
        backgroundColor: theme.palette.primary.dark
    }
}));