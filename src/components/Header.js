import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
    const [isloggedIn, setIsLoggedIn] = useState("Login")
    return (
        <div className="flex justify-between bg-pink-100 px-5 shadow-lg">
            <div className="">
                <img className="w-[140px]" src={LOGO_URL} />
            </div>
            <div className="flex items-center">
                <ul className="flex gap-10 font-bold text-lg items-center">
                    <Link to={"/"}><li>Home</li></Link>
                    <Link to={"/about"}> <li>About Us</li> </Link>
                    <Link to={"/contact"}><li>Contact Us</li></Link>
                    <Link to={"/grocery"}><li>Grocery</li></Link>
                    <li>Cart</li>
                    <li>
                        <button style={{ padding: "5px" }} onClick={() => setIsLoggedIn((st) => st === "Login" ? "Logout" : "Login")}>{isloggedIn}</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;