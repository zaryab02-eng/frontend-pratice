import Navigation from "./Navigation";
import MobileNav from "./MobileNav";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-primary">
      <Navigation />

      <main className="pb-20 md:pb-0">{children}</main>

      <MobileNav />
    </div>
  );
};

export default Layout;
