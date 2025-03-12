import { useState } from "react";

const Card = ({ title }) => {
    const [hasLiked,setHasLiked] = useState(false); 
    return(
        <div className="card">
            <h2>{title}</h2>
            <button onClick={() => setHasLiked(true)}>
            Like
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
