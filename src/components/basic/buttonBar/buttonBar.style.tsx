import { makeStyles, Theme } from "@material-ui/core";

export default makeStyles((theme: Theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'flex-end',
        '& > *': {
            marginLeft: theme.spacing(2)
        }
    }
}));