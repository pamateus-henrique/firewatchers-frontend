import { useLoaderData } from "react-router-dom";
import FormRow from "../components/FormRow";
import FormRowSelect from "../components/FormRowSelect";
import { Form } from "react-router-dom";
import axios from "axios";

export const loader = async ({ params }) => {
  const { id } = params;

  try {
    const data = await axios.get(`/api/v1/incidents/${id}`);
    return data;
  } catch (error) {
    return error;
  }
};
const EditIncident = () => {
  const { data } = useLoaderData();
  const incident = data.incident[0];

  return (
    <div className='mx-auto max-w-screen-lg'>
      <div className=''>
        <button className='p-2 bg-blue-600 rounded-md px-4 w-full text-white'>
          Submit
        </button>
      </div>
    </div>
  );
};

export default EditIncident;
