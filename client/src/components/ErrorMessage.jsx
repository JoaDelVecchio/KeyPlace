import React from "react";

const ErrorMessage = ({ error }) => {
  return <div className="text-red-500">{error}</div>;
};

export default ErrorMessage;
