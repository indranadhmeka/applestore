import React from "react";
import { Routes, Route } from "react-router-dom";

// 🌐 Common Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// 🏠 Main Pages
import HomePage from "./pages/StorePage";
import MacPage from "./pages/MacPage";
import IpadPage from "./pages/IpadPage";
import IphonePage from "./pages/IphonePage";
import WatchPage from "./pages/WatchPage";
import AirpodsPage from "./pages/AirpodsPage";
import TvHomePage from "./pages/TvHomePage";
import EntertainmentPage from "./pages/EntertainmentPage";
import AccessoriesPage from "./pages/AccessoriesPage";
import SupportPage from "./pages/SupportPage";

// ===== SUPPORT SUBPAGES =====
import ForgotPassword from "./pages/support/ForgotPassword";
import RepairPage from "./pages/support/RepairPage";
import BillingPage from "./pages/support/BillingPage";
import AppleCarePage from "./pages/support/AppleCarePage";
import GetSupportPage from "./pages/support/GetSupportPage";
import MySupportPage from "./pages/support/MySupportPage";
import IphoneSupportPage from "./pages/support/IphoneSupportPage";
import MacSupportPage from "./pages/support/MacSupportPage";
import IpadSupportPage from "./pages/support/IpadSupportPage";
import WatchSupportPage from "./pages/support/WatchSupportPage";
import AirpodsSupportPage from "./pages/support/AirpodsSupportPage";
import MusicSupportPage from "./pages/support/MusicSupportPage";
import TvSupportPage from "./pages/support/TvSupportPage";
// 📘 Learn & 💳 Payment
import LearnPage from "./pages/LearnPage";
import PaymentPage from "./pages/PaymentPage";

// 🧩 Models
import Iphone16Page from "./pages/models/Iphone16Page";
import IpadProM4Page from "./pages/models/IpadProM4Page";
import WatchUltra2Page from "./pages/models/WatchUltra2Page";
import AirPodsPro2Page from "./pages/models/AirPodsPro2Page";
import AppleTV4KPage from "./pages/models/AppleTV4KPage";
import HomePodMiniPage from "./pages/models/HomePodMiniPage";
import MacBookAirM3Page from "./pages/models/MacBookAirM3Page";
import MagSafeChargerPage from "./pages/models/MagSafeChargerPage";


// ⌚ Watch Sub-Pages
import WatchLearnPage from "./pages/WatchLearnPage";
import WatchPaymentPage from "./pages/WatchPaymentPage";
import WatchRepairPage from "./pages/WatchRepairPage";
import WatchComplaintPage from "./pages/WatchComplaintPage";

// 🎧 AirPods Model Pages
import AirPods3Page from "./pages/airpods/models/AirPods3Page";
import AirPods2Page from "./pages/airpods/models/AirPods2Page";
import AirPodsMaxPage from "./pages/airpods/models/AirPodsMaxPage";
import AirPodsLitePage from "./pages/airpods/models/AirPodsLitePage";
import AirPodsSportEditionPage from "./pages/airpods/models/AirPodsSportEditionPage";
import AirPodsStudioPage from "./pages/airpods/models/AirPodsStudioPage";
import AirPodsSEPage from "./pages/airpods/models/AirPodsSEPage";
import AirPodsXPage from "./pages/airpods/models/AirPodsXPage";
import AirPodsUltraPage from "./pages/airpods/models/AirPodsUltraPage";

// 🎓 AirPods Learn Pages
import LearnAirPodsPro2 from "./pages/airpods/learn/LearnAirPodsPro2";
import LearnAirPods3 from "./pages/airpods/learn/LearnAirPods3";
import LearnAirPods2 from "./pages/airpods/learn/LearnAirPods2";
import LearnAirPodsMax from "./pages/airpods/learn/LearnAirPodsMax";
import LearnAirPodsLite from "./pages/airpods/learn/LearnAirPodsLite";
import LearnAirPodsSportEdition from "./pages/airpods/learn/LearnAirPodsSportEdition";
import LearnAirPodsStudio from "./pages/airpods/learn/LearnAirPodsStudio";
import LearnAirPodsSE from "./pages/airpods/learn/LearnAirPodsSE";
import LearnAirPodsX from "./pages/airpods/learn/LearnAirPodsX";
import LearnAirPodsUltra from "./pages/airpods/learn/LearnAirPodsUltra";

// 💳 AirPods Buy Pages
import BuyAirPodsPro2 from "./pages/airpods/buy/BuyAirPodsPro2";
import BuyAirPods3 from "./pages/airpods/buy/BuyAirPods3";
import BuyAirPods2 from "./pages/airpods/buy/BuyAirPods2";
import BuyAirPodsMax from "./pages/airpods/buy/BuyAirPodsMax";
import BuyAirPodsLite from "./pages/airpods/buy/BuyAirPodsLite";
import BuyAirPodsSportEdition from "./pages/airpods/buy/BuyAirPodsSportEdition";
import BuyAirPodsStudio from "./pages/airpods/buy/BuyAirPodsStudio";
import BuyAirPodsSE from "./pages/airpods/buy/BuyAirPodsSE";
import BuyAirPodsX from "./pages/airpods/buy/BuyAirPodsX";
import BuyAirPodsUltra from "./pages/airpods/buy/BuyAirPodsUltra";

// 🛒 AirPods Support Pages
import FreeDelivery from "./pages/airpods/support/FreeDelivery";
import WaysToBuy from "./pages/airpods/support/WaysToBuy";
import GetHelpBuying from "./pages/airpods/support/GetHelpBuying";
import Personalize from "./pages/airpods/support/Personalize";

// 📺 TV & Smart Home Pages
import AppleTv4KPage from "./pages/tvhome/models/AppleTv4KPage";
import AppleTvAppPage from "./pages/tvhome/models/AppleTvAppPage";
import AppleTvPlusPage from "./pages/tvhome/models/AppleTvPlusPage";
import HomePodPage from "./pages/tvhome/models/HomePodPage";
import HomePodMiniSmartPage from "./pages/tvhome/models/HomePodMiniPage";
import HomeAppPage from "./pages/tvhome/models/HomeAppPage";
import AccessoriesSmartPage from "./pages/tvhome/models/AccessoriesPage";

// 🎬 Entertainment Subpages
import AppleOnePage from "./pages/entertainment/AppleOnePage";
import AppleTVPlusPage from "./pages/entertainment/AppleTVPlusPage";
import AppleMusicPage from "./pages/entertainment/AppleMusicPage";
import AppleArcadePage from "./pages/entertainment/AppleArcadePage";



// 🧪 Test Page
import TestGsapPage from "./pages/TestGsapPage";
import ApplePodcastsPage from "./pages/entertainment/ApplePodcastsPage";
import AppleBooksPage from "./pages/entertainment/AppleBooksPage";

const App = () => {
  return (
    <>
      <Navbar />
      <main className="flex-grow bg-white text-gray-900">
        <Routes>
          {/* 🏠 Main Pages */}
          <Route path="/" element={<HomePage />} />
          <Route path="/mac" element={<MacPage />} />
          <Route path="/ipad" element={<IpadPage />} />
          <Route path="/iphone" element={<IphonePage />} />
          <Route path="/watch" element={<WatchPage />} />
          <Route path="/airpods" element={<AirpodsPage />} />
          <Route path="/tv-home" element={<TvHomePage />} />
          <Route path="/entertainment" element={<EntertainmentPage />} />
          <Route path="/accessories" element={<AccessoriesPage />} />
          <Route path="/support" element={<SupportPage />} />

           {/* ===== SUPPORT SUBPAGES ===== */}
          <Route path="/support/forgot-password" element={<ForgotPassword />} />
          <Route path="/support/repair" element={<RepairPage />} />
          <Route path="/support/billing" element={<BillingPage />} />
          <Route path="/support/applecare" element={<AppleCarePage />} />
          <Route path="/support/get-support" element={<GetSupportPage />} />
          <Route path="/support/my-support" element={<MySupportPage />} />

          {/* ===== PRODUCT-SPECIFIC SUPPORT ===== */}
          <Route path="/support/iphone" element={<IphoneSupportPage />} />
          <Route path="/support/mac" element={<MacSupportPage />} />
          <Route path="/support/ipad" element={<IpadSupportPage />} />
          <Route path="/support/watch" element={<WatchSupportPage />} />
          <Route path="/support/airpods" element={<AirpodsSupportPage />} />
          <Route path="/support/music" element={<MusicSupportPage />} />
          <Route path="/support/tv" element={<TvSupportPage />} />

          {/* ⌚ Watch Subpages */}
          <Route path="/watch-learn" element={<WatchLearnPage />} />
          <Route path="/watch-payment" element={<WatchPaymentPage />} />
          <Route path="/watch-repair" element={<WatchRepairPage />} />
          <Route path="/watch-complaint" element={<WatchComplaintPage />} />

          {/* 📘 Learn & Payment */}
          <Route path="/learn/:id" element={<LearnPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          {/* 🧩 Model Pages */}
<Route path="/models/iphone16" element={<Iphone16Page />} />
<Route path="/models/ipadprom4" element={<IpadProM4Page />} />
<Route path="/models/watchultra2" element={<WatchUltra2Page />} />
<Route path="/models/airpodspro2" element={<AirPodsPro2Page />} />
<Route path="/models/appletv4k" element={<AppleTV4KPage />} />
<Route path="/models/homepodmini" element={<HomePodMiniPage />} />
<Route path="/models/macbookairm3" element={<MacBookAirM3Page />} />
<Route path="/models/magsafecharger" element={<MagSafeChargerPage />} />


          {/* 🎧 AirPods Models */}
          <Route path="/airpods/models/airpods-pro2" element={<AirPodsPro2Page />} />
          <Route path="/airpods/models/airpods3" element={<AirPods3Page />} />
          <Route path="/airpods/models/airpods2" element={<AirPods2Page />} />
          <Route path="/airpods/models/airpods-max" element={<AirPodsMaxPage />} />
          <Route path="/airpods/models/airpods-lite" element={<AirPodsLitePage />} />
          <Route path="/airpods/models/airpods-sport-edition" element={<AirPodsSportEditionPage />} />
          <Route path="/airpods/models/airpods-studio" element={<AirPodsStudioPage />} />
          <Route path="/airpods/models/airpods-se" element={<AirPodsSEPage />} />
          <Route path="/airpods/models/airpods-x" element={<AirPodsXPage />} />
          <Route path="/airpods/models/airpods-ultra" element={<AirPodsUltraPage />} />

          {/* 🎓 AirPods Learn Pages */}
          <Route path="/learn/airpods-pro2" element={<LearnAirPodsPro2 />} />
          <Route path="/learn/airpods3" element={<LearnAirPods3 />} />
          <Route path="/learn/airpods2" element={<LearnAirPods2 />} />
          <Route path="/learn/airpods-max" element={<LearnAirPodsMax />} />
          <Route path="/learn/airpods-lite" element={<LearnAirPodsLite />} />
          <Route path="/learn/airpods-sport-edition" element={<LearnAirPodsSportEdition />} />
          <Route path="/learn/airpods-studio" element={<LearnAirPodsStudio />} />
          <Route path="/learn/airpods-se" element={<LearnAirPodsSE />} />
          <Route path="/learn/airpods-x" element={<LearnAirPodsX />} />
          <Route path="/learn/airpods-ultra" element={<LearnAirPodsUltra />} />

          {/* 💳 AirPods Buy Pages */}
          <Route path="/airpods/buy/airpods-pro2" element={<BuyAirPodsPro2 />} />
          <Route path="/airpods/buy/airpods3" element={<BuyAirPods3 />} />
          <Route path="/airpods/buy/airpods2" element={<BuyAirPods2 />} />
          <Route path="/airpods/buy/airpods-max" element={<BuyAirPodsMax />} />
          <Route path="/airpods/buy/airpods-lite" element={<BuyAirPodsLite />} />
          <Route path="/airpods/buy/airpods-sport-edition" element={<BuyAirPodsSportEdition />} />
          <Route path="/airpods/buy/airpods-studio" element={<BuyAirPodsStudio />} />
          <Route path="/airpods/buy/airpods-se" element={<BuyAirPodsSE />} />
          <Route path="/airpods/buy/airpods-x" element={<BuyAirPodsX />} />
          <Route path="/airpods/buy/airpods-ultra" element={<BuyAirPodsUltra />} />

          {/* 🛒 AirPods Support */}
          <Route path="/airpods/support/free-delivery" element={<FreeDelivery />} />
          <Route path="/airpods/support/ways-to-buy" element={<WaysToBuy />} />
          <Route path="/airpods/support/help-buying" element={<GetHelpBuying />} />
          <Route path="/airpods/support/personalize" element={<Personalize />} />

          {/* 📺 TV & Smart Home */}
          <Route path="/tvhome" element={<TvHomePage />} />
          <Route path="/apple-tv-4k" element={<AppleTv4KPage />} />
          <Route path="/apple-tv-app" element={<AppleTvAppPage />} />
          <Route path="/apple-tv-plus" element={<AppleTvPlusPage />} />
          <Route path="/homepod" element={<HomePodPage />} />
          <Route path="/homepod-mini" element={<HomePodMiniSmartPage />} />
          <Route path="/home-app" element={<HomeAppPage />} />
          <Route path="/tvhome/accessories" element={<AccessoriesSmartPage />} />

          {/* 🎬 Entertainment Subpages */}
          <Route path="/entertainment/apple-one" element={<AppleOnePage />} />
          <Route path="/entertainment/apple-tv-plus" element={<AppleTVPlusPage />} />
          <Route path="/entertainment/apple-music" element={<AppleMusicPage />} />
          <Route path="/entertainment/apple-arcade" element={<AppleArcadePage />} />
          <Route path="/entertainment/apple-podcasts" element={<ApplePodcastsPage />} />
          <Route path="/entertainment/apple-books" element={<AppleBooksPage />} />

          {/* 🧪 Test Page */}
          <Route path="/test" element={<TestGsapPage />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
};

export default App;
