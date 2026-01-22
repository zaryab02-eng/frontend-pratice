import { useState } from "react";
import CityMap from "../components/map/CityMap";
import ConfessionFeed from "../components/confession/ConfessionFeed";
import PostConfession from "../components/confession/PostConfession";
import GlobalSnapshot from "../components/global/GlobalSnapshot";
import { mockConfessions, mockGlobalData } from "../data/mockData";

const Home = () => {
  const [confessions, setConfessions] = useState(mockConfessions);
  const [activeTab, setActiveTab] = useState("local"); // local or global

  const handleNewConfession = (confession) => {
    setConfessions([confession, ...confessions]);
  };

  return (
    <div className="container mx-auto px-4 py-6 max-w-7xl">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-100 mb-2">
          Your City's Voice
        </h1>
        <p className="text-gray-400">
          Anonymous confessions from people around you
        </p>
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: Map Visualization (Desktop) */}
        <div className="hidden lg:block lg:col-span-2">
          <div className="h-[600px]">
            <CityMap />
          </div>
        </div>

        {/* Right: Feed Section */}
        <div className="lg:col-span-1">
          <div className="sticky top-6">
            {/* Tab Switcher */}
            <div className="flex gap-2 mb-4">
              <button
                onClick={() => setActiveTab("local")}
                className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-smooth ${
                  activeTab === "local"
                    ? "bg-accent text-white"
                    : "bg-secondary text-gray-400 hover:text-gray-200"
                }`}
              >
                📍 Local
              </button>
              <button
                onClick={() => setActiveTab("global")}
                className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-smooth ${
                  activeTab === "global"
                    ? "bg-accent text-white"
                    : "bg-secondary text-gray-400 hover:text-gray-200"
                }`}
              >
                🌍 Global
              </button>
            </div>

            {/* Feed Container */}
            <div className="h-[700px] bg-tertiary rounded-xl p-6 border border-border">
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
      <div className="lg:hidden mt-6 h-[400px]">
        <CityMap />
      </div>

      {/* Post Section */}
      <div className="mt-8 max-w-2xl mx-auto">
        <PostConfession onPost={handleNewConfession} />
      </div>
    </div>
  );
};

export default Home;
