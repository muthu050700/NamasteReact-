import { CDN_URL } from "../utils/constants";

const ResturantCard = (props) => {
    const { resData } = props;
    console.log(resData.info);

    const { name, cuisines, costForTwo } = (resData ?? {}).info;
    const { deliveryTime } = (resData ?? {}).info.sla;
    return (
        <div className=" w-[300px] bg-gray-300 h-[360px] rounded-2xl px-4 py-3">
            <img className="rounded-lg shadow-lg" src={CDN_URL + resData.info.cloudinaryImageId} alt="res-img" />
            <h3 className=" font-bold py-2 text-lg">{name}</h3>
            <h4 className=" font-semibold pb-2">{(cuisines).join(", ")}</h4>
            <div className=" flex justify-between font-medium">
                <h4>{costForTwo}</h4>
                <h4>{deliveryTime} minutes</h4>
            </div>

        </div>
    )
}

export default ResturantCard;