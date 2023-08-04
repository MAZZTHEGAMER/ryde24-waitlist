import React, { useState } from "react";

function Waitlist() {
  const [waitlist, setWaitlist] = useState("");
  const [showButton, setShowButton] = useState(false);

  const showSearchButton = () => {
    setShowButton(true);
  };

  const hideSearchButton = () => {
    setShowButton(false);
  };

  const Waitlist = () => {
    // Your search logic here
    console.log("Join waitlist:", waitlist);
  };


  // Function to toggle the custom location form
  // const toggleCustomLocationForm = () => {
  //   setShowCustomLocation(!showCustomLocation);
  // };

  return (
    
    <div className="col-span-full mt-9">
      <label
        htmlFor="waitlist"
        className="block text-lg font-semibold leading-6 text-indigo-600 mb-2 "
      >
        <span className="inline-block"></span> Be The First To know when we Lunch 🚀
      </label>
      <div className="relative">
        <form  name="Waitlistform" action="" data-netlify="true" id="waitlistid">
           <input
          type="email"
          name="waitlistemails"
          id="waitlist"
          autoComplete="off"
          className="block w-full h-12 rounded-lg border-2 border-indigo-200 px-4 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-indigo-400 transition duration-300 ease-in-out"
          placeholder="Join The Waitlist? 🚌"
          value={waitlist}
          onChange={(e) => {
            setWaitlist(e.target.value);
            if (e.target.value.trim() !== "") {
              showSearchButton();
            } else {
              hideSearchButton();
            }
          }}
        />
        {showButton && (
          <button
            className="absolute inset-y-0 right-0 flex items-center pr-4"
              onClick={Waitlist}
              type="submit"
          >
            <svg
              className="h-6 w-6 text-indigo-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </button>
        )}
        </form>
       
      </div>
    </div>
  );
}

export default Waitlist;
