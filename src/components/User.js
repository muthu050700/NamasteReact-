import { useState } from "react";

const User = (props) => {
    const [count] = useState(0);
    const [count2] = useState(1);

    return (
        <div style={{ border: "2px solid black", padding: "10px" }}>
            <h1>Count : {count}</h1>
            <h1>Name: {props.name}</h1>
            <h3>Location: Chennai</h3>
            <p>Contact: muthukumaran@gmail.com</p>
        </div>
    )
};

export default User;