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
    <nav className="hidden md:flex items-center justify-between px-8 py-4 bg-secondary border-b border-border">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-lg">C</span>
        </div>
        <span className="text-xl font-bold text-gray-100">Confess</span>
      </div>

      <div className="flex items-center gap-1">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-smooth ${
              isActive(item.path)
                ? "bg-accent text-white"
                : "text-gray-400 hover:text-gray-200 hover:bg-tertiary"
            }`}
          >
            <span className="mr-2">{item.icon}</span>
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
