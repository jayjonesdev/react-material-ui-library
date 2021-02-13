import React from 'react';
import { DrawerProps, List, Drawer as MaterialDrawer } from '@material-ui/core';
import clsx from 'clsx';
import useStyles from './drawer.style';

const Drawer: React.FC<IProps & DrawerProps> = (props) => {
    const { drawerWidth = 240 } = props;
    const classes = useStyles({ drawerWidth });
    const [open, setOpen] = React.useState<boolean>(false);
    const toggleDrawer = () => {
        setOpen(!open);
    }
    return (
        <MaterialDrawer
            className={clsx(classes.drawer, {
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
            })}
            classes={{
                paper: clsx({
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                }),
            }}
            onMouseEnter={toggleDrawer}
            onMouseLeave={toggleDrawer}
            {...props}
        >
            <List className={classes.list}>
                {props.children}
            </List>
        </MaterialDrawer>
    )
}

export default Drawer;

interface IProps {
    drawerWidth?: number;
}