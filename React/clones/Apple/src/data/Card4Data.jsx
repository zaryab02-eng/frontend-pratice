import { IoCardOutline } from "react-icons/io5";
import { MdOutlineDevices } from "react-icons/md";
import { FaApple } from "react-icons/fa";
import { BsEmojiGrin } from "react-icons/bs";
import { FiTruck } from "react-icons/fi";

export const Card4Data = [
  {
    id: 1,
    logo: <IoCardOutline />,
    text: (
      <>
        No Cost EMI. Plus <br className="hidden xl:flex" /> Instant Cashback.
      </>
    ),
  },
  {
    id: 2,
    logo: <MdOutlineDevices className="text-[#007AFF]" />,
    text: (
      <>
        <span className="text-[#007AFF]">
          Exchange your <br className="hidden xl:flex" /> smartphone,
        </span>
        <span>
          get <br className="xl:hidden" />
          <br className="hidden xl:flex" /> ₹3350.00-₹64000.00
          <br className="hidden xl:flex lg:flex" /> in
          <br className="sm:hidden md:hidden lg:hidden xl:hidden" /> credit
          towards a new
          <br className="hidden xl:flex" /> one.*
        </span>
      </>
    ),
  },
  {
    id: 3,
    logo: (
      <FaApple className="text-[#F3695F] sm:text-[2.6rem] sm:relative sm:left-1.5 sm:top-1" />
    ),
    text: (
      <>
        <span className="bg-[linear-gradient(to_right,_#ff7a00,_#ff007a,_#7a00ff,_#007aff,_#00ff88)] bg-clip-text text-transparent font-semibold">
          Customise your Mac.
        </span>
      </>
    ),
  },
  {
    id: 4,
    logo: (
      <BsEmojiGrin className="text-[#AC39FF] sm:text-[2.6rem] sm:relative sm:left-1.5 sm:top-1" />
    ),
    text: (
      <>
        Make them yours.
        <span className="text-[#AC39FF]">
          <br className="hidden xl:flex" /> Engrave
          <br className="md:hidden lg:hidden xl:hidden sm:flex" /> a mix of
          emoji,
          <br className="hidden xl:flex" /> names and number for
          <br className="hidden xl:flex" /> free.
        </span>
      </>
    ),
  },
  {
    id: 5,
    logo: (
      <FiTruck className="text-[#008009] sm:text-[2.6rem] sm:relative sm:left-1.5 sm:top-1" />
    ),
    text: (
      <>
        <span className="text-[#008009] tracking-tight">
          Enjoy free delivery, or <br className="hidden xl:flex" /> easy pickup
        </span>
        , from an <br className="xl:hidden" /> Apple Store.
      </>
    ),
  },
  {
    id: 6,
    logo: (
      <MdOutlineDevices className="text-[#007AFF] sm:text-[2.6rem] sm:relative sm:left-1.5 sm:top-1" />
    ),
    text: (
      <>
        <span className="text-blue-700">
          Trade in your eligible <br className="hidden xl:flex" /> Mac, Apple
          Watch or <br className="hidden xl:flex" /> iPad for instant credit.*
        </span>
        <br className="hidden xl:flex" /> in-store
        <br className="md:hidden lg:hidden xl:hidden" /> only.
      </>
    ),
  },
];
