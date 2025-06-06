
import ResturantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useListOfResturants from "../utils/useListOfResturants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    const { listOfResturnts, listOfResturntsTemp, setListOfResturants } = useListOfResturants();
    const [searchText, setSearchText] = useState("");

    console.log(listOfResturnts, "listOfResturnts");

    const onlineStatus = useOnlineStatus();

    if (onlineStatus === false) {
        return (
            <>
                <h1>Looks like you are offline, pls check your internet connection.</h1>
            </>
        )
    }

    return (
        <div className=" mt-16">
            <div className=" flex justify-center">
                <div className="mb-10  px-5">
                    <input type="text" className=" border border-gray-400 shadow-lg w-[300px] px-3 py-1 rounded-xl" placeholder="search" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value)
                    }} />
                    <button style={{ marginLeft: "10px" }} className=" bg-pink-700 px-3 py-1 rounded-lg font-bold text-white ml-10" onClick={() => {
                        const filteredData = (listOfResturntsTemp ?? []).filter((item) => {
                            return (item?.info?.name).toLowerCase().includes((searchText).toLowerCase());
                        })
                        setListOfResturants(filteredData);
                    }}>Search</button>
                </div>
                <div >
                    <button className=" bg-pink-700 px-3 py-1 rounded-lg font-bold text-white ml-3" onClick={() => {
                        const res = (listOfResturnts ?? []).filter((res) => res.info.avgRating >= 4);
                        setListOfResturants(res);
                    }}>
                        Top Rated Resturant
                    </button>
                </div>
            </div>

            <div className="flex flex-wrap gap-10 px-5 pb-10 justify-center">
                {
                    (listOfResturnts ?? []).map((resturant, ind) => <Link to={"/resturant/" + resturant.info.id} key={resturant.info.id}> <ResturantCard resData={resturant} /></Link>)
                }
            </div>
        </div>
    )
}

export default Body;