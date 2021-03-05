import { makeStyles } from "@material-ui/core";

export default makeStyles(theme => ({
    row: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        alignItems: "center",
        boxSizing: "border-box",
        minWidth: "100%",
        width: "100%",
    },
    headerRow: { overflowX: 'hidden' },
    cell: {
        display: "block",
        flexGrow: 0,
        flexShrink: 0
    },
    expandingCell: { flex: 1 },
    column: { userSelect: 'none' },
    thead: { backgroundColor: theme.palette.secondary.light },
    icon: {
        color: 'white',
        fontSize: 20,
        marginLeft: theme.spacing() * .5,
    }
}));
