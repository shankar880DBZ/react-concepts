import React from "react";
const AdvancedForm = () => {
  const handleNumber = (e) => {
    if (
      !/[0-9]/.test(e.key) &&
      e.key !== "Backspace" &&
      e.key !== "Delete" &&
      e.key !== "ArrowLeft" &&
      e.key !== "ArrowRight" &&
      e.key !== "Tab"
    ) {
      e.preventDefault();
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const data = Object.fromEntries(formData.entries());
    console.log(data);
  };

  return (
    <div className="font-Manrope">
      <form className="grid" onSubmit={handleSubmit}>
        <div className="mb-5">
          <h1 className="text-5xl font-semibold leading-15 ">SignUp</h1>
          <h5 className="text-xl">
            Already have an account ?{" "}
            <button className="text-[#d4582a] ml-2">Sing In</button>
          </h5>
        </div>
        <div className="grid grid-cols-1 gap-4">
          <div className="grid grid-cols-2 gap-4 ">
            <div>
              <div className="leading-10">
                <label htmlFor="first_name">First Name</label>
              </div>
              <input
                type="text"
                placeholder="First Name"
                className="border py-2 px-4 rounded-md outline-none"
                name="first_name"
                id="first_name"
              />
            </div>
            <div>
              <div className="leading-10">
                <label htmlFor="last_name">Last Name</label>
              </div>
              <input
                type="text"
                placeholder="Last Name"
                className="border py-2 px-4 rounded-md outline-none"
                name="last_name"
                id="last_name"
              />
            </div>
          </div>

          <div>
            <div className="leading-10">
              <label htmlFor="phone">Phone Number</label>
            </div>
            <input
              type="tel"
              inputMode="numeric"
              pattern="[0-9]{10}"
              maxLength={10}
              placeholder="Enter your phone number here"
              className="border py-2 px-4 rounded-md outline-none w-full  "
              name="phone_number"
              id="phone"
              onKeyDown={handleNumber}
              required
            />
          </div>
          <div>
            <div className="leading-10">
              <label htmlFor="email">Email</label>
            </div>
            <input
              type="email"
              placeholder="Enter your email here"
              required
              className="border py-2 px-4 rounded-md outline-none w-full"
              name="email"
              id="email"
            />
          </div>
          <div className="grid grid-cols-1 gap-4 mt-5">
            <button className="w-full bg-[#d4582a] p-4 rounded-md text-md">
              Register Now
            </button>
            <div className="flex justify-start items-center gap-2 w-full">
              <input type="checkbox" id="check_box" name="agree" required />{" "}
              <label htmlFor="check_box" className="text-xs">
                I agree to the{" "}
                <span className="text-[#d4582a]">
                  Teams and Conditions, Private Policy
                </span>
                and anti-piracy policy
              </label>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AdvancedForm;
