import React from 'react';
import { TableHead, TableCell, Typography, TableRow, TableHeadProps } from '@material-ui/core';
import { ArrowDownward, ArrowUpward } from '@material-ui/icons';
import clsx from 'clsx';
import useStyles from './tableHead.style';

export default (props: IProps & TableHeadProps) => {
    const ROW_SIZE = 48;
    const classes = useStyles();
    const { columns, onColumnClick } = props;

    return (
        <TableHead className={classes.thead} {...props}>
            <TableRow className={classes.row}>
                {columns.map((column, colIndex) => {
                    return (
                        <TableCell
                            key={colIndex}
                            variant="head"
                            align={column.numeric || false ? "right" : "left"}
                            className={clsx(
                                classes.cell,
                                classes.column,
                                classes.expandingCell
                            )}
                            style={{
                                flexBasis: column.width,
                                height: ROW_SIZE
                            }}
                            scope="col"
                            onClick={() => onColumnClick(column)}
                        >
                            <Typography variant='body1' style={{
                                color: 'white', display: 'flex', fontWeight: 800,
                                justifyContent: column.numeric || false ? "flex-end" : "flex-start",
                                alignContent: 'baseline',
                            }}>{column.label} {column.sort === null ? (null) : column.sort === 'DESC' ? <ArrowDownward className={classes.icon} />
                                : <ArrowUpward className={classes.icon} />}
                            </Typography>
                        </TableCell>
                    );
                })}
            </TableRow>
        </TableHead>
    )
}

interface IProps {
    columns: ITableColumn[];
    onColumnClick: (column: ITableColumn) => void;
}

interface ITableColumn {
    label: string;
    dataKey: string;
    numeric?: boolean;
    width: string;
    sort: 'ASC' | 'DESC' | null;
}