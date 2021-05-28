import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';

import { LoadingOverlay } from '../../components/basic';

// This default export determines where your story goes in the story list
export default {
    title: 'Misc/LoadingOverlay',
    component: LoadingOverlay
};

const Template: Story<ComponentProps<typeof LoadingOverlay>> = (args) => (
    <LoadingOverlay {...args} />
);

export const Linear = Template.bind({});
Linear.args = {
    label: 'Loading...',
    type: 'linear',
    color: "primary",
    open: true
};

export const Circular = Template.bind({});
Circular.args = {
    label: 'Loading...',
    type: 'circular',
    color: "primary",
    open: true
};