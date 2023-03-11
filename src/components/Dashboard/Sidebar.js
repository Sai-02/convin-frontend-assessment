import React from "react";

const Sidebar = () => {
  return (
    <div className="bg-sky-100 h-full w-full text-white  grid ">
      <div className="gap-4 text-lg flex flex-col p-8 ">
        {[...Array(5)].map((val, index) => {
          return (
            <div className="flex justify-center cursor-pointer p-2   rounded-lg bg-sky-400">
              Bucket
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
