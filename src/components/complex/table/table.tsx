import React from 'react';
import memoize from "memoize-one";
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import { Table, TableBody, TableContainer, Paper, TableProps } from "@material-ui/core";
import useStyles from './table.style';
import { TableHead, TableRow } from '../../basic';

const createItemData = memoize((classes, columns, data, onRowClick) => ({
    columns,
    classes,
    items: data,
    onRowClick
}));

export default (props: IProps & TableProps) => {
    const classes = useStyles();
    const ROW_SIZE: number = 48;
    const { columns, data, onRowClick, key = 'id', onColumnClick } = props;
    const itemData: IData = createItemData(classes, columns, data, onRowClick);
    const itemKey = (index: number, data: IData) => {
        const item = data.items[index];
        return item[key];
    }

    return (
        <TableContainer {...props} component={Paper} className={classes.root}>
            <Table className={classes.table} component="div">
                <TableHead columns={columns} onColumnClick={onColumnClick} />
                <TableBody component="div" className={classes.body}>
                    <AutoSizer>
                        {({ height, width }) => (
                            <List
                                className={classes.list}
                                height={height}
                                width={width}
                                itemCount={data.length}
                                itemSize={ROW_SIZE}
                                itemKey={itemKey}
                                itemData={itemData}
                            >
                                {TableRow}
                            </List>
                        )}
                    </AutoSizer>
                </TableBody>
            </Table>
        </TableContainer>
    );
}

interface IProps {
    columns: ITableColumn[];
    data: any[];
    key?: string;
    onColumnClick: (column: ITableColumn) => void;
    onRowClick: (item: any) => void;
}

interface IData {
    columns: ITableColumn[];
    classes: any;
    items: any[];
    onRowClick: (item: any) => void;
}

interface ITableColumn {
    label: string;
    dataKey: string;
    numeric?: boolean;
    width: string;
    sort: 'ASC' | 'DESC' | null;
}