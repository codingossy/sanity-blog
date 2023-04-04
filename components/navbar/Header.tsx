import Link from "next/link";
import { useEffect, useState } from "react";
import { HiMenu } from "react-icons/hi";
import MobileNav from "./MobileNav";
import Navbar from "./Navbar";
// images


const Header = () => {

  const [color, setColor] = useState('transparent');
  const [textColor, setTextColor] = useState('white');
 
  const [navMobile, setNavMobile] = useState(false);

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 10) {
        setColor('#fff');
        setTextColor('#000');
      } else {
        setColor('transparent');
        setTextColor('#fff');
      }
    };
    window.addEventListener('scroll', changeColor);
  }, []);



  return (
    <header 
    style={{ backgroundColor: `${color}` }}
    className="fixed left-0 top-0 w-full transition-all ease-in duration-30 z-50">
      <div className="container">
        <div className="flex py-3 items-center justify-between">
          <Link href="/">
             <h4 style={{ color: `${textColor}` }} className="capitalize">Tori</h4>
          </Link>

          <Navbar textColor={textColor} />

    
          {/* mobile nav functionality */}
          <HiMenu
             style={{ color: `${textColor}` }}
            onClick={() => setNavMobile(true)}
            className="md:hidden text-white text-3xl cursor-pointer"
          />

          <div className={`${navMobile ? "right-0" : "-right-full"} toggle `}>
            <MobileNav setNavMobile={setNavMobile} />
          </div>

          {/* mobile nav ends here */}
        </div>
      </div>
    </header>
  );
};

export default Header;
