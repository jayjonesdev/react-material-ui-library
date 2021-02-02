// Accordion.stories.tsx

import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';

import { CustomAccordion } from '../../components/basic';

// This default export determines where your story goes in the story list
export default {
    title: 'Misc/Accordion',
    component: CustomAccordion
};

const Template: Story<ComponentProps<typeof CustomAccordion>> = (args) => (
    <CustomAccordion {...args}>
        Content
    </CustomAccordion>
);

export const Main = Template.bind({});
Main.args = {
    title: 'Custom Accordion'
};
// Main.parameters = {
//     backgrounds: [
//         { name: 'dark background', value: '#000', default: true }
//     ]
// }