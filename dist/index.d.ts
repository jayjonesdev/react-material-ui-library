declare module '@jayjonesdev/react-material-ui-library' {
    export interface NavItemProps {
        text: string;
        link: string;
        icon?: JSX.Element;
        disabled?: boolean
    };
    export const NavItem: React.FC<NavItemProps>;

    export const NavDropdownMenu: React.FC<import('@material-ui/core').MenuProps>; 
    export const NavDropdownMenuItem: React.FC<import('@material-ui/core').MenuItemProps>; 
    export const MultiSelect: React.FC<import('@material-ui/core').SelectProps>; 

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

    export interface MenuButtonItemProps extends import('@material-ui/core').MenuItemProps {
        color?: 'default' | 'inherit' | 'primary' | 'secondary';
        variant?: 'contained' | 'outlined' | 'text';
    };
    export const MenuButtonItem: React.FC<MenuButtonItemProps>;

    export interface SimpleDialogProps extends import('@material-ui/core').DialogProps {
        title: string;
        content: string;
    };
    export const SimpleDialog: React.FC<SimpleDialogProps>;

    export const Checkbox: React.FC<import('@material-ui/core').CheckboxProps>;

    export interface ButtonBarProps {
        children: React.ReactNode;
    };
    export const ButtonBar: React.FC<ButtonBarProps>;

    export interface AccordionProps extends import('@material-ui/core').AccordionProps {
        title: string;
    };
    export const Accordion: React.FC<AccordionProps>;

    export const Appbar: React.FC<import('@material-ui/core').AppBarProps>;
    export const Drawer: React.FC<import('@material-ui/core').DrawerProps>;

    export interface FlyinProps extends import('@material-ui/core').SlideProps {
        title: string;
        open: boolean;
        onClickAway: () => void;
        buttons?: React.ReactNode;
    };
    export const Flyin: React.FC<FlyinProps>;
}