import React from "react";
import './form.css'

function FormComponent(){
    const [formData, setFormData] = React.useState({
        firstName: "",
        lastName: "",
        email:  "",
        comments: ""
    });
   
    function handleChange(event){
       console.log(event.target.value);
       setFormData(prevFormData => {
        return{
            ...prevFormData,
            [event.target.name]: event.target.value
        }
       })
    }

    return(
        <form>
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

        <textarea name="textarea" 
                className="comments-textarea" 
                placeholder="Enter Comments"
                cols="30" rows="10"
                value={formData.comments} 
                onChange= {handleChange}
        />

        </form>
    )
}

export default FormComponent;