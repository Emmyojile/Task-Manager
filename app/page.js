import TaskCard from "./(components)/TaskCard";

export default function Home() {
  return (
    <div className="p-5">
      <div className="lg:grid grid-cols-2 2xl:grid-cols-4">
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
      </div>
    </div>
  );
}
