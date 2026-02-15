import React from "react";
import { useState } from "react";
const TowWayBinding = () => {
  const [data, setData] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted by", data);

    setData("");
  };
  return (
    <div>
      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          className="px-4 py-2 border rounded-md outline-none"
          name="name"
          value={data}
          onChange={(e) => {
            setData(e.target.value);
          }}
        />
        <button
          type="submit"
          className="px-4 py-2 rounded-md outline-none bg-blue-500">
          Submit
        </button>
      </form>
    </div>
  );
};

export default TowWayBinding;
