// this is kind  of challenge to understand event listeners

// https://reactjs.org/docs/events.html#mouse-events

function EventListenerComponent(){
    // challenge 1
    function handleButtonClick(){
        console.log("Button Clicked!!")
    }

    function handleImageClick(){
        console.log("Image MouseOver or Clicked!!")
    }
    // Challenge 2
    const thingsArray = ["Thing 1", "Thing 2"];

    let thingsArrayData;

    thingsArrayData = thingsArray.map(value => 
        <p key = {value}>{value}</p> 
    )
    function challenge2(){
        let arrayLength = thingsArray.length + 1;
        thingsArray.push("Thing "+ arrayLength);
        console.log(thingsArray);
    }

   
   

    return(
        <div>
            {/* Challenge 1 */}
            <div className="challenge1-container">
                <img 
                onClick={handleImageClick} 
                onMouseOver={handleImageClick}
                src="https://picsum.photos/640/360" />
                <button onClick={handleButtonClick}>Click me</button>
            </div>
            {/* Challenge 2 */}

            <button onClick={challenge2} className="challenge2-button">Add Item</button>
            {thingsArrayData}

        </div>
    )
}

export default EventListenerComponent;