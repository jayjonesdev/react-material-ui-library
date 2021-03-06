import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';

import { Accordion } from '../../components/basic';

export default {
    title: 'Misc/Accordion',
    component: Accordion
};

const Template: Story<ComponentProps<typeof Accordion>> = (args) => (
    <Accordion {...args}>
        Content
    </Accordion>
);

export const Main = Template.bind({});
Main.args = {
    title: 'Custom Accordion'
};
// Main.parameters = {
//     backgrounds: [
//         { name: 'dark background', value: '#000', default: true }
//     
// }