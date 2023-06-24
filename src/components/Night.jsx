import React from "react";

const Night = () => {
  return (
    <label className="swap swap-rotate">
      {/* this hidden checkbox controls the state */}
      <input type="checkbox" />

      {/* sun icon */}
      <svg
        className="swap-on fill-current w-10 h-10"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        {/* sun icon paths */}
      </svg>

      {/* moon icon */}
      <svg
        className="swap-off fill-current w-10 h-10"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        {/* moon icon paths */}
      </svg>
    </label>
  );
};

export default Night;
