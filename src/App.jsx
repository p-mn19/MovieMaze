import { useState,useEffect } from "react";

//when you reload the page the component will get re-rendered and the state 
//will return to its initial value
//hooks are special functions that allow us to tap into react features like state management
const Card = ({ title }) => {
    const [] = useState();
    const [hasLiked,setHasLiked] = useState(false);
     useEffect(() => {
        console.log(`${title} has been liked: ${hasLiked}`);
     });
    return(
        <div className="card">
            <h2>{title}</h2>
            <button onClick={() => setHasLiked(!hasLiked)}>
            {hasLiked ? 'Liked' : 'Like'}
            </button>
        </div>
    );
}

const App  = () => {
    return(
        <div className="card-container">
            <Card title="The lion king"/>
            <Card title="Interstellar"/>
            <Card title="Men in black"/>
        </div>
    );
}
export default App
