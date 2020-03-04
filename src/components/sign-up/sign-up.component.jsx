import React, { Component } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';

import './sign-up.styles.scss';

class SignUp extends Component {
    constructor() {
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;

        if(password !== confirmPassword){
            alert("password don't match");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user , { displayName });
            this.setState({
                displaName: '',
                email: '',
                password: '',
                confirmPassword: ''                
            });
        }
        catch(error) {
            console.log(error);
        }
    }

    handleChange = async (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className='sign-up'>
                <h2 className='title'>I do not have an account</h2>
                <span >Sign up </span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput 
                        type='text'
                        name='displayName'
                        label='display Name'
                        handleOnChange= {this.handleChange}
                        value= {displayName}
                        />
                     
                     <FormInput 
                        type='email'
                        name='email'
                        label='Email'
                        handleOnChange={this.handleChange}
                        value= {email}
                     />
                     
                     <FormInput 
                        type='password'
                        name='password'
                        label='Password'
                        handleOnChange={this.handleChange}
                        value= {password}
                        />
                     
                    <FormInput 
                        type='password'
                        name='confirmPassword'
                        label='Confirm Password'
                        handleOnChange={this.handleChange}
                        value= {confirmPassword}
                        />
                     

                    <CustomButton type='submit' >Sign Up</CustomButton>

                </form>
            </div>
        );
    }
}

export default SignUp;