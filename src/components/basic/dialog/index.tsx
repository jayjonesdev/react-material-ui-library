import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogProps, DialogTitle } from '@material-ui/core';

const SimpleDialog: React.FC<IProps & DialogProps> = (props) => {
    const { title, content, textColor = 'textPrimary' } = props;
    return (
        <Dialog {...props}>
            <DialogTitle data-testid='dialog-title'>{title}</DialogTitle>
            <DialogContent>
                <DialogContentText data-testid='dialog-content' color={textColor}>{content}</DialogContentText>
            </DialogContent>
            <DialogActions data-testid='dialog-children'>{props.children}</DialogActions>
        </Dialog>
    )
}

export default SimpleDialog;

interface IProps {
    title: string;
    content: string;
    textColor?: 'textPrimary' | 'textSecondary' | 'primary' | 'secondary'
}