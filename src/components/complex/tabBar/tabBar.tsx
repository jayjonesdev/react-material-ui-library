import React from 'react';
import { AppBar, Tabs, Tab, TabsProps } from '@material-ui/core';
import useStyles from './tabBar.style';

const TabBar: React.FC<IProps & TabsProps> = (props) => {
    const { tabs, backgroundColor = 'transparent', position = 'static', elevation = 4, handleChange } = props;
    const classes = useStyles();

    const tabBarProps = (): TabsProps => {
        let { backgroundColor, tabs, elevation, ...rest } = props;
        return rest;
    }

    return (
        <AppBar className={classes.appbar} position={position} color={backgroundColor} elevation={elevation}>
            <Tabs {...tabBarProps()} onChange={handleChange}>
                {tabs.length > 0 && tabs.map((tab, index) =>
                    <Tab key={index} id={tab.id} label={tab.label} icon={tab.icon} />)}
            </Tabs>
        </AppBar>
    )
};

export default TabBar;

interface IProps {
    elevation?: number;
    position?: "fixed" | "absolute" | "relative" | "static" | "sticky";
    backgroundColor?: "inherit" | "primary" | "secondary" | "default" | "transparent";
    tabs: { label?: string; icon?: React.ReactElement; id?: string; }[];
    handleChange: (event: React.ChangeEvent<{}>, newValue: number) => void;
}