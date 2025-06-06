import React from "react";


class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {}
        }
    }

    async componentDidMount() {
        const res = await fetch("https://api.github.com/users/muthu050700");
        const data = await res.json();
        this.setState((state) => ({ ...state, userInfo: data }))
    }

    render() {
        const { userInfo } = this.state;
        console.log(userInfo);

        return (
            <div style={{ border: "2px solid black", padding: "10px" }}>
                <img src={userInfo?.avatar_url} />
                <h1>Name: {userInfo?.name}</h1>
                <h3>Location: Chennai</h3>
                <p>Contact: muthukumaran@gmail.com</p>
            </div>
        )
    }
};

export default UserClass;