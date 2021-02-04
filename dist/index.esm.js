import { jsx, jsxs } from 'react/jsx-runtime';
import React from 'react';
import { makeStyles, ListItem, ListItemIcon, ListItemText, Typography, withStyles, MenuItem, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, IconButton, AccordionSummary, AccordionDetails, Select, Input, Button, Menu as Menu$1, Checkbox, ClickAwayListener, Slide, Paper, Drawer as Drawer$1, List, AppBar, Toolbar } from '@material-ui/core';
import { useLocation, Link } from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import { Close, ExpandMore } from '@material-ui/icons';
import { makeStyles as makeStyles$1 } from '@material-ui/styles';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var useStyles = makeStyles(function (theme) { return ({
    root: {
        display: 'flex',
        justifyContent: 'flex-end',
        '& > *': {
            marginLeft: theme.spacing(2)
        }
    }
}); });

var ButtonBar = function (props) {
    var classes = useStyles();
    return (jsx("div", __assign({ className: classes.root }, { children: props.children }), void 0));
};

function toVal(mix) {
	var k, y, str='';

	if (typeof mix === 'string' || typeof mix === 'number') {
		str += mix;
	} else if (typeof mix === 'object') {
		if (Array.isArray(mix)) {
			for (k=0; k < mix.length; k++) {
				if (mix[k]) {
					if (y = toVal(mix[k])) {
						str && (str += ' ');
						str += y;
					}
				}
			}
		} else {
			for (k in mix) {
				if (mix[k]) {
					str && (str += ' ');
					str += k;
				}
			}
		}
	}

	return str;
}

function clsx () {
	var i=0, tmp, x, str='';
	while (i < arguments.length) {
		if (tmp = arguments[i++]) {
			if (x = toVal(tmp)) {
				str && (str += ' ');
				str += x;
			}
		}
	}
	return str;
}

var useStyles$1 = makeStyles(function (theme) { return ({
    root: {
        marginBottom: theme.spacing(2),
        display: 'flex',
        alignItems: 'center',
        '&:hover': {
            backgroundColor: theme.palette.primary.dark,
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.white,
            },
        },
        '&:focus': {
            backgroundColor: theme.palette.secondary.main,
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.white,
            },
        },
    },
    listitem: {
        color: '#fff'
    },
    active: {
        backgroundColor: theme.palette.secondary.main,
    },
    inactive: {
        backgroundColor: theme.palette.primary.light,
    }
}); });

var NavItem = function (props) {
    var text = props.text, icon = props.icon, disabled = props.disabled, link = props.link;
    var classes = useStyles$1();
    var location = useLocation();
    var isCurrentPath = function () { return link === location.pathname; };
    return (jsx(React.Fragment, { children: disabled ?
            jsxs(ListItem, __assign({ className: clsx(classes.listitem, classes.root, isCurrentPath() ? classes.active : classes.inactive) }, { children: [icon && jsx(ListItemIcon, __assign({ className: classes.listitem }, { children: icon }), void 0),
                    jsx(ListItemText, { primary: jsx(Typography, __assign({ variant: 'subtitle1' }, { children: text }), void 0) }, void 0)] }), text) : jsxs(ListItem, __assign({ button: true, component: Link, to: link, className: clsx(classes.listitem, classes.root, isCurrentPath() ? classes.active : classes.inactive) }, { children: [icon && jsx(ListItemIcon, __assign({ className: classes.listitem }, { children: icon }), void 0),
                jsx(ListItemText, { primary: jsx(Typography, __assign({ variant: 'subtitle1' }, { children: text }), void 0) }, void 0)] }), text) }, void 0));
};

var NavDropdownMenu = withStyles(function (theme) { return ({
    paper: {
        backgroundColor: theme.palette.primary.light,
        minWidth: 150,
        marginTop: 5
    },
}); })(function (props) { return (jsx(Menu, __assign({ elevation: 0, anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'right',
    }, getContentAnchorEl: null, transformOrigin: {
        vertical: 'top',
        horizontal: 'right',
    } }, props), void 0)); });

var NavDropdownMenuItem = withStyles(function (theme) { return ({
    root: {
        height: 50,
        padding: theme.spacing(2, 2),
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.common.white,
        '&:focus': {
            backgroundColor: theme.palette.primary.light,
            color: theme.palette.common.white,
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.white,
            },
        },
        '&:hover': {
            backgroundColor: theme.palette.primary.dark,
        }
    },
}); })(MenuItem);

var SimpleDialog = function (props) {
    var title = props.title, content = props.content;
    return (jsxs(Dialog, __assign({}, props, { children: [jsx(DialogTitle, { children: title }, void 0),
            jsx(DialogContent, { children: jsx(DialogContentText, __assign({ color: "textPrimary" }, { children: content }), void 0) }, void 0),
            jsx(DialogActions, { children: props.children }, void 0)] }), void 0));
};

var useStyles$2 = makeStyles$1(function (theme) { return ({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 50,
        width: '100%',
        backgroundColor: '#e7e7e7',
        padding: theme.spacing(0, 1),
        borderBottom: '1px solid #c7c7c7',
        marginBottom: theme.spacing()
    }
}); });

var FlyInHeader = function (props) {
    var classes = useStyles$2();
    return (jsxs("div", __assign({ className: classes.root }, { children: [jsx(Typography, __assign({ variant: 'h6' }, { children: props.title }), void 0),
            jsx(IconButton, __assign({ onClick: props.onClose }, { children: jsx(Close, {}, void 0) }), void 0)] }), void 0));
};

var useStyles$3 = makeStyles(function (theme) { return ({
    root: {
        borderTop: '1px solid #e7e7e7',
    }
}); });

var Accordion = function (props) {
    var classes = useStyles$3();
    return (jsxs(Accordion, __assign({ elevation: 0, className: classes.root }, props, { children: [jsx(AccordionSummary, __assign({ expandIcon: jsx(ExpandMore, {}, void 0) }, { children: jsx(Typography, __assign({ variant: 'body1' }, { children: props.title }), void 0) }), void 0),
            jsx(AccordionDetails, { children: props.children }, void 0)] }), void 0));
};

var ITEM_HEIGHT = 48;
var ITEM_PADDING_TOP = 8;
var MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
    getContentAnchorEl: null
};
var MultiSelect = function (props) { return (jsx(Select, __assign({}, props, { multiple: true, input: jsx(Input, {}, void 0), MenuProps: MenuProps }, { children: props.children }), void 0)); };

var useStyles$4 = makeStyles(function (theme) { return ({
    root: {
        minWidth: 150,
        marginTop: 5
    },
    secondary: {
        backgroundColor: theme.palette.secondary.dark
    },
    primary: {
        backgroundColor: theme.palette.primary.dark
    }
}); });

var MenuButton = React.forwardRef(function (props, ref) {
    var classes = useStyles$4();
    var _a = React.useState(null), anchorEl = _a[0], setAnchorEl = _a[1];
    var open = Boolean(anchorEl);
    var color = props.color;
    var handleMenu = function (event) {
        setAnchorEl(event.currentTarget);
    };
    var handleClose = function () {
        setAnchorEl(null);
    };
    React.useImperativeHandle(ref, function () { return ({
        closeMenu: function () { handleClose(); }
    }); });
    return (jsxs("div", { children: [jsx(Button, __assign({ startIcon: props.icon, disabled: props.disabled, color: color, variant: props.variant, size: props.size, onClick: handleMenu }, { children: props.text }), void 0),
            jsx(Menu$1, __assign({ classes: {
                    paper: color === 'secondary' ? clsx(classes.root, classes.secondary)
                        : clsx(classes.root, classes.primary)
                }, color: color, anchorEl: anchorEl, onClose: handleClose, elevation: 0, anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: 'left',
                }, getContentAnchorEl: null, transformOrigin: {
                    vertical: 'top',
                    horizontal: 'left',
                }, open: open }, { children: jsx("div", { children: props.children }, void 0) }), void 0)] }, void 0));
});

var useStyles$5 = makeStyles(function (theme) { return ({
    root: {
        height: 50,
        padding: theme.spacing(2, 2),
        color: theme.palette.common.white
    },
    secondary: {
        '&:hover': {
            backgroundColor: theme.palette.secondary.main,
        }
    },
    primary: {
        '&:hover': {
            backgroundColor: theme.palette.primary.main,
        }
    }
}); });

var MenuButtonItem = function (props) {
    var classes = useStyles$5();
    return (jsx(MenuItem, __assign({ color: props.color, onClick: props.onClick, className: classes.root, classes: {
            root: props.color === 'secondary' ? clsx(classes.root, classes.secondary) : clsx(classes.root, classes.primary)
        } }, { children: props.children }), void 0));
};

var checkbox = withStyles(function (theme) { return ({
    root: {
        color: theme.palette.primary.main
    }
}); })(function (props) { return (jsx(Checkbox, __assign({}, props), void 0)); });

var drawerWidth = 550;
var useStyles$6 = makeStyles$1(function (theme) {
    var _a;
    return ({
        paper: {
            display: 'flex',
            flexDirection: 'column',
            position: 'fixed',
            top: 0,
            border: '1px solid #c7c7c7',
            width: drawerWidth,
            height: '100vh',
            right: 0,
            zIndex: theme.zIndex.drawer + 2
        },
        drawer: {
            flexShrink: 0,
            whiteSpace: 'nowrap',
        },
        drawerOpen: {
            border: '1px solid #c7c7c7',
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
            backgroundColor: theme.palette.common.white,
            zIndex: 201
        },
        drawerClose: (_a = {
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                overflowX: 'hidden',
                width: theme.spacing(7) + 1
            },
            _a[theme.breakpoints.up('sm')] = {
                width: theme.spacing(9) + 1,
            },
            _a),
        content: {
            width: '100%',
            padding: theme.spacing(0, 1)
        },
    });
});
var Flyin = function (props) {
    var classes = useStyles$6();
    var wrapperRef = React.useRef(null);
    var open = props.open, onClickAway = props.onClickAway, buttons = props.buttons;
    React.useEffect(function () {
        var handleClickOutside = function (event) {
            if (open && wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                onClickAway();
            }
        };
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return function () {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [wrapperRef, open, onClickAway]);
    return (jsx(ClickAwayListener, __assign({ onClickAway: onClickAway, mouseEvent: 'onMouseDown' }, { children: jsx(Slide, __assign({ in: props.open, mountOnEnter: true, unmountOnExit: true, direction: 'left' }, { children: jsxs(Paper, __assign({ className: classes.paper }, { children: [jsx(FlyInHeader, { title: props.title, onClose: onClickAway }, void 0),
                    jsxs("div", __assign({ className: classes.content }, { children: [props.children, jsx(ButtonBar, { children: buttons }, void 0)] }), void 0)] }), void 0) }), void 0) }), void 0));
};

var drawerWidth$1 = 240;
var useStyles$7 = makeStyles$1(function (theme) {
    var _a;
    return ({
        drawer: {
            width: drawerWidth$1,
            flexShrink: 0,
            whiteSpace: 'nowrap',
        },
        drawerOpen: {
            width: drawerWidth$1,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
            backgroundColor: theme.palette.primary.light
        },
        drawerClose: (_a = {
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                overflowX: 'hidden',
                width: theme.spacing(7) + 1
            },
            _a[theme.breakpoints.up('sm')] = {
                width: theme.spacing(9) + 1,
            },
            _a.backgroundColor = theme.palette.primary.light,
            _a),
        list: {
            marginTop: theme.spacing(12),
            padding: theme.spacing(0, 1),
        },
    });
});

var Drawer = function (props) {
    var _a, _b;
    var classes = useStyles$7();
    var _c = React.useState(false), open = _c[0], setOpen = _c[1];
    var toggleDrawer = function () {
        setOpen(!open);
    };
    return (jsx(Drawer$1, __assign({ className: clsx(classes.drawer, (_a = {},
            _a[classes.drawerOpen] = open,
            _a[classes.drawerClose] = !open,
            _a)), classes: {
            paper: clsx((_b = {},
                _b[classes.drawerOpen] = open,
                _b[classes.drawerClose] = !open,
                _b)),
        }, onMouseEnter: toggleDrawer, onMouseLeave: toggleDrawer }, props, { children: jsx(List, __assign({ className: classes.list }, { children: props.children }), void 0) }), void 0));
};

var useStyles$8 = makeStyles(function (theme) { return ({
    appBar: {
        padding: theme.spacing(.5, .5),
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    toolbar: __assign({ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }, theme.mixins.toolbar),
}); });

var Appbar = function (props) {
    var classes = useStyles$8();
    return (jsx(AppBar, __assign({ className: classes.appBar }, props, { children: jsx(Toolbar, __assign({ className: classes.toolbar }, { children: props.children }), void 0) }), void 0));
};

export { Accordion, Appbar, ButtonBar, checkbox as Checkbox, Drawer, Flyin, MenuButton, MenuButtonItem, MultiSelect, NavDropdownMenu, NavDropdownMenuItem, NavItem, SimpleDialog };
