import React from 'react';
import { Accordion as MaterialAccordion, AccordionDetails, AccordionProps, AccordionSummary, Typography } from '@material-ui/core';
import { ExpandMore as ExpandMoreIcon } from '@material-ui/icons';
import useStyles from './accordion.style';

const Accordion: React.FC<IProps> = (props) => {
    const classes = useStyles();

    return (
        <MaterialAccordion elevation={0} className={classes.root} {...props}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} >
                <Typography variant={'body1'}>{props.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                {props.children}
            </AccordionDetails>
        </MaterialAccordion>
    )
}

export default Accordion;

interface IProps extends AccordionProps {
    title: string;
}