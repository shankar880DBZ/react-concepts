import React, { useEffect, useState } from "react";

const ToDo = () => {
  const [task, setTask] = useState("");
  const [todo, setTodo] = useState(
    JSON.parse(localStorage.getItem("ToDo_List")) || [],
  );

  useEffect(() => {
    localStorage.setItem("ToDo_List", JSON.stringify(todo));
  }, [todo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return;
    setTodo([...todo, task]);
    setTask("");
  };
  const removeItem = (index) => {
    const newTodo = todo.filter((_, i) => {
      return i !== index;
    });
    setTodo(newTodo);
  };

  return (
    <div className=" w-full h-screen bg-zinc-900 text-white ">
      <h1 className="text-3xl font-bold text-center pt-10">ToDo List </h1>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-5 p-10">
            <input
              type="text"
              placeholder="Enter your task..."
              required
              className="w-full px-4 py-4 border rounded-md outline-none "
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
            <button
              className="px-4 py-4 bg-blue-500 w-full cursor-pointer hover:bg-blue-800  duration-600 rounded-md "
              type="submit">
              Create Task{" "}
            </button>
          </div>
        </form>
        <div className="p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 w-full bg-zinc-900">
          {todo.map((item, index) => {
            return (
              <div className=" bg-zinc-800 rounded-md p-5" key={index}>
                <div className="mb-5">
                  <p>{item}</p>
                </div>
                <button
                  className="px-5 py-2 bg-red-500 rounded-md hover:bg-red-600 cursor-pointer active:scale-95 "
                  onClick={() => removeItem(index)}>
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ToDo;
