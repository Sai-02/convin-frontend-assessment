import React from "react";

const Card = ({ val }) => {
  return (
    <div className="justify-self-center shadow rounded-lg p-4  cursor-pointer flex flex-col gap-4 w-[300px]">
      <p className="">{val.name}</p>
      <p className="">{val.url}</p>
      <p className="italic">{val.category}</p>
      <div className="flex justify-between items-center">
        <button className="rounded py-1 px-2 text-white bg-gray-500">
          Edit
        </button>
        <button className="rounded py-1 px-2 text-white bg-red-500">
          Delete
        </button>
      </div>
    </div>
  );
};

export default Card;
