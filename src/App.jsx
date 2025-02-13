const Card = ({ title }) => {
    return(
        <div>
            <h2>{title}</h2>
        </div>
    );
}

const App  = () => {
    return(
        <div>
            <h2>App</h2>
            <Card title="The lion king"/>
            <Card title="Interstellar"/>
            <Card title="Men in black"/>
        </div>
    );
}
export default App
