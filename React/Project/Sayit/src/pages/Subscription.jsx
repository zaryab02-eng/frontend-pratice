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
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 max-w-6xl">
      {/* Header */}
      <div className="text-center mb-12 lg:mb-16">
        <div className="inline-block px-5 py-2.5 bg-accent/10 border border-accent/30 rounded-full text-accent text-sm font-semibold mb-5 backdrop-blur-sm">
          ✨ Premium Features
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
          Unlock the <span className="gradient-text">Full Experience</span>
        </h1>
        <p className="text-lg sm:text-xl text-text-tertiary font-medium max-w-2xl mx-auto">
          Get access to powerful features that enhance your confession experience while maintaining complete anonymity
        </p>
      </div>

      {/* Pricing Card */}
      <div className="max-w-md mx-auto mb-12 lg:mb-16">
        <div className="relative bg-gradient-to-br from-accent via-accent-dark to-purple-600 rounded-3xl p-8 lg:p-10 text-white overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-white opacity-10 rounded-full -mr-24 -mt-24 blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-white opacity-5 rounded-full -ml-20 -mb-20 blur-2xl"></div>
          <div className="relative">
            <h2 className="text-2xl font-bold mb-3">Premium Plan</h2>
            <div className="flex items-baseline gap-2 mb-8">
              <span className="text-6xl font-bold">$9.99</span>
              <span className="text-xl opacity-90 font-medium">/month</span>
            </div>
            <Button
              variant="secondary"
              className="w-full bg-white text-accent hover:bg-gray-50 shadow-lg"
              onClick={() => alert("Payment integration coming soon!")}
            >
              Coming Soon
            </Button>
            <p className="text-xs text-center mt-4 opacity-80 font-medium">
              Premium features will be available soon
            </p>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 lg:mb-16">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="group bg-surface/50 backdrop-blur-sm border border-border rounded-2xl p-6 lg:p-7 relative overflow-hidden hover:border-accent/30 hover:bg-surface/70 transition-all"
          >
            {feature.locked && (
              <div className="absolute top-5 right-5">
                <div className="w-7 h-7 bg-accent/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-accent/30">
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

            <div className="text-5xl mb-5 leading-none">{feature.icon}</div>
            <h3 className="text-lg font-bold text-white mb-2.5">{feature.title}</h3>
            <p className="text-sm text-text-tertiary leading-relaxed font-medium">{feature.desc}</p>
          </div>
        ))}
      </div>

      {/* FAQ Section */}
      <div className="bg-surface/50 backdrop-blur-sm border border-border rounded-2xl p-8 lg:p-10">
        <h2 className="text-2xl lg:text-3xl font-bold text-white mb-8">Frequently Asked Questions</h2>

        <div className="space-y-6">
          <div className="pb-6 border-b border-border/50 last:border-0 last:pb-0">
            <h3 className="text-lg font-bold text-white mb-3">Will premium affect my anonymity?</h3>
            <p className="text-text-tertiary text-sm leading-relaxed font-medium">
              No. Your anonymity is protected regardless of subscription tier. Premium features enhance functionality without compromising privacy.
            </p>
          </div>

          <div className="pb-6 border-b border-border/50 last:border-0 last:pb-0">
            <h3 className="text-lg font-bold text-white mb-3">Can I cancel anytime?</h3>
            <p className="text-text-tertiary text-sm leading-relaxed font-medium">
              Yes. Cancel your subscription at any time with no questions asked. You'll retain access until the end of your billing period.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-3">When will premium launch?</h3>
            <p className="text-text-tertiary text-sm leading-relaxed font-medium">
              Premium features are currently in development. We'll notify all users when they become available.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
