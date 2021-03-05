import { makeStyles } from "@material-ui/core";

export default makeStyles(theme => ({
    row: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        alignItems: "baseline",
        boxSizing: "border-box",
        minWidth: "100%",
        width: "100%",
        '&:hover': {
            backgroundColor: theme.palette.primary.main,
        },
        cursor: 'pointer'
    },
    cell: {
        display: "block",
        flexGrow: 0,
        flexShrink: 0
    },
    expandingCell: { flex: 1 },
    truncate: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
    },
    textColorHover: {
        color: theme.palette.text.primary,
        fontSize: 14
    },
    textColor: {
        color: theme.palette.text.secondary,
        fontSize: 14
    }
}));