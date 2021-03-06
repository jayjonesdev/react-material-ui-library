import React from "react";
import { ListItem, ListItemIcon, ListItemText, Typography } from "@material-ui/core";
import clsx from "clsx";
import useStyles from './navItem.style';
import { Link, useLocation } from "react-router-dom";

const NavItem: React.FC<IProps> = (props) => {
    const { text, icon, disabled, link } = props;
    const classes = useStyles();
    const location = useLocation()

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