'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var core = require('@material-ui/core');
var reactRouterDom = require('react-router-dom');
var Menu = require('@material-ui/core/Menu');
var icons = require('@material-ui/icons');
var styles = require('@material-ui/styles');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var Menu__default = /*#__PURE__*/_interopDefaultLegacy(Menu);

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

var useStyles = core.makeStyles(function (theme) { return ({
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
    return (jsxRuntime.jsx("div", __assign({ className: classes.root }, { children: props.children }), void 0));
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

var useStyles$1 = core.makeStyles(function (theme) { return ({
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
    var location = reactRouterDom.useLocation();
    var isCurrentPath = function () { return link === location.pathname; };
    return (jsxRuntime.jsx(React__default['default'].Fragment, { children: disabled ?
            jsxRuntime.jsxs(core.ListItem, __assign({ className: clsx(classes.listitem, classes.root, isCurrentPath() ? classes.active : classes.inactive) }, { children: [icon && jsxRuntime.jsx(core.ListItemIcon, __assign({ className: classes.listitem }, { children: icon }), void 0),
                    jsxRuntime.jsx(core.ListItemText, { primary: jsxRuntime.jsx(core.Typography, __assign({ variant: 'subtitle1' }, { children: text }), void 0) }, void 0)] }), text) : jsxRuntime.jsxs(core.ListItem, __assign({ button: true, component: reactRouterDom.Link, to: link, className: clsx(classes.listitem, classes.root, isCurrentPath() ? classes.active : classes.inactive) }, { children: [icon && jsxRuntime.jsx(core.ListItemIcon, __assign({ className: classes.listitem }, { children: icon }), void 0),
                jsxRuntime.jsx(core.ListItemText, { primary: jsxRuntime.jsx(core.Typography, __assign({ variant: 'subtitle1' }, { children: text }), void 0) }, void 0)] }), text) }, void 0));
};

var NavDropdownMenu = core.withStyles(function (theme) { return ({
    paper: {
        backgroundColor: theme.palette.primary.light,
        minWidth: 150,
        marginTop: 5
    },
}); })(function (props) { return (jsxRuntime.jsx(Menu__default['default'], __assign({ elevation: 0, anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'right',
    }, getContentAnchorEl: null, transformOrigin: {
        vertical: 'top',
        horizontal: 'right',
    } }, props), void 0)); });

var NavDropdownMenuItem = core.withStyles(function (theme) { return ({
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
}); })(core.MenuItem);

var SimpleDialog = function (props) {
    var title = props.title, content = props.content;
    return (jsxRuntime.jsxs(core.Dialog, __assign({}, props, { children: [jsxRuntime.jsx(core.DialogTitle, { children: title }, void 0),
            jsxRuntime.jsx(core.DialogContent, { children: jsxRuntime.jsx(core.DialogContentText, __assign({ color: "textPrimary" }, { children: content }), void 0) }, void 0),
            jsxRuntime.jsx(core.DialogActions, { children: props.children }, void 0)] }), void 0));
};

var useStyles$2 = styles.makeStyles(function (theme) { return ({
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
    return (jsxRuntime.jsxs("div", __assign({ className: classes.root }, { children: [jsxRuntime.jsx(core.Typography, __assign({ variant: 'h6' }, { children: props.title }), void 0),
            jsxRuntime.jsx(core.IconButton, __assign({ onClick: props.onClose }, { children: jsxRuntime.jsx(icons.Close, {}, void 0) }), void 0)] }), void 0));
};

var useStyles$3 = core.makeStyles(function (theme) { return ({
    root: {
        borderTop: '1px solid #e7e7e7',
    }
}); });

var CustomAccordion = function (props) {
    var classes = useStyles$3();
    return (jsxRuntime.jsxs(core.Accordion, __assign({ elevation: 0, className: classes.root }, props, { children: [jsxRuntime.jsx(core.AccordionSummary, __assign({ expandIcon: jsxRuntime.jsx(icons.ExpandMore, {}, void 0) }, { children: jsxRuntime.jsx(core.Typography, __assign({ variant: 'body1' }, { children: props.title }), void 0) }), void 0),
            jsxRuntime.jsx(core.AccordionDetails, { children: props.children }, void 0)] }), void 0));
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
var MultiSelect = function (props) { return (jsxRuntime.jsx(core.Select, __assign({}, props, { multiple: true, input: jsxRuntime.jsx(core.Input, {}, void 0), MenuProps: MenuProps }, { children: props.children }), void 0)); };

var useStyles$4 = core.makeStyles(function (theme) { return ({
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

var MenuButton = React__default['default'].forwardRef(function (props, ref) {
    var classes = useStyles$4();
    var _a = React__default['default'].useState(null), anchorEl = _a[0], setAnchorEl = _a[1];
    var open = Boolean(anchorEl);
    var color = props.color;
    var handleMenu = function (event) {
        setAnchorEl(event.currentTarget);
    };
    var handleClose = function () {
        setAnchorEl(null);
    };
    React__default['default'].useImperativeHandle(ref, function () { return ({
        closeMenu: function () { handleClose(); }
    }); });
    return (jsxRuntime.jsxs("div", { children: [jsxRuntime.jsx(core.Button, __assign({ startIcon: props.icon, disabled: props.disabled, color: color, variant: props.variant, size: props.size, onClick: handleMenu }, { children: props.text }), void 0),
            jsxRuntime.jsx(core.Menu, __assign({ classes: {
                    paper: color === 'secondary' ? clsx(classes.root, classes.secondary)
                        : clsx(classes.root, classes.primary)
                }, color: color, anchorEl: anchorEl, onClose: handleClose, elevation: 0, anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: 'left',
                }, getContentAnchorEl: null, transformOrigin: {
                    vertical: 'top',
                    horizontal: 'left',
                }, open: open }, { children: jsxRuntime.jsx("div", { children: props.children }, void 0) }), void 0)] }, void 0));
});

var useStyles$5 = core.makeStyles(function (theme) { return ({
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
    return (jsxRuntime.jsx(core.MenuItem, __assign({ color: props.color, onClick: props.onClick, className: classes.root, classes: {
            root: props.color === 'secondary' ? clsx(classes.root, classes.secondary) : clsx(classes.root, classes.primary)
        } }, { children: props.children }), void 0));
};

var checkbox = core.withStyles(function (theme) { return ({
    root: {
        color: theme.palette.primary.main
    }
}); })(function (props) { return (jsxRuntime.jsx(core.Checkbox, __assign({}, props), void 0)); });

var drawerWidth = 550;
var useStyles$6 = styles.makeStyles(function (theme) {
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
var FlyIn = function (props) {
    var classes = useStyles$6();
    var wrapperRef = React__default['default'].useRef(null);
    var open = props.open, onClickAway = props.onClickAway, buttons = props.buttons;
    React__default['default'].useEffect(function () {
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
    return (jsxRuntime.jsx(core.ClickAwayListener, __assign({ onClickAway: onClickAway, mouseEvent: 'onMouseDown' }, { children: jsxRuntime.jsx(core.Slide, __assign({ in: props.open, mountOnEnter: true, unmountOnExit: true, direction: 'left' }, { children: jsxRuntime.jsxs(core.Paper, __assign({ className: classes.paper }, { children: [jsxRuntime.jsx(FlyInHeader, { title: props.title, onClose: onClickAway }, void 0),
                    jsxRuntime.jsxs("div", __assign({ className: classes.content }, { children: [props.children, jsxRuntime.jsx(ButtonBar, { children: buttons }, void 0)] }), void 0)] }), void 0) }), void 0) }), void 0));
};

var drawerWidth$1 = 240;
var useStyles$7 = styles.makeStyles(function (theme) {
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
    var _c = React__default['default'].useState(false), open = _c[0], setOpen = _c[1];
    var toggleDrawer = function () {
        setOpen(!open);
    };
    return (jsxRuntime.jsx(core.Drawer, __assign({ className: clsx(classes.drawer, (_a = {},
            _a[classes.drawerOpen] = open,
            _a[classes.drawerClose] = !open,
            _a)), classes: {
            paper: clsx((_b = {},
                _b[classes.drawerOpen] = open,
                _b[classes.drawerClose] = !open,
                _b)),
        }, onMouseEnter: toggleDrawer, onMouseLeave: toggleDrawer }, props, { children: jsxRuntime.jsx(core.List, __assign({ className: classes.list }, { children: props.children }), void 0) }), void 0));
};

var useStyles$8 = core.makeStyles(function (theme) { return ({
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
    return (jsxRuntime.jsx(core.AppBar, __assign({ className: classes.appBar }, props, { children: jsxRuntime.jsx(core.Toolbar, __assign({ className: classes.toolbar }, { children: props.children }), void 0) }), void 0));
};

exports.Appbar = Appbar;
exports.ButtonBar = ButtonBar;
exports.Checkbox = checkbox;
exports.CustomAccordion = CustomAccordion;
exports.Drawer = Drawer;
exports.FlyIn = FlyIn;
exports.MenuButton = MenuButton;
exports.MenuButtonItem = MenuButtonItem;
exports.MultiSelect = MultiSelect;
exports.NavDropdownMenu = NavDropdownMenu;
exports.NavDropdownMenuItem = NavDropdownMenuItem;
exports.NavItem = NavItem;
exports.SimpleDialog = SimpleDialog;
