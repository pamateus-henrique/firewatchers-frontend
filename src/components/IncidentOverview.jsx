import {
  FcHighPriority,
  FcLowPriority,
  FcMediumPriority,
} from "react-icons/fc";

import { FiClock } from "react-icons/fi";

import { HiMiniSignal } from "react-icons/hi2";

import { TbCategory } from "react-icons/tb";

const IncidentOverview = ({ data }) => {
  const renderSeverityIcon = () => {
    switch (data.severity) {
      case "Major":
        return <FcHighPriority className='w-4 h-4 text-slate-500' />;
      case "Minor":
        return <FcMediumPriority className='w-4 h-4 text-slate-500' />;
      case "No customer impact":
        return <FcLowPriority className='w-4 h-4 text-slate-500' />;
    }
  };

  return (
    <div className='incident p-2 border-b border-slate-200 hover:bg-slate-100 space-y-2 pl-8'>
      <h1 className='text-sm'>
        <span className='font-medium'>{`INC-${data.id} `}</span>
        {data.title}
      </h1>
      <div className='labels flex space-x-2'>
        <div className='flex bg-slate-200 rounded-lg justify-center items-center truncate space-x-1 p-1'>
          <span>{renderSeverityIcon()}</span>
          <p className='text-xs'>{data.severity}</p>
        </div>
        <div className='flex items-center justify-center space-x-1'>
          <span className='rounded-full bg-red-600 w-2 h-2 animate-pulse'></span>
          <p className='text-sm text-slate-700'>{data.status}</p>
        </div>
        <div className='flex justify-center items-center text-sm text-slate-700 space-x-1'>
          <span>
            <TbCategory />
          </span>
          <p>{data.type_name}</p>
        </div>
        <div className='flex justify-center items-center text-sm text-slate-700 space-x-1'>
          <span>
            <FiClock />
          </span>
          <p>1 Hour 2m</p>
        </div>
        <div className='flex justify-center items-center text-sm text-slate-700 space-x-1'>
          <span className='rounded-full w-5 h-5 overflow-hidden'>
            <img src={data.avatar_url} alt='' />
          </span>
          <p>{data.lead_name}</p>
        </div>
      </div>
    </div>
  );
};

export default IncidentOverview;
