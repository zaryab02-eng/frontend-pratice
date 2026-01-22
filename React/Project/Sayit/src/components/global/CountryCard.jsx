const CountryCard = ({ country }) => {
  return (
    <div className="bg-surface/50 backdrop-blur-sm border border-border rounded-xl p-5 hover:border-accent/30 hover:bg-surface/70 transition-all">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-3xl leading-none">{country.flag}</span>
        <h4 className="text-lg font-bold text-white">
          {country.country}
        </h4>
      </div>

      <div className="space-y-3">
        {country.topConfessions.map((confession, idx) => (
          <div
            key={idx}
            className="text-sm text-text-secondary pl-3.5 border-l-2 border-accent/40 leading-relaxed font-normal"
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
