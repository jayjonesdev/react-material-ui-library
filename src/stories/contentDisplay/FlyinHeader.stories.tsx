import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';

import { FlyInHeader } from '../../components/basic';

export default {
    title: 'Content Display/Flyin Header',
    component: FlyInHeader
};

const Template: Story<ComponentProps<typeof FlyInHeader>> = (args) => (
    <FlyInHeader {...args} />
);

export const Main = Template.bind({});
Main.args = {
    title: 'Flyin Title',
    onClose: () => {}
};