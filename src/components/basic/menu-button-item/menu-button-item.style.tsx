import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    root: {
        height: 50,
        padding: theme.spacing(2, 2),
        color: theme.palette.common.white
    },
    secondary: {
        '&:hover': {
            backgroundColor: theme.palette.secondary.main,
        }
    },
    primary: {
        '&:hover': {
            backgroundColor: theme.palette.primary.main,
        }
    }
}));