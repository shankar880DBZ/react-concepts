import React from "react";
import { useNavigate } from "react-router-dom";
const Navbar2 = () => {
  const navigate = useNavigate();
  return (
    <div className="py-4 px-8 bg-zinc-800 flex gap-10">
      <button className="py-2 px-5 rounded-md bg-blue-500 cursor-pointer active:scale-95" onClick={()=>{ navigate('/')}} >
        Return to Home Page
      </button>
      <button className="py-2 px-5 rounded-md bg-blue-500 cursor-pointer active:scale-95" onClick={()=>{ navigate(-1)}} >
        Back
      </button>
      <button className="py-2 px-5 rounded-md bg-blue-500 cursor-pointer active:scale-95" onClick={()=> {navigate(+1)}}>
        Next
      </button>
    </div>
  );
};

export default Navbar2;
