import React from 'react';
import { MenuProps, MenuItemProps, SelectProps, DialogProps, CheckboxProps, 
    AccordionProps as MaterialAccordionProps, AppBarProps, DrawerProps, SlideProps } from '@material-ui/core/Menu';

declare module '@jayjonesdev/react-material-ui-library' {
    export interface NavItemProps {
        text: string;
        link: string;
        icon?: JSX.Element;
        disabled?: boolean
    };
    export const NavItem: React.FC<NavItemProps>;

    export const NavDropdownMenu: React.FC<MenuProps>; 
    export const NavDropdownMenuItem: React.FC<MenuItemProps>; 
    export const MultiSelect: React.FC<SelectProps>; 

    export interface MenuButtonProps {
        icon?: JSX.Element;
        text?: string;
        color?: 'default' | 'inherit' | 'primary' | 'secondary';
        disabled?: boolean;
        size?: 'large' | 'medium' | 'small';
        children?: any;
        variant?: 'contained' | 'outlined' | 'text';
        ref?: React.RefObject<any>;
    };
    export const MenuButton: React.FC<MenuButtonProps>;

    export interface MenuButtonItemProps extends MenuItemProps {
        color?: 'default' | 'inherit' | 'primary' | 'secondary';
        variant?: 'contained' | 'outlined' | 'text';
    };
    export const MenuButtonItem: React.FC<MenuButtonItemProps>;

    export interface SimpleDialogProps extends DialogProps {
        title: string;
        content: string;
    };
    export const SimpleDialog: React.FC<SimpleDialogProps>;

    export const Checkbox: React.FC<CheckboxProps>;

    export interface ButtonBarProps {
        children: React.ReactNode;
    };
    export const ButtonBar: React.FC<ButtonBarProps>;

    export interface AccordionProps extends MaterialAccordionProps {
        title: string;
    };
    export const Accordion: React.FC<AccordionProps>;

    export const Appbar: React.FC<AppBarProps>;
    export const Drawer: React.FC<DrawerProps>;

    export interface FlyinProps extends SlideProps {
        title: string;
        open: boolean;
        onClickAway: () => void;
        buttons?: React.ReactNode;
    };
    export const Flyin: React.FC<FlyinProps>;
}