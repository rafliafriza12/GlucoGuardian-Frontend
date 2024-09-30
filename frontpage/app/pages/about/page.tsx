"use client";
import Image from "next/image";
import {
  MoveUpRight,
  NotebookText,
  ScanFace,
  HandCoins,
  Hospital,
  MoveRight,
} from "lucide-react";
import Link from "next/link";
import Aos from "aos";
import { useEffect } from "react";
const About: React.FC = () => {
    useEffect(() => {
        Aos.init();
        Aos.refresh();
    })
  return (
    <div className=" w-full flex flex-col items-center gap-28">
      <div className="w-full h-[100vh] flex flex-col justify-center items-center gap-8 relative z-0 bg-transparent mt-[11vh] overflow-hidden">
        <div className="w-full h-full absolute z-[-10]">
          <Image
            src={"/img/bg.png"}
            alt="Background"
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div
        data-aos={"fade-up"}
        data-aos-duration={"1000"}
        data-aos-delay={"1000"}
        className=" absolute top-10 z-[-9]">
          <h1 className="font-bold text-9xl text-white">Gluco Guardian</h1>
          <div className="absolute z-1 w-full h-[100px] bg-gradient-to-t from-[#1B40FF] via-[#1B40FF]/40 to-transparent bottom-0"></div>
        </div>

        <div
        data-aos={"fade-up"}
        data-aos-duration={"1500"}
         className=" h-[88%] w-[60%] absolute -bottom-5 z-[-7] bg-transparent">
          <Image
            src={"/img/dokter.png"}
            alt="Background"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className=" w-[300px] h-[100px] absolute z-[-6] bottom-0 left-7">
          <Image
            src={"/img/pixel.png"}
            alt="Background"
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div 
        data-aos={"fade-up"}
        data-aos-duration={"1000"}
        data-aos-delay={"400"}
        className=" absolute flex flex-col items-start gap-1 text-white bottom-64 right-36">
          <h1 className=" font-extrabold text-4xl">86.7%</h1>
          <h1 className=" font-bold text-lg">Diagnosis Accuracy</h1>
        </div>
        <div
        data-aos={"fade-up"}
        data-aos-duration={"1000"}
        className=" absolute flex flex-col items-start gap-1 text-white bottom-32 right-32">
          <h1 className=" font-extrabold text-4xl">1+</h1>
          <h1 className=" font-bold text-lg">Trusted Article</h1>
        </div>

        <div 
        data-aos={"fade-up"}
        data-aos-duration={"1000"}
        data-aos-delay={"700"}
        className="absolute w-[20%] text-white font-medium left-12 flex flex-col items-start">
          Empower your journey to health—understand your glucose, take control,
          and embrace a brighter future with confidence.
        </div>
        <div 
        data-aos={"fade-up"}
        data-aos-duration={"1000"}
        data-aos-delay={"500"}
        className=" absolute flex items-center gap-5 text-white bottom-44 left-32">
          <h1 className=" font-bold text-xl">Let's Diagnose</h1>
          <Link
            href={"/pages/diagnose"}
            className=" p-3 border-[1px] border-white rounded-full"
          >
            <MoveUpRight color="#ffffff" />
          </Link>
        </div>
      </div>
      <div className=" w-full flex flex-col gap-7 py-10 px-[10%] text-[#1B40FF]">
        <h1 data-aos={"fade-up"}
        data-aos-duration={"1000"}
        className=" font-bold text-8xl">
          <span className=" font-semibold text-5xl">Welcome to</span>
          <br />
          Gluco Guardian
        </h1>
        <p data-aos={"fade-up"}
        data-aos-duration={"1000"} className="w-full text-lg">
          At Gluco Guardian, we are committed to empowering individuals to
          effectively monitor and manage their blood glucose levels. Our
          advanced data-driven system is designed to give you accurate insights
          into your health, helping you take control of your diabetes with
          confidence. We believe in making the journey toward better health more
          accessible and reliable, ensuring that every step you take is informed
          and proactive. Join us on the path to a healthier, more empowered
          future as you manage your glucose levels with ease and certainty.
        </p>
      </div>

      <div className=" w-full px-[10%] flex flex-col items-center gap-24 py-[5%] text-[#1B40FF]">
        <h1 data-aos={"fade-up"}
        data-aos-duration={"1000"} className=" font-bold text-4xl">Let's See How We Work</h1>

        <div data-aos={"fade-up"}
        data-aos-duration={"1000"} className=" w-full flex items-start justify-center gap-7">
          <div className="px-5 flex flex-col items-center gap-16">
            <div className=" w-[200px] h-[200px] relative border-[1px] border-[#1B40FF] border-dashed flex items-center justify-center rounded-full">
              <NotebookText size={65} color="#1B40FF" />
            </div>
            <h1 className=" font-bold text-xl">Assessment</h1>
          </div>
          <div className="px-5 flex flex-col items-center gap-16">
            <div className=" w-[200px] h-[200px] relative border-[1px] border-[#1B40FF] border-dashed flex items-center justify-center rounded-full">
              <ScanFace size={65} color="#1B40FF" />
            </div>
            <h1 className=" font-bold text-xl">Personalized Insights</h1>
          </div>
          <div className="px-5 flex flex-col items-center gap-16">
            <div className=" w-[200px] h-[200px] relative border-[1px] border-[#1B40FF] border-dashed flex items-center justify-center rounded-full">
              <HandCoins size={65} color="#1B40FF" />
            </div>
            <h1 className=" font-bold text-xl">Monitoring</h1>
          </div>
          <div className="px-5 flex flex-col items-center gap-16">
            <div className=" w-[200px] h-[200px] relative border-[1px] border-[#1B40FF] border-dashed flex items-center justify-center rounded-full">
              <Hospital size={65} color="#1B40FF" />
            </div>
            <h1 className=" font-bold text-xl">Support & Guidance</h1>
          </div>
        </div>
      </div>

      <div className=" w-full px-[10%] flex flex-col items-center gap-24 pt-[5%] pb-[10%] text-[#1B40FF]">
        <h1 data-aos={"fade-up"}
        data-aos-duration={"1000"} className=" font-bold text-4xl">
          The Cutting-Edge Technology Behind Our Platform
        </h1>
        <div data-aos={"fade-up"}
        data-aos-duration={"1000"} className=" w-full h-[350px] relative flex justify-center">
          {/* middle */}
          <div className="h-full flex flex-col gap-6 items-center w-[20%] absolute z-[4] rounded-xl bg-white border-[1px] border-black py-8 px-5">
            <div className=" w-[80px] h-[80px] relative">
              <Image
                src={"/img/next.png"}
                alt="next"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className=" w-full text-center ">
              <h1 className=" font-bold text-lg">Next</h1>
            </div>
            <div className=" w-full text-center">
              <p className="w-full text-xs font-medium text-gray-500">
                Next enables you to create high-quality web applications with
                the power of React components.
              </p>
            </div>
            <Link
              href={"https://nextjs.org/"}
              className="w-full flex items-center justify-center gap-4"
            >
              <h1 className="font-medium">Read More </h1>
              <MoveRight color="#1B40FF" />
            </Link>
          </div>
          {/* left */}
          <div className="h-full w-[20%] flex flex-col gap-6 items-center hover:z-[10] py-8 px-5 rounded-xl bg-white border-[1px] border-black absolute z-[3] top-3 left-[27%] ">
            <div className=" w-[80px] h-[80px] relative rounded-lg overflow-hidden">
              <Image
                src={"/img/ts.png"}
                alt="next"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className=" w-full text-left">
              <h1 className=" font-bold text-lg">TypeScript</h1>
            </div>
            <div className=" w-full text-left">
              <p className="w-full text-xs font-medium text-gray-500">
                TypeScript speeds up your development experience by catching
                errors and providing fixes ...
              </p>
            </div>
            <Link
              href={"https://www.typescriptlang.org/"}
              className="w-full text-left flex items-center gap-4"
            >
              <h1 className="font-medium">Read More </h1>
              <MoveRight color="#1B40FF" />
            </Link>
          </div>
          <div className="h-full w-[20%] flex flex-col gap-6 items-center hover:z-[10] py-8 px-5 rounded-xl bg-white border-[1px] border-black absolute z-[2] top-7 left-[17%]">
            <div className=" w-[80px] h-[80px] relative rounded-lg overflow-hidden">
              <Image
                src={"/img/tailwind.png"}
                alt="next"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className=" w-full text-left">
              <h1 className=" font-bold text-lg">Tailwind CSS</h1>
            </div>
            <div className=" w-full text-left">
              <p className="w-full text-xs font-medium text-gray-500">
                Tailwind CSS is a utility-first CSS framework for rapidly
                building modern websites without ever leaving your HTML.
              </p>
            </div>
            <Link
              href={"https://tailwindcss.com/"}
              className="w-full text-left flex items-center gap-4"
            >
              <h1 className="font-medium">Read More </h1>
              <MoveRight color="#1B40FF" />
            </Link>
          </div>
          <div className="h-full w-[20%] flex flex-col gap-6 items-center hover:z-[10] py-8 px-5 rounded-xl bg-white border-[1px] border-black absolute z-[1] top-10 left-[7%]">
            <div className=" w-[80px] h-[80px] relative rounded-lg overflow-hidden">
              <Image
                src={"/img/axios.png"}
                alt="next"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className=" w-full text-left">
              <h1 className=" font-bold text-lg">Axios</h1>
            </div>
            <div className=" w-full text-left">
              <p className="w-full text-xs font-medium text-gray-500">
                Axios is a promise-based HTTP Client for node.js and the
                browser. It is isomorphic (= it can run in the browser and
                nodejs with the same codebase) ...
              </p>
            </div>
            <Link
              href={"https://axios-http.com/docs/intro"}
              className="w-full text-left flex items-center gap-4"
            >
              <h1 className="font-medium">Read More </h1>
              <MoveRight color="#1B40FF" />
            </Link>
          </div>
          {/* right */}
          <div className="h-full w-[20%] flex flex-col gap-6 items-center hover:z-[10] py-8 px-5 rounded-xl bg-white border-[1px] border-black absolute z-[3] top-3 right-[27%] ">
            <div className=" w-[80px] h-[80px] relative rounded-lg overflow-hidden">
              <Image
                src={"/img/yarn.png"}
                alt="next"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className=" w-full text-right">
              <h1 className=" font-bold text-lg">Yarn</h1>
            </div>
            <div className=" w-full text-right">
              <p className="w-full text-xs font-medium text-gray-500">
                Yarn is a package manager that doubles down as project manager.
                Whether you work on ...
              </p>
            </div>
            <Link
              href={"https://yarnpkg.com/"}
              className="w-full text-left flex items-center justify-end gap-4"
            >
              <h1 className="font-medium">Read More </h1>
              <MoveRight color="#1B40FF" />
            </Link>
          </div>
          <div className="h-full w-[20%] flex flex-col gap-6 items-center hover:z-[10] py-8 px-5 rounded-xl bg-white border-[1px] border-black absolute z-[2] top-7 right-[17%]">
            <div className=" w-[87px] h-[80px] relative rounded-lg overflow-hidden">
              <Image
                src={"/img/express.png"}
                alt="next"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className=" w-full text-right">
              <h1 className=" font-bold text-lg">Express.js</h1>
            </div>
            <div className=" w-full text-right">
              <p className="w-full text-xs font-medium text-gray-500">
              Express is a minimal and flexible Node.js web application framework that provides a robust set of ...
              </p>
            </div>
            <Link
              href={"https://expressjs.com/"}
              className="w-full text-left flex items-center justify-end gap-4"
            >
              <h1 className="font-medium">Read More </h1>
              <MoveRight color="#1B40FF" />
            </Link>
          </div>

          <div className="h-full w-[20%] flex flex-col gap-6 items-center hover:z-[10] py-8 px-5 rounded-xl bg-white border-[1px] border-black absolute z-[1] top-10 right-[7%]">
            <div className=" w-[80px] h-[80px] relative rounded-lg overflow-hidden">
              <Image
                src={"/img/mongo.png"}
                alt="next"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className=" w-full text-right">
              <h1 className=" font-bold text-lg">Mongo DB</h1>
            </div>
            <div className=" w-full text-right">
              <p className="w-full text-xs font-medium text-gray-500">
              The world's most popular document database is now the world's most versatile developer data platform.
              </p>
            </div>
            <Link
              href={"https://www.mongodb.com/"}
              className="w-full text-left flex items-center justify-end gap-4"
            >
              <h1 className="font-medium">Read More </h1>
              <MoveRight color="#1B40FF" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
