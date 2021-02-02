import React from 'react';
import { Accordion, AccordionDetails, AccordionProps, AccordionSummary, Typography } from '@material-ui/core';
import { ExpandMore as ExpandMoreIcon } from '@material-ui/icons';
import useStyles from './accordion.style';

const CustomAccordion: React.FunctionComponent<IProps> = (props) => {
    const classes = useStyles();

    return (
        <Accordion elevation={0} className={classes.root} {...props}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} >
                <Typography variant={'body1'}>{props.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                {props.children}
            </AccordionDetails>
        </Accordion>
    )
}

export default CustomAccordion;

interface IProps extends AccordionProps {
    title: string;
}