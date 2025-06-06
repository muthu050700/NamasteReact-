import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
    constructor(props) {
        super(props)
        console.log("parent constructor");
    }
    componentDidMount() {
        console.log("parent component did mount");
    }
    render() {
        console.log("parent render");
        return (
            <>
                <h1>About</h1>
                <h2>This is Namasted JS Learning session.</h2>
                <UserClass name={"first child"} />
            </>
        )
    }
}

export default About;