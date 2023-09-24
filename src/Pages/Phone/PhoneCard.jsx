import PropTypes from "prop-types";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
// import { Link } from "react-router-dom";
const PhoneCard = ({ phone }) => {
  const { id, image, phone_name, brand_name } = phone || {};

  const handleAddToFavorites = () => {
    const addedFavoritesArray = [];
    const favoriteItems = JSON.parse(localStorage.getItem("favorites"));
    if (!favoriteItems) {
      addedFavoritesArray.push(phone);
      localStorage.setItem("favorites", JSON.stringify(addedFavoritesArray));
      Swal.fire("Good job!", "Products added successfully!", "success");
    } else {
      const isExits = favoriteItems.find((phone) => phone.id === id);

      if (!isExits) {
        addedFavoritesArray.push(...favoriteItems, phone);
        localStorage.setItem("favorites", JSON.stringify(addedFavoritesArray));
        Swal.fire("Good job!", "Products added successfully!", "success");
      } else {
        Swal.fire("Error!", "No duplicate !", "error");
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-[80vh]">
      <div className="relative flex w-full max-w-[32rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md p-12">
        <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
          <img src={image} className="h-full w-full object-cover" />
        </div>
        <div className="p-6">
          <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
            {brand_name}
          </h6>
          <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {phone_name}
          </h4>

          <Link>
            <button
              onClick={handleAddToFavorites}
              className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none bg-green-300"
              type="button"
            >
              Add To Favorites <BsArrowRight></BsArrowRight>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

PhoneCard.propTypes = {
  phone: PropTypes.object,
};

export default PhoneCard;
