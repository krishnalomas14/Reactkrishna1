
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
const Body = () => {
    // local state variable - super powerful variable
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
                      
  useEffect (() => {
    fetchData();
}, [])  
  const fetchData = async () => {
    const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.993758&lng=77.6822442&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    console.log(json);
    
      const restaurantList = json.data.cards.flatMap(
      (item) =>
        item.card?.card?.gridElements?.infoWithStyle?.restaurants || []
    );
 

   setListOfRestaurants(restaurantList);
  };

  if(listOfRestaurants.length === 0){
    return <h1>Loading....</h1>
  }
       
                         
                    
    return(
        <div className="body">
          <div className = "filter">
            <button className="filter -btn" onClick={() =>{
                const filteredList = listOfRestaurants.filter(
                    (res) => res.info.avgRating > 4
                )
                setListOfRestaurants(filteredList);
            }}>
                Top Rated Restaurant</button>
          </div> 
            <div className="res-container">
           {listOfRestaurants.map((restaurant, index) => (
  <RestaurantCard
    key={`${restaurant.info.id}-${index}`}
    resData={restaurant}
  />
))}
                
                
            
                

            </div>
        </div>
    )
}

export default Body;

// ********** never put hardcoted data in components folder;