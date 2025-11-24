import React from "react";

const BillingPage = () => {
  return (
    <div className="p-10 max-w-4xl mx-auto text-gray-800">
      <h1 className="text-4xl font-semibold mb-4">Billing & Subscriptions</h1>
      <p className="mb-6 text-lg">
        Manage your App Store purchases, subscriptions, and payment methods.
      </p>

      <div className="space-y-5">
        <div className="bg-gray-100 p-5 rounded-2xl">
          <h3 className="text-xl font-semibold mb-2">Manage Purchases</h3>
          <p>View your purchase history and request a refund.</p>
        </div>
        <div className="bg-gray-100 p-5 rounded-2xl">
          <h3 className="text-xl font-semibold mb-2">Manage Subscriptions</h3>
          <p>Change or cancel subscriptions like Apple Music, iCloud, etc.</p>
        </div>
        <div className="bg-gray-100 p-5 rounded-2xl">
          <h3 className="text-xl font-semibold mb-2">Payment Declined</h3>
          <p>
            If your card was declined, update your billing information or
            payment method.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BillingPage;
