import { useState } from "react";
import Button from "../common/Button";

const PostConfession = ({ onPost }) => {
  const [text, setText] = useState("");
  const maxLength = 500;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length < 10) {
      alert("Confession must be at least 10 characters");
      return;
    }

    const newConfession = {
      id: Date.now(),
      text: text.trim(),
      city: "Your City",
      country: "Your Country",
      upvotes: 0,
      downvotes: 0,
      timestamp: "Just now",
    };

    if (onPost) onPost(newConfession);
    setText("");
  };

  return (
    <div className="bg-surface/50 backdrop-blur-sm border border-border rounded-2xl p-6 lg:p-8">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-white mb-2">Share Your Thoughts</h3>
        <p className="text-sm text-text-tertiary font-medium">
          Express yourself freely. Your identity stays private.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="What's on your mind? Share your confession anonymously..."
          maxLength={maxLength}
          className="w-full h-36 px-4 py-3.5 bg-elevated/50 text-white border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent placeholder-text-muted resize-none transition-all hover:border-border-light font-normal"
        />

        <div className="flex items-center justify-between mt-4">
          <span className={`text-xs font-medium transition-all ${
            text.length > maxLength * 0.9 ? "text-warning" : "text-text-muted"
          }`}>
            {text.length}/{maxLength}
          </span>

          <Button type="submit" disabled={text.trim().length < 10}>
            Post Confession
          </Button>
        </div>
      </form>

      <div className="mt-5 p-4 bg-accent/5 border border-accent/20 rounded-xl">
        <p className="text-xs text-text-tertiary flex items-start gap-2.5 leading-relaxed">
          <svg
            className="w-4 h-4 text-accent flex-shrink-0 mt-0.5"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clipRule="evenodd"
            />
          </svg>
          <span className="font-medium">Your confession is completely anonymous. No personal information is collected or stored.</span>
        </p>
      </div>
    </div>
  );
};

export default PostConfession;
