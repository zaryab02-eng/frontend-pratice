import ConfessionCard from "./ConfessionCard";

const ConfessionFeed = ({ confessions, title = "Latest Confessions" }) => {
  return (
    <div className="h-full flex flex-col">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-100">{title}</h2>
        <p className="text-sm text-gray-500 mt-1">
          Anonymous voices from your city
        </p>
      </div>

      <div className="flex-1 overflow-y-auto space-y-4 pr-2">
        {confessions.map((confession) => (
          <ConfessionCard key={confession.id} confession={confession} />
        ))}

        {confessions.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">
              No confessions yet. Be the first to share.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConfessionFeed;
