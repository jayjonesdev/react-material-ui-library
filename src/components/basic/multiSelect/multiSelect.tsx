import React from 'react';
import { TextFieldProps, TextField } from '@material-ui/core';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
    getContentAnchorEl: null
};

export default (props: IProps & TextFieldProps) => (
    <TextField
        {...props}
        select
        SelectProps={{
            multiple: true, MenuProps: MenuProps, readOnly: props.readOnly,
            renderValue: (selected) => (selected as string[]).join(', ')
        }}
    >
        {props.children}
    </TextField>
);

interface IProps {
    readOnly?: boolean;
}