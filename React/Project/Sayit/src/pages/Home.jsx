import { useState } from "react";
import CityMap from "../components/map/CityMap";
import ConfessionFeed from "../components/confession/ConfessionFeed";
import PostConfession from "../components/confession/PostConfession";
import GlobalSnapshot from "../components/global/GlobalSnapshot";
import { mockConfessions, mockGlobalData } from "../data/mockData";

const Home = () => {
  const [confessions, setConfessions] = useState(mockConfessions);
  const [activeTab, setActiveTab] = useState("local");

  const handleNewConfession = (confession) => {
    setConfessions([confession, ...confessions]);
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 max-w-7xl">
      {/* Hero Section */}
      <div className="mb-10 lg:mb-16 text-center lg:text-left">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
          Your City's <span className="gradient-text">Voice</span>
        </h1>
        <p className="text-lg sm:text-xl text-text-tertiary font-medium max-w-2xl mx-auto lg:mx-0">
          Share your thoughts anonymously. Connect with your community through honest confessions.
        </p>
      </div>

      {/* Main Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-10">
        {/* Map Section - Desktop */}
        <div className="hidden lg:block lg:col-span-2">
          <div className="h-[650px] lg:h-[750px]">
            <CityMap />
          </div>
        </div>

        {/* Feed Section */}
        <div className="lg:col-span-1">
          <div className="sticky top-24">
            {/* Tab Switcher */}
            <div className="flex gap-2 mb-5 p-1 bg-surface/50 backdrop-blur-sm rounded-xl border border-border">
              <button
                onClick={() => setActiveTab("local")}
                className={`flex-1 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                  activeTab === "local"
                    ? "bg-gradient-to-r from-accent to-accent-dark text-white shadow-lg"
                    : "text-text-tertiary hover:text-white hover:bg-elevated"
                }`}
              >
                Local
              </button>
              <button
                onClick={() => setActiveTab("global")}
                className={`flex-1 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                  activeTab === "global"
                    ? "bg-gradient-to-r from-accent to-accent-dark text-white shadow-lg"
                    : "text-text-tertiary hover:text-white hover:bg-elevated"
                }`}
              >
                Global
              </button>
            </div>

            {/* Feed Container */}
            <div className="h-[600px] lg:h-[700px] bg-surface/30 backdrop-blur-sm rounded-2xl p-6 border border-border">
              {activeTab === "local" ? (
                <ConfessionFeed confessions={confessions} />
              ) : (
                <GlobalSnapshot countries={mockGlobalData} />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Map */}
      <div className="lg:hidden mb-10 h-[400px] sm:h-[450px]">
        <CityMap />
      </div>

      {/* Post Section */}
      <div className="max-w-2xl mx-auto">
        <PostConfession onPost={handleNewConfession} />
      </div>
    </div>
  );
};

export default Home;
