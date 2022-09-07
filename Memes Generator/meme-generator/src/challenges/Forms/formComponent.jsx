import React from "react";
import './form.css'

function FormComponent(){
    const [formData, setFormData] = React.useState({
        firstName: "",
        lastName: "",
        email:  "",
        comments: "",
        isFriendly: true,
        employment: "",
        favoriteColor: ""
    });
   
    function handleChange(event){
       const {name, value, type, checked} = event.target;

       setFormData(prevFormData => {
        return{
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value
        }
       })
    }

    function handleSubmit(event){
        event.preventDefault(); // is used to hide the query string in url while page re-rendering and it doesn't reresh the page
        // submitToApi(formData);
        console.log(formData);
    }

    return(
        <form onSubmit={handleSubmit}>
        <h1>Form Component</h1>
        <input 
            type = "text"    
            placeholder= "Enter First Name"
            onChange= {handleChange}
            name= "firstName"
            value= {formData.firstName}
        />

        <input 
            type = "text"    
            placeholder= "Enter LastName"
            onChange= {handleChange}
            name= "lastName"
            value= {formData.lastName}
        />

        <input 
            type = "email"    
            placeholder= "Enter Email Address"
            onChange= {handleChange}
            name= "email"
            value= {formData.email}
        />

        <textarea name="comments" 
                className="comments-textarea" 
                placeholder="Enter Comments"
                cols="30" rows="10"
                value={formData.comments} 
                onChange= {handleChange}
        />

        <input type="checkbox" 
                id="isFriendly" 
                checked={formData.isFriendly}
                onChange={handleChange}
                name="isFriendly"
            />
        <label htmlFor="isFriendly">Are you friendly?</label>
        <br />
        <br />
        <fieldset>
                <legend>Current employment status</legend>
                
                <input 
                    type="radio"
                    id="unemployed"
                    name="employment"
                    value="unemployed"
                    checked={formData.employment === "unemployed"}
                    onChange={handleChange}
                />
                <label htmlFor="unemployed">Unemployed</label>
                <br />
                
                <input 
                    type="radio"
                    id="part-time"
                    name="employment"
                    value="part-time"
                    checked={formData.employment === "part-time"}
                    onChange={handleChange}
                />
                <label htmlFor="part-time">Part-time</label>
                <br />
                
                <input 
                    type="radio"
                    id="full-time"
                    name="employment"
                    value="full-time"
                    checked={formData.employment === "full-time"}
                    onChange={handleChange}
                />
                <label htmlFor="full-time">Full-time</label>
                <br />
                
        </fieldset>
        <br />
        <select id="favColor"
                value={formData.favoriteColor}
                onChange={handleChange}
                name="favoriteColor"
        >
            <option value="">-- Choose Color --</option>
            <option value="red">Red</option>
            <option value="orange">Orange</option>
            <option value="yellow">Yellow</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
            <option value="indigo">Indigo</option>
            <option value="violet">Violet</option>
        </select>

        {/* <input type="submit" value="submit" /> */}
        <br />
        <br />
        <button>Submit</button>

        </form>
    )
}

export default FormComponent;