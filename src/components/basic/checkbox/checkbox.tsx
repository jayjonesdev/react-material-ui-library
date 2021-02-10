import React from 'react';
import { CheckboxProps, withStyles, Checkbox as MaterialCheckbox, FormControlLabel } from '@material-ui/core';

export default withStyles(theme => ({
    root: {
        color: theme.palette.primary.main
    }
}))((props: IProps & CheckboxProps) => (<FormControlLabel
    control={
        <MaterialCheckbox {...props} />
    }
    label={props.label}
/>));

interface IProps {
    label: string;
}