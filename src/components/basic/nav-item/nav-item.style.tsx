import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    root: {
        marginBottom: theme.spacing(2),
        display: 'flex',
        alignItems: 'center',
        '&:hover': {
            backgroundColor: theme.palette.primary.dark,
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.white,
            },
        },
        '&:focus': {
            backgroundColor: theme.palette.secondary.main,
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.white,
            },
        },
    },
    listitem: {
        color: '#fff'
    },
    active: {
        backgroundColor: theme.palette.secondary.main,

    },
    inactive: {
        backgroundColor: theme.palette.primary.light,

    }
})
);