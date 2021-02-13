import React from 'react';
import { ClickAwayListener, Paper, Slide, SlideProps } from '@material-ui/core';
import { FlyInHeader } from '../../basic';
import useStyles from './flyin.style';

const Flyin: React.FC<IProps & SlideProps> = (props) => {
    const { drawerWidth = 550 } = props;
    const classes = useStyles({ drawerWidth });
    const wrapperRef = React.useRef<any>(null);
    const { open, onClickAway } = props;

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
                    </div>
                </Paper>
            </Slide>
        </ClickAwayListener>
    )
}

export default Flyin;

interface IProps {
    drawerWidth?: number;
    title: string;
    open: boolean;
    onClickAway: () => void;
}