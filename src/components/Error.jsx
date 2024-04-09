import React from "react";

const Error = ({ error }) => {
  console.log(error);
  return (
    <div className="flex flex-row items-center text-3xl text-red-600">
      <h1>{error.response.data.message.toUpperCase()}</h1>
    </div>
  );
};

export default Error;
