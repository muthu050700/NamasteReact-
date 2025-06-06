import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";
import useResturantMenu from "../utils/useReasturantMenu";

const ResturantMenu = () => {
    const { resId } = useParams();
    const resInfo = useResturantMenu(resId);

    if (resInfo === null) {
        return (
            <>
                <p>Loading....</p>
            </>
        )
    }

    const { name, costForTwoMessage, cuisines } = (resInfo?.data?.cards[2]?.card?.card?.info);

    const { itemCards } = (resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card);
    console.log(itemCards);

    return (
        <>
            <h1>{name}</h1>
            <h3>{cuisines.join(",")} - {costForTwoMessage}</h3>
            <ul>
                {
                    (itemCards ?? []).map((item) => <li key={item.card.info.id}>{item.card.info.name} - Rs ({(item.card.info.price || item.card.info.defaultPrice) / 100})</li>)
                }
            </ul>
        </>
    );
}

export default ResturantMenu;