import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        height: 100,
        width: '100%',
        flex: 1,
        backgroundColor: '#e7e7e7',
        paddingLeft: theme.spacing(5)
    }
}));