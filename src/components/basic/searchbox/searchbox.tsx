import React from 'react';
import { InputAdornment, TextField, TextFieldProps } from '@material-ui/core';
import { Cancel, Search } from '@material-ui/icons';

export default (props: TextFieldProps & IProps) => {
    const { onClear, value, color } = props;
    return (
        <TextField
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <Search color={color} />
                    </InputAdornment>
                ),
                endAdornment: (
                    <InputAdornment position="end">
                        {(value as string).length > 0 && <Cancel color={color} style={{ cursor: 'pointer' }} onClick={onClear} />}
                    </InputAdornment>
                )
            }}
            {...props}
        />
    )
}

interface IProps {
    onClear?: () => void;
}