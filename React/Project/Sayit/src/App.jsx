import { useState } from "react";
import LoginScreen from "./components/LoginScreen";
import TrustDialog from "./components/TrustDialog";
import LocationPermission from "./components/LocationPermission";
import CityWorld from "./components/CityWorld";
import AreaView from "./components/AreaView";

const App = () => {
  // Flow: login -> location -> trust -> city -> area
  const [step, setStep] = useState("login");
  const [selectedArea, setSelectedArea] = useState(null);
  const [userCity, setUserCity] = useState("Mumbai"); // Mock city name

  const handleLogin = () => {
    // After Google login, ask for location
    setStep("location");
  };

  const handleLocationEnable = () => {
    // After location enabled, show trust dialog
    setStep("trust");
  };

  const handleTrustAgree = () => {
    // After agreeing, proceed to city map
    setStep("city");
  };

  const handleAreaSelect = (area) => {
    setSelectedArea(area);
    setStep("area");
  };

  const handleBackToCity = () => {
    setSelectedArea(null);
    setStep("city");
  };

  const handleLogout = () => {
    setStep("login");
    setSelectedArea(null);
  }; 

  if (step === "login") {
    return (
      <LoginScreen onContinue={handleLogin} />
    );
  }

  if (step === "location") {
    return (
      <div className="fixed inset-0 w-full h-full">
        <LocationPermission onEnable={handleLocationEnable} />
      </div>
    );
  }

  if (step === "trust") {
    return (
      <div className="fixed inset-0 w-full h-full">
        <TrustDialog onAgree={handleTrustAgree} />
      </div>
    );
  }

  if (step === "area" && selectedArea) {
    return (
      <div className="fixed inset-0 w-full h-full overflow-hidden">
        <AreaView area={selectedArea} onBack={handleBackToCity} />
      </div>
    );
  }

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden">
      <CityWorld onAreaSelect={handleAreaSelect} userCity={userCity} onLogout={handleLogout} />
    </div>
  );
};

export default App;
