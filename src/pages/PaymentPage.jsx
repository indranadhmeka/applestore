import React from "react";
import { useParams } from "react-router-dom";

const products = {
  iphone16: {
    name: "iPhone 16",
    price: "₹89,900",
    description: "Next-level performance with the powerful A18 chip and Pro camera system.",
    image: "/images/iphone16.png",
  },
  macbookairm3: {
    name: "MacBook Air M3",
    price: "₹1,24,900",
    description: "Super thin, super fast, powered by Apple’s new M3 chip.",
    image: "/images/macbookairm3.png",
  },
  ipadprom4: {
    name: "iPad Pro M4",
    price: "₹99,900",
    description: "Ultra Retina XDR display and blazing-fast M4 chip.",
    image: "/images/ipadprom4.png",
  },
  watchultra2: {
    name: "Apple Watch Ultra 2",
    price: "₹89,900",
    description: "Adventure-ready with advanced fitness tracking and rugged design.",
    image: "/images/watchultra2.png",
  },
  airpodspro2: {
    name: "AirPods Pro 2",
    price: "₹24,900",
    description: "Immersive sound with noise cancellation and adaptive audio.",
    image: "/images/airpodspro2.png",
  },
};

const PaymentPage = () => {
  const { productId } = useParams();
  const product = products[productId];

  if (!product) {
    return (
      <div className="p-8 text-center text-red-600 text-xl">
        Product not found!
      </div>
    );
  }

  return (
    <div className="p-8 max-w-4xl mx-auto text-center">
      <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
      <img
        src={product.image}
        alt={product.name}
        className="mx-auto mb-6 w-64 h-64 object-contain"
      />
      <p className="text-gray-600 mb-2">{product.description}</p>
      <p className="text-2xl font-semibold text-gray-800 mb-8">
        {product.price}
      </p>

      <div className="border-t pt-6">
        <h2 className="text-2xl font-bold mb-4">Select Payment Option</h2>
        <div className="flex justify-center gap-6 flex-wrap">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition">
            UPI Pay
          </button>
          <button className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition">
            Net Banking
          </button>
          <button className="bg-orange-600 text-white px-6 py-3 rounded-xl hover:bg-orange-700 transition">
            Credit Card
          </button>
          <button className="bg-purple-600 text-white px-6 py-3 rounded-xl hover:bg-purple-700 transition">
            EMI Option
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
