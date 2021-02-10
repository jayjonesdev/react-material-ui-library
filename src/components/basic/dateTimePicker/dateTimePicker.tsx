import React from 'react';
import { KeyboardDateTimePickerProps, KeyboardDateTimePicker } from '@material-ui/pickers';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

// TODO: Handle popover button colors, etc
const DateTimePicker: React.FC<KeyboardDateTimePickerProps> = (props) => {
    const { color, readOnly } = props;
    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDateTimePicker
                {...props}
                KeyboardButtonProps={{
                    'aria-label': 'change datetime'
                }}
                InputProps={{ readOnly: readOnly, color: color }}
                DialogProps={{ color: color }}
            />
        </MuiPickersUtilsProvider>
    )
};

export default DateTimePicker;