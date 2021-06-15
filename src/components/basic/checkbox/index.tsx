import React from 'react';
import { CheckboxProps, withStyles, Checkbox as MaterialCheckbox, ListItemText } from '@material-ui/core';

export default withStyles(theme => ({
    root: {
        color: theme.palette.primary.main
    }
}))((props: IProps & CheckboxProps) => (
    <div style={{ display: 'flex', alignItems: 'center' }}>
        <MaterialCheckbox data-testid='checkbox' {...props} />
        <ListItemText data-testid='checkbox-label' primary={props.label} />
    </div>
));

interface IProps {
    label: string;
}