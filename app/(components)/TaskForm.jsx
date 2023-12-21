"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const TaskForm = ({ task }) => {
  const EDITMODE = task._id === "new" ? false : true;
  const router = useRouter();
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if(EDITMODE){
      const res = await fetch(`/api/Tasks/${task._id}`, {
        method: "PUT",
        body: JSON.stringify({ formData }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(`Failed to Update task: ${errorData.message}`);
      }
    } else{
      const res = await fetch("/api/Tasks", {
        method: "POST",
        body: JSON.stringify({ formData }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(`Failed to create task: ${errorData.message}`);
      }
    }
    
    router.refresh();
    router.push("/");
  };

  const startingTaskData = {
    title: "",
    description: "",
    status: "incomplete",
  };

  if (EDITMODE) {
    startingTaskData["title"] = task.title;
    startingTaskData["description"] = task.description;
    startingTaskData["status"] = task.status;
  }

  const [formData, setFormData] = useState(startingTaskData);

  return (
    <div className="flex justify-center">
      <form
        className="flex flex-col gap-3 w-1/2"
        method="POST"
        onSubmit={handleSubmit}
      >
        <h3>{EDITMODE ? "Update your Task" : "Create a Task"}</h3>
        <label>Title</label>
        <input
          id="title"
          name="title"
          type="text"
          onChange={handleChange}
          required={true}
          value={formData.title}
        />
        <label>Description</label>
        <textarea
          id="description"
          name="description"
          onChange={handleChange}
          required={true}
          value={formData.description}
          rows={"4"}
        />
        <input type="submit" className="btn text-white" value={EDITMODE ? "Update your Task" : "Create a Task"}/>
      </form>
    </div>
  );
};

export default TaskForm;
