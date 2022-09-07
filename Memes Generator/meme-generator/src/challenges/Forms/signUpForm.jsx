import React, {useState} from "react";
import './signUpForm.css'

function SignUpForm(){
    const [loginData, setLoginData] = useState({
        email: "email",
        password: "password",
        re_password: "password",
        okayToMail: true
    });

    function handleChangeSignUpForm(event){
        const {name, value, type, checked} = event.target;

        setLoginData(prevLoginData => {
            return {
                ...prevLoginData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(loginData);

    }
    return(
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    placeholder="Email address"
                    className="form--input"
                    name="email"
                    value={loginData.email}
                    onChange={handleChangeSignUpForm}
                />
                <input 
                    type="password" 
                    placeholder="Password"
                    className="form--input"
                    name="password"
                    value={loginData.password}
                    onChange={handleChangeSignUpForm}
                />
                <input 
                    type="password" 
                    placeholder="Confirm password"
                    className="form--input"
                    name="password"
                    value={loginData.password}
                    onChange={handleChangeSignUpForm}
                />
                
                <div className="form--marketing">
                    <input
                        id="okayToEmail"
                        type="checkbox"
                        name="okayToMail"
                        value={loginData.okayToMail}
                        onChange={handleChangeSignUpForm}
                    />
                    <label htmlFor="okayToEmail">I want to join the newsletter</label>
                </div>
                <button 
                    className="form--submit"
                >
                    Sign up
                </button>
            </form>
        </div>
    )
}

export default SignUpForm;