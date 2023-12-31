import MenuItem from "./MenuItem";
import Link from "next/link";
import Image from "next/image";
import DarkModeSwitch from "./DarkModeSwitch";
import { IoMdHome } from "react-icons/io";
import { BsFillInfoCircleFill } from "react-icons/bs";

export default function Header() {
  return (
    <div className="flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6">
          <div className="">
        <Link href="/">
          <h2 className="text-2xl">
          <img className="h-10" src="openhouselogo.svg" alt="logo loading,,,"/>
           
          </h2>
        </Link>
      </div>

      <div className="flex items-center space-x-5">
        <DarkModeSwitch />
        <MenuItem title="HOME" address="/" Icon={IoMdHome} />
        <MenuItem title="ABOUT" address="/about" Icon={BsFillInfoCircleFill} />
      </div>
    
    </div>
  );
}
