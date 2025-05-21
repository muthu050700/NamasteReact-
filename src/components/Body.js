
import ResturantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
    const [listOfResturnts, setListOfResturants] = useState(resList);

    return (
        <div className="body">
            <div className="search">
                <button onClick={() => {
                    const res = (listOfResturnts ?? []).filter((res) => res.data.avgRating >= 4);
                    setListOfResturants(res);
                }}>
                    Top Rated Resturant
                </button>
            </div>
            <div className="res-container">
                {
                    (listOfResturnts ?? []).map((resturant, ind) => <ResturantCard resData={resturant} key={ind} />)
                }
            </div>
        </div>
    )
}

export default Body;