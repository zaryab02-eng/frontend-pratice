import { useState } from "react";
import Tag from "../common/Tag";

const ConfessionCard = ({ confession }) => {
  const [votes, setVotes] = useState({
    upvotes: confession.upvotes,
    downvotes: confession.downvotes,
    userVote: null,
  });

  const handleVote = (type) => {
    setVotes((prev) => {
      if (prev.userVote === type) {
        return {
          ...prev,
          [type === "up" ? "upvotes" : "downvotes"]:
            prev[type === "up" ? "upvotes" : "downvotes"] - 1,
          userVote: null,
        };
      } else if (prev.userVote) {
        return {
          upvotes: type === "up" ? prev.upvotes + 1 : prev.upvotes - 1,
          downvotes: type === "down" ? prev.downvotes + 1 : prev.downvotes - 1,
          userVote: type,
        };
      } else {
        return {
          ...prev,
          [type === "up" ? "upvotes" : "downvotes"]:
            prev[type === "up" ? "upvotes" : "downvotes"] + 1,
          userVote: type,
        };
      }
    });
  };

  return (
    <div className="bg-secondary border border-border rounded-xl p-5 hover:border-accent hover:border-opacity-30 transition-smooth">
      <p className="text-gray-200 text-base leading-relaxed mb-4">
        {confession.text}
      </p>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Tag variant="accent">
            📍 {confession.city}, {confession.country}
          </Tag>
          <span className="text-xs text-gray-500">{confession.timestamp}</span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => handleVote("up")}
            className={`flex items-center gap-1 px-2 py-1 rounded-md transition-smooth ${
              votes.userVote === "up"
                ? "bg-green-900 bg-opacity-20 text-green-400"
                : "text-gray-400 hover:text-green-400 hover:bg-secondary"
            }`}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
            </svg>
            <span className="text-xs font-medium">{votes.upvotes}</span>
          </button>

          <button
            onClick={() => handleVote("down")}
            className={`flex items-center gap-1 px-2 py-1 rounded-md transition-smooth ${
              votes.userVote === "down"
                ? "bg-red-900 bg-opacity-20 text-red-400"
                : "text-gray-400 hover:text-red-400 hover:bg-secondary"
            }`}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z" />
            </svg>
            <span className="text-xs font-medium">{votes.downvotes}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfessionCard;
