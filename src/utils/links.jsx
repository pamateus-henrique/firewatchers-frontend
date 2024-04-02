import { RiHomeLine } from "react-icons/ri";
import { AiOutlineFire } from "react-icons/ai";

const links = [
  {
    text: "Home",
    path: ".",
    icon: <RiHomeLine className='h-6 w-6 text-blue-50' />,
  },
  {
    text: "Incidents",
    path: "incidents",
    icon: <AiOutlineFire className='h-6 w-6 text-blue-50' />,
  },
];

export default links;
