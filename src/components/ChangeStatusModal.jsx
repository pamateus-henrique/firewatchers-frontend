import { useEffect, useState } from "react";
import FormRowMultiSelect from "./FormRowMultiSelect";
import FormRow from "./FormRow";
import axios from "axios";
import { formatData } from "../utils/formatData";
import modals from "../utils/modals";

const changeStatusModal = ({
  toggleModal,
  toggleSecundaryModal,
  id,
  status,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isChecked, setIschecked] = useState(1);

  const options = [
    { value: "Investigating", label: "Investigating" },
    { value: "Fixing", label: "Fixing" },
    { value: "Monitoring", label: "Monitoring" },
    { value: "Clean up", label: "Clean up" },
  ];

  console.log(status);

  const handleChange = (e) => {
    setIschecked(e.target.value);
    console.log(isChecked);
  };

  const handleSubmit = async (event, method = "PATCH") => {
    if (isChecked == 1) {
      event.preventDefault();
      const endpoint = `/api/v1/incidents/${id}/actions/update-status`;
      try {
        const formData = new FormData(event.target);
        const submitData = Object.fromEntries(formData);

        await axios({
          method: method,
          url: endpoint,
          data: submitData,
        });
        toggleSecundaryModal();
      } catch (e) {
        console.error(e);
      }
    }

    if (isChecked == 3) {
      toggleModal(modals.declare_incident);
      toggleSecundaryModal();
    }
  };

  return (
    <div
      className='fixed inset-0 backdrop-blur-[2px] flex justify-center items-start pt-8 overflow-y-scroll'
      onClick={toggleSecundaryModal}
    >
      <div
        className='w bg-white rounded-md mx-4 shadow-xl px-4 w-3/12 mb-16  border border-slate-200'
        onClick={(e) => e.stopPropagation()}
      >
        <div className='title px-4 py-4 border-b-[1px] border-slate-300 text-md font-medium -mx-4'>
          Update status
        </div>
        <div className='content px-2 pt-4'>
          {isLoading ? (
            <h1>Loading...</h1>
          ) : (
            <div>
              <p className='text-md pb-2'>
                Which category best describes the current state?
              </p>
              <div className='flex flex-col border-1 border rounded-md text-sm shadow-sm'>
                <div
                  className='p-4 border-1 border-b flex items-center '
                  onClick={() => setIschecked(1)}
                >
                  <input
                    type='radio'
                    className='mr-2 h-4 w-4'
                    checked={isChecked == 1}
                    value='1'
                  />

                  <p>Active - it's still ongoing</p>
                </div>
                <div
                  className='p-4 border-1 border-b'
                  onClick={() => setIschecked(2)}
                >
                  <label htmlFor='' className='text-md'>
                    <input
                      type='radio'
                      className='mr-2 h-4 w-4'
                      checked={isChecked == 2}
                      onClick={handleChange}
                      value='2'
                    />
                    Paused - it's temporarily on hold
                  </label>
                </div>
                <div className='p-4 border-1' onClick={() => setIschecked(3)}>
                  <label htmlFor='' className='text-md'>
                    <input
                      type='radio'
                      className='mr-2 h-4 w-4'
                      checked={isChecked == 3}
                      onClick={handleChange}
                      value='3'
                    />
                    Resolved - it's no longer a problem
                  </label>
                </div>
              </div>

              <form
                className='space-y-2 flex flex-col flex-grow'
                onSubmit={handleSubmit}
              >
                {isChecked == 1 ? (
                  <div className='pt-4'>
                    <p className='pb-1'>Status</p>
                    <FormRowMultiSelect
                      name='status'
                      defaultValue={{ label: `${status}`, value: `${status}` }}
                      isMult={false}
                      options={options}
                    />
                  </div>
                ) : (
                  ""
                )}
                <div className='buttons flex items-center justify-end py-4'>
                  <button
                    type='submit'
                    className='p-2 rounded-md bg-blue-400 text-white text-sm hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-700'
                  >
                    Update
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default changeStatusModal;
