import { useLoaderData } from "react-router-dom";
import FormRow from "../components/FormRow";
import FormRowSelect from "../components/FormRowSelect";
import { Form } from "react-router-dom";
import axios from "axios";
import {
  INCIDENT_TYPE,
  INCIDENT_SEVERITY,
  INCIDENT_SOURCE,
  AREAS_AFFECTED,
  PRODUCTS_AFECTED,
  PERFORMANCE_INDICATORS,
  INCIDENT_CATEGORY,
} from "../utils/constants";
export const loader = async ({ params }) => {
  const { id } = params;
  console.log(id);
  try {
    const data = await axios.get(`/api/v1/incidents/${id}`);
    return data;
  } catch (error) {
    return error;
  }
};
const EditIncident = () => {
  const { data } = useLoaderData();
  const incident = data.rows[0];
  console.log(incident.areas);
  return (
    <div className='mx-auto max-w-screen-lg'>
      <Form className='mt-6 space-y-6' method='post'>
        <FormRowSelect
          name='type'
          labelText='Incident Category'
          defaultValue={incident.category}
          list={Object.values(INCIDENT_CATEGORY)}
        />

        <FormRow
          type='text'
          name='title'
          placeholder='The office dog is lost...'
          labelText='Title'
          defaultValue={incident.title}
        />

        <FormRowSelect
          name='type'
          labelText='Incident Type'
          defaultValue={incident.type}
          list={Object.values(INCIDENT_TYPE)}
        />
        <FormRowSelect
          name='severity'
          labelText='Incident Severity'
          defaultValue={incident.severity}
          list={Object.values(INCIDENT_SEVERITY)}
        />
        <FormRow
          type='text'
          name='summary'
          placeholder='Give more context about the incident'
          defaultValue={incident.summary}
          labelText='Summary'
        />
        <FormRow
          type='text'
          name='impact'
          placeholder='Enter value...'
          defaultValue={incident.impact}
          labelText='Impact'
        />
        <FormRowSelect
          name='source'
          labelText='Incident Source'
          defaultValue={incident.source}
          list={Object.values(INCIDENT_SOURCE)}
        />
        <FormRowSelect
          name='products'
          labelText='Products Affected'
          defaultValue=''
          list={Object.values(PRODUCTS_AFECTED)}
        />
        <FormRowSelect
          name='areas'
          labelText='Areas Affected'
          defaultValue={incident.areas}
          list={Object.values(AREAS_AFFECTED)}
        />
        <FormRowSelect
          name='indicators'
          labelText='Performance Indicators'
          defaultValue=''
          list={Object.values(PERFORMANCE_INDICATORS)}
        />
        <FormRow
          type='datetime-local'
          name='impactStarted'
          placeholder='mm/dd/yyyy, --:-- --'
          labelText='Impact started at'
        />
        <FormRow
          type='datetime-local'
          name='impactEnded'
          placeholder='mm/dd/yyyy, --:-- --'
          labelText='Impact stopped at'
        />
        <FormRow
          type='text'
          name='slackThread'
          placeholder='url....'
          labelText='Slack Thread'
        />
        <div className=''>
          <button className='p-2 bg-blue-600 rounded-md px-4 w-full text-white'>
            Submit
          </button>
        </div>
      </Form>
    </div>
  );
};

export default EditIncident;
