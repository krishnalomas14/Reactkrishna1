// import { CDN_URL } from "../utils/constants";

import { Link, Navigate, useNavigate } from "react-router-dom";

export const CDN_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/";

const RestaurantCard = (props) => {
  const { resData } = props;
  const navigate = useNavigate();

  const handelclick = () => {
    navigate("/restaurants/95007")
    console.log("resturant click")
  }

  return (
    <div className="res-card"
    onClick={handelclick}
    >
      <img
        alt={resData.info.name}
        className="res-logo"
        src={CDN_URL + resData.info.cloudinaryImageId}
      />

      <h3>{resData.info.name}</h3>
      <h4>{resData.info.cuisines.join(", ")}</h4>
      <h4>{resData.info.avgRating}</h4>
      <h4>{resData.info.costForTwo}</h4>
      <h4>{resData.info.sla.deliveryTime} mins</h4>
    </div>
  );
};

export default RestaurantCard;