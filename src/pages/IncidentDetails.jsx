// IncidentDetails.js

// dependencies
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import TextEditor from "../components/TextEditor.jsx";
// components
import Modal from "../components/Modal";
import BreadCrumb from "../components/BreadCrumb";
import ChangeStatusModal from "../components/ChangeStatusModal.jsx";
// icons
import { IoIosArrowBack } from "react-icons/io";
import { GoPencil } from "react-icons/go";

// utils
import modals from "../utils/modals";
import { renderSeverityIcon } from "../utils/renderIcon.jsx";

const IncidentDetails = () => {
  const [data, setData] = useState(null);
  const [update, setUpdate] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSecundaryModalOpen, setIsSecundaryModalOpen] = useState(false);
  const [modal, setModal] = useState("");

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

  const submitForm = async (event, endpointTemplate, method) => {
    event.preventDefault();
    const endpoint = endpointTemplate.replace("${id}", id);
    try {
      const formData = new FormData(event.target);
      const submitData = Object.fromEntries(formData);

      await axios({
        method: method,
        url: endpoint,
        data: submitData,
      });
      setUpdate(!update);
      toggleModal();
    } catch (e) {
      console.error(e);
    }
  };

  const saveChanges = async (e) => {
    e.preventDefault();
    await axios.patch(`/api/v1/incidents/${id}/actions/update-summary`, {
      summary: editedSummary || incident.summary,
    });
    setIsEditingSummary(false);
    setUpdate(!update);
  };

  const toggleModal = (modal = "") => {
    setModal(modal);

    setIsModalOpen(!isModalOpen);
  };

  const toggleSecundaryModal = () => {
    setIsSecundaryModalOpen(!isSecundaryModalOpen);
    setUpdate(!update);
  };

  const incident = data?.incident[0];

  if (incident == null) {
    return <h1>Loading.....</h1>;
  }

  return (
    <div className='wrapper'>
      <div className='upperbar bg-white inline-flex border-b border-slate-200 p-5 text-lg space-x-1 w-full'>
        <div className='info flex items-center justify-center space-x-2'>
          <IoIosArrowBack className='w-7 h-7 text-slate-500' />
          <div
            className='severity flex items-center bg-slate-100 border-slate-300 border rounded-full p-2 px-3 hover:cursor-pointer'
            onClick={(e) => toggleModal(modals.update_severity)}
          >
            <span className='mr-0.5'>
              {renderSeverityIcon(incident.severity)}
            </span>
            <span className='text-sm'>{incident.severity}</span>
          </div>

          <h1 className='font-medium'>{"INC-" + incident.id}</h1>
          <span className='text-md text-slate-800 font-light'>
            {incident.title}
          </span>
        </div>
      </div>
      <div onClick={() => setIsSecundaryModalOpen(true)}>
        <BreadCrumb highlightedStep={incident.status} />
      </div>
      <div>
        <div className='mx-auto max-w-screen-xl flex mt-8 space-x-4'>
          <div className='content w-3/4'>
            {isModalOpen && (
              <Modal
                toggleModal={toggleModal}
                config={modal}
                onSubmit={submitForm}
              />
            )}

            {isSecundaryModalOpen && (
              <ChangeStatusModal
                toggleSecundaryModal={toggleSecundaryModal}
                toggleModal={toggleModal}
                id={incident.id}
                status={incident.status}
              />
            )}

            <div className='p-2 flex  shadow-md rounded-sm border border-slate-200'>
              {/* {isEditingSummary ? (
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
                  <span onClick={() => setIsEditingSummary(true)}>
                    <GoPencil className='w-4 h-4 text-slate-500' />
                  </span>
                </>
              )} */}
              <TextEditor initialText={"Testando"} />
            </div>
            <div className='header'>Updates</div>
          </div>
          <div className='aisde w-1/4 text-slate-600'>
            <div className='partipants text-sm'>
              <div
                className='flex justify-between mb-2'
                onClick={(e) => toggleModal(modals.update_lead)}
              >
                <h3>Incident Lead </h3>
                <div className='flex justify-center items-center  text-slate-700 space-x-1'>
                  <span className='rounded-full w-6 h-6 overflow-hidden'>
                    <img src={incident.avatar_url} alt='' />
                  </span>
                  <p>{incident.lead_name}</p>
                </div>
              </div>
              <div className='flex justify-between mb-2'>
                <h3>Reporter: </h3>
                <p className='text-slate-700'>{incident.reporter_name}</p>
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
    </div>
  );
};

export default IncidentDetails;
