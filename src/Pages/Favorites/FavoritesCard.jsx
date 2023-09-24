import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// import { BsArrowRight } from "react-icons/bs";

const FavoritesCard = ({ phone }) => {
  const {id, phone_name, price, image } = phone || {};
   
 

  return (
    <div className="flex justify-center items-center pb-10 md:pb-0 md:px-0 px-5">
      <div className="relative flex  flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md ">
        <div className="relative mx-4 m-auto overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white">
          <img src={image} />
        </div>
        <div className="p-6 flex justify-between items-center">
          <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {phone_name}
          </h5>
          <p className="block font-sans text-base  leading-relaxed text-inherit antialiased font-semibold">
            ${price}
          </p>
        </div>
        <div className="p-6 pt-0">
          <Link to={`/phones/${id}`}>
            <button
              className="select-none w-full rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              data-ripple-light="true"
            >
              See Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

FavoritesCard.propTypes = {
  phone: PropTypes.object,
};

export default FavoritesCard;
