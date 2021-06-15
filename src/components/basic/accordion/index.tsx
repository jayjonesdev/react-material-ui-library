import React from 'react';
import { Accordion as MaterialAccordion, AccordionDetails, AccordionProps, AccordionSummary, Typography } from '@material-ui/core';
import { ExpandMore as ExpandMoreIcon } from '@material-ui/icons';
import useStyles from './index.style';

const Accordion: React.FC<IProps & AccordionProps> = (props) => {
    const classes = useStyles();

    return (
        <MaterialAccordion elevation={0} className={classes.root} {...props}>
            <AccordionSummary data-testid='accordion-expand-button' expandIcon={<ExpandMoreIcon />} >
                <Typography data-testid='accordion-title' variant={'body1'}>{props.title}</Typography>
            </AccordionSummary>
            <AccordionDetails data-testid='accordion-children'>
                {props.children}
            </AccordionDetails>
        </MaterialAccordion>
    )
}

export default Accordion;

interface IProps {
    title: string;
}