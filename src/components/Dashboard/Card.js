import React from "react";

const Card = () => {
  return (
    <div className="justify-self-center shadow rounded-lg p-4  cursor-pointer flex flex-col gap-4 w-[300px]">
      <p className="">This is name</p>
      <p className="">youtube.com</p>
      <p className="italic">Category</p>
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
