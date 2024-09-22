"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar: React.FC = () => {
    const [isScrollDown, setIsScrollDown] = useState<boolean>(false);
    const [prevScrollPos, setPrevScrollPos] = useState<number>(0);

    const handleScroll = () => {
          const currentScrollPos: number = window.pageYOffset;
          if (Math.abs(currentScrollPos - prevScrollPos) > 100) {
            if (currentScrollPos > prevScrollPos) {
              setIsScrollDown(true);
              console.log("Down");
            } else {
              setIsScrollDown(false);
              console.log("Up");
            }
            setPrevScrollPos(currentScrollPos);
          }
      };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    },[prevScrollPos]);

    return(
        <div className={`py-8 w-screen backdrop-blur-md flex justify-center items-center fixed z-[10] ${isScrollDown ? '-top-40': 'top-0'} left-0 duration-[0.8s]`}>
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
                <Link href={"#"} className=" text-[#1B73FF] border-[2px] border-[#1B73FF] py-1 px-4 rounded-3xl">Home</Link>
                <Link href={"#"} className="py-1 px-4">Diagnosis</Link>
                <Link href={"#"} className="py-1 px-4">About</Link>
            </div>
        </div>
    );
}

export default Navbar;