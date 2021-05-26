import { makeStyles } from "@material-ui/core";

export default makeStyles(theme => ({
    root: {
        display: "block",
        height: '100%',
        width: '100%',
        // overflow: 'hidden'
    },
    list: {
        // overflowY: 'auto'
        // overflowX: 'hidden'
        // scrollbarWidth: 'none',
        // scrollbarColor: 'transparent transparent',
        // msOverflowStyle: 'none',
        // '&::-webkit-scrollbar': {
        //     width: '1px'
        // },
        // '&::-webkit-scrollbar-track': {
        //     background: 'transparent'
        // },
        // '&::-webkit-scrollbar-thumb': {
        //     background: 'transparent'
        // }
        // zIndex: -1
    },
    'list::-webkit-srollbar': {
        // display: 'none'
            height: '16px',
            overflow: 'visible',
            width: '16px',
            display: 'none'
    },
    body: {
        width: "100%",
        backgroundColor: 'white',
        //   overflowX: 'hidden'
    }
}));