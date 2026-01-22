import CountryCard from "./CountryCard";

const GlobalSnapshot = ({ countries }) => {
  return (
    <div className="h-full flex flex-col">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-100">
          Global Snapshot
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          What the world is sharing right now
        </p>
      </div>

      <div className="flex-1 overflow-y-auto space-y-4 pr-2">
        {countries.map((country, idx) => (
          <CountryCard key={idx} country={country} />
        ))}
      </div>
    </div>
  );
};

export default GlobalSnapshot;
