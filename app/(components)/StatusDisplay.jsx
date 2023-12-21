import React from "react";

const StatusDisplay = ({ status }) => {
  const getColor = (status) => {
    let color = "bg-slate-700";
    switch (status.toLowerCase()) {
      case "completed":
        color = "bg-green-300";
        return color;
      case "incomplete":
        color = "bg-red-300";
        return color;
    }
    return color;
  };
  return (
    <span 
      className={`inline-block rounded-full ${getColor(
        status
      )} text-gray-700 px-2 py-1 text-xs font-semibold`}
    >
      {status}
    </span>
  );
};

export default StatusDisplay;
