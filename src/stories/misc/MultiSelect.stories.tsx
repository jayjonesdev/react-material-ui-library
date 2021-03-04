// MultiSelect.stories.tsx

import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';

import { MultiSelect } from '../../components/basic';
import { MenuItem, ListItemText, Checkbox } from '@material-ui/core';

// This default export determines where your story goes in the story list
export default {
    title: 'Misc/Multi-Select',
    component: MultiSelect
};

const selectValues = ['value one', 'value two', 'value three']

const Template: Story<ComponentProps<typeof MultiSelect>> = (args) => {
    const [values, setValues] = React.useState<string[]>([]);
    const handleValueChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setValues(event.target.value as string[])
    }
    return (
        <MultiSelect
            value={values}
            onChange={handleValueChange}
            {...args}>
            {selectValues.map((value) => (
                <MenuItem key={value} value={value}>
                    <Checkbox checked={values.indexOf(value) > -1} />
                    <ListItemText primary={value} />
                </MenuItem>
            ))}
        </MultiSelect>
    )
};

export const Main = Template.bind({});
Main.args = { };