import React from "react";
import Card from "./Card";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-10 ">
      <div
        className="col-span-2 "
        style={{
          height: "calc(100vh - 48px)",
        }}
      >
        <Sidebar />
      </div>
      <div
        className="col-span-8 p-4 flex flex-col gap-4"
        style={{
          height: "calc(100vh - 48px)",
        }}
      >
        <div className="flex justify-end">
          <button className="px-2 py-1 border-2 border-red-500 rounded-lg text-red-500">
            + Add Card
          </button>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {[...Array(5)].map((val, index) => {
            return <Card />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
