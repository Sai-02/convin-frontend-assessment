import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Card";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  const navigate = useNavigate();
  const openAddCardPage = () => {
    navigate("/add");
  };
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
          <button
            className="px-2 py-1 border-2 border-red-500 rounded-lg text-red-500"
            onClick={openAddCardPage}
          >
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
