import React, { Component } from "react";

import { reduxForm, Field } from 'redux-form';
import Details from "../details";
import { FormInput, FormButton } from '../formFields';

import history from "../../history";

class SignUpForm extends Component {
    render() {
        const { className, handleSubmit } = this.props;
        const links = [
            {
                _id: 0,
                title: "At least 6 characters",
            },
            {
                _id: 1,
                title: "Atleast one number",
            },
            {
                _id: 2,
                title: "At least one symbol",
            }
        ]
        return (
            <form onSubmit={handleSubmit} className={`${className}sign-up-form`}>
                <Field className="sign-up-form-name" 
                    type="name" 
                    title="Name" 
                    placeholder="Name" 
                    name="name" 
                component={FormInput} />

                <Field className="sign-up-form-email" 
                    type="email" 
                    title="Email" 
                    placeholder="Email" 
                    name="email" 
                component={FormInput} />



                <Field className="sign-up-form-password" 
                    type="password" 
                    title="Password" 
                    placeholder="Password" 
                    name="password" 
                component={FormInput} />

                <Field className="sign-up-form-confirm-password" 
                    type="password" 
                    title="Confirm Password" 
                    placeholder="Confirm Password" 
                    name="confirm" 
                component={FormInput} />


                <div className="sign-up-form-line"></div>

                <Field className="sign-up-form-login" 
                    onClick={() => history.push("/account")}
                    type="submit" 
                    title="Create Account" 
                    name="login" 
                component={FormButton} />

                <Field className="sign-up-form-back" 
                    onClick={() => history.push("/account")}
                    type="button" 
                    title="Back" 
                    name="back" 
                component={FormButton} />
                <Details className="sign-up-form-details" title="Password Requirements" links={links} />
            </form>
        )
    }
}

SignUpForm = reduxForm({
    form: 'SignUpForm'
})(SignUpForm);

export default SignUpForm;