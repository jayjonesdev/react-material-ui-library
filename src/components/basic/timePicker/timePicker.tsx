import React from 'react';
import { KeyboardTimePickerProps, KeyboardTimePicker } from '@material-ui/pickers';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

// TODO: Handle popover button colors, etc
const TimePicker: React.FC<KeyboardTimePickerProps> = (props) => {
    const { color, readOnly } = props;
    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardTimePicker
                {...props}
                KeyboardButtonProps={{
                    'aria-label': 'change time'
                }}
                InputProps={{ readOnly: readOnly, color: color }}
                DialogProps={{ color: color }}
            />
        </MuiPickersUtilsProvider>
    )
};

export default TimePicker;