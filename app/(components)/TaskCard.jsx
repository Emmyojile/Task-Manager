import React from "react";
import DeleteTask from "./DeleteTask";
import StatusDisplay from "./StatusDisplay";
import EditTask from "./EditTask";
import Link from "next/link";

const TaskCard = ({ task }) => {
  const formatTimestamp = (timestamp) => {
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };

    const date = new Date(timestamp);
    const formattedDate = date.toLocaleString("en-US", options);

    return formattedDate;
  };

  return (
    <div className="flex flex-col bg-card rounded-md shadow-lg p-3 m-2">
      <div className="flex mb-3">
        <div className="ml-auto  flex gap-3">
          <Link href={`/TaskPage/${task._id}`} style={{display:"contents"}}>
          <EditTask />
          </Link>
          <DeleteTask id={task._id}/>
        </div>
      </div>
      <h4>{task.title}</h4>
      <hr className="h-px border-0 bg-page mb-2" />
      <p className="whitespace-pre-wrap">{task.description}</p>
      <div className="flex-grow"></div>
      <div className="flex mt-2">
        <div className="flex flex-col">
          <p className="text-xs my-1">{formatTimestamp(task.createdAt)}</p>
        </div>
        <div className="ml-auto flex items-end">
          <StatusDisplay status={task.status} />
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
