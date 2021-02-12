import React from 'react';
import { TextField, TextFieldProps } from '@material-ui/core';

export default (props: TextFieldProps & IProps) => (
    <TextField {...props} InputProps={{ readOnly: props.readOnly }} select>
        {props.children}
    </TextField>
);

interface IProps {
    readOnly?: boolean;
}