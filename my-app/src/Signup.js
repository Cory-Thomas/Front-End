import React, { useState } from 'react';
// import axios from 'axios';

export default function Signup(){
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        passwordConfirmation: ''
    })
    const [disabled, setDisabled] = useState(true)

    const handleChange = e => {
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
                <button disabled={disabled} type='submit'>Sign Up</button>
                {form.password !== form.passwordConfirmation ? "Password doesn't match" : null}
            </form>
        </>
    )
}