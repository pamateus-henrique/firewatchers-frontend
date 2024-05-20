import FormRowSelect from "../components/FormRowSelect";

import { INCIDENT_SEVERITY } from "../utils/constants";

const ChangeSeverityModal = ({ toggleModal, data, onSubmit }) => {
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
          Update Severity
        </div>
        <div className='content px-2 pt-4'>
          <form
            onSubmit={onSubmit}
            className='space-y-2 flex flex-col flex-grow'
          >
            <FormRowSelect
              name='severity'
              labelText='Incident Severity'
              defaultValue={data}
              list={Object.values(INCIDENT_SEVERITY)}
              footerNote='Issues with low impact, which can usually be handled within working hours. Most customers are unlikely to notice any problems. Examples include a slight drop in application performance.'
            />
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
      </div>
    </div>
  );
};

export default ChangeSeverityModal;
