"use client";
import Image from "next/image";
import { SquareCheck } from "lucide-react";
import SugarTestCard from "@/app/components/items/SugarTestCard";
import { SugarTest } from "@/app/interfaces";
import API from "@/app/utils/API";
import { useState, useEffect } from "react";
import AOS from "aos";
import Loader from "@/app/components/items/Loader";

const Result: React.FC = () => {
  const [data, setData] = useState<any>({});
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getDataDiagnosis = () => {

    API.get("/user-glucose/latest-diagnosis")
      .then((res: any) => {
        setData(res.data.data);
        console.log(res.data);
        setIsLoading(false);
      })
      .catch((err: any) => {
        console.log(err)
        setIsLoading(false);
      });
  };
  const items: SugarTest[] = [
    {
      title: "Fasting Blood Glucose",
      testResult: data.fastingBloodGlucose,
    },
    {
      title: "Random Blood Sugar Test",
      testResult: data.randomBloodSugarTest,
    },
    {
      title: "Oral Glucose Tolerance Test (2-Hour Postprandial)",
      testResult: data.oralGlucose,
    },
  ];

  useEffect(() => {
    AOS.init();
    AOS.refresh();
    getDataDiagnosis();
    console.log(data);
  }, []);

  const date = new Date(data?.date);
  const formattedDate = date.toLocaleDateString("id-ID", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  if(isLoading){
    return <Loader/>
  }

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
            <h1 className=" w-full text-center px-14 font-bold text-9xl text-[#1B40FF]">
              {data.diagnosisResult?.hypothesis === "Tidak Diabetes" &&
                "NORMAL"}
              {data.diagnosisResult?.hypothesis === "DM1" && "DIABETES TYPE 1"}
              {data.diagnosisResult?.hypothesis === "DM2" && "DIABETES TYPE 2"}
              {data.diagnosisResult?.hypothesis === "DMG" &&
                " GESTASIONAL DIABETES"}
            </h1>
            <div className=" absolute z-1 w-full h-[100px] bg-gradient-to-t from-white via-white/40 to-transparent bottom-0"></div>
          </div>
            {data.diagnosisResult?.hypothesis !== "Tidak diabetes" ? (
              <p
              data-aos={"fade-up"}
              data-aos-duration={"1000"}
              className=" w-[55%] text-center font-medium text-sm "
            >
              Based on your blood sugar test results, your glucose levels indicate
              that you are in the <span className="font-bold">Diabetes</span> range. This means that while you do
              not have diabetes yet, there is a risk of developing it in the
              future if no action is taken. The symptoms you are experiencing may
              be early signs of this condition. It is recommended that you consult
              your doctor for further evaluation and to discuss lifestyle changes
              that can help prevent the progression to diabetes.
            </p>
            ) : (
              <p
            data-aos={"fade-up"}
            data-aos-duration={"1000"}
            className=" w-[55%] text-center font-medium text-sm "
          >
            Based on your blood sugar test results, your glucose levels are
            within the <span className="font-bold">Normal</span> normal range. However, the symptoms you are experiencing
            may be related to other health conditions that are not associated
            with blood sugar levels. It is recommended that you consult your
            doctor to investigate other possible causes of these symptoms.
          </p>
            )}
          
          
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
              {data.fullName}
            </div>
          </div>

          <div
            data-aos={"fade-up"}
            data-aos-duration={"1000"}
            className=" w-[14%] flex flex-col gap-3"
          >
            <h1 className=" text-[#1B40FF] font-semibold text-xl">Age</h1>
            <div className=" w-full h-14 bg-[#1B40FF] px-4 flex items-center text-white font-bold text-xl rounded-lg">
              {data.age}
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
              {formattedDate}
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
            {!data.bodyBecomesThin && !data.urinatingALot && !data.gettingThirstyEasily && !data.tingling && !data.breakingBreath &&
            !data.moreFourKilo && !data.dizziness && !data.obstacles && !data.coughing && !data.pregnant && !data.weak && !data.blurredVision && !data.vomiting
            && !data.pale && !data.nausea && !data.wounds && (
              <div className="w-full items-center flex  gap-3">
                <h1 className="font-semibold text-lg">No Symptoms</h1>
              </div>
            )}

            {data.bodyBecomesThin && (
              <div className="w-full items-center flex  gap-3">
                <SquareCheck color="#ffffff" />
                <h1 className="font-semibold text-lg">Body becomes thin</h1>
              </div>
            )}
            {data.urinatingALot && (
              <div className="w-full items-center flex  gap-3">
                <SquareCheck color="#ffffff" />
                <h1 className="font-semibold text-lg">Urinating a lot</h1>
              </div>
            )}
            {data.gettingThirstyEasily && (
              <div className="w-full items-center flex  gap-3">
                <SquareCheck color="#ffffff" />
                <h1 className="font-semibold text-lg">
                  Drinking a lot/getting thirsty easily
                </h1>
              </div>
            )}
            {data.tingling && (
              <div className="w-full items-center flex  gap-3">
                <SquareCheck color="#ffffff" />
                <h1 className="font-semibold text-lg">Tingling</h1>
              </div>
            )}
            {data.breakingBreath && (
              <div className="w-full items-center flex  gap-3">
                <SquareCheck color="#ffffff" />
                <h1 className="font-semibold text-lg">Breaking breath</h1>
              </div>
            )}
            {data.moreFourKilo && (
              <div className="w-full items-center flex  gap-3">
                <SquareCheck color="#ffffff" />
                <h1 className="font-semibold text-lg">
                  {"Having given birth to a baby >= 4 kg"}
                </h1>
              </div>
            )}
            {data.dizziness && (
              <div className="w-full items-center flex  gap-3">
                <SquareCheck color="#ffffff" />
                <h1 className="font-semibold text-lg">Dizziness</h1>
              </div>
            )}
            {data.obstacles && (
              <div className="w-full items-center flex  gap-3">
                <SquareCheck color="#ffffff" />
                <h1 className="font-semibold text-lg">
                  Obstacles to the quality of husband and wife relationships in
                  men
                </h1>
              </div>
            )}
            {data.coughing && (
              <div className="w-full items-center flex  gap-3">
                <SquareCheck color="#ffffff" />
                <h1 className="font-semibold text-lg">Coughing</h1>
              </div>
            )}
            {data.pregnant && (
              <div className="w-full items-center flex  gap-3">
                <SquareCheck color="#ffffff" />
                <h1 className="font-semibold text-lg">Pregnant</h1>
              </div>
            )}
            {data.weak && (
              <div className="w-full items-center flex  gap-3">
                <SquareCheck color="#ffffff" />
                <h1 className="font-semibold text-lg">Weak</h1>
              </div>
            )}
            {data.blurredVision && (
              <div className="w-full items-center flex  gap-3">
                <SquareCheck color="#ffffff" />
                <h1 className="font-semibold text-lg">Blurred</h1>
              </div>
            )}
            {data.vomiting && (
              <div className="w-full items-center flex  gap-3">
                <SquareCheck color="#ffffff" />
                <h1 className="font-semibold text-lg">Vomiting</h1>
              </div>
            )}
            {data.pale && (
              <div className="w-full items-center flex  gap-3">
                <SquareCheck color="#ffffff" />
                <h1 className="font-semibold text-lg">Pale</h1>
              </div>
            )}
            {data.nausea && (
              <div className="w-full items-center flex  gap-3">
                <SquareCheck color="#ffffff" />
                <h1 className="font-semibold text-lg">Nausea</h1>
              </div>
            )}
            {data.wounds && (
              <div className="w-full items-center flex  gap-3">
                <SquareCheck color="#ffffff" />
                <h1 className="font-semibold text-lg">Wounds</h1>
              </div>
            )}
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
