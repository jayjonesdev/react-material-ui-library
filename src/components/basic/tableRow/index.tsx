import React from 'react';
import { TableCell, Typography, TableRow, TableRowProps } from '@material-ui/core';
import clsx from 'clsx';
import useStyles from './style';

export default (props: IProps & TableRowProps) => {
    const ROW_SIZE = 48;
    const { data, index } = props;
    const { onRowClick, items, columns } = data;
    const classes = useStyles();
    const item = items[index];
    const [hover, setHover] = React.useState<boolean>(false);

    const tableRowProps = (): TableRowProps => {
        let { data, index, ...rest } = props;
        return rest;
    }

    return (
        <TableRow
            className={classes.row}
            onClick={() => onRowClick(item)}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            {...tableRowProps()}
        >
            {columns.map((column, colIndex) => {
                return (
                    <TableCell
                        key={colIndex}
                        variant="body"
                        align={column.numeric || false ? "right" : "left"}
                        className={clsx(
                            classes.cell,
                            classes.expandingCell,
                            classes.truncate
                        )}
                        style={{
                            flexBasis: column.width,
                            height: ROW_SIZE
                        }}
                    >
                        <Typography variant={'body2'} noWrap={true} className={clsx(classes.text, hover ? classes.textColorHover : classes.textColor)}>
                            {((item as any)[column.dataKey]).length === 0 ? 'N/A' : (item as any)[column.dataKey]}
                        </Typography>
                    </TableCell>
                );
            })}
        </TableRow>
    )
}

interface IProps {
    index: number;
    data: IData;
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