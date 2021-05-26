import { makeStyles } from "@material-ui/core";

export default makeStyles(theme => ({
    row: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        alignItems: "baseline",
        boxSizing: "border-box",
        width: "100%",
        '&:hover': {
            backgroundColor: theme.palette.primary.main,
        },
        '&:active': {
            color: theme.palette.primary.contrastText,
        },
        cursor: 'pointer',
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
    text: {
        fontWeight: 500
    },
    textColorHover: { color: theme.palette.primary.contrastText },
    textColor: { color: theme.palette.primary.main }
}));