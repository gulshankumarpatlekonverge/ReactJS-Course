import React, {useState} from "react";
import './signUpForm.css'

function SignUpForm(){
    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
        re_password: "",
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
        
        if(loginData.password === loginData.re_password){
            console.log("Successfully signed up");
        } else{
            console.log("Unfortunately Passwords do not match!");
            return
        }

        if(loginData.okayToMail){
            console.log("Thanks for signing up for our newsletter!");
        }
        
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
                    name="re_password"
                    value={loginData.re_password}
                    onChange={handleChangeSignUpForm}
                />
                
                <div className="form--marketing">
                    <input
                        id="okayToEmail"
                        type="checkbox"
                        name="okayToMail"
                        checked={loginData.okayToMail}
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