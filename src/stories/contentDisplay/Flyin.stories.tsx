import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';

import { Flyin } from '../../components/complex';
import { Button } from '@material-ui/core';
import { ButtonBar } from '../../components';

export default {
    title: 'Content Display/Flyin',
    component: Flyin
};

const Template: Story<ComponentProps<typeof Flyin>> = (args) => {
    const [open, setOpen] = React.useState(false);
    const toggleFlyIn = () => setOpen(!open);

    return (
        <div>
            {!open && <Button variant="contained" color="primary" onClick={toggleFlyIn}>Open</Button>}
            <Flyin {...args} open={open} onClickAway={toggleFlyIn}>
                <React.Fragment>
                    <div>
                        Flyin Content
                    </div>
                    <ButtonBar>
                        <Button variant="outlined" color="primary" onClick={toggleFlyIn}>Cancel</Button>
                        <Button variant="contained" color="primary">OK</Button>
                    </ButtonBar>
                </React.Fragment>
            </Flyin>
        </div>
    )
}
export const Main = Template.bind({});
Main.args = {
    title: 'Flyin Title'
};