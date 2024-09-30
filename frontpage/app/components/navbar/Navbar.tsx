"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useLocalStorage } from "@/app/hooks/useLocalStorage";
import { ChevronDown } from "lucide-react";

const Navbar: React.FC = () => {
  const [isScrollDown, setIsScrollDown] = useState<boolean>(false);
  const [prevScrollPos, setPrevScrollPos] = useState<number>(0);
  const [index, setIndex] = useLocalStorage<any>("index", 0);
  const [language, setLanguage] = useLocalStorage("lang", "id");
  const [isShow, setIsShow] = useState<boolean>(false);
  const dropdownLanguage = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    const currentScrollPos: number = window.pageYOffset;
    if (Math.abs(currentScrollPos - prevScrollPos) > 100) {
      if (currentScrollPos > prevScrollPos) {
        setIsScrollDown(true);
        setIsShow(false);
        //   console.log("Down");
      } else {
        setIsScrollDown(false);
        //   console.log("Up");
      }
      setPrevScrollPos(currentScrollPos);
    }
  };


  const navbarHandler = (): any => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  };

  const indexHandler = (i: number) => {
    setIndex(i);
    window.localStorage.setItem("index", i.toString());
  };

  const handleClick = (path: string) => {
    path === "/"
      ? indexHandler(0)
      : path === "diagnose"
      ? indexHandler(1)
      : indexHandler(2);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Jika ref tidak null dan target klik tidak berada di dalam dropdown, maka tutup dropdown
      if (
        dropdownLanguage.current &&
        !dropdownLanguage.current.contains(event.target as Node)
      ) {
        setIsShow(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownLanguage]);

  useEffect(() => {
    navbarHandler();
  }, [prevScrollPos]);

  return (
    <div
      className={`py-6 w-screen backdrop-blur-md flex justify-center items-center fixed z-[10] ${
        isScrollDown ? "-top-40" : "top-0"
      } left-0 duration-[0.8s] text-[#33363E]`}
    >
      <div className=" flex items-center gap-5 absolute pl-14 left-0">
        <div className="h-[40px] w-[40px] relative">
          <Image
            src={"/img/logo.png"}
            alt="logo"
            objectFit="cover"
            layout="fill"
          />
        </div>
        <h1 className=" font-semibold text-2xl">GlucoGuardian</h1>
      </div>
      <div className=" flex items-center gap-5 font-medium text-base">
        <Link
          onClick={() => handleClick("/")}
          href="/"
          className={` py-1 px-4 rounded-3xl border-[2px] ${
            index === 0
              ? "text-[#1B73FF]  border-[#1B73FF]"
              : "border-transparent"
          }`}
        >
          Home
        </Link>
        <Link
          onClick={() => handleClick("diagnose")}
          href="/pages/diagnose"
          className={` py-1 px-4 rounded-3xl border-[2px] ${
            index === 1
              ? "text-[#1B73FF]  border-[#1B73FF]"
              : "border-transparent"
          }`}
        >
          Diagnosis
        </Link>
        <Link
          onClick={() => handleClick("about")}
          href="/pages/about"
          className={` py-1 px-4 rounded-3xl border-[2px] ${
            index === 2
              ? "text-[#1B73FF]  border-[#1B73FF]"
              : "border-transparent"
          }`}
        >
          About
        </Link>
      </div>
      <div
        onClick={() => setIsShow(!isShow)}
        className=" absolute right-0 mr-14 w-[100px] h-[30px] cursor-pointer"
      >
        {language === "id" ? (
          <div className="w-full h-full flex justify-between items-center">
            <div className="w-[30px] h-[100%] relative rounded-full overflow-hidden border-[1px] border-grey-400">
              <Image
                src={"/img/indonesia.png"}
                alt="indonesia"
                layout="fill"
                objectFit="fill"
              />
            </div>
            <div>
              <h1 className=" font-medium">ID</h1>
            </div>
            <div>
              <ChevronDown />
            </div>
          </div>
        ) : (
          <div className="w-full h-full flex justify-between items-center">
            <div className="w-[30px] h-[100%] relative rounded-full overflow-hidden border-[1px] border-grey-400">
              <Image
                src={"/img/ingris.png"}
                alt="inggris"
                layout="fill"
                objectFit="fill"
              />
            </div>
            <div>
              <h1 className=" font-medium">EN</h1>
            </div>
            <div>
              <ChevronDown />
            </div>
          </div>
        )}

        {/* Dropdoen Language */}
      </div>

      <div
        ref={dropdownLanguage}
        className={`${
          !isShow ? "hidden" : ""
        } w-[100px] absolute z-50 bg-white rounded-3xl border-[1px] border-gray-300 p-3 mt-3 top-14 right-14 flex flex-col gap-4`}
      >
        <div
          onClick={() => {
            setLanguage("id");
            setIsShow(false);
          }}
          className=" w-full flex items-center gap-3 cursor-pointer"
        >
          <div className="w-[30px] h-[30px] relative rounded-full overflow-hidden border-[1px] border-grey-400">
            <Image
              src={"/img/indonesia.png"}
              alt="indonesia"
              layout="fill"
              objectFit="fill"
            />
          </div>
          <div>
            <h1 className=" font-medium">ID</h1>
          </div>
        </div>
        <div
          onClick={() => {
            setLanguage("en");
            setIsShow(false);
          }}
          className=" w-full flex items-center gap-3 cursor-pointer"
        >
          <div className="w-[30px] h-[30px] relative rounded-full overflow-hidden border-[1px] border-grey-400">
            <Image
              src={"/img/ingris.png"}
              alt="ingris"
              layout="fill"
              objectFit="fill"
            />
          </div>
          <div>
            <h1 className=" font-medium">EN</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
