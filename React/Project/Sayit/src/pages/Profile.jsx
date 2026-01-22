import { useState } from "react";
import Input from "../components/common/Input";
import Button from "../components/common/Button";

const Profile = () => {
  const [displayName, setDisplayName] = useState("Anonymous User");
  const [city, setCity] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    setIsEditing(false);
    alert("Profile updated! (Mock save - no real storage)");
  };

  const stats = [
    { label: "Confessions", value: 0 },
    { label: "Upvotes", value: 0 },
    { label: "Views", value: 0 },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 max-w-3xl">
      {/* Header */}
      <div className="mb-10 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
          Profile <span className="gradient-text">Settings</span>
        </h1>
        <p className="text-lg text-text-tertiary font-medium">Manage your anonymous identity</p>
      </div>

      {/* Profile Card */}
      <div className="bg-surface/50 backdrop-blur-sm border border-border rounded-2xl p-6 lg:p-8 mb-6">
        <div className="flex items-center gap-5 mb-8">
          <div className="relative">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center text-4xl shadow-lg">
              👤
            </div>
            <div className="absolute inset-0 rounded-2xl bg-accent opacity-0 hover:opacity-20 blur-xl transition-all"></div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white mb-1">{displayName}</h2>
            <p className="text-sm text-text-muted font-medium">Member since January 2026</p>
          </div>
        </div>

        <div className="space-y-5">
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

          <div className="flex gap-3 pt-2">
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

      {/* Stats Grid */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-surface/50 backdrop-blur-sm border border-border rounded-xl p-5 text-center">
            <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
            <div className="text-xs text-text-muted font-medium">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Privacy Notice */}
      <div className="bg-surface/50 backdrop-blur-sm border border-border rounded-2xl p-6 lg:p-8">
        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2.5">
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
        <ul className="space-y-3 text-sm text-text-secondary">
          <li className="flex items-start gap-3">
            <span className="text-accent font-bold mt-0.5">•</span>
            <span className="font-medium">Your confessions are completely anonymous</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-accent font-bold mt-0.5">•</span>
            <span className="font-medium">Display name is optional and can be changed anytime</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-accent font-bold mt-0.5">•</span>
            <span className="font-medium">No personal data is collected or stored</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-accent font-bold mt-0.5">•</span>
            <span className="font-medium">Your IP address is never logged with confessions</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
