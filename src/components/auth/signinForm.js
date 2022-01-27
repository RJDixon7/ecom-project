import React, { Component } from "react";

import { reduxForm, Field } from 'redux-form';

class SignInForm extends Component {
    render() {
        return (
            <form className="sign-in-form">
                sign in
            </form>
        )
    }
}

SignInForm = reduxForm({
    form: 'SignIn'
})(SignInForm);

export default SignInForm;