import { Form, Link, redirect } from "react-router-dom";
import FormRow from "../components/FormRow";
import FormRowSelect from "../components/FormRowSelect";
import FormRowMultiSelect from "../components/FormRowMultiSelect";
import axios from "axios";
import {
  INCIDENT_TYPE,
  INCIDENT_SEVERITY,
  INCIDENT_SOURCE,
  AREAS_AFFECTED,
  PRODUCTS_AFECTED,
  PERFORMANCE_INDICATORS,
  options,
} from "../utils/constants";

export const action = async ({ request }) => {
  const formData = await request.formData();

  let data = Object.fromEntries(formData);
  data.products_affected = formData.getAll("products_affected");
  data.category = "Active";
  data.status = "Open";
  console.log(data);
  // try {
  //   console.log(data);
  //   await axios.post("/api/v1/incidents", data);
  //   return redirect("/dashboard");
  // } catch (e) {
  //   console.log(e.response.data);
  //   return {
  //     errors: e.response.data || { message: "An unexpected error occurred" },
  //   };
  // }
  return "ok";
};

const DeclareIncident = () => {
  return (
    <div className='mx-auto max-w-screen-lg'>
      <Form className='mt-6 space-y-6' method='post'>
        <FormRow
          type='text'
          name='title'
          placeholder='The office dog is lost...'
          labelText='Title'
        />

        <FormRowSelect
          name='type'
          labelText='Incident Type'
          defaultValue='Authorization'
          list={Object.values(INCIDENT_TYPE)}
        />
        <FormRowSelect
          name='severity'
          labelText='Incident Severity'
          defaultValue={INCIDENT_SEVERITY.NO_CUSTOMER}
          list={Object.values(INCIDENT_SEVERITY)}
        />
        <FormRow
          type='text'
          name='summary'
          placeholder='Give more context about the incident'
          labelText='Summary'
        />
        <FormRow
          type='text'
          name='impact'
          placeholder='Enter value...'
          labelText='Impact'
        />
        <FormRowSelect
          name='source_of_the_incident'
          labelText='Incident Source'
          defaultValue=''
          list={Object.values(INCIDENT_SOURCE)}
        />
        <FormRowMultiSelect
          name='products_affected'
          labelText='Products Affected'
          defaultValue=''
          options={options}
        />
        <FormRowSelect
          name='areas_affected'
          labelText='Areas Affected'
          defaultValue=''
          list={Object.values(AREAS_AFFECTED)}
        />
        <FormRowSelect
          name='performance_indicators'
          labelText='Performance Indicators'
          defaultValue=''
          list={Object.values(PERFORMANCE_INDICATORS)}
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
        />
        <div className=''>
          <button className='p-2 bg-blue-600 rounded-md px-4 w-full text-white'>
            Submit
          </button>
        </div>
        <p className='text-sm text-slate-400'>
          Already have an account?
          <Link to='/login' className='text-blue-400 pl-1'>
            Login
          </Link>
        </p>
      </Form>
    </div>
  );
};

export default DeclareIncident;
