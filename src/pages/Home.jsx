import IncidentsContainer from "../components/IncidentsContainer";
import axios from "axios";
import { useLoaderData } from "react-router-dom";
import { useContext, createContext } from "react";

export const loader = async () => {
  try {
    const { data } = await axios.get("/api/v1/incidents?category=Active");
    return data;
  } catch (error) {
    return error;
  }
};

const HomeContext = createContext();

const Home = () => {
  const data = useLoaderData();
  return (
    <HomeContext.Provider value={{ data }}>
      <div className='content flex-auto'>
        <div className='active-incidents mx-auto max-w-screen-xl'>
          <h1 className='text-md font-semibold py-6'>Active incidents</h1>
          <IncidentsContainer />
        </div>
        <div className='activity'></div>
      </div>
    </HomeContext.Provider>
  );
};

export const useHomeContext = () => useContext(HomeContext);

export default Home;
