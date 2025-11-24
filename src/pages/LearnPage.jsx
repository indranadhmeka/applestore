// src/pages/LearnPage.jsx
import React from "react";
import { useParams } from "react-router-dom";
import Iphone16Page from "./models/Iphone16Page";
import MacbookAirM3Page from "./models/MacBookAirM3Page";
import IpadProM4Page from "./models/IpadProM4Page";
import WatchUltra2Page from "./models/WatchUltra2Page";
import AirpodsPro2Page from "./models/AirPodsPro2Page";
import AppleTV4KPage from "./models/AppleTV4KPage";
import HomePodMiniPage from "./models/HomePodMiniPage";
import MagsafeChargerPage from "./models/MagSafeChargerPage";

const LearnPage = () => {
  const { id } = useParams();

  switch (id) {
    case "1":
      return <Iphone16Page />;
    case "2":
      return <MacbookAirM3Page />;
    case "3":
      return <IpadProM4Page />;
    case "4":
      return <WatchUltra2Page />;
    case "5":
      return <AirpodsPro2Page />;
    case "6":
      return <AppleTV4KPage />;
    case "7":
      return <HomePodMiniPage />;
    case "8":
      return <MagsafeChargerPage />;
    default:
      return <p className="text-center py-10">Product not found</p>;
  }
};

export default LearnPage;
