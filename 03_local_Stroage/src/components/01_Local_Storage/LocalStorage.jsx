import React from "react";

const LocalStorage = () => {
  const userDetails = {
    name: "Rahul",
    age: 12,
    something: true,
  };

  /* 1. Set data in localStorage but it take only string data not object so convert it into string */
  console.log("Object Data : ", userDetails);
  const str = JSON.stringify(userDetails);
  console.log(str);
  localStorage.setItem("userDetails", str);

  /* 2. Get data into localStorage but it take string "key" data is string convert into object  */
  const obj = JSON.parse(localStorage.getItem("userDetails"));
  console.log("object: ", obj);

  /* 3. Remove Data from localStorage */
  localStorage.removeItem("userDetails");

  /* 4. Clear Data form localStorage */
  localStorage.clear();

  return (
    <div>
      <h1>LocalStorage</h1>
    </div>
  );
};

export default LocalStorage;
