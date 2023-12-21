import TaskForm from '@/app/(components)/TaskForm'
import React from 'react'

const getTaskById = async (id) => {
  const res = await fetch(`http:localhost:3000/api/Tasks/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to Get Task");
  }
  return res.json();
};

const TaskPage = async({params}) => {
  const EDITMODE = params.id === "new" ? false : true;

  let updateTaskData = {};

  if (EDITMODE){
      updateTaskData = await getTaskById(params.id);
      updateTaskData = updateTaskData.foundTask;
      console.log(updateTaskData);
  } else {
    updateTaskData = {
      _id: "new",
    }
  }
  return (
    <TaskForm task={updateTaskData}/>
  )
}

export default TaskPage