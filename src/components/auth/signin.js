import React, { Component } from "react";
import SignInForm from "./signinForm";


class SignIn extends Component {
    render() {
        const { className } = this.props;
        return (
            <div className="sign-in">
                <SignInForm className={`${className} sign-in_form`} />
            </div>
        )
    }
}


export default SignIn;