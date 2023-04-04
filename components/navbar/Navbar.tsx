import Link from "next/link";

type textColorProps = {
  textColor: string
};


const Navbar = ({textColor}: textColorProps) => {
  return (
    <div className="capitalize hidden md:flex">
      <ul  style={{ color: `${textColor}` }} className="flex items-center space-x-12 text-white">
        <li >
          <Link className="cursor-pointer"  href="/">home</Link>
        </li>
        <li>
          <Link href="/">about</Link>
        </li>
        <li>
          <Link href="/">Details</Link>
        </li>
        <li>
          <Link href="/">contact us</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
