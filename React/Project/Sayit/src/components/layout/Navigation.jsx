import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home", icon: "🏠" },
    { path: "/search", label: "Search", icon: "🔍" },
    { path: "/profile", label: "Profile", icon: "👤" },
    { path: "/premium", label: "Premium", icon: "✨" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="hidden md:flex items-center justify-between px-6 lg:px-10 py-4 glass border-b border-border/50 sticky top-0 z-50">
      <Link to="/" className="flex items-center gap-2.5 group">
        <div className="relative">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-105 transition-all">
            S
          </div>
          <div className="absolute inset-0 rounded-xl bg-accent opacity-0 group-hover:opacity-20 blur-xl transition-all"></div>
        </div>
        <span className="text-xl font-bold text-white tracking-tight">SayIt</span>
      </Link>

      <div className="flex items-center gap-1">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all group ${
              isActive(item.path)
                ? "text-white"
                : "text-text-tertiary hover:text-white"
            }`}
          >
            <span className="relative z-10 flex items-center gap-2">
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </span>
            {isActive(item.path) && (
              <div className="absolute inset-0 bg-accent/10 rounded-lg border border-accent/20"></div>
            )}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-accent rounded-full transition-all group-hover:w-3/4"></div>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
