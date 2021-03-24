import { makeStyles } from "@material-ui/core";

export default makeStyles(theme => ({
    root: {
        display: "block",
        height: '100%',
        width: '100%',
        overflow: 'hidden'
    },
    table: {
        display: 'table'
        // flex: 1,
        // height: "100%",
        // width: "100%",
    },
    list: {
        // overflowY: 'auto'
        // overflowX: 'hidden'
    },
    body: {
        width: "100%",
        backgroundColor: 'white',
        //   overflowX: 'hidden'
    }
}));