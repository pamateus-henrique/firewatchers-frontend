import axios from "axios";
import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import Modal from "../components/Modal";

const IncidentDetails = () => {
  const [data, setData] = useState(null);
  const [update, setUpdate] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editedSummary, setEditedSummary] = useState("");
  const [isEditingSummary, setIsEditingSummary] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(`/api/v1/incidents/${id}`);
      setData(data);
    };
    getData();
  }, [update]);

  const submitForm = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData(event.target);
      const submitData = Object.fromEntries(formData);
      await axios.patch(`/api/v1/incidents/${id}`, submitData);
      setUpdate(!update);
      toggleModal();
    } catch (e) {
      console.error(e);
    }
  };

  const saveChanges = async (e) => {
    e.preventDefault();
    await axios.patch(`/api/v1/incidents/${id}`, {
      summary: editedSummary || incident.summary,
    });
    setIsEditingSummary(false);
    setUpdate(!update);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const incident = data?.rows[0];

  if (incident == null) {
    return <h1>Loading.....</h1>;
  }

  console.log(incident);

  return (
    <div>
      <div className='bg-red-500 w-full flex justify-center items-center p-2 text-white animate-pulse'>
        <h2>{`${incident.status}...`}</h2>
      </div>

      <div className='mx-auto max-w-screen-xl flex mt-16 space-x-4'>
        <div className='content w-3/4'>
          {isModalOpen && (
            <Modal
              toggleModal={toggleModal}
              data={incident}
              onSubmit={submitForm}
            />
          )}
          <div className='p-2 flex justify-between shadow-md rounded-sm border border-slate-200'>
            {isEditingSummary ? (
              <>
                <input
                  type='text'
                  value={editedSummary || incident.summary}
                  onChange={(e) => setEditedSummary(e.target.value)}
                  className='bg-blue-100'
                />
                <button onClick={saveChanges}>Save</button>
              </>
            ) : (
              <>
                <p>{incident.summary}</p>
                <span onClick={() => setIsEditingSummary(true)}>Icon</span>
              </>
            )}
          </div>
          <div className='header'>Updates</div>
        </div>
        <div className='aisde w-1/4 text-sm text-slate-600'>
          <div className='partipants'>
            <div className='flex justify-between mb-2' onClick={toggleModal}>
              <h3>Incident Lead: </h3>
              <p className='text-black'>{incident.lead_name}</p>
            </div>
            <div className='flex justify-between mb-2'>
              <h3>Reporter: </h3>
              <p className='text-black'>{incident.reporter_name}</p>
            </div>
            <div className='flex justify-between mb-2'>
              <h3>QE: </h3>
              <p className='text-black'>{incident.qe_name}</p>
            </div>
            <div className='flex justify-between mb-2'>
              <h3>Active participants: </h3>
              <p className='text-black'>{incident.reporter}</p>
            </div>
            <div className='flex justify-between mb-2'>
              <h3>Observers: </h3>
              <p>{incident.reporter}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncidentDetails;
