import { useState } from "react";
import Input from "../components/common/Input";
import ConfessionFeed from "../components/confession/ConfessionFeed";
import { mockConfessions } from "../data/mockData";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredConfessions, setFilteredConfessions] = useState(mockConfessions);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim() === "") {
      setFilteredConfessions(mockConfessions);
    } else {
      const filtered = mockConfessions.filter(
        (confession) =>
          confession.text.toLowerCase().includes(query.toLowerCase()) ||
          confession.city.toLowerCase().includes(query.toLowerCase()) ||
          confession.country.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredConfessions(filtered);
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 max-w-5xl">
      {/* Header */}
      <div className="mb-10 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
          Search <span className="gradient-text">Confessions</span>
        </h1>
        <p className="text-lg text-text-tertiary font-medium">
          Find confessions by keyword, city, or country
        </p>
      </div>

      {/* Search Input */}
      <div className="mb-6">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <svg className="w-5 h-5 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearch}
            placeholder="Search by keyword, city, or country..."
            className="w-full pl-12 pr-4 py-4 bg-surface text-white border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent placeholder-text-muted transition-all hover:border-border-light text-base"
          />
        </div>
      </div>

      {/* Results Count */}
      {searchQuery && (
        <div className="mb-6 px-4 py-3 bg-surface/50 backdrop-blur-sm border border-border rounded-xl">
          <p className="text-sm text-text-secondary font-medium">
            Found <span className="text-accent font-bold">{filteredConfessions.length}</span> result
            {filteredConfessions.length !== 1 ? "s" : ""} for <span className="text-white">"{searchQuery}"</span>
          </p>
        </div>
      )}

      {/* Results */}
      <div className="h-[600px] lg:h-[700px] bg-surface/30 backdrop-blur-sm rounded-2xl p-6 border border-border">
        <ConfessionFeed
          confessions={filteredConfessions}
          title={searchQuery ? "Search Results" : "All Confessions"}
        />
      </div>
    </div>
  );
};

export default Search;
