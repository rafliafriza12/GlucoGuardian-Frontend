"use client";
import { ChevronUp } from "lucide-react";
import { useState, useEffect } from "react";


const BackToTop: React.FC = () =>{
    const [showButton, setShowButton] = useState<boolean>(false);
    const [pageYOffset, setPageYOffset] = useState<number>(0);

    const handleClick = () =>{
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

    const handleScrollDown = () => {
        const position: number = window.pageYOffset;
        setPageYOffset(position);
        position > 100 ? setShowButton(true) : setShowButton(false);
    }

    const backToTopButtonHandler = () => {
        window.addEventListener("scroll", handleScrollDown);

        return () => window.removeEventListener("scroll", handleScrollDown);
    }

    useEffect(() => {
        backToTopButtonHandler();
    },[pageYOffset]);

    return(
        <button onClick={() => handleClick()} className={`w-[30px] h-[30px] flex justify-center items-center fixed bottom-8  ${showButton ? 'right-4' : '-right-11'} bg-white rounded-full duration-500 border-[1px] border-[#1B40FF]`}>
            <ChevronUp color="#1B40FF"/>
        </button>
    );
}

export default BackToTop;