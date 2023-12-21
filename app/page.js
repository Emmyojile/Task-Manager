import TaskCard from "./(components)/TaskCard";

// const getTasks = async (status = "incomplete") => {
//   try {
//     const res = await fetch(`http://localhost:3000/api/Tasks?status=${status}`);
//     const data = await res.json();
//     return data.tasks;
//   } catch (error) {
//     console.log("Error getting tasks", error);
//   }
// };
const getTasks = async () => {
  try {
    const res = await fetch(
      "http://localhost:3000/api/Tasks",
      { cache: "no-store" }
    ); // No query parameter
    const data = await res.json();
    return data.tasks;
  } catch (error) {
    console.log("Error getting tasks", error);
  }
};

export default async function Home() {
  // const incompleteTasks = await getTasks("incomplete");
  // const completedTasks = await getTasks("completed");

  const allTasks = await getTasks();

  const incompleteTasks = allTasks.filter(
    (task) => task.status === "incomplete"
  );
  const completedTasks = allTasks.filter((task) => task.status === "completed");

  return (
    <div className="p-5">
      <h2>Incomplete Tasks</h2>
      <div className="lg:grid grid-cols-2 2xl:grid-cols-4">
        {allTasks &&
          incompleteTasks?.map((task) => (
            <TaskCard key={task._id} task={task} />
          ))}
      </div>

      <h2>Completed Tasks</h2>
      <div className="lg:grid grid-cols-2 2xl:grid-cols-4">
        {allTasks &&
          completedTasks?.map((task) => (
            <TaskCard key={task._id} task={task} />
          ))}
      </div>
    </div>
  );
}
