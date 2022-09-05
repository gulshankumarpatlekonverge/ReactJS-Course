import React from "react";

function StarIconComponent(isFilled){
    return(
        <div>
            <img src={isFilled.starIcon} className="card--favorite" onClick={isFilled.toggleFavorite}/>
        </div>
    )
}

export default StarIconComponent;