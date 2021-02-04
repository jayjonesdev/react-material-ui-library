import React from 'react';
import { Input, Select, SelectProps } from '@material-ui/core';

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

const MultiSelect: React.FC<SelectProps> = (props) => (
    <Select
        {...props}
        multiple
        input={<Input />}
        MenuProps={MenuProps}
    >
        {props.children}
    </Select>
);

export default MultiSelect;