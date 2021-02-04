import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogProps, DialogTitle } from '@material-ui/core';

const SimpleDialog: React.FC<IProps> = (props) => {
    const { title, content } = props;
    return (
        <Dialog {...props}>
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>
                <DialogContentText color="textPrimary">{content}</DialogContentText>
            </DialogContent>
            <DialogActions>{props.children}</DialogActions>
        </Dialog>
    )
}

export default SimpleDialog;

interface IProps extends DialogProps {
    title: string;
    content: string;
}