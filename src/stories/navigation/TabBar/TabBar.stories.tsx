import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';
import { TabBar } from '../../../components/complex';
import { centeredTabs, iconTabs, scrollableTabs } from './TabBar';

export default {
    title: 'Navigation/TabBar',
    component: TabBar
};

const Template: Story<ComponentProps<typeof TabBar>> = (args) => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number): void => {
        setValue(newValue);
    };

    return (
        <>
            <TabBar {...args} value={value} handleChange={handleChange} />
            {args.tabs.map((tab, index) => index === value && <div>Content {index + 1}</div>)}
        </>
    )
};

export const ScrollableTabs = Template.bind({});
ScrollableTabs.args = {
    tabs: scrollableTabs,
    variant: "scrollable",
    scrollButtons: "on",
    indicatorColor: "secondary",
    textColor: "secondary",
    elevation: 0,
    backgroundColor: 'transparent'
};

export const CenteredTabs = Template.bind({});
CenteredTabs.args = {
    tabs: centeredTabs,
    indicatorColor: "secondary",
    textColor: "secondary",
    centered: true,
    variant: 'fullWidth'
};

export const IconTabs = Template.bind({});
IconTabs.args = {
    tabs: iconTabs,
    indicatorColor: "secondary",
    textColor: "secondary",
};