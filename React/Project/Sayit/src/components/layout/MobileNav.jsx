import { Link, useLocation } from "react-router-dom";

const MobileNav = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home", icon: "🏠" },
    { path: "/search", label: "Search", icon: "🔍" },
    { path: "/profile", label: "Profile", icon: "👤" },
    { path: "/premium", label: "Premium", icon: "✨" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-secondary border-t border-border z-50">
      <div className="flex items-center justify-around px-2 py-3">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-smooth ${
              isActive(item.path) ? "text-accent" : "text-gray-500"
            }`}
          >
            <span className="text-xl">{item.icon}</span>
            <span className="text-xs font-medium">{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default MobileNav;
