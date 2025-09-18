import TaskApp from "./components/TaskApp/TaskApp";

export default function Page() {
  return (
    <main className="w-full min-h-screen p-6 bg-gray-50">
      <h1 className="text-3xl font-bold text-center mb-6"> Task Manager</h1>
      <TaskApp />
    </main>
  );
}
