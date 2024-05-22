import IncidentsContainer from "../components/IncidentsContainer";
import TopBar from "../components/TopBar";
import Modal from "../components/Modal";
import axios from "axios";
import { useLoaderData } from "react-router-dom";
import { useContext, createContext, useState } from "react";
import modals from "../utils/modals";
export const loader = async () => {
  try {
    const { data } = await axios.get("/api/v1/incidents?category=Active");
    return data;
  } catch (error) {
    return error;
  }
};

const submitForm = async (event, endpointTemplate, method) => {
  event.preventDefault();
  const endpoint = endpointTemplate;

  try {
    const formData = new FormData(event.target);
    const submitData = {};

    formData.forEach((value, key) => {
      if (submitData[key]) {
        // If the key already exists, it means it's a multi-select, convert to array if not already
        if (!Array.isArray(submitData[key])) {
          submitData[key] = [submitData[key]];
        }
        submitData[key].push(value);
      } else {
        submitData[key] = value;
      }
    });

    await axios({
      method: method,
      url: endpoint,
      data: submitData,
    });

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
            <Modal
              toggleModal={toggleModal}
              onSubmit={submitForm}
              config={modals.declare_incident}
            />
          ) : (
            ""
          )}
          <div className='flex items-center justify-start pt-6 pb-2 space-x-1'>
            <span className='rounded-full bg-red-600 w-2 h-2 animate-pulse'></span>
            <h1 className='text-md font-semibold'>Active incidents</h1>
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
