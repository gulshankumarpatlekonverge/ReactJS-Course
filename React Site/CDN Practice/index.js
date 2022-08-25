ReactDOM.render(<h1> Hello EveryOne, Welcome to React!</h1>, document.getElementById("root"));


//Hands On
ReactDOM.render(<p>Log the paraghraph and provide some info.</p>, document.getElementById("para"));

//First React Practice

ReactDOM.render(<ul>
                    <li>Home</li>
                    <li>Products</li>
                    <li>About Us</li>
                    </ul>, document.getElementById("ulliTag"));


// React Compasable
function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" href="#">Disabled</a>
                </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    )
}

ReactDOM.render(
    <div>
        <Navbar />
        
    </div>,
    document.getElementById("navBar")
)

// challenge 1
function MainComponent() {
    return(
        <nav>
            <h1>I'm Learnig React!!!</h1>
        </nav>
    )
}

ReactDOM.render(
    <div>
        <MainComponent />
    </div>,
    document.getElementById("mainComponent")
)

// challenge 2 -Declarative

let h1Tag = document.createElement("h1");

h1Tag.textContent = "Vanilla JavaScript";
h1Tag.className="textContentHeader";

document.getElementById("textContent").append(h1Tag);

// short hand insted of writing number of above line
// ReactDOM.render(<h1 className= "textContentHeader">Vannila JavaScript</h1>, document.getElementById("textContent"))

// JSX = JavaScript XML

const h1 = document.createElement("h1");
h1.textContent = "Hello world";
h1.className = "header";
console.log(h1);

const element = <h1 className= "textContentHeader">Vannila JavaScript JSX Part</h1>;
console.log(element);

ReactDOM.render(element, document.getElementById("textContentJSX"));

// Render More than two elements like H1 and paragraph it doesnt work you have to put multiple tags inside one parent tag.

ReactDOM.render(
                <div>
                    <h1 className= "textContentHeader">Hello From H1</h1>
                    <p>This is ParaGraph</p>
                </div>, 
                document.getElementById("renderH1Para"));

/*
this wont work you have to enclose the tags inside one parent tag, parent tag can have multiple child tags.
ReactDOM.render(
                <h1 className= "textContentHeader">Hello From H1</h1>,
                 <p>This is ParaGraph</p>
                , document.getElementById("renderH1Para2"));
*/


let page =  (<div>
                <h1 className= "textContentHeader">Hello this is me</h1>
                <p>This is me ParaGraph</p>
            </div>);

ReactDOM.render(page, 
                document.getElementById("renderH1Para2"));

// Challenge 3 JSX

ReactDOM.render(
    <nav>
        <h1>Caffee.com</h1>
            <ul>
                <li>Black Coffee</li>
                <li>Espresso Coffee</li>
                <li>Cappuccino Coffee</li>
            </ul>
    </nav>, document.getElementById("challenge3")
);

// Challenge 4

const challenge4 = (
    <div>
        <h1>My awesome website in React</h1>
        <h3>Reasons I love React</h3>
        <ol>
            <li>It's composable</li>
            <li>It's declarative</li>
            <li>It's a hireable skill</li>
            <li>It's actively maintained by skilled people</li>
        </ol>
    </div>
)

ReactDOM.render(challenge4, document.getElementById("challenge4"))
// document.getElementById("root").append(JSON.stringify(page))