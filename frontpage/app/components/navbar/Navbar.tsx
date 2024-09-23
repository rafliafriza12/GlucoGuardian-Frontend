"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar: React.FC = () => {
    const [isScrollDown, setIsScrollDown] = useState<boolean>(false);
    const [prevScrollPos, setPrevScrollPos] = useState<number>(0);
    const [index, setIndex] = useState<number>(() :number =>  {
        const indexValue: string | null = window.localStorage?.getItem("index");
        return indexValue === null ? 0 : +indexValue;
    });

    const handleScroll = () => {
          const currentScrollPos: number = window.pageYOffset;
          if (Math.abs(currentScrollPos - prevScrollPos) > 100) {
            if (currentScrollPos > prevScrollPos) {
              setIsScrollDown(true);
            //   console.log("Down");
            } else {
              setIsScrollDown(false);
            //   console.log("Up");
            }
            setPrevScrollPos(currentScrollPos);
          }
      };

      const navbarHandler = () : any => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
      }

      const indexHandler = (i: number) => {
        setIndex(i);
        window.localStorage.setItem("index", i.toString());
      }

      const handleClick = (path: string) => {
        path === "/" ? indexHandler(0) : ( path === "diagnose" ? indexHandler(1) : indexHandler(2));
      }

    useEffect(() => {
       navbarHandler();
        // indexHandler();
    },[prevScrollPos, window.location.pathname]);

    return(
        <div className={`py-6 w-screen backdrop-blur-md flex justify-center items-center fixed z-[10] ${isScrollDown ? '-top-40': 'top-0'} left-0 duration-[0.8s] text-[#33363E]`}>
            <div className=" flex items-center gap-5 absolute pl-14 left-0">
                <div className="h-[40px] w-[40px] relative">
                    <Image
                    src={'/img/logo.png'}
                    alt="logo"
                    objectFit="cover"
                    layout="fill"
                    />
                </div>
                <h1 className=" font-semibold text-2xl">GlucoGuardian</h1>
            </div>
            <div className=" flex items-center gap-5 font-medium text-base">
                <Link onClick={() => handleClick("/")} href="/" className={` py-1 px-4 rounded-3xl border-[2px] ${index === 0 ? 'text-[#1B73FF]  border-[#1B73FF]' : 'border-transparent'}`}>Home</Link>
                <Link onClick={() => handleClick("diagnose")} href="/pages/diagnose" className={` py-1 px-4 rounded-3xl border-[2px] ${index === 1 ? 'text-[#1B73FF]  border-[#1B73FF]' : 'border-transparent'}`}>Diagnosis</Link>
                <Link onClick={() => handleClick("about")} href="/pages/about" className={` py-1 px-4 rounded-3xl border-[2px] ${index === 2 ? 'text-[#1B73FF]  border-[#1B73FF]' : 'border-transparent'}`}>About</Link>
            </div>
        </div>
    );
}

export default Navbar;