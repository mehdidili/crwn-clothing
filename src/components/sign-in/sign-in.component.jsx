import React from 'react';
import { Component } from 'react';
import FormInput from '../form-input/form-input.component';

import './sign-in.styles.scss';
import CustomButton from '../custom-button/custom-button.component';

import { SignInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends Component {
    constructor(){
        super();
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({email: '', password: ''});
    }

    handleOnChange = event => {
        const {value, name } = event.target;
        this.setState({[name]: value});
    }

    render() {
        return (
            <div className='sign-in' >
                <h2 >I already have account</h2>
                <span>Sign in with email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' type='email' label='Email' handleOnChange={this.handleOnChange} value={this.state.email} required />
                    <FormInput name='password' label='password'  handleOnChange={this.handleOnChange} type='password' value={this.state.password} required />
                   
                    <CustomButton type='submit' >Sign in</CustomButton>
                    <CustomButton onClick={SignInWithGoogle}  >Sign in with Google</CustomButton>
                    
                </form>
            </div>
        );

    }

}

export default SignIn;