// utils/renderIcon.js

import React from "react";
import {
  FcHighPriority,
  FcLowPriority,
  FcMediumPriority,
} from "react-icons/fc";

export const renderSeverityIcon = (severity) => {
  switch (severity) {
    case "Major":
      return <FcHighPriority className='w-5 h-5 text-slate-500' />;
    case "Minor":
      return <FcMediumPriority className='w-5 h-5 text-slate-500' />;
    case "No customer impact":
      return <FcLowPriority className='w-5 h-5 text-slate-500' />;
    default:
      return null;
  }
};
