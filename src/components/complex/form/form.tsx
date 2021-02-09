import 'date-fns';
import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { TextField, Button, ButtonGroup, makeStyles, MenuItem, InputAdornment, IconButton, ListItemText } from '@material-ui/core';
import clsx from 'clsx';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { Checkbox, MultiSelect, DatePicker, Select, Multiline } from '../../basic';

const useStyles = makeStyles(theme => ({
    denseButtonGroupMargin: {
        marginTop: theme.spacing(),
        marginBottom: theme.spacing(.5),
        display: 'flex'
    },
    normalButtonGroupMargin: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(),
        display: 'flex'
    },
    noButtonGroupMargin: {
        marginTop: 0,
        marginBottom: 0,
        display: 'flex'
    },
    buttonGroup: {
        display: 'flex',
        justifyContent: 'flex-end'
    }
}));

// TODO: default border color and font color and icon color
const generateInitialValues = (inputs: IInput[]) => {
    let initialValues: { [key: string]: string | number | boolean | string[] } = {};
    inputs.forEach(input => initialValues[input.name] = input.initialValue);
    return initialValues;
}

const Form: React.FC<IProps> = (props) => {
    const classes = useStyles();
    const { inputs, validationSchema, onSubmit, variant = 'outlined', size, margin = 'normal', color = 'primary', buttonVariant, buttonText, readOnly = false, className } = props;
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
            const { label, name, inputType, type, options, clearable = true, disablePast, disableFuture, minDate, dateFormat = 'MM/dd/yyyy' } = input;
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
                                readOnly,
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
                        helperText={formik.errors[name] && Boolean(formik.errors[name])}
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
                        readOnly={readOnly}
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
                        readOnly={readOnly}
                        error={formik.touched[name] && Boolean(formik.errors[name])}
                        helperText={formik.errors[name] && Boolean(formik.errors[name])}
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
                        readOnly={readOnly}
                        value={formik.values[name] as string}
                        onChange={date => formik.setFieldValue(name, date?.toLocaleDateString(), true)}
                        error={formik.touched[name] && Boolean(formik.errors[name])}
                        helperText={Boolean(formik.errors[name]) && `Incorrect date format (${dateFormat})`}
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
                        readOnly={readOnly}
                        error={formik.touched[name] && Boolean(formik.errors[name])}
                        margin={margin || 'normal'}
                        size={size}
                        helperText={formik.errors[name] && Boolean(formik.errors[name])}
                    >
                        {options!.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                <Checkbox color={color} checked={(formik.values[name] as string[]).indexOf(option.value) > -1} />
                                <ListItemText primary={option.label} />
                            </MenuItem>
                        ))}
                    </MultiSelect>)
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
    readOnly?: boolean;
    className: string;
    onSubmit: (values: { [key: string]: string | number | boolean | string[] }) => void;
}
// TODO: time, Checkbox, Phone Number (with country code / flag)
interface IInput {
    label: string;
    name: string;
    inputType: 'text' | 'select' | 'multiselect' | 'checkbox' | 'multiline' | 'date';
    type: 'number' | 'text' | 'password' | 'email' | 'date';
    initialValue: string | number | boolean | string[];
    options?: { value: string; label: string }[];
    disablePast?: boolean;
    clearable?: boolean;
    disableFuture?: boolean;
    minDate?: string;
    dateFormat?: string;
}

