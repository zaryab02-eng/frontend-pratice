import CountryCard from "./CountryCard";

const GlobalSnapshot = ({ countries }) => {
  return (
    <div className="h-full flex flex-col">
      <div className="mb-6 pb-4 border-b border-border/50">
        <h2 className="text-2xl font-bold text-white mb-1">Global Snapshot</h2>
        <p className="text-sm text-text-tertiary font-medium">
          What the world is sharing right now
        </p>
      </div>

      <div className="flex-1 overflow-y-auto space-y-4 pr-2 -mr-2">
        {countries.map((country, idx) => (
          <div key={idx} style={{ animationDelay: `${idx * 0.05}s` }} className="animate-slide-up">
            <CountryCard country={country} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GlobalSnapshot;
