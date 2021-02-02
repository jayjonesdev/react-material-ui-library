import React from 'react';
import { CheckboxProps, withStyles, Checkbox as MaterialCheckbox } from '@material-ui/core';

export default withStyles(theme => ({
    root: {
        color: theme.palette.primary.main
    }
}))((props: CheckboxProps) => (<MaterialCheckbox {...props} />));