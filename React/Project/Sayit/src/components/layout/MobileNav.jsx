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
    <nav className="md:hidden fixed bottom-0 left-0 right-0 glass border-t border-border/50 z-50 safe-area-bottom">
      <div className="flex items-center justify-around px-2 py-2">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex flex-col items-center gap-1 px-4 py-2.5 rounded-xl transition-all min-w-[60px] ${
              isActive(item.path)
                ? "text-accent"
                : "text-text-tertiary active:text-accent"
            }`}
          >
            <span className="text-2xl leading-none">{item.icon}</span>
            <span className="text-[10px] font-medium leading-tight">{item.label}</span>
            {isActive(item.path) && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-0.5 bg-accent rounded-full"></div>
            )}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default MobileNav;
