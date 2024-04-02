import { USERS } from "../utils/constants";
import NewFormRowSelect from "./NewFormSelect";
import { useEffect, useState } from "react";
import FormRowMultiSelect from "../components/FormRowMultiSelect";
import axios from "axios";
const Modal = ({ toggleModal, data, onSubmit }) => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const { data } = await axios.get(`/api/v1/users/all-users`);
        const formattedData = data.rows.map((user) => ({
          label: user.name,
          value: user.id,
        }));
        console.log(formattedData);
        setUsers(formattedData);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <div
      onClick={toggleModal}
      className='fixed inset-0 bg-blue-100 bg-opacity-50 flex justify-center items-start pt-8'
    >
      <div
        className='w-1/4 bg-white rounded-md mx-4 shadow-xl p-2'
        onClick={(e) => e.stopPropagation()}
      >
        <div className='title px-2 py-4 border-b-[1px] border-slate-300 text-md font-medium'>
          Edit Role Assignments
        </div>
        <div className='content px-2 pt-4'>
          {isLoading ? (
            <h1>True</h1>
          ) : (
            <form
              onSubmit={onSubmit}
              className='space-y-2 flex flex-col flex-grow'
            >
              <FormRowMultiSelect
                name='lead'
                labelText='Incident Lead'
                defaultValue=''
                isMult={false}
                options={users}
              />

              {/* <NewFormRowSelect
                name='lead'
                labelText='QE'
                defaultValue={data.lead}
                list={users.rows}
              /> */}

              <div className='buttons flex items-center justify-end py-4'>
                <button
                  type='submit'
                  className='p-2 rounded-md bg-blue-400 text-white text-sm hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-700'
                >
                  Update
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
