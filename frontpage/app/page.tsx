"use client";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className=" w-full ">
      {/* jumbotron section */}
      <div className=" w-full h-[106vh] flex flex-col justify-center items-center gap-8 relative z-0">
        <div className="w-full h-full bg-gradient-to-t from-[#1B73FF]/80 via-[#1B73FF]/10 to-transparent absolute z-[-5] "></div>

        <div className="drop" data-aos={"fade-up"} data-aos-duration={"1000"}>
          <div className=" bg-[#EEEEEE] flex items-center gap-2 py-2 px-5 relative rounded-3xl">
            <h5 className=" font-medium">
              Welcome To <span className=" font-bold">GG</span>
            </h5>
            <Image src={"/img/star.png"} alt="star" width={20} height={20} />
          </div>
        </div>

        <div
          data-aos={"fade-up"}
          data-aos-duration={"1000"}
          data-aos-delay={"200"}
        >
          <h1 className=" font-medium text-9xl text-[#33363E]">
            Diagnosis Now
          </h1>
        </div>

        <div
          className=" w-[35%] font-medium text-[#5C606C]"
          data-aos={"fade-up"}
          data-aos-duration={"1000"}
          data-aos-delay={"400"}
        >
          <p className=" text-center w-full">
            Early detection is the key to preventing complications. Our system
            offers a comprehensive diabetes diagnosis, allowing you to take
            preventive steps and maintain a healthier lifestyle
          </p>
        </div>

        <div
          className=" pt-10 drop1"
          data-aos={"fade-up"}
          data-aos-duration={"1000"}
          data-aos-delay={"600"}
        >
          <Link
            href={"#"}
            className=" bg-[#1B40FF] py-4 px-32 rounded-3xl text-white font-semibold"
          >
            DIAGNOSIS
          </Link>
        </div>
      </div>

      {/* Necessary section */}
      <div className="w-full h-auto flex flex-col gap-40 items-center relative -mt-11 bg-white rounded-[55px] pt-10 pb-36">
        {/* background gradient */}
        {/* <div className="w-full h-[100vh] bg-gradient-to-b from-[#1B73FF]/80 via-transparent to-transparent absolute z-[-5]"></div> */}

        <div
          data-aos={"fade-up"}
          data-aos-duration={"1000"}
          className=" text-center flex flex-col items-center gap-3 font-medium text-5xl text-[#33363E]"
        >
          <h1 className="">
            Why is it <span className=" font-bold">Necessary</span> To Do an
          </h1>
          <h1>
            Early{" "}
            <span className=" bg-[#1B40FF] px-1 rounded-lg text-white">
              Diagnosis of Diabetes?
            </span>
          </h1>
        </div>

        <div className="w-[757px] h-[947px] top-48 absolute z-[1] drop2">
          <Image
            src={"/img/anatomy.png"}
            alt="anatomy"
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className=" w-full flex flex-col gap-56 justify-between px-14">
          <div className=" w-full flex items-start justify-between">
            <div
              data-aos-duration={"1000"}
              data-aos={"fade-right"}
              className=" w-[30%] py-4 flex flex-col items-center gap-4"
            >
              <div className=" w-[70px] h-[70px] relative rounded-full border-[2px] border-[#000000]">
                <Image
                  src={"/img/healthy.png"}
                  alt="anatomy"
                  layout="fill"
                  objectFit="cover"
                  className="p-3"
                />
              </div>

              <div className="text-[#33363E] font-bold text-lg">
                <h1 className="">Prevent Serious Complications</h1>
              </div>

              <div className=" w-full">
                <p className=" w-full text-[#7D7E7F] text-center">
                  With our AI Interview notes, you can save valuable time and
                  effort. Gone are the days of manually transcribing and
                  organizing interviews
                </p>
              </div>
            </div>

            <div
              data-aos-duration={"1000"}
              data-aos={"fade-left"}
              className=" w-[30%] py-4 flex flex-col items-center gap-4"
            >
              <div className=" w-[70px] h-[70px] relative rounded-full border-[2px] border-[#000000]">
                <Image
                  src={"/img/quality-of-life.png"}
                  alt="anatomy"
                  layout="fill"
                  objectFit="cover"
                  className="p-3"
                />
              </div>

              <div className="text-[#33363E] font-bold text-lg">
                <h1 className="">Improving Quality of Life</h1>
              </div>

              <div className=" w-full">
                <p className=" w-full text-[#7D7E7F] text-center">
                  This helps prevent the annoying symptoms, such as extreme
                  fatigue, frequent urination, and excessive thirst that are
                  usually associated with uncontrolled diabetes
                </p>
              </div>
            </div>
          </div>

          <div className=" w-full flex items-start justify-between">
            <div
              data-aos-duration={"1000"}
              data-aos={"fade-right"}
              className=" w-[30%] py-4 flex flex-col items-center gap-4"
            >
              <div className=" w-[70px] h-[70px] relative rounded-full border-[2px] border-[#000000]">
                <Image
                  src={"/img/medical.png"}
                  alt="anatomy"
                  layout="fill"
                  objectFit="cover"
                  className="p-3"
                />
              </div>

              <div className="text-[#33363E] font-bold text-lg">
                <h1 className="">Initiating Early Treatment and Management</h1>
              </div>

              <div className=" w-full">
                <p className=" w-full text-[#7D7E7F] text-center">
                  Our system analyzes the sentiment expressed during interviews,
                  helping you understand the emotional tone and sentiment of
                  interviewees' responses.
                </p>
              </div>
            </div>

            <div
              data-aos-duration={"1000"}
              data-aos={"fade-left"}
              className=" w-[30%] py-4 flex flex-col items-center gap-4"
            >
              <div className=" w-[70px] h-[70px] relative rounded-full border-[2px] border-[#000000]">
                <Image
                  src={"/img/donor.png"}
                  alt="anatomy"
                  layout="fill"
                  objectFit="cover"
                  className="p-3"
                />
              </div>

              <div className="text-[#33363E] font-bold text-lg">
                <h1 className="">Prevents Decrease in Organ Function</h1>
              </div>

              <div className=" w-full">
                <p className=" w-full text-[#7D7E7F] text-center">
                  Our system analyzes the sentiment expressed during interviews,
                  helping you understand the emotional tone and sentiment of
                  interviewees' responses
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Prevention section */}
      <div className=" w-full px-14 h-auto flex flex-col items-center gap-20 pt-36 relative bg-transparent">
        {/* particle */}
        <div className=" absolute z-[-5] left-0 w-[850px] h-[850px]">
          <Image
            src={"/img/polygon.png"}
            alt="polygon"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className=" absolute z-[-5] left-0 -bottom-80 w-[500px] h-[500px] scale-y-[-1]">
          <Image
            src={"/img/partikel.png"}
            alt="polygon"
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className=" absolute z-[-5] right-0 -bottom-80 w-[500px] h-[500px] scale-y-[-1] scale-x-[-1]">
          <Image
            src={"/img/partikel.png"}
            alt="polygon"
            layout="fill"
            objectFit="cover"
          />
        </div>
        {/* Particle */}

        <div
          data-aos={"fade-up"}
          data-aos-duration={"1000"}
          className="font-medium text-5xl text-[#33363E]"
        >
          <h1>
            What{" "}
            <span className=" bg-[#1B40FF] px-1 rounded-lg text-white">
              Prevention
            </span>{" "}
            can Be <span className=" font-bold">Done</span> ?
          </h1>
        </div>

        <div className=" w-full h-[252px] flex items-center justify-between">
          <div
            data-aos={"fade-right"}
            data-aos-duration={"1000"}
            className="w-[69%] flex justify-between items-center h-full bg-transparent rounded-lg border-[1px] border-black px-10"
          >
            <div className=" w-[87%] h-full flex flex-col gap-5 items-start justify-center text-[#33363E]">
              <h1 className=" text-3xl font-semibold">Managing a Healthy Eating Pattern</h1>
              <p className=" w-full font-medium">A balanced diet is key to controlling blood sugar. High-fiber, low-sugar, and low-fat foods help stabilize levels. Eating fruits, vegetables, whole grains, and lean proteins supports diabetes management and prevents complications.</p>
            </div>
            <div className=" w-[10%] h-full relative overflow-hidden">
                <Image 
                  src={'/img/1.png'}
                  alt="1"
                  layout="fill"
                  objectFit="fill"
                />
            </div>
          </div>

          <div
            data-aos={"fade-left"}
            data-aos-duration={"1000"}
            className=" w-[30%] h-full bg-transparent rounded-lg overflow-hidden border-[1px] border-black relative"
          >
            <Image
              src={'/img/food.png'}
              alt="food"
              layout="fill"
              objectFit="cover"
              className="scale-[1.03]"
            />
          </div>
        </div>

        <div className=" w-full h-[252px] flex flex-row-reverse items-center justify-between">
          <div
            data-aos={"fade-left"}
            data-aos-duration={"1000"}
            className="w-[69%] flex justify-between items-center h-full bg-transparent rounded-lg border-[1px] border-black px-10"
          >
            <div className=" w-[85%] h-full flex flex-col gap-5 items-start justify-center text-[#33363E]">
              <h1 className=" text-3xl font-semibold">Regular Physical Activity</h1>
              <p className=" w-full font-medium">Exercise helps the body use insulin more effectively and can help control weight. The general recommendation is to do moderate physical activity such as brisk walking, cycling, or swimming for at least 150 minutes per week.</p>
            </div>
            <div className=" w-[15%] h-full relative overflow-hidden">
                <Image 
                  src={'/img/2.png'}
                  alt="1"
                  layout="fill"
                  objectFit="fill"
                />
            </div>
          </div>

          <div
            data-aos={"fade-right"}
            data-aos-duration={"1000"}
            className=" w-[30%] h-full bg-transparent rounded-lg overflow-hidden border-[1px] border-black relative"
          >
            <Image
              src={'/img/gym.png'}
              alt="food"
              layout="fill"
              objectFit="cover"
              className="scale-[1.03]"
            />
          </div>
        </div>

        <div className=" w-full h-[252px] flex items-center justify-between">
          <div
            data-aos={"fade-right"}
            data-aos-duration={"1000"}
            className="w-[69%] flex justify-between items-center h-full bg-transparent rounded-lg border-[1px] border-black px-10"
          >
            <div className=" w-[80%] h-full flex flex-col gap-5 items-start justify-center text-[#33363E]">
              <h1 className=" text-3xl font-semibold">Managing Blood Sugar Levels</h1>
              <p className=" w-full font-medium">Maintaining blood sugar within a healthy range is crucial for preventing and managing diabetes. Regular tests like fasting glucose and hemoglobin A1c can track management effectiveness, allowing timely adjustments in diet, exercise, or medication to prevent long-term complications.</p>
            </div>
            <div className=" w-[18%] h-full relative overflow-hidden">
                <Image 
                  src={'/img/3.png'}
                  alt="1"
                  layout="fill"
                  objectFit="fill"
                />
            </div>
          </div>

          <div
            data-aos={"fade-left"}
            data-aos-duration={"1000"}
            className=" w-[30%] h-full bg-transparent rounded-lg overflow-hidden border-[1px] border-black relative"
          >
            <Image
              src={'/img/tes-darah.png'}
              alt="food"
              layout="fill"
              objectFit="cover"
              className="scale-[1.03]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
