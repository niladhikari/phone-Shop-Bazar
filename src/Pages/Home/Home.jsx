// import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Header/Banner/Banner";
import Phones from "./../../Components/Phones/Phones";
import useGetPhones from './../../Hook/useGetPhones';

const Home = () => {
  // const phones = useLoaderData();
  const [phones] = useGetPhones()
  return (
    <div>
      <Banner></Banner>
      <Phones phones={phones}></Phones>
    </div>
  );
};

export default Home;
