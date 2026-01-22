import { useState } from "react";
import Input from "../components/common/Input";
import Button from "../components/common/Button";

const Profile = () => {
  const [displayName, setDisplayName] = useState("Anonymous User");
  const [city, setCity] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    setIsEditing(false);
    // Mock save - no actual storage
    alert("Profile updated! (Mock save - no real storage)");
  };

  return (
    <div className="container mx-auto px-4 py-6 max-w-2xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-100 mb-2">
          Profile Settings
        </h1>
        <p className="text-gray-400">Manage your anonymous identity</p>
      </div>

      {/* Profile Card */}
      <div className="bg-secondary border border-border rounded-xl p-8 mb-6">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center text-3xl">
            👤
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-100">
              {displayName}
            </h2>
            <p className="text-sm text-gray-500">Member since January 2026</p>
          </div>
        </div>

        <div className="space-y-4">
          <Input
            label="Display Name"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            placeholder="Your anonymous display name"
            disabled={!isEditing}
          />

          <Input
            label="City (Optional)"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Your city for location-based confessions"
            disabled={!isEditing}
          />

          <div className="flex gap-3 pt-4">
            {!isEditing ? (
              <Button onClick={() => setIsEditing(true)}>Edit Profile</Button>
            ) : (
              <>
                <Button onClick={handleSave}>Save Changes</Button>
                <Button variant="secondary" onClick={() => setIsEditing(false)}>
                  Cancel
                </Button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Privacy Notice */}
      <div className="bg-tertiary border border-border rounded-xl p-6">
        <h3 className="text-lg font-semibold text-gray-100 mb-3 flex items-center gap-2">
          <svg
            className="w-5 h-5 text-accent"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          Privacy & Anonymity
        </h3>
        <ul className="space-y-2 text-sm text-gray-400">
          <li className="flex items-start gap-2">
            <span className="text-accent">•</span>
            <span>Your confessions are completely anonymous</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-accent">•</span>
            <span>Display name is optional and can be changed anytime</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-accent">•</span>
            <span>No personal data is collected or stored</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-accent">•</span>
            <span>Your IP address is never logged with confessions</span>
          </li>
        </ul>
      </div>

      {/* Stats (Mock) */}
      <div className="grid grid-cols-3 gap-4 mt-6">
        <div className="bg-secondary border border-border rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-gray-100">0</div>
          <div className="text-xs text-gray-500 mt-1">Confessions</div>
        </div>
        <div className="bg-secondary border border-border rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-gray-100">0</div>
          <div className="text-xs text-gray-500 mt-1">Upvotes</div>
        </div>
        <div className="bg-secondary border border-border rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-gray-100">0</div>
          <div className="text-xs text-gray-500 mt-1">Views</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
