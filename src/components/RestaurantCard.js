import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props; // destructuring object.
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
    resData?.info;
  const { deliveryTime } = resData?.info?.sla;
  return (
    <div className="restro-card" style={{ backgroundColor: "#F0F0F0" }}>
      <img className="restro-dish" src={CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
