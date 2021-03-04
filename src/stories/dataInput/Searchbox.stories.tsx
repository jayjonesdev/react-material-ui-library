import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';
import { Searchbox } from '../../components/basic';

const argTypes = {
    color: {
        control: {
            type: 'inline-radio',
            options: [
                'primary',
                'secondary'
            ],
        }
    },
    variant: {
        control: {
            type: 'inline-radio',
            options: [
                'filled',
                'outlined',
                'standard'
            ],
        }
    },
    size: {
        control: {
            type: 'select',
            options: [
                'small',
                'medium'
            ],
        }
    },
    margin: {
        control: {
            type: 'inline-radio',
            options: [
                'normal',
                'none',
                'dense'
            ],
        }
    }
};

export default {
    title: 'Data Input/Searchbox',
    component: Searchbox,
    argTypes: argTypes
};

const Template: Story<ComponentProps<typeof Searchbox>> = (args) => {
    const [value, setValue] = React.useState('');
    return (<Searchbox {...args} value={value} onChange={(e) => setValue(e.target.value)} onClear={() => setValue('')} />);
}

export const Main = Template.bind({});
Main.args = {
    placeholder: 'Insert value here...',
    color: 'primary'
};