import React from "react";

const MacSupportPage = () => {
  return (
    <div className="p-10 max-w-5xl mx-auto text-gray-800">
      <h1 className="text-4xl font-semibold mb-4">Mac Support</h1>
      <p className="mb-8 text-lg">
        Get help with your Mac — including setup, macOS updates, and repairs.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gray-100 p-6 rounded-2xl">
          <h3 className="text-xl font-semibold mb-2">Update macOS</h3>
          <p>Keep your Mac up to date with the latest macOS and security fixes.</p>
        </div>

        <div className="bg-gray-100 p-6 rounded-2xl">
          <h3 className="text-xl font-semibold mb-2">Back Up with Time Machine</h3>
          <p>Automatically back up your files to an external drive or iCloud.</p>
        </div>

        <div className="bg-gray-100 p-6 rounded-2xl">
          <h3 className="text-xl font-semibold mb-2">Repair and Service</h3>
          <p>Find Apple Authorized Service Providers for Mac repair.</p>
        </div>

        <div className="bg-gray-100 p-6 rounded-2xl">
          <h3 className="text-xl font-semibold mb-2">Performance and Battery</h3>
          <p>Optimize performance and troubleshoot slow operation or overheating.</p>
        </div>
      </div>
    </div>
  );
};

export default MacSupportPage;
