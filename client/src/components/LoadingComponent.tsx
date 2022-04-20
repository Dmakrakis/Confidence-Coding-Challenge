import React from "react";

export const LoadingComponent = () => {
  return (
    <div
      className="border-dashed absolute animate-spin inline-block w-8 h-8  border-black border-4  rounded-full left-1/2 top-2/4"
      role="status"
    >
      <span className="invisible">Loading Data...</span>
    </div>
  );
};
