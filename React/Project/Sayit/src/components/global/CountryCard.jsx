const CountryCard = ({ country }) => {
  return (
    <div className="bg-secondary border border-border rounded-lg p-4 hover:border-accent hover:border-opacity-30 transition-smooth">
      <div className="flex items-center gap-3 mb-3">
        <span className="text-3xl">{country.flag}</span>
        <h4 className="text-lg font-semibold text-gray-100">
          {country.country}
        </h4>
      </div>

      <div className="space-y-2">
        {country.topConfessions.map((confession, idx) => (
          <div
            key={idx}
            className="text-sm text-gray-400 pl-3 border-l-2 border-accent border-opacity-30"
          >
            {confession.length > 80
              ? `${confession.substring(0, 80)}...`
              : confession}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountryCard;
