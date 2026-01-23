// Neutral, non-judgmental content container
// Minimal design to not overshadow the confession itself
function ConfessionCard({ confession, votes, compact = false }) {
  return (
    <div
      className={`glass rounded-2xl p-4 hover:bg-white/10 cursor-pointer group ${compact ? "space-y-2" : "space-y-3"}`}
    >
      <p
        className={`text-gray-200 leading-relaxed ${compact ? "text-sm line-clamp-2" : "text-base"}`}
      >
        {confession}
      </p>

      <div className="flex items-center space-x-4 text-xs text-gray-500">
        <div className="flex items-center space-x-2">
          <button className="hover:text-green-400">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 15l7-7 7 7"
              />
            </svg>
          </button>
          <span>{votes}</span>
          <button className="hover:text-red-400">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
        <span>2h ago</span>
      </div>
    </div>
  );
}

export default ConfessionCard;
