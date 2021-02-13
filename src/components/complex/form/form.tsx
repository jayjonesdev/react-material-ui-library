import 'date-fns';
import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { TextField, Button, ButtonGroup, MenuItem, InputAdornment, IconButton } from '@material-ui/core';
import clsx from 'clsx';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { Checkbox, MultiSelect, DatePicker, Select, Multiline, TimePicker, DateTimePicker } from '../../basic';
import MaterialUiPhoneNumber from 'material-ui-phone-number';
import useStyles from './form.style';

// TODO: default border color and font color and icon color
const generateInitialValues = (inputs: IInput[]) => {
    let initialValues: { [key: string]: string | number | boolean | string[] | Date } = {};
    inputs.forEach(input => initialValues[input.name] = input.initialValue);
    return initialValues;
}

const Form: React.FC<IProps> = (props) => {
    const classes = useStyles();
    const { inputs, validationSchema, onSubmit, variant = 'outlined', size, margin = 'normal', color = 'primary', buttonVariant, buttonText, className, editable = true } = props;
    const formik = useFormik({
        initialValues: generateInitialValues(inputs),
        validationSchema,
        onSubmit
    });
    const [showPassword, setShowPassword] = React.useState<boolean>(false);

    const getButtonGroupClass = (): string => {
        switch (margin) {
            case 'dense':
                return classes.denseButtonGroupMargin;
            case 'none':
                return classes.noButtonGroupMargin;
            default:
                return classes.normalButtonGroupMargin;
        }
    }

    const generateFormFields = (inputs: IInput[]) => {
        return inputs.map((input, index) => {
            const { label, name, inputType, type, options, clearable = true, disablePast,
                disableFuture, minDate, dateFormat = 'MM/dd/yyyy', readOnly = false,
                timeFormat = '__:__ _M', dateTimeFormat = 'MM/dd/yyyy hh:mm a' } = input;
            switch (inputType) {
                case 'text':
                    return (<TextField
                        key={index}
                        fullWidth
                        id={name}
                        name={name}
                        label={label}
                        color={color}
                        value={formik.values[name]}
                        variant={variant}
                        size={size}
                        margin={margin || 'normal'}
                        onChange={formik.handleChange}
                        type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
                        InputProps={
                            {
                                readOnly: !editable || readOnly,
                                endAdornment: type === 'password' ? <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={() => setShowPassword(!showPassword)}
                                        onMouseDown={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment> : null
                            }
                        }
                        error={formik.touched[name] && Boolean(formik.errors[name])}
                        helperText={Boolean(formik.errors[name]) && formik.errors[name]}
                    />);
                case 'multiline':
                    return (<Multiline
                        key={index}
                        fullWidth
                        id={name}
                        name={name}
                        label={label}
                        color={color}
                        value={formik.values[name]}
                        variant={variant}
                        size={size}
                        rows={5}
                        margin={margin || 'normal'}
                        onChange={formik.handleChange}
                        type={type}
                        readOnly={!editable || readOnly}
                        error={formik.touched[name] && Boolean(formik.errors[name])}
                        helperText={Boolean(formik.errors[name]) && formik.errors[name]}
                    />);
                case 'select':
                    return (<Select
                        key={index}
                        fullWidth
                        id={name}
                        name={name}
                        label={label}
                        color={color}
                        value={formik.values[name]}
                        variant={variant}
                        size={size}
                        margin={margin || 'normal'}
                        onChange={formik.handleChange}
                        type={type}
                        readOnly={!editable || readOnly}
                        error={formik.touched[name] && Boolean(formik.errors[name])}
                        helperText={Boolean(formik.errors[name]) && formik.errors[name] }
                    >
                        {options!.map(option => <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>)}
                    </Select>);
                case 'date':
                    return (<DatePicker
                        key={index}
                        fullWidth
                        minDate={minDate}
                        clearable={clearable}
                        disablePast={disablePast}
                        disableFuture={disableFuture}
                        margin={margin || 'normal'}
                        id={name}
                        size={size}
                        name={name}
                        label={label}
                        inputVariant={variant}
                        color={color}
                        format={dateFormat}
                        readOnly={!editable || readOnly}
                        value={formik.values[name] as string}
                        onChange={date => formik.setFieldValue(name, date === null ? '' : date?.toLocaleDateString(), false)}
                        error={formik.touched[name] && Boolean(formik.errors[name])}
                        helperText={Boolean(formik.errors[name]) && `Incorrect date format (${dateFormat})`}
                    />);
                case 'datetime':
                    return (<DateTimePicker
                        key={index}
                        fullWidth
                        minDate={minDate}
                        clearable={clearable}
                        disablePast={disablePast}
                        disableFuture={disableFuture}
                        margin={margin || 'normal'}
                        id={name}
                        size={size}
                        name={name}
                        label={label}
                        inputVariant={variant}
                        color={color}
                        format={dateTimeFormat}
                        readOnly={!editable || readOnly}
                        value={formik.values[name] as Date}
                        onChange={date => formik.setFieldValue(name, date === null ? '' : date, false)}
                        error={formik.touched[name] && Boolean(formik.errors[name])}
                        helperText={Boolean(formik.errors[name]) && `Incorrect date/time format (${dateTimeFormat})`}
                    />);
                case 'multiselect':
                    return (<MultiSelect
                        key={index}
                        fullWidth
                        id={name}
                        name={name}
                        label={label}
                        color={color}
                        value={formik.values[name] as string[] || []}
                        variant={variant}
                        onChange={formik.handleChange}
                        type={type}
                        readOnly={!editable || readOnly}
                        error={formik.touched[name] && Boolean(formik.errors[name])}
                        margin={margin || 'normal'}
                        size={size}
                        helperText={Boolean(formik.errors[name]) && formik.errors[name]}
                    >
                        {options!.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                <Checkbox label={option.label} color={color} checked={(formik.values[name] as string[]).indexOf(option.value) > -1} />
                            </MenuItem>
                        ))}
                    </MultiSelect>);
                case 'checkbox':
                    return (<Checkbox key={index} label={label} color={color} id={name} name={name}
                        value={formik.values[name] as boolean || false}
                        readOnly={readOnly}
                        onChange={formik.handleChange}
                    />);
                case 'time':
                    return (<TimePicker
                        key={index}
                        fullWidth
                        clearable={clearable}
                        margin={margin || 'normal'}
                        id={name}
                        size={size}
                        name={name}
                        label={label}
                        inputVariant={variant}
                        color={color}
                        readOnly={!editable || readOnly}
                        mask={timeFormat}
                        value={formik.values[name] as Date}
                        onChange={time => formik.setFieldValue(name, time === null ? '' : time, false)}
                        error={formik.touched[name] && Boolean(formik.errors[name])}
                        helperText={Boolean(formik.errors[name]) && `Incorrect time format (${timeFormat})`}
                    />);
                case 'phone':
                    return (<MaterialUiPhoneNumber
                        defaultCountry={'us'}
                        onChange={(number: string) => formik.setFieldValue(name, number, false)}
                        key={index}
                        fullWidth
                        id={name}
                        name={name}
                        label={label}
                        color={color}
                        value={formik.values[name]}
                        variant={variant}
                        size={size}
                        margin={margin || 'normal'}
                        error={Boolean(formik.errors[name]) && formik.touched[name]}
                        helperText={Boolean(formik.errors[name]) && formik.errors[name]}
                    />);
                case 'id':
                    return (<span key={index} id={name} hidden>{formik.values[name]}</span>);
                default:
                    return (null);
            }
        })
    }

    return (
        <form onSubmit={formik.handleSubmit} className={className}>
            {generateFormFields(inputs)}
            <ButtonGroup className={clsx(classes.buttonGroup, getButtonGroupClass())}>
                <Button color={color} variant={buttonVariant} size={(size === 'medium' || size === undefined) ? 'large' : 'medium'} onClick={() => formik.resetForm()}>{buttonText[0]}</Button>
                <Button color={color} type="submit" variant={buttonVariant} size={size === 'medium' ? 'large' : 'medium'}>{buttonText[1]}</Button>
            </ButtonGroup>
        </form>
    )
}

export default Form;

interface IProps {
    validationSchema: yup.ObjectSchema<any>;
    inputs: IInput[];
    color?: 'primary' | 'secondary';
    variant?: 'filled' | 'outlined' | 'standard';
    size?: 'medium' | 'small';
    margin?: 'normal' | 'none' | 'dense';
    buttonVariant?: 'text' | 'outlined' | 'contained';
    buttonText: string[];
    className?: string;
    editable?: boolean;
    onSubmit: (values: { [key: string]: string | number | boolean | string[] | Date }) => void;
}

interface IInput {
    label: string;
    name: string;
    inputType: 'text' | 'select' | 'multiselect' | 'checkbox' | 'multiline' | 'date' | 'id' | 'time' | 'datetime' | 'phone';
    type: 'number' | 'text' | 'password' | 'email' | 'date';
    initialValue: string | number | boolean | string[] | Date;
    options?: { value: string; label: string }[];
    disablePast?: boolean;
    clearable?: boolean;
    disableFuture?: boolean;
    minDate?: string;
    dateFormat?: string;
    timeFormat?: string;
    dateTimeFormat?: string;
    readOnly?: boolean;
}
