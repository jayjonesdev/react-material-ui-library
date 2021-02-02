// PageHeader.stories.tsx

import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';

import PageHeader from '../../components/basic/page-header/page-header';

// This default export determines where your story goes in the story list
export default {
    title: 'Misc/Page Header',
    component: PageHeader,
    argTypes: {
        disabled: { control: { visible: false } },
    }
};

const Template: Story<ComponentProps<typeof PageHeader>> = (args) => (
    <PageHeader {...args} />
);

export const TextChange = Template.bind({});
TextChange.args = {
    text: 'Page Header'
    /* the args you need here will depend on your component */
};