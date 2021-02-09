import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';
import * as yup from 'yup';
import { Form } from '../../components/complex';
import { makeStyles } from '@material-ui/core';

// This default export determines where your story goes in the story list
export default {
    title: 'Data Input/Form',
    component: Form,
    argTypes: {
        color: {
            control: {
                type: 'inline-radio',
                options: [
                    'primary',
                    'secondary',
                    'default'
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
        },
        buttonVariant: {
            control: {
                type: 'inline-radio',
                options: [
                    'text',
                    'outlined',
                    'contained'
                ],
            }
        },
        readOnly: {
            control: {
                type: 'inline-radio',
                options: [
                    true,
                    false
                ],
            }
        },
    }
};

const Template: Story<ComponentProps<typeof Form>> = (args) => {
    const useStyles = makeStyles(theme => ({
        form: {
            width: '25%'
        }
    }));
    const classes = useStyles();

    return (<Form {...args} className={classes.form} />);
}



const validationSchema: yup.ObjectSchema<any> = yup.object({
    email: yup
        .string()
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup
        .string()
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
    accountType: yup
        .string()
        .required('Please select an account type'),
    notes: yup
        .string()
        .max(255, 'Notes should be a maximum of 255 characters'),
    dateOfBirth: yup
        .date()
});

const inputs = [
    {
        label: 'Email',
        name: 'email',
        inputType: 'text' as const,
        type: 'email' as const,
        initialValue: ''
    }, {
        label: 'Password',
        name: 'password',
        inputType: 'text' as const,
        type: 'password' as const,
        initialValue: ''
    }, {
        label: 'Date of Birth',
        name: 'dateOfBirth',
        inputType: 'date' as const,
        type: 'date' as const,
        initialValue: new Date().toLocaleDateString()
    }, {
        label: 'Account Type',
        name: 'accountType',
        inputType: 'select' as const,
        type: 'text' as const,
        initialValue: '',
        options: [
            {
                label: 'Admin',
                value: 'Admin'
            }, {
                label: 'Basic',
                value: 'Basic'
            }
        ]
    }, {
        label: 'Notes',
        name: 'notes',
        inputType: 'multiline' as const,
        type: 'text' as const,
        initialValue: ''
    }, {
        label: 'Tags',
        name: 'tags',
        inputType: 'multiselect' as const,
        type: 'text' as const,
        initialValue: '',
        options: [
            {
                label: 'Linux',
                value: 'Linux'
            }, {
                label: 'Windows 10',
                value: 'Windows 10'
            }
        ]
    }
]

export const Main = Template.bind({});
Main.args = {
    validationSchema: validationSchema,
    inputs: inputs,
    buttonText: ['Cancel', 'Save'],
    readOnly: false,
    onSubmit: (values) => alert(JSON.stringify(values, null, 2)),
};