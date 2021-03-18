import React from "react";

const Link = ({ title, onClick }) => {
  return (
    <p
      onClick={onClick}
      className="hover:text-yellow-700 cursor-pointer text-gray-800"
    >
      {" "}
      {title}
    </p>
  );
};

export default Link;
