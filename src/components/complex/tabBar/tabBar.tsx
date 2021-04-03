import React from 'react';
import { AppBar, Tabs, Tab, TabsProps } from '@material-ui/core';
import useStyles from './tabBar.style';

const TabBar: React.FC<IProps & TabsProps> = (props) => {
    const { tabs, backgroundColor = 'transparent', position = 'static', handleChange } = props;
    const classes = useStyles();

    return (
        <AppBar className={classes.appbar} position={position} color={backgroundColor}>
            <Tabs {...props} onChange={handleChange}>
                {tabs.length > 0 && tabs.map((tab, index) =>
                    <Tab key={index} id={`label-${index}`} label={tab.label} icon={tab.icon} />)}
            </Tabs>
        </AppBar>
    )
};

export default TabBar;

interface IProps {
    position?: "fixed" | "absolute" | "relative" | "static" | "sticky";
    backgroundColor?: "inherit" | "primary" | "secondary" | "default" | "transparent";
    tabs: { label?: string; icon?: React.ReactElement }[];
    handleChange: (event: React.ChangeEvent<{}>, newValue: number) => void;
}