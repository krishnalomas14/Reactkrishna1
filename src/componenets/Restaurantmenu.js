import { useState, useEffect } from "react";

const Restaurantmenu = () => {
  const [resInfo, setResInfo] = useState(null);
    console.log("resinfo" , resInfo)
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=29.0020565&lng=77.7546872&restaurantId=95007",
    );

    console.log("data" , data.json( ))
    const json = await data.json();

    console.log(json);

    //  const json = await data.json();
    //  console.log(json);
    setResInfo(json);
  };

  return (
    <div className="menu">
      <h2>menu</h2>

      <ul>
        <li>Burgers</li>
        <li>coke</li>
      </ul>
    </div>
  );
};

export default Restaurantmenu;
