import Section from "./assets/components/Sections/Section";
import Section2 from "./assets/components/Sections/Section2";

const App = () => {
  const cardData = [
    {
      id: "01",
      title: "Smart Savings",
      description:
        "Track your expenses and grow your money with insights that help you save smarter every month.",
      color: "#171717",
    },
    {
      id: "02",
      title: "Instant Payments",
      description:
        "Send and receive money instantly with zero hidden charges. Fast, secure, and reliable transfers.",
      color: "#1E293B",
    },
    {
      id: "03",
      title: "Bill Management",
      description:
        "Keep all your bills organized in one place. Set reminders and avoid late payment penalties.",
      color: "#0F766E",
    },
    {
      id: "04",
      title: "Rewards Program",
      description:
        "Earn cashback and rewards every time you make a transaction. Redeem them easily from your dashboard.",
      color: "#3B0764",
    },
  ];

  return (
    <>
      <Section />
      <Section2 cardData={cardData} />
    </>
  );
};

export default App;
