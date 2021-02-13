import React from 'react';
import { AppBar, TabsProps, Tabs, Tab } from '@material-ui/core';
import useStyles from './tabBar.style';

const TabBar: React.FC<IProps & TabsProps> = (props) => {
    const { tabs, backgroundColor = 'transparent' } = props;
    const classes = useStyles();
    const [value, setValue] = React.useState<number>(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    return (
        <div>
            <AppBar className={classes.appbar} position="static" color={backgroundColor}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    {...props}
                >
                    {tabs.length > 0 && tabs.map((tab, index) => <Tab id={`label-${index}`} label={tab.label} key={index} icon={tab.icon} />)}
                </Tabs>
            </AppBar>
            {props.children.map((child, index) => index === value && child)}
        </div>
    )
};

export default TabBar;

interface IProps {
    backgroundColor?: "inherit" | "primary" | "secondary" | "default" | "transparent";
    children: React.ReactNodeArray;
    tabs: { label: string; icon?: React.ReactElement }[];
}