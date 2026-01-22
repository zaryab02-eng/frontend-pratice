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
    <article className="group bg-surface/50 backdrop-blur-sm border border-border rounded-2xl p-5 hover:border-accent/30 hover:bg-surface/70 transition-all animate-fade-in">
      <p className="text-text-secondary text-[15px] leading-relaxed mb-4 font-normal">
        {confession.text}
      </p>

      <div className="flex items-center justify-between flex-wrap gap-3 pt-4 border-t border-border/50">
        <div className="flex items-center gap-2.5 flex-wrap">
          <Tag variant="accent">
            {confession.city}, {confession.country}
          </Tag>
          <span className="text-xs text-text-muted font-medium">{confession.timestamp}</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => handleVote("up")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
              votes.userVote === "up"
                ? "bg-success/15 text-success border border-success/30"
                : "text-text-tertiary hover:text-success hover:bg-success/10 border border-transparent"
            }`}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
            </svg>
            <span className="text-xs font-semibold min-w-[20px] text-center">{votes.upvotes}</span>
          </button>

          <button
            onClick={() => handleVote("down")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
              votes.userVote === "down"
                ? "bg-error/15 text-error border border-error/30"
                : "text-text-tertiary hover:text-error hover:bg-error/10 border border-transparent"
            }`}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z" />
            </svg>
            <span className="text-xs font-semibold min-w-[20px] text-center">{votes.downvotes}</span>
          </button>
        </div>
      </div>
    </article>
  );
};

export default ConfessionCard;
