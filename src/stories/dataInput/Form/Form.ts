import * as yup from 'yup';

export const validationSchema: yup.ObjectSchema<any> = yup.object({
    email: yup
        .string()
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup
        .string()
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
    accountType: yup
        .string()
        .required('Please select an account type'),
    notes: yup
        .string()
        .max(255, 'Notes should be a maximum of 255 characters'),
    date: yup
        .date(),
    dateTime: yup
        .date(),
    time: yup
        .date()
        .required(),
    tags: yup
        .array(),
    activeAccount: yup
        .boolean(),
    id: yup
        .number(),
    phoneNumber: yup
        .string()
        .required('Please enter valid number')
});

export const formInputs = [
    {
        label: 'Email',
        name: 'email',
        inputType: 'text' as const,
        type: 'email' as const,
        initialValue: ''
    }, {
        label: 'Password',
        name: 'password',
        inputType: 'text' as const,
        type: 'password' as const,
        initialValue: ''
    }, {
        label: 'Date',
        name: 'date',
        inputType: 'date' as const,
        type: 'date' as const,
        initialValue: new Date().toLocaleDateString()
    }, {
        label: 'Date Time',
        name: 'dateTime',
        inputType: 'datetime' as const,
        type: 'date' as const,
        initialValue: new Date()
    }, {
        label: 'Time',
        name: 'time',
        inputType: 'time' as const,
        type: 'text' as const,
        initialValue: new Date()
    }, {
        label: 'Phone Number',
        name: 'phoneNumber',
        inputType: 'phone' as const,
        type: 'text' as const,
        initialValue: ''
    }, {
        label: 'Account Type',
        name: 'accountType',
        inputType: 'select' as const,
        type: 'text' as const,
        initialValue: '',
        options: [
            {
                label: 'Admin',
                value: 'Admin'
            }, {
                label: 'Basic',
                value: 'Basic'
            }
        ]
    }, {
        label: 'Notes',
        name: 'notes',
        inputType: 'multiline' as const,
        type: 'text' as const,
        initialValue: ''
    }, {
        label: 'Tags',
        name: 'tags',
        inputType: 'multiselect' as const,
        type: 'text' as const,
        initialValue: '',
        options: [
            {
                label: 'Linux',
                value: 'Linux'
            }, {
                label: 'Windows 10',
                value: 'Windows 10'
            }
        ]
    }, {
        label: 'Active Account',
        name: 'activeAccount',
        inputType: 'checkbox' as const,
        type: 'text' as const,
        initialValue: true
    }, {
        label: 'id',
        name: 'id',
        inputType: 'id' as const,
        type: 'number' as const,
        initialValue: 1
    }
];

export const argTypes = {
    color: {
        control: {
            type: 'inline-radio',
            options: [
                'primary',
                'secondary',
                'default'
            ],
        }
    },
    variant: {
        control: {
            type: 'inline-radio',
            options: [
                'filled',
                'outlined',
                'standard'
            ],
        }
    },
    size: {
        control: {
            type: 'select',
            options: [
                'small',
                'medium'
            ],
        }
    },
    margin: {
        control: {
            type: 'inline-radio',
            options: [
                'normal',
                'none',
                'dense'
            ],
        }
    },
    buttonVariant: {
        control: {
            type: 'inline-radio',
            options: [
                'text',
                'outlined',
                'contained'
            ],
        }
    },
    readOnly: {
        control: {
            type: 'inline-radio',
            options: [
                true,
                false
            ],
        }
    },
};