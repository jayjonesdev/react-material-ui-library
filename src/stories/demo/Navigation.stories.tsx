import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Navigation from '../pages/navigation.page';

export default {
  title: 'Demo/Navigation',
  component: Navigation,
} as Meta;

const Template: Story<typeof Navigation> = (args) => <Navigation {...args} />;

export const Main = Template.bind({});
Main.args = { };
