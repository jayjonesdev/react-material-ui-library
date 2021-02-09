import React from 'react';
import { ClickAwayListener, Paper, Slide, SlideProps, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { ButtonBar, FlyInHeader } from '../../basic';

const drawerWidth = 550;
const useStyles = makeStyles((theme: Theme) => ({
    paper: {
        display: 'flex',
        flexDirection: 'column',
        position: 'fixed',
        top: 0,
        border: '1px solid #c7c7c7',
        width: drawerWidth,
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
        width: drawerWidth,
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

const Flyin: React.FC<IProps & SlideProps> = (props) => {
    const classes = useStyles();
    const wrapperRef = React.useRef<any>(null);
    const { open, onClickAway, buttons } = props;

    React.useEffect(() => {
        const handleClickOutside = (event: any) => {
            if (open && wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                onClickAway();
            }
        }

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [wrapperRef, open, onClickAway]);

    return (
        <ClickAwayListener onClickAway={onClickAway} mouseEvent={'onMouseDown'}>
            <Slide in={props.open} mountOnEnter unmountOnExit direction={'left'}>
                <Paper className={classes.paper}>
                    <FlyInHeader title={props.title} onClose={onClickAway} />
                    <div className={classes.content}>
                        {props.children}
                        <ButtonBar>
                            {buttons}
                        </ButtonBar>
                    </div>
                </Paper>
            </Slide>
        </ClickAwayListener>
    )
}

export default Flyin;

interface IProps {
    title: string;
    open: boolean;
    onClickAway: () => void;
    buttons?: React.ReactNode;
}