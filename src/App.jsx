import { useEffect, useState } from "react";
import Search from "./components/search";

const API_BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = import.meta.env.VITE_TMD_API_KEY;
const App = () => {
    const [searchTerm,setSearchTerm] = useState('');
    
    useEffect(() => {
        // Logic here
      }, []);
    
    return ( 
        <main>
            <div className="pattern"/>
            <div className="wrapper">
             <header>
                <img src="./hero-img.png" alt="Hero Banner" />
                <h1>Find <span className="text-gradient">Movies</span> You'll Enjoy, Without the Hassle</h1>
             </header>
             <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
            </div>
        </main>
     );
}
 
export default App;

//when you reload the page the component will get re-rendered and the state 
//will return to its initial value
//hooks are special functions that allow us to tap into react features like state management

