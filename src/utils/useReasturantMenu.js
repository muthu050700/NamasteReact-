import { useEffect, useState } from "react";
import { MENU_URL } from "./constants";


const useResturantMenu = (resId) => {
    const [resInfo, setresInfo] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const res = await fetch(MENU_URL + resId);
        const data = await res.json();
        setresInfo(data);
    }

    return resInfo;
}

export default useResturantMenu;