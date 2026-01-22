import Navigation from "./Navigation";
import MobileNav from "./MobileNav";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-base">
      <Navigation />
      <main className="pb-20 md:pb-6">{children}</main>
      <MobileNav />
    </div>
  );
};

export default Layout;
