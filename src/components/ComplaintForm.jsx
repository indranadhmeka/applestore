import React from "react";

const ComplaintForm = () => {
  return (
    <form className="space-y-4">
      <input className="w-full border p-2 rounded" placeholder="Full Name" required />
      <input className="w-full border p-2 rounded" type="email" placeholder="Email ID" required />
      <input className="w-full border p-2 rounded" type="tel" placeholder="Mobile Number" required />
      <select className="w-full border p-2 rounded" required>
        <option value="">Select Watch Model</option>
        <option>Apple Watch Ultra 2</option>
        <option>Apple Watch Series 10</option>
        <option>Apple Watch SE</option>
      </select>
      <textarea
        className="w-full border p-2 rounded"
        rows="4"
        placeholder="Describe your issue"
        required
      ></textarea>
      <button className="bg-red-600 text-white w-full py-2 rounded-md hover:bg-red-700">
        Submit Complaint
      </button>
    </form>
  );
};

export default ComplaintForm;
