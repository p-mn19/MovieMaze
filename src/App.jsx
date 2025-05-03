import React from "react";

const App = () => {
    return ( 
        <main>
            <div classname="pattern"/>
            <div className="wrapper">
             <header>
                <h1>Find <span className="text-gradient">Movies</span> You'll Enjoy, Without the Hassle</h1>
             </header>

             <p></p>
            </div>
        </main>
     );
}
 
export default App;

//when you reload the page the component will get re-rendered and the state 
//will return to its initial value
//hooks are special functions that allow us to tap into react features like state management

