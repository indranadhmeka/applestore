import React from "react";
import ComplaintForm from "../components/ComplaintForm";

const WatchComplaintPage = () => {
  return (
    <div className="max-w-3xl mx-auto p-8 bg-white shadow-lg mt-8 rounded-xl">
      <h2 className="text-3xl font-bold mb-4 text-center">
        Apple Watch Complaint Form
      </h2>
      <p className="text-center text-gray-600 mb-6">
        Have an issue with your Apple Watch? Submit your complaint below.
      </p>
      <ComplaintForm />
    </div>
  );
};

export default WatchComplaintPage;
