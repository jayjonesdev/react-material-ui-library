import { Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme: Theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 50,
        width: '100%',
        backgroundColor: '#e7e7e7',
        padding: theme.spacing(0, 1),
        borderBottom: '1px solid #c7c7c7',
        marginBottom: theme.spacing()
    }
}))