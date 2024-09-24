import Image from "next/image";
import { SquareCheck } from "lucide-react";
import SugarTestCard from "@/app/components/items/SugarTestCard";
import { SugarTest } from "@/app/interfaces";
import Aos from "aos";
const Result: React.FC = () => {
  const items: SugarTest[] = [
    {
      title: "Fasting Blood Glucose",
      testResult: 90,
    },
    {
      title: "Random Blood Sugar Test",
      testResult: 120,
    },
    {
      title: "Oral Glucose Tolerance Test (2-Hour Postprandial)",
      testResult: 130,
    },
  ];

  return (
    <div className=" w-full relative">
        <div className=" absolute z-[-5] h-screen w-screen top-[5%]">
        <Image
          src={"/img/vektor.png"}
          alt="vektor"
          layout="fill"
          objectFit="cover"
          className=" relative"
        />
      </div>
        <div className=" absolute z-[-5] h-screen w-screen top-[27.5%]">
          <Image
            src={"/img/vektor.png"}
            alt="vektor"
            layout="fill"
            objectFit="cover"
            className=" relative"
          />
        </div>
        <div className=" absolute z-[-5] h-screen w-screen top-[50%]">
          <Image
            src={"/img/vektor.png"}
            alt="vektor"
            layout="fill"
            objectFit="cover"
            className=" relative"
          />
        </div>
        <div className=" absolute z-[-5] h-screen w-screen top-[73%]">
          <Image
            src={"/img/vektor.png"}
            alt="vektor"
            layout="fill"
            objectFit="cover"
            className=" relative"
          />
        </div>
        <div className="w-full h-[300vh] bg-gradient-to-t from-[#1B73FF]/80 via-[#1B73FF]/10 to-transparent absolute z-[-5] bottom-0"></div>
      <div className=" mt-[15vh] w-full flex flex-col gap-24">
        {/* header */}
        <div
          data-aos={"fade-up"}
          data-aos-duration={"1000"}
          className=" h-[40vh] w-full bg-transparent relative flex flex-col items-center justify-center gap-7 text-white overflow-hidden"
        >
          <div className=" w-full h-full bg-[#1B40FF] absolute z-[-3]"></div>

          <div
            data-aos={"fade-up"}
            data-aos-duration={"1000"}
            data-aos-delay={"500"}
            className=" w-[120px] h-[120px] absolute z-[-1] left-36 top-2 "
          >
            <Image
              src={"/img/checklist.png"}
              alt="check"
              layout="fill"
              objectFit="cover"
              className=" relative"
            />
          </div>
          <div
            data-aos={"fade-up"}
            data-aos-duration={"1000"}
            data-aos-delay={"700"}
            className=" w-[300px] h-[300px] absolute z-[-1] -left-20 -bottom-28 -rotate-[45deg] "
          >
            <Image
              src={"/img/checklist.png"}
              alt="check"
              layout="fill"
              objectFit="cover"
              className=" relative"
            />
          </div>
          <div
            data-aos={"fade-up"}
            data-aos-duration={"1000"}
            data-aos-delay={"800"}
            className=" w-[120px] h-[120px] absolute z-[-1] right-36 top-5 -rotate-[45deg]"
          >
            <Image
              src={"/img/checklist.png"}
              alt="check"
              layout="fill"
              objectFit="cover"
              className=" relative"
            />
          </div>
          <div
            data-aos={"fade-up"}
            data-aos-duration={"1000"}
            data-aos-delay={"600"}
            className=" w-[300px] h-[300px] absolute z-[-1] -right-20 -bottom-28  "
          >
            <Image
              src={"/img/checklist.png"}
              alt="check"
              layout="fill"
              objectFit="cover"
              className=" relative"
            />
          </div>
          <h1 className=" font-bold text-8xl">Diagnosis Result</h1>
          <p className=" w-[55%] text-center font-medium text-lg">
            Take a deep breath, this is just the beginning of your journey
            toward better health. Your diagnosis results are here to provide
            clarity and guidance, empowering you with the knowledge to make
            informed decisions and take positive steps toward well-being.
          </p>
        </div>
        {/* End Of Header */}

        {/* Diagnosis */}
        <div className=" w-full flex flex-col gap-5 items-center">
          <div
            data-aos={"fade-up"}
            data-aos-duration={"1000"}
            data-aos-delay={"300"}
            className=" relative"
          >
            <h1 className=" font-bold text-9xl text-[#1B40FF]">Prediabetes</h1>
            <div className=" absolute z-1 w-full h-[100px] bg-gradient-to-t from-white via-white/40 to-transparent bottom-0"></div>
          </div>
          <p
            data-aos={"fade-up"}
            data-aos-duration={"1000"}
            className=" w-[55%] text-center font-medium text-sm "
          >
            Based on your blood sugar test results, your glucose levels indicate
            that you are in the prediabetes range. This means that while you do
            not have diabetes yet, there is a risk of developing it in the
            future if no action is taken. The symptoms you are experiencing may
            be early signs of this condition. It is recommended that you consult
            your doctor for further evaluation and to discuss lifestyle changes
            that can help prevent the progression to diabetes.
          </p>
        </div>
        {/* End oF Diagnosis */}

        {/* data user */}
        <div className=" w-full px-[15%] py-5 flex justify-between items-start">
          <div
            data-aos={"fade-up"}
            data-aos-duration={"1000"}
            className=" w-[40%] flex flex-col gap-3 "
          >
            <h1 className=" text-[#1B40FF] font-semibold text-xl">Name</h1>
            <div className=" w-full h-14 bg-[#1B40FF] px-7 flex items-center text-white font-bold text-xl rounded-lg">
              tes
            </div>
          </div>

          <div
            data-aos={"fade-up"}
            data-aos-duration={"1000"}
            className=" w-[14%] flex flex-col gap-3"
          >
            <h1 className=" text-[#1B40FF] font-semibold text-xl">Age</h1>
            <div className=" w-full h-14 bg-[#1B40FF] px-4 flex items-center text-white font-bold text-xl rounded-lg">
              14
            </div>
          </div>

          <div
            data-aos={"fade-up"}
            data-aos-duration={"1000"}
            className=" w-[40%]  flex flex-col gap-3"
          >
            <h1 className=" text-[#1B40FF] font-semibold text-xl">
              Diagnosis Date
            </h1>
            <div className=" w-full h-14 bg-[#1B40FF] px-7 flex items-center text-white font-bold text-xl rounded-lg">
              22 september 2024
            </div>
          </div>
        </div>
        {/* end of data user */}

        {/* Symptoms */}
        <div className=" w-full px-[15%] flex flex-col gap-3">
          <h1
            data-aos={"fade-up"}
            data-aos-duration={"1000"}
            className=" text-[#1B40FF] font-semibold text-xl"
          >
            Your Symptoms
          </h1>

          <div
            data-aos={"fade-up"}
            data-aos-duration={"1000"}
            className=" w-full grid grid-cols-2  p-10 gap-6 bg-[#1B40FF] text-white rounded-lg"
          >
            <div className="w-full items-center flex  gap-3">
              <SquareCheck color="#ffffff" />
              <h1 className="font-semibold text-lg">
                Testing asdfbaklsdbfakjlsdfkjs
              </h1>
            </div>
            <div className="w-full items-center flex  gap-3">
              <SquareCheck color="#ffffff" />
              <h1 className="font-semibold text-lg">
                Testing asdfbaklsdbfakjlsdfkjs
              </h1>
            </div>
            <div className="w-full items-center flex  gap-3">
              <SquareCheck color="#ffffff" />
              <h1 className="font-semibold text-lg">
                Testing asdfbaklsdbfakjlsdfkjs
              </h1>
            </div>
            <div className="w-full items-center flex  gap-3">
              <SquareCheck color="#ffffff" />
              <h1 className="font-semibold text-lg">
                Testing asdfbaklsdbfakjlsdfkjs
              </h1>
            </div>
            <div className="w-full items-center flex  gap-3">
              <SquareCheck color="#ffffff" />
              <h1 className="font-semibold text-lg">
                Testing asdfbaklsdbfakjlsdfkjs
              </h1>
            </div>
            <div className="w-full items-center flex  gap-3">
              <SquareCheck color="#ffffff" />
              <h1 className="font-semibold text-lg">
                Testing asdfbaklsdbfakjlsdfkjs
              </h1>
            </div>
            <div className="w-full items-center flex  gap-3">
              <SquareCheck color="#ffffff" />
              <h1 className="font-semibold text-lg">
                Testing asdfbaklsdbfakjlsdfkjs
              </h1>
            </div>
          </div>
        </div>
        {/* end of Symptoms */}

        <div className=" w-full flex flex-col items-center gap-28 px-[15%] pb-32">
          <h1
            data-aos={"fade-up"}
            data-aos-duration={"1000"}
            className="w-[25%] text-center text-[#1B40FF] font-semibold text-2xl py-2 border-[2px] border-[#1B40FF] rounded-3xl bg-white shadow-[0px_5px_5px_grey]"
          >
            Blood Sugar
          </h1>
          {items.map((item: SugarTest, i: number) => {
            return <SugarTestCard key={i} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Result;
