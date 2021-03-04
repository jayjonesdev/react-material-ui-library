import React from 'react';
import { ButtonBar, NavDropdownMenu, NavDropdownMenuItem, NavItem } from '../../components/basic';
import { AccountCircle as AccountIcon, Settings as SettingsIcon, Email as EmailIcon, CalendarToday as CalendarIcon } from '@material-ui/icons';
import { IconButton, makeStyles, Typography } from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom';
import { Appbar, Drawer, TabBar } from '../../components/complex';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    menuButton: {
        marginRight: 36,
    },

    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(2, 1),
        height: '100%',
    },
    logo: {
        height: 42,
        boxSizing: 'border-box'
    }
}));

export const centeredTabs = [
    { label: 'Tab One' },
    { label: 'Tab Two' },
    { label: 'Tab Three' },
    { label: 'Tab Four' },
    { label: 'Tab Five' },
];

const Navigation = () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const menuOpen = Boolean(anchorEl);
    const [tabValue, setTabValue] = React.useState(0);

    const handleTabChange = (event: React.ChangeEvent<{}>, newValue: number): void => {
        setTabValue(newValue);
    };

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={classes.root}>
            <Appbar position="fixed">
                <img className={classes.logo} src={"https://cdn.logo.com/hotlink-ok/logo-social-sq.png"} alt="logo" />
                <ButtonBar>
                    <IconButton
                        color="inherit"
                        aria-label="User Guide"
                    >
                        <Typography variant={'subtitle1'}>User Guide</Typography>
                    </IconButton>
                    <IconButton
                        aria-label="menu action"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenu}
                        color="inherit"
                    >
                        <AccountIcon fontSize={'large'} />
                    </IconButton>
                    <NavDropdownMenu anchorEl={anchorEl} open={menuOpen} onClose={handleClose}>
                        <NavDropdownMenuItem onClick={handleClose}>Logout</NavDropdownMenuItem>
                    </NavDropdownMenu>
                </ButtonBar>
            </Appbar>
            <BrowserRouter>
                <Drawer variant="permanent">
                    <NavItem link="" text={'Email'} icon={<EmailIcon />} />
                    <NavItem link="" text={'System Settings'} icon={<SettingsIcon />} />
                    <NavItem link="" text={'Calendar'} icon={<CalendarIcon />} />
                </Drawer>
            </BrowserRouter>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <div>
                    <TabBar tabs={centeredTabs} value={tabValue} centered variant="fullWidth" handleChange={handleTabChange}>
                        {centeredTabs.map((tab, index) => <div>Content {index + 1}</div>)}
                    </TabBar>
                </div>
            </main>
        </div>
    )
}

export default Navigation;