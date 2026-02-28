import React, { useEffect, useState } from "react";

const ToDoList = () => {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    task: "",
    message: "",
  });
  const [editIndex, setEditIndex] = useState(null);
  const inputHandler = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const deleteHandler = (indexToDelete) => {
    const updatedData = data.filter((_, index) => {
      return index !== indexToDelete;
    });
    setData(updatedData);
  };

  const editHandler = (index) => {
    setFormData(data[index]);
    setEditIndex(index);
  };
  const submitHandler = (event) => {
    event.preventDefault();

    if (editIndex !== null) {
      const updateData = [...data];
      updateData[editIndex] = formData;
      setData(updateData);
      setEditIndex(null);
    } else {
      setData((prev) => [...prev, formData]);
    }

    console.log(data);

    setFormData({
      task: "",
      message: "",
    });
  };

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(data));
  }, [data]);

  useState(() => {
    const saveData = localStorage.getItem("todo");
    if (saveData) {
      setData(JSON.parse(saveData));
    }
  }, []);

  return (
    <div className="w-full bg-zinc-900 h-screen ">
      <h1 className="text-5xl font-medium mb-5 px-5 ">ToDo List </h1>
      <form onSubmit={submitHandler} className="p-5">
        <div className="mb-5">
          <input
            type="text"
            placeholder="Enter your task..."
            required
            className="w-full border px-4 py-2 rounded-md outline-none "
            name="task"
            value={formData.task}
            onChange={inputHandler}
          />
        </div>
        <div className="mb-5">
          <textarea
            name="message"
            value={formData.message}
            onChange={inputHandler}
            placeholder="Message..."
            rows={5}
            className="w-full resize-none border py-2 px-4 rounded-md"></textarea>
        </div>
        <div>
          <button
            className={`${editIndex !== null ? `py-2 px-4 w-full bg-yellow-500 rounded-md hover:bg-yellow-600 cursor-pointer duration-700 transition-all` : `py-2 px-4 w-full bg-blue-500 rounded-md hover:bg-blue-600 cursor-pointer duration-700 transition-all`}`}
            type="submit">
            {editIndex !== null ? "Update Task" : "Submit"}
          </button>
        </div>
      </form>
      <div className="w-full mt-5 bg-zinc-900 p-5  ">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-2">
          {data.map((item, index) => {
            return (
              <div className="bg-zinc-800  py-5 rounded-md" key={index}>
                <div className="text-center ">
                  <h5 className="text-center text-xl font-medium  tracking-tighter">
                    {item.task}
                  </h5>
                </div>
                <div className="p-2">
                  <p className="text-start px-1 tracking-tighter ">
                    {item.message}
                  </p>
                </div>
                <div className=" grid grid-cols-2 gap-5 text-center px-4 mt-5">
                  <button
                    className="px-4 py-2 bg-yellow-500 rounded-md hover:bg-yellow-700 cursor-pointer duration-700 active:scale-95 "
                    onClick={() => editHandler(index)}>
                    Edit
                  </button>
                  <button
                    className="px-4 py-2 bg-red-500 rounded-md  hover:bg-red-700 cursor-pointer duration-700 active:scale-95 "
                    onClick={() => deleteHandler(index)}>
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ToDoList;
