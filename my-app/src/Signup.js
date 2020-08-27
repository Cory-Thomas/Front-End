import React, { useState } from 'react';
import * as Yup from "yup"; 
import { Button, Form, FormGroup, Label, Input }
  from 'reactstrap';
import style from 'styled-components';  
// import axios from 'axios';

const StyledH1 = style.h1`
    margin: 0 auto;
    width: 50%;
    text-align: center;
    margin-top: 5%;
    margin-bottom: 1%;
`;

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
        <section>
            <StyledH1>
                <header><h1 className='center-text' style={{color: '#092532', fontWeight: 'bold'}}>Expat Journal</h1></header>
                <header><h2 className='center-text' style={{color: '#89c9b8', fontWeight: 'bold'}}>Signup</h2></header>
            </StyledH1>
            <Form className='form-container' onSubmit={handleSubmit}>
                <div className='form-inputs'>
                    <FormGroup>
                        <Label htmlFor='name' style={{color: '#092532', fontWeight: 'bold'}}>Name: </Label>
                            <Input 
                                type='text'
                                name='name'
                                id='name'
                                placeholder='Enter your name'
                                value={form.name}
                                onChange={handleChange}
                            />
                    </FormGroup>
                    {errors.name.length > 0 && <p>{errors.name}</p>}
                    <FormGroup>
                        <Label htmlFor='email' style={{color: '#092532', fontWeight: 'bold'}}>Email: </Label>
                            <Input 
                                type='email'
                                name='email'
                                id='email'
                                placeholder='Enter your email'
                                value={form.email}
                                onChange={handleChange}
                            />
                    </FormGroup>
                    {errors.email.length > 0 && <p>{errors.email}</p>}
                    <FormGroup>
                        <Label htmlFor='password' style={{color: '#092532', fontWeight: 'bold'}}>Password: </Label>
                            <Input 
                                type='password'
                                name='password'
                                id='password'
                                placeholder='Enter a password'
                                value={form.password}
                                onChange={handleChange}
                            />
                    </FormGroup>
                    {errors.password.length > 0 && <p>{errors.password}</p>}
                    <FormGroup>
                        <Label htmlFor='passwordConfirm' style={{color: '#092532', fontWeight: 'bold'}}>Confirm Password: </Label>
                            <Input 
                                type='password'
                                name='passwordConfirmation'
                                id='passwordConfirm'
                                placeholder='Enter a password'
                                value={form.passwordConfirmation}
                                onChange={handleChange}
                            />
                    </FormGroup>
                    {errors.passwordConfirmation.length > 0 && <p>{errors.passwordConfirmation}</p>}
                </div>
                <div className='form-login-button'>
                    <Button className='btn-lg btn-dark btn-block' style={{backgroundColor: '#89c9b8', color: '#092532', fontWeight: 'bold', border: 'none'}} disabled={disabled} type='submit'>Sign Up</Button>
                </div>
                
                {form.password !== form.passwordConfirmation ? "Password doesn't match" : null}
            </Form>
        </section>
    )
}