import React from "react";

const RepairForm = () => {
  return (
    <form className="space-y-4">
      <input className="w-full border p-2 rounded" placeholder="Full Name" required />
      <input className="w-full border p-2 rounded" type="email" placeholder="Email ID" required />
      <input className="w-full border p-2 rounded" type="tel" placeholder="Mobile Number" required />
      <select className="w-full border p-2 rounded" required>
        <option value="">Select State</option>
        <option>Telangana</option>
        <option>Tamil Nadu</option>
        <option>Karnataka</option>
      </select>
      <select className="w-full border p-2 rounded" required>
        <option value="">Select City</option>
        <option>Hyderabad</option>
        <option>Chennai</option>
        <option>Bangalore</option>
      </select>
      <input className="w-full border p-2 rounded" type="time" placeholder="Preferred Slot Time" required />
      <button className="bg-green-600 text-white w-full py-2 rounded-md hover:bg-green-700">
        Book Repair Slot
      </button>
    </form>
  );
};

export default RepairForm;
