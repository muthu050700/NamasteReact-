import { useEffect, useState } from "react";


const useListOfResturant = () => {
    const [listOfResturnts, setListOfResturants] = useState([]);
    const [listOfResturntsTemp, setListOfResturantsTemp] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const res = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
        const data = await res.json();
        setListOfResturants(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setListOfResturantsTemp(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        console.log(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    return { listOfResturnts, listOfResturntsTemp, setListOfResturants };
}

export default useListOfResturant;