import IconTemp from "../components/IconTemp";
import { TbCategory } from "react-icons/tb";
import { FiClock } from "react-icons/fi";
import { useState } from "react";

const BreadCrumb = ({ highlightedStep }) => {
  const steps = [
    "Investigating",
    "Fixing",
    "Monitoring",
    "Clean up",
    "Documentation",
    "In Review",
  ];

  return (
    <div className='bg-slate-100 w-full flex justify-start items-center p-3 px-8 space-x-4'>
      <div className='breadcrumb bg-white flex px-2 shadow-sm rounded-full border border-slate-300 text-sm text-slate-500 hover:bg-slate-200'>
        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex items-center ${
              highlightedStep === step ? "text-slate-900" : ""
            }`}
          >
            {highlightedStep === step && (
              <span className='rounded-full bg-red-600 w-2 h-2 animate-pulse'></span>
            )}
            <div className='px-2'>{step}</div>
            <IconTemp />
          </div>
        ))}
        <div className='flex items-center'>
          <div className='px-2'>...</div>
        </div>
      </div>

      <div className='flex items-center justify-center text-slate-500 space-x-2 text-sm'>
        <div className='flex justify-center items-center space-x-1'>
          <TbCategory />
          <p>Banking</p>
        </div>
        <div className='flex justify-center items-center space-x-1'>
          <FiClock />
          <p>Ongoing for 1d 17h</p>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumb;
