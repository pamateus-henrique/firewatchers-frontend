import {
  FcHighPriority,
  FcLowPriority,
  FcMediumPriority,
} from "react-icons/fc";

import { HiMiniSignal } from "react-icons/hi2";
import { FiClock } from "react-icons/fi";
import { TbCategory } from "react-icons/tb";

import { DateTime } from "luxon";

const IncidentLabels = ({ severity, status, type, duration }) => {
  const getDiffTime = () => {
    const date1 = DateTime.fromISO(duration);
    const now = DateTime.now();

    const difference = now.diff(date1, ["days", "hours", "minutes"]);
    const { days, hours, minutes } = difference.toObject();
    console.log();
    // Build the output string conditionally
    let output = "";
    if (days >= 1) {
      output = `${days}d ${hours}h`;
    } else {
      output = `${hours}h ${Math.floor(minutes)}m`;
    }
    return output;
  };

  const renderSeverityIcon = () => {
    switch (severity) {
      case "Major":
        return <FcHighPriority className='w-4 h-4 text-slate-500' />;
      case "Minor":
        return <FcMediumPriority className='w-4 h-4 text-slate-500' />;
      case "No customer impact":
        return <FcLowPriority className='w-4 h-4 text-slate-500' />;
    }
  };

  return (
    <div className='labels p-3.5 border-b flex items-center shrink self-strech'>
      <div className='flex'>
        <span className='mr-0.5 truncate overflow-hidden'>
          {renderSeverityIcon()}
        </span>
        <p className='mr-2 text-sm text-slate-900 max-w-24 truncate'>
          {severity}
        </p>
      </div>
      <div className='flex truncate items-center'>
        <span className='mr-0.5'>
          <HiMiniSignal className='h-4 w-4 text-slate-500' />
        </span>
        <p className='mr-2 text-sm text-slate-500 truncate'>{status}</p>
      </div>
      <div className='flex items-center'>
        {" "}
        <span className='mr-0.5'>
          <TbCategory className='h-4 w-4 text-slate-500 truncate' />
        </span>
        <p className='mr-2 text-sm text-slate-500 truncate'>{type}</p>
      </div>
      <div className='flex shrink truncate items-center'>
        <span className='mr-0.5'>
          <FiClock className='h-4 w-4 text-slate-500' />
        </span>
        <p className='mr-2 text-sm text-slate-500'>{getDiffTime()}</p>
      </div>
    </div>
  );
};

export default IncidentLabels;
