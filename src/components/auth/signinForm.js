import React, { Component } from "react";

import { reduxForm, Field } from 'redux-form';
import Details from "../details";
import { FormInput, FormButton } from '../formFields';

import history from "../../history";

class SignInForm extends Component {
    render() {
        const { className, handleSubmit } = this.props;
        const links = [
            {
                _id: 0,
                title: "Not Registered? Create account here",
                onClick: () => history.push("/signup")
            },
            {
                _id: 1,
                title: "Forgot account email?",
                onClick: () => console.log("forgot account email")
            },
            {
                _id: 2,
                title: "Forgot password?",
                onClick: () => console.log("forgot password")
            }
        ]
        return (
            <form onSubmit={handleSubmit} className="sign-in-form">
                <Field className="sign-in-form-email" 
                    type="email" 
                    title="Email" 
                    placeholder="Email" 
                    name="email" 
                component={FormInput} />

                <Field className="sign-in-form-password" 
                    type="password" 
                    title="Password" 
                    placeholder="Password" 
                    name="password" 
                component={FormInput} />

                <div className="sign-in-form-line"></div>

                <Field className="sign-in-form-login" 
                    onClick={() => history.push("/account")}
                    type="submit" 
                    title="Login" 
                    name="login" 
                component={FormButton} />
                <Details className="sign-in-form-details" title="QuickLinks" links={links} />
            </form>
        )
    }
}

SignInForm = reduxForm({
    form: 'SignIn'
})(SignInForm);

export default SignInForm;