import React from 'react';
import { AppBar, TabsProps, Tabs, Tab, Typography } from '@material-ui/core';
import useStyles from './tabBar.style';

const TabBar: React.FC<IProps & TabsProps> = (props) => {
    const { tabs, backgroundColor = 'transparent', position = 'static' } = props;
    const classes = useStyles();
    const [value, setValue] = React.useState<number>(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    return (
        <div>
            <AppBar className={classes.appbar} position={position} color={backgroundColor}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    {...props}
                >
                    {tabs.length > 0 && tabs.map((tab, index) =>
                        <Tab key={index} id={`label-${index}`} label={<Typography variant={'subtitle1'}><b>{tab.label}</b></Typography>} icon={tab.icon} />)}
                </Tabs>
            </AppBar>
            {props.children.map((child, index) => index === value && child)}
        </div>
    )
};

export default TabBar;

interface IProps {
    position?: "fixed" | "absolute" | "relative" | "static" | "sticky";
    backgroundColor?: "inherit" | "primary" | "secondary" | "default" | "transparent";
    children: React.ReactNodeArray;
    tabs: { label?: string; icon?: React.ReactElement }[];
}