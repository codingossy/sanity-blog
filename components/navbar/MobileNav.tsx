import Link from "next/link";
import { IoClose } from "react-icons/io5";

type MobileNavProps = {
  setNavMobile: (value: boolean) => void;
};

function MobileNav({ setNavMobile }: MobileNavProps):JSX.Element  {
  return (
    <nav className="block md:hidden bg-black text-gray-300 w-full h-full">
      <IoClose
        onClick={() => setNavMobile(false)}
        className="text-3xl absolute right-6 top-6 cursor-pointer "
      />

      <ul className="flex flex-col justify-center space-y-8 h-full items-center capitalize font-secondary">
        <Link href="/" onClick={() => setNavMobile(false)}>
          <li className="text-md">home</li>
        </Link>
        <Link href="/" onClick={() => setNavMobile(false)}>
          <li className="text-md"></li>
        </Link>

        <Link href="/" onClick={() => setNavMobile(false)}>
          <li className="text-md"></li>
        </Link>

        <Link href="/" onClick={() => setNavMobile(false)}>
          <li className="text-md"></li>
        </Link>
      </ul>
    </nav>
  );
}

export default MobileNav;
