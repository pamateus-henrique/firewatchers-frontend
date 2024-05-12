import IncidentsContainer from "../components/IncidentsContainer";
import TopBar from "../components/TopBar";
import DeclareIncident from "../components/DeclareIncidentModal";
import axios from "axios";
import { useLoaderData } from "react-router-dom";
import { useContext, createContext, useState } from "react";

export const loader = async () => {
  try {
    const { data } = await axios.get("/api/v1/incidents?category=Active");
    return data;
  } catch (error) {
    return error;
  }
};

const toggleModal = () => {
  setIsModalOpen(!isModalOpen);
};

const submitForm = async (event) => {
  event.preventDefault();
  try {
    const formData = new FormData(event.target);
    let data = Object.fromEntries(formData);
    data.products_affected = formData.getAll("products_affected");
    data.areas_affected = formData.getAll("areas_affected");
    data.performance_indicators = formData.getAll("performance_indicators");
    await axios.post("/api/v1/incidents", data);
    toggleModal();
  } catch (e) {
    console.error(e);
  }
};

const HomeContext = createContext();

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const data = useLoaderData();
  return (
    <HomeContext.Provider value={{ data }}>
      <TopBar name='Home' toggleModal={toggleModal} />
      <div className='content flex-auto'>
        <div className='active-incidents mx-auto max-w-screen-xl'>
          {isModalOpen == true ? (
            <DeclareIncident toggleModal={toggleModal} onSubmit={submitForm} />
          ) : (
            ""
          )}
          <div className='flex items-center justify-start pt-6 pb-2 space-x-1'>
            <span className='rounded-full bg-red-600 w-2 h-2 animate-pulse'></span>
            <h1 className='text-md font-semibold'>Active incidentssss</h1>
          </div>

          <IncidentsContainer />
        </div>
        <div className='activity'></div>
      </div>
    </HomeContext.Provider>
  );
};

export const useHomeContext = () => useContext(HomeContext);

export default Home;
