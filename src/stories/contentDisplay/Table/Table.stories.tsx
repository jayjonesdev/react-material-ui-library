import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';

import { Table } from '../../../components/complex';
import { columns as defaultColumns, data } from './tableData';
import { makeStyles } from '@material-ui/core';

export default {
    title: 'Content Display/Table',
    component: Table,
};
const useStyles = makeStyles(theme => ({
    root: {
        height: '90vh',
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        display: 'flex',
        position: 'relative',
        overflow: 'hidden',
        flexGrow: 1,
        // paddingLeft: theme.spacing() * 3,
        // paddingRight: theme.spacing() * 3,
        // paddingBottom: theme.spacing() * 3,
        // paddingTop: theme.spacing() * 3,
    }
}));

const Template: Story<ComponentProps<typeof Table>> = (args) => {
    // const [width, setWidth] = React.useState<number>(0);
    const [columns, setColumns] = React.useState(defaultColumns);
    const classes = useStyles();
    const onColumnClick = (column: any) => {
        const updatedColumns = columns.map(currentColumn => {
            if (currentColumn.label !== column.label) {
                currentColumn.sort = null;
            } else {
                currentColumn.sort = currentColumn.sort === null ? 'ASC' : currentColumn.sort === 'ASC' ? 'DESC' : null;
            }
            return currentColumn;
        });
        setColumns(updatedColumns);
    }

    return (
        <div className={classes.root}>
            <Table {...args} columns={columns} onColumnClick={onColumnClick} data={data} />
        </div>
    );
}

export const Main = Template.bind({});
Main.args = {
    onRowClick: (item: any) => alert(JSON.stringify(item)),
    key: 'releaseId'
};