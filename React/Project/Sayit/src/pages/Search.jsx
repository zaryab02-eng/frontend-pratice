import { useState } from "react";
import Input from "../components/common/Input";
import ConfessionFeed from "../components/confession/ConfessionFeed";
import { mockConfessions } from "../data/mockData";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredConfessions, setFilteredConfessions] =
    useState(mockConfessions);

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
          confession.country.toLowerCase().includes(query.toLowerCase()),
      );
      setFilteredConfessions(filtered);
    }
  };

  return (
    <div className="container mx-auto px-4 py-6 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-100 mb-2">
          Search Confessions
        </h1>
        <p className="text-gray-400">
          Find confessions by keyword, city, or country
        </p>
      </div>

      <div className="mb-6">
        <Input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search by keyword, city, or country..."
          className="w-full"
        />
      </div>

      {searchQuery && (
        <div className="mb-4 text-sm text-gray-400">
          Found {filteredConfessions.length} result
          {filteredConfessions.length !== 1 ? "s" : ""} for "{searchQuery}"
        </div>
      )}

      <div className="h-[700px] bg-tertiary rounded-xl p-6 border border-border">
        <ConfessionFeed
          confessions={filteredConfessions}
          title="Search Results"
        />
      </div>
    </div>
  );
};

export default Search;
