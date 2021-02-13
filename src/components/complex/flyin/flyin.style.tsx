import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    paper: {
        display: 'flex',
        flexDirection: 'column',
        position: 'fixed',
        top: 0,
        border: '1px solid #c7c7c7',
        width: (props: IStyleProps) => props.drawerWidth,
        height: '100vh',
        right: 0,
        zIndex: theme.zIndex.drawer + 2
    },
    drawer: {
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        border: '1px solid #c7c7c7',
        width: (props: IStyleProps) => props.drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        backgroundColor: theme.palette.common.white,
        zIndex: 201
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    content: {
        width: '100%',
        padding: theme.spacing(0, 1)
    },
}));

interface IStyleProps {
    drawerWidth: number;
}