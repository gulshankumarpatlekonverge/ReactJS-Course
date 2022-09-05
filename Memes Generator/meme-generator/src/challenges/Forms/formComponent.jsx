import React from "react";

function FormComponent(){
    const [formData, setFormData] = React.useState({
        firstName: "",
        lastName: "",
        email:  ""
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
        <h1>Hello World</h1>
        <input 
            type = "text"    
            placeholder="Enter First Name"
            onChange={handleChange}
            name= "firstName"
        />

        <input 
            type = "text"    
            placeholder="Enter LastName"
            onChange={handleChange}
            name = "lastName"
        />

        <input 
            type = "email"    
            placeholder="Enter Email Address"
            onChange={handleChange}
            name = "email"
        />

        </form>
    )
}

export default FormComponent;