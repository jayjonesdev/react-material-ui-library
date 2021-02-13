import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';
import { TabBar } from '../../../components/complex';
import { centeredTabs, iconTabs, scrollableTabs } from './TabBar';

export default {
    title: 'Navigation/TabBar',
    component: TabBar
};

const Template: Story<ComponentProps<typeof TabBar>> = (args) => (
    <div style={{ width: '100%' }}>
        <TabBar {...args}>
            {args.tabs.map((tab, index) => <div>Content {index + 1}</div>)}
        </TabBar>
    </div>

);

export const ScrollableTabs = Template.bind({});
ScrollableTabs.args = {
    tabs: scrollableTabs,
    variant: "scrollable",
    scrollButtons: "on",
    indicatorColor: "secondary",
    textColor: "secondary",
};

export const CenteredTabs = Template.bind({});
CenteredTabs.args = {
    tabs: centeredTabs,
    indicatorColor: "secondary",
    textColor: "secondary",
    centered: true
};

export const IconTabs = Template.bind({});
IconTabs.args = {
    tabs: iconTabs,
    indicatorColor: "secondary",
    textColor: "secondary",
};