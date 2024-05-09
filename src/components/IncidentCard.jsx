import { Link } from "react-router-dom";

import IncidentLabels from "./IncidentLabels";

const IncidentCard = ({
  summary,
  title,
  avatar_url,
  lead_name,
  id,
  severity,
  status,
  type_name,
  impact_started_at,
}) => {
  return (
    <Link to={`incidents/${id}`}>
      <div className='incident-card bg-white border-slate-200 border shadow-sm rounded-md mt-2 overflow-hidden hover:border-slate-500 hover:shadow-md transition'>
        <div className='title bg-slate-100 p-3.5'>
          <h1 className='text-sm text-slate-900'>
            <span className='font-semibold'>INC-{id}</span>
            {" " + title}
          </h1>
        </div>
        <IncidentLabels
          severity={severity}
          status={status}
          type={type_name}
          duration={impact_started_at}
        />
        <div className='description p-2 h-36 overflow-hidden'>
          <p className='text-sm text-slate-500 text-justify line-clamp-5'>
            {summary}
          </p>
        </div>
        <div className='footer p-2 flex justify-between text-slate-500 text-sm'>
          <div className='flex justify-center items-center text-sm text-slate-700 space-x-1'>
            <span className='rounded-full w-5 h-5 overflow-hidden'>
              <img src={avatar_url} alt='' />
            </span>
            <p>{lead_name}</p>
          </div>
          <p>subscribe</p>
        </div>
      </div>
    </Link>
  );
};

export default IncidentCard;
