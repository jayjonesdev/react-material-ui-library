import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';
import { Form } from '../../../components/complex';
import { makeStyles } from '@material-ui/core';
import { formInputs, validationSchema, argTypes } from './Form';

export default {
    title: 'Data Input/Form',
    component: Form,
    argTypes: argTypes
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

export const Main = Template.bind({});
Main.args = {
    validationSchema: validationSchema,
    inputs: formInputs,
    buttonText: ['Cancel', 'Save'],
    onSubmit: (values) => alert(JSON.stringify(values, null, 2)),
};