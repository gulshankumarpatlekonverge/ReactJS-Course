import React from "react";

function FormComponent(){
    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    console.log(firstName)
    console.log(lastName)
    function handleFirstNameChange(event){
       setFirstName(event.target.value);
    }

    function handleLastNameChange(event){
        setLastName(event.target.value);
     }

    return(
        <form>
        <h1>Hello World</h1>
        <input 
            type = "text"    
            placeholder="Enter First Name"
            onChange={handleFirstNameChange}
        />

        <input 
            type = "text"    
            placeholder="Enter Last Name"
            onChange={handleLastNameChange}
        />

        </form>
    )
}

export default FormComponent;