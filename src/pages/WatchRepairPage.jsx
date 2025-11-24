import React from "react";
import RepairForm from "../components/RepairForm";

const WatchRepairPage = () => {
  return (
    <div className="max-w-3xl mx-auto p-8 bg-white shadow-lg mt-8 rounded-xl">
      <h2 className="text-3xl font-bold mb-4 text-center">
        Apple Watch Repair Service
      </h2>
      <p className="text-center text-gray-600 mb-6">
        Fill in your details to book a repair slot at an Apple Authorized Service Center.
      </p>
      <RepairForm />
    </div>
  );
};

export default WatchRepairPage;
