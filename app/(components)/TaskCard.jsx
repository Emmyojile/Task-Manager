import React from "react";
import DeleteTask from "./DeleteTask";
import StatusDisplay from "./StatusDisplay";
import EditTask from "./EditTask";

const TaskCard = () => {
  return (
    <div className="flex flex-col bg-card rounded-md shadow-lg p-3 m-2">
      <div className="flex mb-3">
        <div className="ml-auto  flex gap-3">
          <EditTask/>
          <DeleteTask />
        </div>
      </div>
      <h4>Task Title</h4>
      <hr className="h-px border-0 bg-page mb-2" />
      <p className="whitespace-pre-wrap">Task Description</p>
      <div className="flex-grow"></div>
      <div className="flex mt-2">
        <div className="flex flex-col">
          <p className="text-xs my-1">08/31/23 10:43PM</p>
        </div>
        <div className="ml-auto flex items-end">
          <StatusDisplay />
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
