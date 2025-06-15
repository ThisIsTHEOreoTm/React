import { useState } from "react";
import './try.css';

let Try = () => {
    const [name, setCount] = useState("Ahmed");
    
    function changeName() {
        setCount("Mohamed");
        console.log("Name changed to Mohamed");
        alert("Name changed to Mohamed");
        
    }   
    return (
        <div className="try">
            <button onClick={(changeName)}>Change Name</button>
            <h1>{name}</h1>
            <p>This is a simple component to demonstrate the use of CSS styles.</p>
        </div>
    );
}
export default Try;





