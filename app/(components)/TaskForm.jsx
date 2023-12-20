"use client"
import { useRouter } from "next/navigation";
import { useState } from "react";

const TaskForm = () => {
    const handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;

        setFormData((prevState) =>({
            ...prevState,[name]:value,
        }))
    };
     const handleSubmit = () => {
        console.log("submitted");
     }
    const startingTaskData = {
        title:"",
        description:"",
        status:"incomplete"
    };

    const [formData, setFormData] = useState(startingTaskData);


  return (
    <div className="flex justify-center">
        <form className="flex flex-col gap-3 w-1/2"
        method="POST"
        onSubmit={handleSubmit}
        >
        <h3>Create a Task</h3>
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
        </form>
    </div>
  )
}

export default TaskForm