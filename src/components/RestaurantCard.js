import { CDN_URL } from "../utils/constants";

const ResturantCard = (props) => {
    const { resData } = props;
    const { name, cuisines, costForTwo, deliveryTime } = (resData ?? {}).data;
    return (
        <div className="res-card">
            <img src={CDN_URL + resData.data.cloudinaryImageId} className="res-logo" alt="res-img" />
            <h3>{name}</h3>
            <h4>{(cuisines).join(",")}</h4>
            <h4>{(costForTwo / 100)} for two</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    )
}

export default ResturantCard;