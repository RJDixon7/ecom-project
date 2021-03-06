import React, { Component } from "react";

export class FormInput extends Component {
    render() {
        const { className, title, type, placeholder, input } = this.props;
        return (
            <div className={`${className} form-input`}>
                <label className="form-input-lable">{title}</label>
                <input className="form-input-input" placeholder={placeholder} {...input} />
            </div>
        )
    }
}

export class FormButton extends Component {
    render() {
        const { className, title, type, onClick, input, short } = this.props;
        return (
            <div className={`${className} form-button`}>
                <button className={`form-button-button ${short ? 'form-button-gray-button' : ''}`} 
                        type={type}
                        {...input}
                        onClick={onClick}
                    >
                        {title}
                </button>
            </div>
        )
    }
}

export class LongGrayButton extends Component {
    render() {
        const { className, labelTitle, title, type, onClick, input } = this.props;
        return (
            <div className={`${className} form-button-long-gray`}>
                <label className="form-button-long-gray-lable">{labelTitle}</label>
                <button className={`form-button-long-gray-button`} 
                        type={type}
                        {...input}
                        onClick={onClick}
                    >
                        {title}
                </button>
            </div>
        )
    }
}