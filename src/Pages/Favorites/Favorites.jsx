import { useEffect, useState } from "react";
import FavoritesCard from "./FavoritesCard";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [noFound, setNofound] = useState(false);
  const [isShow,setIsShow] = useState(false);
  const [totalPrice , setTotalPrice] = useState();

  useEffect(() => {
    const favoriteItems = JSON.parse(localStorage.getItem("favorites"));

    if (favoriteItems) {
      setFavorites(favoriteItems);
      const total = favoriteItems.reduce((preValue,currentItem)=>preValue + currentItem.price,0)
      setTotalPrice(total)
    } else {
      setNofound("No Data Found");
    }
  }, []);

  const handleRemove = ()=>{
    localStorage.clear();
    setFavorites([]);
    setNofound("No Data Found");
  }

  return (
    <div>
      {noFound ? (
        <p className="h-[80vh] flex justify-center items-center text-2xl font-semibold">
          {noFound}
        </p>
      ) : (
        <div>
          {favorites.length > 0 && 
            <div>
              <button  onClick={handleRemove}
              className="px-5 bg-green-200 block mx-auto p-2 rounded-md shadow-md mb-4">
                Deleted All favorites
              </button>
              <h1 className="text-center font-bold">Total price : ${totalPrice}</h1>
            </div>
          }
          <div className="pb-6  md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
            isShow ? favorites?.map((Phone) => (
                <FavoritesCard key={Phone.id} phone={Phone}></FavoritesCard>
              ))
              :favorites.slice(0,3).map((Phone) => (
                <FavoritesCard key={Phone.id} phone={Phone}></FavoritesCard>
              ))
            }
          </div>

          {
            favorites.length > 3 && <button onClick={()=> setIsShow(!isShow)}
            className="px-5 bg-green-200 block mx-auto p-2 rounded-md shadow-md">
              {isShow ? "See less" : "See more"}
            </button>
          }
        </div>
      )}
    </div>
  );
};

export default Favorites;
