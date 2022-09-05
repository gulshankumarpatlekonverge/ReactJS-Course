import React from "react";
import './complexStateObject.css';

import starEmpty from './images/star-empty.png';
import starFilled from './images/star-filled.jpg';
import user from './images/user.png';
import StarIconComponent from './startIconComponent';

function ComplexStateObject(){
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: true
    });

    let starIcon = contact.isFavorite ? starFilled : starEmpty;

    function toggleFavorite() {
        console.log("Toggle Favorite");
        setContact(prevContact => {
            return {
                ...prevContact,
                isFavorite: !prevContact.isFavorite,
                // firstName: prevContact.firstName,
                // lastName: prevContact.lastName,
                // email: prevContact.email,
                // phone: prevContact.phone
            }
        })
    }
    return(
        <main>
            <article className="card">
                <img src={user} className="card--image" />
                <div className="card--info">
                    {/* <img 
                        src={starIcon} 
                        className="card--favorite"
                        onClick={toggleFavorite}
                    /> */}
                    <StarIconComponent 
                        starIcon = {starIcon}
                        // isFavorite = {contact.isFavorite}
                        toggleFavorite ={toggleFavorite}
                    />
                    <h2 className="card--name">
                        {contact.firstName + " " + contact.lastName}
                    </h2>
                    <p className="card--contact">{contact.phone}</p>
                    <p className="card--contact">{contact.email}</p>
                </div>
                
            </article>
        </main>
    )
}

export default ComplexStateObject;