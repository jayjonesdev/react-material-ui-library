import React from "react";
import { ListItem, ListItemIcon, ListItemText, Typography } from "@material-ui/core";
import clsx from "clsx";
import { Link, useLocation } from '@reach/router';
import useStyles from './nav-item.style';

const NavItem = (props: IProps) => {
    const { text, icon, disabled, link } = props;
    const classes = useStyles();
    const location = useLocation();

    const isCurrentPath = () => link === location.pathname;

    return (
        <React.Fragment>
            {disabled ?
                <ListItem
                    className={clsx(classes.listitem, classes.root, isCurrentPath() ? classes.active : classes.inactive)} key={text}>
                    {icon && <ListItemIcon className={classes.listitem}>{icon}</ListItemIcon>}
                    <ListItemText primary={<Typography variant={'subtitle1'}>{text}</Typography>} />
                </ListItem> : <ListItem button component={Link} to={link}
                    className={clsx(classes.listitem, classes.root, isCurrentPath() ? classes.active : classes.inactive)} key={text}>
                    {icon && <ListItemIcon className={classes.listitem}>{icon}</ListItemIcon>}
                    <ListItemText primary={<Typography variant={'subtitle1'}>{text}</Typography>} />
                </ListItem>}
        </React.Fragment>
    )
}

export default NavItem;

interface IProps {
    text: string;
    link: string;
    icon?: JSX.Element;
    disabled?: boolean
}