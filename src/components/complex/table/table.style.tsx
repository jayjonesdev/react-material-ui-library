import { makeStyles } from "@material-ui/core";

export default makeStyles(theme => ({
    root: {
      display: "block",
      flex: 1,
      width: '100%',
      overflowX: 'hidden',
      overflow: 'none'
    },
    table: {
      height: "100%",
      width: "100%",
      overflowX: 'hidden',
      overflow: 'none'
    },
    list: { overflowX: 'hidden' },
    body: {
      width: "100%",
      backgroundColor: 'white',
      overflowX: 'hidden',
      overflow: 'none'
    }
  }));