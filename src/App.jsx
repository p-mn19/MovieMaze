const Card = ({ title }) => {
    return(
        //inline styling
        <div className="card">
            <h2>{title}</h2>
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
