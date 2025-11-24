import React, { useState } from "react";
import { X } from "lucide-react";

const PaymentModal = ({ product, onClose }) => {
  const [method, setMethod] = useState("");
  const [upiId, setUpiId] = useState("");
  const [cardDetails, setCardDetails] = useState({
    number: "",
    name: "",
    expiry: "",
    cvv: "",
  });
  const [isSuccess, setIsSuccess] = useState(false);

  const handlePayment = (e) => {
    e.preventDefault();

    if (!method) {
      alert("Please select a payment method");
      return;
    }

    if (method === "UPI" && upiId.trim() === "") {
      alert("Please enter your UPI ID");
      return;
    }

    if ((method === "Credit Card" || method === "Debit Card" || method === "EMI") && 
        (!cardDetails.number || !cardDetails.name || !cardDetails.expiry || !cardDetails.cvv)) {
      alert("Please fill in all card details");
      return;
    }

    // Mock successful payment
    setTimeout(() => {
      setIsSuccess(true);
    }, 1000);
  };

  if (isSuccess) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center w-[90%] max-w-md">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">✅ Payment Successful!</h2>
          <p className="text-gray-600 mb-6">
            Your order for <strong>{product.name}</strong> (₹{product.price}) has been placed successfully.
          </p>
          <button
            onClick={onClose}
            className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
      <div className="bg-white rounded-2xl shadow-lg p-6 w-[90%] max-w-lg relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X size={22} />
        </button>

        <h2 className="text-xl font-semibold mb-2">Buy {product.name}</h2>
        <p className="text-gray-600 mb-4">Price: ₹{product.price}</p>

        <h3 className="font-medium mb-2">Select Payment Method:</h3>
        <div className="space-y-2 mb-4">
          {["UPI", "NetBanking", "EMI", "Credit Card", "Debit Card"].map((option) => (
            <label key={option} className="flex items-center gap-2">
              <input
                type="radio"
                name="payment"
                value={option}
                checked={method === option}
                onChange={(e) => setMethod(e.target.value)}
              />
              {option}
            </label>
          ))}
        </div>

        {/* Conditional Inputs */}
        {method === "UPI" && (
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">UPI ID</label>
            <input
              type="text"
              placeholder="example@upi"
              className="w-full border border-gray-300 rounded-lg px-3 py-2"
              value={upiId}
              onChange={(e) => setUpiId(e.target.value)}
            />
          </div>
        )}

        {(method === "Credit Card" ||
          method === "Debit Card" ||
          method === "EMI") && (
          <div className="space-y-2 mb-4">
            <input
              type="text"
              placeholder="Card Number"
              className="w-full border border-gray-300 rounded-lg px-3 py-2"
              maxLength="16"
              value={cardDetails.number}
              onChange={(e) =>
                setCardDetails({ ...cardDetails, number: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Name on Card"
              className="w-full border border-gray-300 rounded-lg px-3 py-2"
              value={cardDetails.name}
              onChange={(e) =>
                setCardDetails({ ...cardDetails, name: e.target.value })
              }
            />
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="MM/YY"
                className="flex-1 border border-gray-300 rounded-lg px-3 py-2"
                value={cardDetails.expiry}
                onChange={(e) =>
                  setCardDetails({ ...cardDetails, expiry: e.target.value })
                }
              />
              <input
                type="password"
                placeholder="CVV"
                className="flex-1 border border-gray-300 rounded-lg px-3 py-2"
                maxLength="3"
                value={cardDetails.cvv}
                onChange={(e) =>
                  setCardDetails({ ...cardDetails, cvv: e.target.value })
                }
              />
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex justify-end gap-3">
          <button
            className="px-4 py-2 bg-gray-200 rounded-lg"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            onClick={handlePayment}
          >
            Proceed to Pay
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
