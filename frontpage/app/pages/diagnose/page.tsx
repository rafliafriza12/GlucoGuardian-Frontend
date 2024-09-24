"use client";
import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import AOS from "aos";
const Diagnose: React.FC = () => {

    // VALUE CONSULTANT DATA
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number>(0);
  const [gender, setGender] = useState<string>("");
  const [diabetesHistory, setDiabetesHistory] = useState<string>("");
  const [date, setDate] = useState<string>("");
// ==================================================

  const [nameIsFocus, setNameIsFocus] = useState<boolean>(false);
  const [ageIsFocus, setAgeIsFocus] = useState<boolean>(false);
  const [genderIsFocus, setGenderIsFocus] = useState<boolean>(false);
  const [diabetesIsFocus, setDiabetesIsFocus] = useState<boolean>(false);

  const dropdownGender = useRef<HTMLDivElement | null>(null);
  const dropdownDM = useRef<HTMLDivElement | null>(null);

  //   VALUE SUGAR BLOOD SECTION
  const [fastingBlood, setFastingBlood] = useState<number>(0);
  const [randonSugarBlood, setRandomSugarBlood] = useState<number>(0);
  const [oralGlucose, setOralGlucose] = useState<number>(0);
// ==============================================================

  const [isFocusSugarBlood1, setIsFocusSugarBlood1] = useState<boolean>(false);
  const [isFocusSugarBlood2, setIsFocusSugarBlood2] = useState<boolean>(false);
  const [isFocusSugarBlood3, setIsFocusSugarBlood3] = useState<boolean>(false);

  const [isHover, setIsHover] = useState<number>(0);

// VALUE SYMPTOMS
    const [bodyBecomesThin, setBodyBecomesThin] = useState<boolean>(false);
    const [urinatingALot, setUrinatingALot] = useState<boolean>(false);
    const [thirstyEasily, setThirstyEasily] = useState<boolean>(false);
    const [tingling, setTingling] = useState<boolean>(false);
    const [breakingBreath, setBreakingBreath] = useState<boolean>(false);
    const [more4kg, setMore4kg] = useState<boolean>(false);
    const [dizziness, setDizziness] = useState<boolean>(false);
    const [obstacles, setObstacles] = useState<boolean>(false);
    const [coughing, setCoughing] = useState<boolean>(false);
    const [pregnant, setPregnant] = useState<boolean>(false);
    const [weak, setWeak] = useState<boolean>(false);
    const [blurredVision, setBlurredVision] = useState<boolean>(false);
    const [vomiting, setVomiting] = useState<boolean>(false);
    const [pale, setPale] = useState<boolean>(false);
    const [nausea, setNausea] = useState<boolean>(false);
    const [wounds, setWounds] = useState<boolean>(false);
// =================================================================================

  const handleClickGender = (gender: string) => {
    setGender(gender);
    setGenderIsFocus((state) => !state);
  };
  const handleClickDM = (dm: string) => {
    setDiabetesHistory(dm);
    setDiabetesIsFocus((state) => !state);
  };

  const hanleDropDownGender = () => {
    const handleClickOutside = (event: MouseEvent) => {
      // Jika ref tidak null dan target klik tidak berada di dalam dropdown, maka tutup dropdown
      if (
        dropdownGender.current &&
        !dropdownGender.current.contains(event.target as Node)
      ) {
        setGenderIsFocus(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  };

  const handleDropDownDM = () => {
    const handleClickOutside = (event: MouseEvent) => {
      // Jika ref tidak null dan target klik tidak berada di dalam dropdown, maka tutup dropdown
      if (
        dropdownDM.current &&
        !dropdownDM.current.contains(event.target as Node)
      ) {
        setDiabetesIsFocus(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  };
  useEffect(() => {
    AOS.init();
    AOS.refresh();
    handleDropDownDM();
    hanleDropDownGender();
  });

  return (
    <div className=" w-full relative">
        <div className=" absolute z-[-5] h-screen w-screen top-[5%]">
            <Image
                src={'/img/vektor.png'}
                alt="vektor"
                layout="fill"
                objectFit="cover"
                className=" relative"
            />
        </div>
        <div className=" absolute z-[-5] h-screen w-screen top-[20%]">
            <Image
                src={'/img/vektor.png'}
                alt="vektor"
                layout="fill"
                objectFit="cover"
                className=" relative"
            />
        </div>
        <div className=" absolute z-[-5] h-screen w-screen top-[35%]">
            <Image
                src={'/img/vektor.png'}
                alt="vektor"
                layout="fill"
                objectFit="cover"
                className=" relative"
            />
        </div>
        <div className=" absolute z-[-5] h-screen w-screen top-[50%]">
            <Image
                src={'/img/vektor.png'}
                alt="vektor"
                layout="fill"
                objectFit="cover"
                className=" relative"
            />
        </div>
        <div className=" absolute z-[-5] h-screen w-screen top-[65%]">
            <Image
                src={'/img/vektor.png'}
                alt="vektor"
                layout="fill"
                objectFit="cover"
                className=" relative"
            />
        </div>
      <div className="w-full h-[300vh] bg-gradient-to-t from-[#1B73FF]/80 via-[#1B73FF]/10 to-transparent absolute z-[-5] bottom-0"></div>
      <div className=" mt-[15vh] w-full px-14 flex flex-col gap-36">
        {/* Consultation Data Form */}
        <div className=" w-full flex flex-col items-center gap-16">
          <h1
            data-aos={"fade-up"}
            data-aos-duration={"1000"}
            className=" w-[25%] text-center text-[#1B40FF] font-semibold text-2xl py-2 border-[2px] border-[#1B40FF] rounded-3xl bg-white shadow-[0px_5px_5px_grey]"
          >
            Consultation Data Form
          </h1>
          <div
            data-aos={"fade-up"}
            data-aos-duration={"1000"}
            data-aos-delay={"300"}
            className=" w-full flex flex-col px-14 gap-28 py-28 rounded-2xl text-white bg-[#1B40FF]"
          >
            <div className="w-full flex items-start justify-between">
              <div className=" w-[65.5%] h-16 flex flex-col justify-between border-b-[2px] border-white relative">
                <label
                  className={`font-bold text-xl absolute ${
                    nameIsFocus ? "top-0 text-white" : "top-7 text-gray-200"
                  } duration-300 `}
                  htmlFor="name"
                >
                  Name
                </label>
                <div>
                  <input
                    id="name"
                    onFocus={() => setNameIsFocus(true)}
                    onBlur={() =>
                      setNameIsFocus(() => (name !== "" ? true : false))
                    }
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    className=" h-10 text-lg w-full focus:outline-none bg-transparent font-medium pb-1 absolute bottom-0"
                    type="text"
                  />
                </div>
              </div>
              <div className=" w-[31.5%] h-16 flex flex-col justify-between border-b-[2px] border-white relative">
                <label
                  className={`font-bold text-xl absolute ${
                    ageIsFocus ? "top-0 text-white" : "top-7 text-gray-200"
                  } duration-300 `}
                  htmlFor="age"
                >
                  Age
                </label>
                <div>
                  <input
                    id="age"
                    onFocus={() => setAgeIsFocus(true)}
                    onBlur={() =>
                      setAgeIsFocus(() => (age !== 0 ? true : false))
                    }
                    onChange={(e) => setAge(+e.target.value)}
                    value={age === 0 ? "" : age}
                    className="h-10 text-lg w-full focus:outline-none bg-transparent font-medium pb-1 absolute bottom-0"
                    type="number"
                  />
                </div>
              </div>
            </div>

            <div className=" w-full grid grid-cols-3 grid-rows-1 gap-10">
              <div className=" w-full flex flex-col justify-between h-20 relative">
                <h1 className="font-bold text-lg text-white">Gender</h1>
                <div
                  onClick={() => setGenderIsFocus((state) => !state)}
                  className=" w-full h-10 bg-white rounded-2xl relative flex items-center justify-between text-gray-500 font-medium"
                >
                  <h1 className="pl-3">
                    {gender === "" ? "Choose Gender" : gender}
                  </h1>
                  <ChevronDown color="#6b7280" className="mr-3" />
                </div>
                <div
                  ref={dropdownGender}
                  className={` ${
                    genderIsFocus
                      ? "absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-full  bottom-[-120%]"
                      : "hidden"
                  } `}
                >
                  <ul className="py-2 text-sm text-gray-700 w-full">
                    <li>
                      <button
                        onClick={() => handleClickGender("Male")}
                        className="block px-4 py-2 hover:bg-gray-600 hover:text-white w-full text-left"
                      >
                        Male
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => handleClickGender("Female")}
                        className="block px-4 py-2 hover:bg-gray-600 hover:text-white w-full text-left"
                      >
                        Female
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <div className=" w-full flex flex-col justify-between h-20">
                <label className="font-bold text-lg text-white" htmlFor="date">
                  Date
                </label>
                <input
                  type="date"
                  name=""
                  id="date"
                  onChange={(e) => setDate(e.target.value)}
                  value={date}
                  className="w-full h-10 bg-white rounded-2xl px-3 focus:outline-none text-gray-500"
                />
              </div>
              <div className=" w-full flex flex-col justify-between h-20 relative">
                <h1 className="font-bold text-lg text-white">DM History</h1>
                <div
                  onClick={() => setDiabetesIsFocus((state) => !state)}
                  className=" w-full h-10 bg-white rounded-2xl relative flex items-center justify-between text-gray-500 font-medium"
                >
                  <h1 className="pl-3">
                    {diabetesHistory === "" ? "Choose Gender" : diabetesHistory}
                  </h1>
                  <ChevronDown color="#6b7280" className="mr-3" />
                </div>
                <div
                  ref={dropdownDM}
                  className={` ${
                    diabetesIsFocus
                      ? "absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-full  bottom-[-120%]"
                      : "hidden"
                  } `}
                >
                  <ul className="py-2 text-sm text-gray-700 w-full">
                    <li>
                      <button
                        onClick={() => handleClickDM("Yes")}
                        className="block px-4 py-2 hover:bg-gray-600 hover:text-white w-full text-left"
                      >
                        Yes
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => handleClickDM("No")}
                        className="block px-4 py-2 hover:bg-gray-600 hover:text-white w-full text-left"
                      >
                        No
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Blood Sugar  */}
        <div className=" w-full flex flex-col items-center gap-28">
          <h1
            data-aos={"fade-up"}
            data-aos-duration={"1000"}
            className="w-[25%] text-center text-[#1B40FF] font-semibold text-2xl py-2 border-[2px] border-[#1B40FF] rounded-3xl bg-white shadow-[0px_5px_5px_grey]"
          >
            Blood Sugar
          </h1>

          <div data-aos={"fade-up"}
              data-aos-duration={"1000"} className=" w-full h-[450px] grid grid-cols-3 grid-rows-1 gap-20">
            <div
              onMouseOver={() => {
                setIsFocusSugarBlood1(true);
                setIsHover(1);
              }}
              onMouseOut={() => {
                setIsFocusSugarBlood1(false);
                setIsHover(0);
              }}
              className={`w-full h-full bg-[#1B40FF] rounded-2xl relative duration-500 ${isHover === 1 ? '-translate-y-10 shadow-[0px_40px_20px_grey]': 'translate-y-0'}`}
            >
                <div className={` ${isHover !== 1 && isHover !== 0 ? 'z-[2] backdrop-blur-[2px]': 'z-[-1]'} duration-300  w-full h-full  absolute rounded-2xl`}></div>
              <div className=" w-full h-full gap-16 text-white flex flex-col items-center justify-start p-8">
                <h1 className=" font-bold text-xl">Fasting Blood Glucose</h1>
                <input
                  type="number"
                  name=""
                  onChange={(e) => setFastingBlood(+e.target.value)}
                  value={fastingBlood === 0 ? "" : fastingBlood}
                  id=""
                  className=" w-full h-12 focus:outline-none rounded-2xl text-black px-5"
                />
                <p className="w-full text-center text-lg font-medium">
                  Measures blood sugar levels after an individual has not eaten
                  for at least 8 hours. It's used to detect diabetes and
                  prediabetes.
                </p>
              </div>
            </div>
            <div
              onMouseOver={() => {
                setIsFocusSugarBlood2(true);
                setIsHover(2);
              }}
              onMouseOut={() => {
                setIsFocusSugarBlood2(false);
                setIsHover(0);
              }}
              
              className={`w-full h-full bg-[#1B40FF] rounded-2xl relative duration-500 ${isHover === 2 ? '-translate-y-10 shadow-[0px_40px_20px_grey]': 'translate-y-0'}`}
            >
                <div className={` ${isHover !== 2 && isHover !== 0 ? 'z-[2] backdrop-blur-[2px]': 'z-[-1]'} duration-300  w-full h-full  absolute rounded-2xl`}></div>
              <div className="w-full h-full gap-16 text-white flex flex-col items-center justify-start p-8">
                <h1 className=" font-bold text-xl">Random Blood Sugar Test</h1>
                <input
                  type="number"
                  onChange={(e) => setRandomSugarBlood(+e.target.value)}
                  value={randonSugarBlood === 0 ? "" : randonSugarBlood}
                  name=""
                  id=""
                  className=" w-full h-12 focus:outline-none rounded-2xl text-black px-5"
                />
                <p className="w-full text-center text-lg font-medium">
                  Checks blood sugar levels at any time, regardless of when the
                  last meal was consumed. It helps to diagnose diabetes if the
                  levels are consistently high.
                </p>
              </div>
            </div>
            <div
              onMouseOver={() => {
                setIsFocusSugarBlood3(true);
                setIsHover(3);
              }}
              onMouseOut={() => {
                setIsFocusSugarBlood3(false);
                setIsHover(0);
              }}
              className={`w-full h-full bg-[#1B40FF] rounded-2xl relative duration-500 ${isHover === 3 ? '-translate-y-10 shadow-[0px_40px_20px_grey]': 'translate-y-0'}`}
            >
                <div className={` ${isHover !== 3 && isHover !== 0 ? 'z-[2] backdrop-blur-[2px]': 'z-[-1]'} duration-300  w-full h-full  absolute rounded-2xl`}></div>
              <div className="w-full h-full gap-9 text-white flex flex-col items-center justify-start p-8">
                <h1 className=" font-bold text-xl text-center">
                  Oral Glucose Tolerance Test (2-hour postprandial)
                </h1>
                <input
                  type="number"
                  name=""
                  onChange={(e) => setOralGlucose(+e.target.value)}
                  value={oralGlucose === 0 ? "" : oralGlucose}
                  id=""
                  className=" w-full h-12 focus:outline-none rounded-2xl text-black px-5"
                />
                <p className="w-full text-center text-lg font-medium pt-6">
                  Checks blood sugar levels at any time, regardless of when the
                  last meal was consumed. It helps to diagnose diabetes if the
                  levels are consistently high.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Symptoms */}
        <div className="w-full flex flex-col items-center gap-20">
          <h1
            data-aos={"fade-up"}
            data-aos-duration={"1000"}
            className="w-[25%] text-center text-[#1B40FF] font-semibold text-2xl py-2  border-[2px] border-[#1B40FF] rounded-3xl bg-white shadow-[0px_5px_5px_grey]"
          >
            Select Symptoms
          </h1>

          <div
          data-aos={"fade-up"}
          data-aos-duration={"1000"}
           className="w-full grid grid-cols-2 grid-rows-1 gap-20 p-10 bg-white shadow-[0px_10px_15px_#1B40FF] rounded-2xl">
            <div className=" w-full flex flex-col justify-center items-start font-semibold pl-32">
              <div className="w-full flex justify-start items-center gap-2 cursor-pointer">
                <div onClick={() => setBodyBecomesThin(state => !state)} className={`w-[20px] h-[20px] border-[1px] border-gray-500 rounded-md ${bodyBecomesThin ? 'bg-[#1B40FF]': 'bg-white'}`} />
                <h1 onClick={() => setBodyBecomesThin(state => !state)} className=" py-3 ms-2 font-semibold text-xl text-[#1B40FF] ">
                  Body becomes thin
                </h1>
              </div>
              <div className="w-full flex justify-start items-center gap-2 cursor-pointer">
                <div onClick={() => setUrinatingALot(state => !state)} className={`w-[20px] h-[20px] border-[1px] border-gray-500 rounded-md ${urinatingALot ? 'bg-[#1B40FF]': 'bg-white'}`} />
                <h1 onClick={() => setUrinatingALot(state => !state)} className=" py-3 ms-2 font-semibold text-xl text-[#1B40FF] ">
                  Urinating a lot
                </h1>
              </div>
              <div className="w-full flex justify-start items-center gap-2 cursor-pointer">
                <div onClick={() => setThirstyEasily(state => !state)} className={`w-[20px] h-[20px] border-[1px] border-gray-500 rounded-md ${thirstyEasily ? 'bg-[#1B40FF]': 'bg-white'}`} />
                <h1 onClick={() => setThirstyEasily(state => !state)} className=" py-3 ms-2 font-semibold text-xl text-[#1B40FF] ">
                  Drinking a lot/getting thirsty easily
                </h1>
              </div>
              <div className="w-full flex justify-start items-center gap-2 cursor-pointer">
                <div onClick={() => setTingling(state => !state)} className={`w-[20px] h-[20px] border-[1px] border-gray-500 rounded-md ${tingling ? 'bg-[#1B40FF]': 'bg-white'}`}/>
                <h1 onClick={() => setTingling(state => !state)} className=" py-3 ms-2 font-semibold text-xl text-[#1B40FF] ">
                  Tingling
                </h1>
              </div>
              <div className="w-full flex justify-start items-center gap-2 cursor-pointer">
                <div onClick={() => setBreakingBreath(state => !state)} className={`w-[20px] h-[20px] border-[1px] border-gray-500 rounded-md ${breakingBreath ? 'bg-[#1B40FF]': 'bg-white'}`}/>
                <h1 onClick={() => setBreakingBreath(state => !state)} className=" py-3 ms-2 font-semibold text-xl text-[#1B40FF] ">
                  Breaking breath
                </h1>
              </div>
              <div className="w-full flex justify-start items-center gap-2 cursor-pointer">
                <div onClick={() => setMore4kg(state => !state)} className={`w-[20px] h-[20px] border-[1px] border-gray-500 rounded-md ${more4kg ? 'bg-[#1B40FF]': 'bg-white'}`}/>
                <h1 onClick={() => setMore4kg(state => !state)} className=" py-3 ms-2 font-semibold text-xl text-[#1B40FF] ">
                  {"Having given birth to a baby >= 4 kg"}
                </h1>
              </div>
              <div className="w-full flex justify-start items-center gap-2 cursor-pointer">
                <div onClick={() => setDizziness(state => !state)} className={`w-[20px] h-[20px] border-[1px] border-gray-500 rounded-md ${dizziness ? 'bg-[#1B40FF]': 'bg-white'}`}/>
                <h1 onClick={() => setDizziness(state => !state)} className=" py-3 ms-2 font-semibold text-xl text-[#1B40FF] ">
                  Dizziness
                </h1>
              </div>
              <div className="w-full flex justify-start items-center gap-2 cursor-pointer">
                <div onClick={() => setObstacles(state => !state)} className={`w-[20px] h-[20px] border-[1px] border-gray-500 rounded-md ${obstacles ? 'bg-[#1B40FF]': 'bg-white'}`}/>
                <h1 onClick={() => setObstacles(state => !state)} className=" w-full py-3 ms-2 font-semibold text-xl text-[#1B40FF] ">
                  Obstacles to the quality of husband and wife relationships in
                  men
                </h1>
              </div>
            </div>

            <div className=" w-full flex flex-col items-start font-semibold pl-32">
              <div className="w-full flex justify-start items-center gap-2 cursor-pointer">
                <div onClick={() => setCoughing(state => !state)} className={`w-[20px] h-[20px] border-[1px] border-gray-500 rounded-md ${coughing ? 'bg-[#1B40FF]': 'bg-white'}`}/>
                <h1 onClick={() => setCoughing(state => !state)} className=" py-3 ms-2 font-semibold text-xl text-[#1B40FF] ">
                  Coughing
                </h1>
              </div>
              <div className="w-full flex justify-start items-center gap-2 cursor-pointer">
                <div onClick={() => setPregnant(state => !state)} className={`w-[20px] h-[20px] border-[1px] border-gray-500 rounded-md ${pregnant ? 'bg-[#1B40FF]': 'bg-white'}`}/>
                <h1 onClick={() => setPregnant(state => !state)} className=" py-3 ms-2 font-semibold text-xl text-[#1B40FF] ">
                  Pregnant
                </h1>
              </div>
              <div className="w-full flex justify-start items-center gap-2 cursor-pointer">
                <div onClick={() => setWeak(state => !state)} className={`w-[20px] h-[20px] border-[1px] border-gray-500 rounded-md ${weak ? 'bg-[#1B40FF]': 'bg-white'}`}/>
                <h1 onClick={() => setWeak(state => !state)} className=" py-3 ms-2 font-semibold text-xl text-[#1B40FF] ">
                  Weak
                </h1>
              </div>
              <div className="w-full flex justify-start items-center gap-2 cursor-pointer">
                <div onClick={() => setBlurredVision(state => !state)} className={`w-[20px] h-[20px] border-[1px] border-gray-500 rounded-md ${blurredVision ? 'bg-[#1B40FF]': 'bg-white'}`}/>
                <h1 onClick={() => setBlurredVision(state => !state)} className=" py-3 ms-2 font-semibold text-xl text-[#1B40FF] ">
                  Blurred vision
                </h1>
              </div>
              <div className="w-full flex justify-start items-center gap-2 cursor-pointer">
                <div onClick={() => setVomiting(state => !state)} className={`w-[20px] h-[20px] border-[1px] border-gray-500 rounded-md ${vomiting ? 'bg-[#1B40FF]': 'bg-white'}`}/>
                <h1 onClick={() => setVomiting(state => !state)} className=" py-3 ms-2 font-semibold text-xl text-[#1B40FF] ">
                  Vomiting
                </h1>
              </div>
              <div className="w-full flex justify-start items-center gap-2 cursor-pointer">
                <div onClick={() => setPale(state => !state)} className={`w-[20px] h-[20px] border-[1px] border-gray-500 rounded-md ${pale ? 'bg-[#1B40FF]': 'bg-white'}`}/>
                <h1 onClick={() => setPale(state => !state)} className=" py-3 ms-2 font-semibold text-xl text-[#1B40FF] ">
                  Pale
                </h1>
              </div>
              <div className="w-full flex justify-start items-center gap-2 cursor-pointer">
                <div onClick={() => setNausea(state => !state)} className={`w-[20px] h-[20px] border-[1px] border-gray-500 rounded-md ${nausea ? 'bg-[#1B40FF]': 'bg-white'}`}/>
                <h1 onClick={() => setNausea(state => !state)} className=" py-3 ms-2 font-semibold text-xl text-[#1B40FF] ">
                  Nausea
                </h1>
              </div>
              <div className="w-full flex justify-start items-center gap-2 cursor-pointer">
                <div onClick={() => setWounds(state => !state)} className={`w-[20px] h-[20px] border-[1px] border-gray-500 rounded-md ${wounds ? 'bg-[#1B40FF]': 'bg-white'}`}/>
                <h1 onClick={() => setWounds(state => !state)} className=" py-3 ms-2 font-semibold text-xl text-[#1B40FF] ">
                  Wounds
                </h1>
              </div>
            </div>
          </div>
        </div>

        {/* Diagnose Button */}
        <div className=" w-full flex justify-center pb-24">
          <button className="hover:shadow-[0px_0px_10px_#ffffff] duration-500 w-[20%] py-2 text-white text-xl font-semibold bg-[#1B40FF] rounded-3xl">
            NEXT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Diagnose;
