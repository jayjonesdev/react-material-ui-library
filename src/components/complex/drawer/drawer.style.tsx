import { Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme: Theme) => ({
    drawer: {
        flexShrink: 0,
        whiteSpace: 'nowrap',
        overflowX: 'hidden'
    },
    drawerOpen: {
        width: (props: IStyleProps) => props.drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        backgroundColor: theme.palette.primary.light,
        overflowX: 'hidden'
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
        backgroundColor: theme.palette.primary.light
    },
    list: {
        marginTop: theme.spacing(12),
        padding: theme.spacing(0, 1),
    },
}));

interface IStyleProps {
    drawerWidth: number;
}