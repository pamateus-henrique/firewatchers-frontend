import { Form, Link, redirect } from "react-router-dom";
import FormRow from "./FormRow";
import FormRowSelect from "./FormRowSelect";
import FormRowMultiSelect from "./FormRowMultiSelect";
import axios from "axios";
import { INCIDENT_SEVERITY, INCIDENT_SOURCE } from "../utils/constants";
import { useEffect, useState } from "react";
import { formatData } from "../utils/formatData";

// export const action = async ({ request }) => {
//   const formData = await request.formData();

//   let data = Object.fromEntries(formData);
//   data.products_affected = formData.getAll("products_affected");
//   data.areas_affected = formData.getAll("areas_affected");
//   data.performance_indicators = formData.getAll("performance_indicators");

//   try {
//     await axios.post("/api/v1/incidents", data);
//     console.log(data);
//     return "ok";
//     return redirect("/dashboard");
//   } catch (e) {
//     console.log(e.response.data);
//     return {
//       errors: e.response.data || { message: "An unexpected error occurred" },
//     };
//   }
//   return "ok";
// };

const DeclareIncident = ({ toggleModal, onSubmit }) => {
  const [types, setTypes] = useState([]);
  const [causes, setCauses] = useState([]);
  const [areas, setAreas] = useState([]);
  const [products, setProducts] = useState([]);
  const [faultySystems, setFaultySystems] = useState([]);
  const [performanceIndicators, setPerformanceIndicators] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const { data } = await axios.get(`/api/v1/utils/types`);

        setTypes(formatData(data.fields.types));
        setCauses(formatData(data.fields.causes));
        setAreas(formatData(data.fields.areas));
        setProducts(formatData(data.fields.products));
        setFaultySystems(formatData(data.fields.faultySystems));
        setPerformanceIndicators(formatData(data.fields.performanceIndicators));
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <div
      className='fixed inset-0 bg-slate-900 bg-opacity-25 flex justify-center items-start pt-8 overflow-y-scroll'
      onClick={toggleModal}
    >
      <div
        className='w bg-white rounded-md mx-4 shadow-xl px-4 w-2/5 mb-16'
        onClick={(e) => e.stopPropagation()}
      >
        <div className='title px-4 py-4 border-b-[1px] border-slate-300 text-md font-medium -mx-4'>
          Declare Incident
        </div>

        <form
          className='mt-6 space-y-4'
          onSubmit={(event) => onSubmit(event, toggleModal)}
        >
          <FormRow
            type='text'
            name='title'
            labelText='Name'
            description="Give a short description of what is happening. If you'd like to, you can
          leave it blank and change it later"
          />

          <FormRowMultiSelect
            name='type'
            labelText='Incident Type'
            defaultValue=''
            isMult={false}
            options={types}
          />
          <FormRowSelect
            name='severity'
            labelText='Incident Severity'
            defaultValue={INCIDENT_SEVERITY.NO_CUSTOMER}
            list={Object.values(INCIDENT_SEVERITY)}
            footerNote='Issues with low impact, which can usually be handled within working hours. Most customers are unlikely to notice any problems. Examples include a slight drop in application performance.'
          />
          <FormRow
            type='text'
            name='summary'
            placeholder='Give more context about the incident'
            labelText='Summary'
            description="Your current understanding of what happened in the incident, and the impact it had. It's fine to go into detail here."
          />
          <FormRow
            type='text'
            name='impact'
            placeholder='Enter value...'
            labelText='Impact'
            description='How the incident impact the company? And the customers? How many transactions/users were affected? Was there financial loss? Describe it.
          '
          />
          <FormRowSelect
            name='source_of_the_incident'
            labelText='Incident Source'
            defaultValue=''
            list={Object.values(INCIDENT_SOURCE)}
            description='Internal: caused by our operation External: caused by a partner (BTG, bank, card brand, others .. )
          '
          />
          <FormRowMultiSelect
            name='products_affected'
            labelText='Products Affected'
            defaultValue=''
            options={products}
            description='Which products have been affected by the incident'
          />
          <FormRowMultiSelect
            name='areas_affected'
            labelText='Areas Affected'
            defaultValue=''
            options={areas}
            description='Which especific part of the products have been affected by the incident'
          />
          <FormRowMultiSelect
            name='performance_indicators'
            labelText='Performance Indicators'
            defaultValue=''
            options={performanceIndicators}
            description='Which performance indicator trigged the incident
          '
          />
          <FormRow
            type='datetime-local'
            name='impact_started_at'
            placeholder='mm/dd/yyyy, --:-- --'
            labelText='Impact started at'
          />
          <FormRow
            type='text'
            name='thread_on_slack'
            placeholder='url....'
            labelText='Slack Thread'
            description='link for a thread on Slack with the topic
          '
          />
          <div className='flex justify-end'>
            <button
              className='p-2 bg-slate-600 rounded-md px-4 w-24 text-white mb-4 mr-4'
              onClick={toggleModal}
            >
              Cancel
            </button>
            <button className='p-2 bg-blue-600 rounded-md px-4 w-24 text-white mb-4'>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DeclareIncident;
