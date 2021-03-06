import React from 'react';
import { KeyboardDatePickerProps, KeyboardDatePicker } from '@material-ui/pickers';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

// TODO: Handle popover button colors, etc
const DatePicker: React.FC<KeyboardDatePickerProps> = (props) => {
    const { color, readOnly } = props;
    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
                {...props}
                KeyboardButtonProps={{
                    'aria-label': 'change date'
                }}
                InputProps={{ readOnly: readOnly, color: color }}
                DialogProps={{ color: color }}
            />
        </MuiPickersUtilsProvider>
    )
};

export default DatePicker;