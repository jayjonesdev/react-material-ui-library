// NavItem.stories.tsx

import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';

import { NavItem } from '../../components/basic';
import { Settings as SettingsIcon } from '@material-ui/icons';

// This default export determines where your story goes in the story list
export default {
    title: 'Navigation/Nav Item',
    component: NavItem
};

const Template: Story<ComponentProps<typeof NavItem>> = (args) => (
    <div style={{ width: 240 }}>
        <NavItem {...args} />
    </div>
);

export const Main = Template.bind({});
Main.args = {
    text: 'System Settings',
    icon: <SettingsIcon />,
    disabled: false,
    link: ''
};