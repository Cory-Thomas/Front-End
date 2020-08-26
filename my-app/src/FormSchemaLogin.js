import * as yup from 'yup'

const formSchemaLogin = yup.object().shape({
    name: yup
        .string()
        .min(2, 'Name must be at least 2 characters long')
        .required('Name is required'),
    email: yup
        .string().email()
        .required('Email is required'),
    password: yup
        .string()
        .required('Please enter your password')
        .matches(/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
            'Password must contain at least 8 characters, one uppercase, one number and one special case character'),
})

export default formSchemaLogin