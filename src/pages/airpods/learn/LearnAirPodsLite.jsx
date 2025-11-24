import React from "react";

const LearnAirPodsLite = () => {
  return (
    <div className="bg-gray-50 text-center py-20">
      <h1 className="text-4xl font-bold mb-6">AirPods Lite</h1>
      <img src="/images/airpods-lite.png" alt="AirPods Lite" className="mx-auto w-1/3 mb-8" />
      <div className="max-w-4xl mx-auto text-lg text-gray-700 space-y-6">
        <p>
          AirPods Lite are designed for simplicity — just connect and play.
          With reliable Bluetooth 5.3 connectivity and lightweight comfort, they’re perfect for daily use.
        </p>
        <p>
          Experience clear calls, balanced sound, and easy device switching — all at an affordable price.
        </p>
      </div>
    </div>
  );
};

export default LearnAirPodsLite;
