import Button from "../components/common/Button";

const Subscription = () => {
  const features = [
    {
      icon: "🔍",
      title: "Advanced Search",
      desc: "Filter by date, location, and sentiment",
      locked: true,
    },
    {
      icon: "📊",
      title: "Analytics Dashboard",
      desc: "See trending topics and patterns",
      locked: true,
    },
    {
      icon: "🔔",
      title: "Custom Notifications",
      desc: "Get alerts for specific cities or keywords",
      locked: true,
    },
    {
      icon: "💬",
      title: "Direct Messaging",
      desc: "Connect with others anonymously",
      locked: true,
    },
    {
      icon: "🎨",
      title: "Theme Customization",
      desc: "Personalize your interface",
      locked: true,
    },
    {
      icon: "⭐",
      title: "Priority Support",
      desc: "24/7 premium customer support",
      locked: true,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-6 max-w-5xl">
      <div className="text-center mb-12">
        <div className="inline-block px-4 py-2 bg-accent bg-opacity-10 rounded-full text-accent text-sm font-medium mb-4">
          ✨ Premium Features
        </div>
        <h1 className="text-4xl font-bold text-gray-100 mb-4">
          Unlock the Full Experience
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Get access to powerful features that enhance your confession
          experience while maintaining complete anonymity
        </p>
      </div>

      {/* Pricing Card */}
      <div className="max-w-md mx-auto mb-12">
        <div className="bg-gradient-to-br from-accent to-indigo-700 rounded-2xl p-8 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-10 rounded-full -mr-20 -mt-20"></div>
          <div className="relative">
            <h2 className="text-2xl font-bold mb-2">Premium Plan</h2>
            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-5xl font-bold">$9.99</span>
              <span className="text-lg opacity-80">/month</span>
            </div>
            <Button
              variant="secondary"
              className="w-full bg-white text-accent hover:bg-gray-100"
              onClick={() => alert("Payment integration coming soon!")}
            >
              Coming Soon
            </Button>
            <p className="text-xs text-center mt-3 opacity-75">
              Premium features will be available soon
            </p>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="bg-secondary border border-border rounded-xl p-6 relative overflow-hidden group hover:border-accent hover:border-opacity-30 transition-smooth"
          >
            {feature.locked && (
              <div className="absolute top-4 right-4">
                <div className="w-6 h-6 bg-accent bg-opacity-20 rounded-full flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-accent"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            )}

            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-lg font-semibold text-gray-100 mb-2">
              {feature.title}
            </h3>
            <p className="text-sm text-gray-400">{feature.desc}</p>
          </div>
        ))}
      </div>

      {/* FAQ Section */}
      <div className="bg-secondary border border-border rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-100 mb-6">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-100 mb-2">
              Will premium affect my anonymity?
            </h3>
            <p className="text-gray-400 text-sm">
              No. Your anonymity is protected regardless of subscription tier.
              Premium features enhance functionality without compromising
              privacy.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-100 mb-2">
              Can I cancel anytime?
            </h3>
            <p className="text-gray-400 text-sm">
              Yes. Cancel your subscription at any time with no questions asked.
              You'll retain access until the end of your billing period.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-100 mb-2">
              When will premium launch?
            </h3>
            <p className="text-gray-400 text-sm">
              Premium features are currently in development. We'll notify all
              users when they become available.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
