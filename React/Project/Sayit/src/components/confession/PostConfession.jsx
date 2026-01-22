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

    // Mock submission
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
    <div className="bg-secondary border border-border rounded-xl p-6">
      <h3 className="text-xl font-semibold text-gray-100 mb-4">
        Share Anonymously
      </h3>

      <form onSubmit={handleSubmit}>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="What's on your mind? Your identity stays private..."
          maxLength={maxLength}
          className="w-full h-32 px-4 py-3 bg-tertiary text-gray-200 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent placeholder-gray-500 resize-none transition-smooth"
        />

        <div className="flex items-center justify-between mt-4">
          <span className="text-xs text-gray-500">
            {text.length}/{maxLength} characters
          </span>

          <Button type="submit" disabled={text.trim().length < 10}>
            Post Anonymously
          </Button>
        </div>
      </form>

      <div className="mt-4 p-3 bg-tertiary border border-border rounded-lg">
        <p className="text-xs text-gray-400 flex items-start gap-2">
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
          Your confession is completely anonymous. No personal information is
          collected or stored.
        </p>
      </div>
    </div>
  );
};

export default PostConfession;
