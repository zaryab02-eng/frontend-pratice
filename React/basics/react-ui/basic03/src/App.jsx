import Footer from "./assets/components/Footer";
import Hero from "./assets/components/Hero";
import Navbar from "./assets/components/Navbar";
import ProductCard from "./assets/components/ProductCard";

const App = () => {
  const products = [
    {
      id: 1,
      title: "Wireless Headphones",
      image:
        "https://cdn.mos.cms.futurecdn.net/fsDKHB3ZyNJK6zMpDDBenB-1200-80.jpg",
      price: 99.99,
      oldPrice: 129.99,
      rating: 4.6,
      discount: 23,
    },
    {
      id: 2,
      title: "Smartwatch Series 7",
      image:
        "https://www.apple.com/newsroom/images/product/watch/standard/Apple_watch-series7_hero_09142021_big.jpg.large.jpg",
      price: 249.99,
      oldPrice: 299.99,
      rating: 4.4,
      discount: 17,
    },
    {
      id: 3,
      title: "DSLR Camera",
      image:
        "https://www.orionphotogroup.com/wp-content/uploads/2023/09/OPG-Blog-Best-Professional-Canon-Cameras-That-Should-Be-On-Every-Photographers-List-10-12-2023-scaled.jpg",
      price: 699.99,
      oldPrice: 899.99,
      rating: 4.7,
      discount: 22,
    },
    {
      id: 4,
      title: "Gaming Mouse",
      image:
        "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-9413J0PP550K-VJU00039-Logitech-G502-Wireless-Mouse-b00?qlt=90&wid=1253&hei=705&extendN=0.12,0.12,0.12,0.12&bgc=FFFFFFFF&fmt=jpg",
      price: 49.99,
      oldPrice: 79.99,
      rating: 4.5,
      discount: 37,
    },
    {
      id: 5,
      title: "Bluetooth Speaker",
      image:
        "https://media.wired.com/photos/683a782e13687d4580a2c63a/4:3/w_640%2Cc_limit/StormBox%25202%2520ryan%2520waniata.png",
      price: 59.99,
      oldPrice: 89.99,
      rating: 4.3,
      discount: 33,
    },
    {
      id: 6,
      title: "Mechanical Keyboard",
      image:
        "https://media.wired.com/photos/65b0438c22aa647640de5c75/master/pass/Mechanical-Keyboard-Guide-Gear-GettyImages-1313504623.jpg",
      price: 119.99,
      oldPrice: 159.99,
      rating: 4.8,
      discount: 25,
    },
    {
      id: 7,
      title: "4K Monitor",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv6PhzL3jNZp_62adV-FUAU2_dCowFxP0vwg&s",
      price: 349.99,
      oldPrice: 449.99,
      rating: 4.6,
      discount: 22,
    },
    {
      id: 8,
      title: "Portable Power Bank",
      image:
        "https://media.wired.com/photos/6504b2a1afe02332db973557/4:3/w_640%2Cc_limit/Ugreen_Power_Bank-SOURCE-Ugreen-Gear.jpg",
      price: 29.99,
      oldPrice: 49.99,
      rating: 4.2,
      discount: 40,
    },
  ];

  return (
    <>
      <Navbar />
      <Hero />
      <div className="flex flex-wrap gap-4 justify-center py-12">
        {products.map(function (product) {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
      <Footer />
    </>
  );
};

export default App;
