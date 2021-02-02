import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';

import { FlyIn } from '../../components/complex';
import { Button } from '@material-ui/core';

// This default export determines where your story goes in the story list
export default {
    title: 'Content Display/Flyin',
    component: FlyIn
};

const Template: Story<ComponentProps<typeof FlyIn>> = (args) => {
    const [open, setOpen] = React.useState(false);
    const toggleFlyIn = () => setOpen(!open);

    return (
        <div>
            {!open && <Button variant="contained" color="primary" onClick={toggleFlyIn}>Open</Button>}
            <FlyIn {...args} open={open} onClickAway={toggleFlyIn} buttons={<React.Fragment>
                <Button variant="outlined" color="primary" onClick={toggleFlyIn}>Cancel</Button>
                <Button variant="contained" color="primary">OK</Button>
            </React.Fragment>}>
                <div>
                    Flyin Content
                </div>
            </FlyIn>
        </div>
    )
}
export const Main = Template.bind({});
Main.args = {
    title: 'Flyin Title'
};