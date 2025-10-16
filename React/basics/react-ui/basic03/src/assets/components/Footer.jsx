import Logo from "../gallery/logo.png";

const Footer = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1">
        {/* your page content */}
        <div>
          <img src={Logo} alt="Logo" className="h-20" />
        </div>
      </div>

      <footer className="bg-yellow-700 text-center py-3 w-full">
        <p>© 2025 Z-Store All rights reserved</p>
      </footer>
    </div>
  );
};

export default Footer;
