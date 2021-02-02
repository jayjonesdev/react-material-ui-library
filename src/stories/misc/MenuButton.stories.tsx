// MenuButton.stories.tsx

import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';

import { MenuButton, MenuButtonItem } from '../../components/basic';
import { Sync as SyncIcon } from '@material-ui/icons';

// This default export determines where your story goes in the story list
export default {
    title: 'Misc/Menu Button',
    component: MenuButton
};

const Template: Story<ComponentProps<typeof MenuButton>> = (args) => (
    <MenuButton {...args}>
        <MenuButtonItem color={args.color}>Sync Items</MenuButtonItem>
        <MenuButtonItem color={args.color}>Syncs Other Items</MenuButtonItem>
    </MenuButton>
);

export const Main = Template.bind({});
Main.args = {
    text: 'Sync',
    icon: <SyncIcon />,
    color: 'primary',
    variant: 'contained',
    size: 'large',
    disabled: false
};