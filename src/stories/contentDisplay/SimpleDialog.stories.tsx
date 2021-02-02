import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';

import { SimpleDialog } from '../../components/basic';
import { Button } from '@material-ui/core';

// This default export determines where your story goes in the story list
export default {
    title: 'Content Display/Simple Dialog',
    component: SimpleDialog,
};

const Template: Story<ComponentProps<typeof SimpleDialog>> = (args) => (
    <SimpleDialog onClose={() => { }} {...args}>
        <React.Fragment>
            <Button color="primary" variant='outlined'>Cancel</Button>
            <Button color="primary" variant='contained'>Clear</Button>
        </React.Fragment>
    </SimpleDialog>
);

export const VerbiageChange = Template.bind({});
VerbiageChange.args = {
    open: true,
    title: 'Delete Items',
    content: 'Are you sure you want to delete these items?'
};