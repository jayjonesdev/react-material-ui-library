// Accordion.stories.tsx

import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';

import { ButtonBar } from '../../components/basic';
import { Button } from '@material-ui/core';

// This default export determines where your story goes in the story list
export default {
    title: 'Misc/Button Bar',
    component: ButtonBar
};

const Template: Story<ComponentProps<typeof ButtonBar>> = (args) => (
    <ButtonBar {...args}>
        <Button variant="contained" color="primary">Button One</Button>
        <Button variant="contained" color="secondary">Button Two</Button>
        <Button variant="contained">Button Three</Button>
    </ButtonBar>
);

export const Main = Template.bind({});
Main.args = {};