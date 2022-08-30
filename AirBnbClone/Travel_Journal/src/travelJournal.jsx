import React from "react";

function TravelJouranal(props){
    console.log(props)
    return(
        <div className="main-div">         
            <div className="card">
                <img className="card-image" src={props.imageUrl} alt="card-image" />
                <div className="card-content-div">
                    <p className="paragraph-item"><img src="./public/location.png" height="20px" width="20px"></img><strong>&nbsp;&nbsp;{props.location}&nbsp;&nbsp;</strong>
                        <span>
                            <a className="map-url" href={props.googleMapsUrl}> Visit On Google Map</a>
                        </span>
                    </p>
                    
                    <p className="paragraph-item">{props.startDate} - {props.endDate} Every Year</p>
                    <h2 className="title-heading-div paragraph-item">{props.title}</h2>
                    <p className="description-paragraph-item paragraph-item">{props.description}</p>
                </div>
            </div>
            
        </div>
    )
}

export default TravelJouranal;


        // <div className="main-div">
        //     <h1>Travel Journal - Travelers</h1>
            
        //     <div className="card">
        //         <img className="card-image" src="./public/waki-woods.webp" alt="waki-woods" />
        //         <div className="card-content-div">
        //             <p className="paragraph-item"><strong>Nagpur, Maharashtra, India </strong>
        //                 <span>
        //                     <a href="https://goo.gl/maps/1DGM5WrWnATgkSNB8">Visit On Google Map</a>
        //                 </span>
        //             </p>
                    
        //             <p className="paragraph-item">October - June Every Year</p>
        //             <h2 className="title-heading-div">Waki Woods: Spend Time In Wilderness</h2>
        //             <p className="description-paragraph-item paragraph-item">Popular for its lush green and tranquil environment, the Waki Woods is a perfect place for camping of a day or two with your beloved ones. Proximate to Nagpur, Waki Woods is evergreen throughout the year and offers extensive activities and opportunities ranging from archery, boat riding, horse riding, and more. It is one of the most famous places to visit near Nagpur within 100km range. In Waki Woods, you also get to admire the amazing scenic views of the greenery stretched across a large area and wildlife. Thus, this is the best place for peace seekers, nature lovers, adventure freaks, and trekkers.</p>
        //         </div>
        //     </div>
            
        // </div>