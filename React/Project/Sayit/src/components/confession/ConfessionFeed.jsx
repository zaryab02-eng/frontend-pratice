import ConfessionCard from "./ConfessionCard";

const ConfessionFeed = ({ confessions, title = "Latest Confessions" }) => {
  return (
    <div className="h-full flex flex-col">
      <div className="mb-6 pb-4 border-b border-border/50">
        <h2 className="text-2xl font-bold text-white mb-1">{title}</h2>
        <p className="text-sm text-text-tertiary font-medium">
          {confessions.length} {confessions.length === 1 ? "confession" : "confessions"}
        </p>
      </div>

      <div className="flex-1 overflow-y-auto space-y-4 pr-2 -mr-2">
        {confessions.map((confession, index) => (
          <div key={confession.id} style={{ animationDelay: `${index * 0.05}s` }} className="animate-slide-up">
            <ConfessionCard confession={confession} />
          </div>
        ))}

        {confessions.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4 opacity-30">💭</div>
            <p className="text-text-tertiary font-medium">
              No confessions yet. Be the first to share.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConfessionFeed;
