import { useState } from "react";
import { useEffect } from "react";

let form2 = () =>{
    const [data, setdata] =useState({
        name: "",
        email: "",
    });
    const handlechange = (e) =>{
       const {name, value} = e.target;
       setdata({...data, [name]: value});
    }
    const handlesubmit = (e) => {
        e.preventDefault();
        console.log(data);
    }

    return (
        <form onSubmit={handlesubmit}>
            <label>
                Name:
                <input type="text" name="name" value={data.name} onChange={handlechange} />
            </label>
            <label>
                Email:
                <input type="email" name="email" value={data.email} onChange={handlechange} />
            </label>
            <button type="submit">Submit</button>

        </form>
    );
}
export default form2