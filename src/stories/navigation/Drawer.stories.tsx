import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';

import { NavItem } from '../../components/basic';
import { Drawer } from '../../components/complex';
import { BrowserRouter } from 'react-router-dom';
import { Settings as SettingsIcon, Email as EmailIcon, CalendarToday as CalendarIcon } from '@material-ui/icons';

export default {
    title: 'Navigation/Drawer',
    component: Drawer,
    argTypes: {
        variant: {
            control: {
                type: 'inline-radio',
                options: [
                    'permanent',
                    'persistent',
                    'temporary'
                ],
            }
        },
    }
};

const Template: Story<ComponentProps<typeof Drawer>> = (args) => (
    <BrowserRouter>
        <Drawer {...args}>
            <NavItem link="/home/email" text={'Email'} icon={<EmailIcon />} />
            <NavItem link="/home/system-settings" text={'System Settings'} icon={<SettingsIcon />} />
            <NavItem link="/home/calendar" text={'Calendar'} icon={<CalendarIcon />} />
        </Drawer>
    </BrowserRouter>
)

export const Main = Template.bind({});
Main.args = {
    variant: "permanent"
};