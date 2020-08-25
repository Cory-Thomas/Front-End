import React, { useState } from 'react';
import * as Yup from "yup"; 
// import axios from 'axios';

export default function Signup(){
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        passwordConfirmation: ''
    })
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        password: "",
        passwordConfirmation: ''
      });
    const [disabled, setDisabled] = useState(true)

    const formSchema = Yup.object().shape({
        name: Yup
            .string()
            .min(3, "Name must be at least 3 characters long")
            .required(),
        email: Yup
            .string().required(),
        password: Yup
            .string()
            .min(3, "Password must be at least 3 characters long")
            .required(),
        passwordConfirmation: Yup
            .string()
            .min(3, "Password must be at least 3 characters long")
            .required()
      });

    const handleChange = e => {
        e.persist()
        Yup.reach(formSchema, e.target.name)
            .validate(e.target.value)
            .then((valid) => {
                console.log("valid");
                setErrors({
                    ...errors,
                    [e.target.name]: "",
                });
            })
            .catch((err) => {
                console.log("err: ", err.errors[0]);
                setErrors({
                    ...errors,
                    [e.target.name]: err.errors[0]
                });
            });

        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
        if(form.passwordConfirmation && form.name && form.email && form.password !== ''){
                setDisabled(false)
            }
    };

    const handleSubmit = e => {
        e.preventDefault();

        // axios.post('https://reqres.in/api/', form)
        //     .then( res => {
        //         console.log(res);

        //     })
        //     .catch( error => {
        //         debugger;
        //         console.log(error)
        //     })

        setForm({
            name: '',
            email: '',
            password: '',
            passwordConfirmation: ''
        })
    };

    return(
        <>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Name: 
                        <input 
                            type='text'
                            name='name'
                            placeholder='Enter your name'
                            value={form.name}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                {errors.name.length > 0 && <p>{errors.name}</p>}
                <div>
                    <label>
                        Email: 
                        <input 
                            type='email'
                            name='email'
                            placeholder='Enter your email'
                            value={form.email}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                {errors.email.length > 0 && <p>{errors.email}</p>}
                <div>
                    <label>
                        Password: 
                        <input 
                            type='password'
                            name='password'
                            placeholder='Enter a password'
                            value={form.password}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                {errors.password.length > 0 && <p>{errors.password}</p>}
                <div>
                    <label>
                        Confirm Password: 
                        <input 
                            type='password'
                            name='passwordConfirmation'
                            placeholder='Enter a password'
                            value={form.passwordConfirmation}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                {errors.email.passwordConfirmation > 0 && <p>{errors.passwordConfirmation}</p>}
                <button disabled={disabled} type='submit'>Sign Up</button>
                {form.password !== form.passwordConfirmation ? "Password doesn't match" : null}
            </form>
        </>
    )
}