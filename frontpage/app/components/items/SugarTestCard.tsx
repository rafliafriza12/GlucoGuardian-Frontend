import { Circle } from "lucide-react";
import { SugarTestCardProps } from "@/app/interfaces";

const SugarTestCard: React.FC<SugarTestCardProps> = ({ item }) => {
  return (
    <div
      data-aos={"fade-up"}
      data-aos-duration={"1000"}
      className=" w-full pb-8 flex flex-col gap-5 rounded-xl shadow-[0px_10px_10px_grey] bg-white"
    >
      <div className="rounded-t-xl w-full bg-[#1B40FF] flex items-center px-10 py-5 text-white font-bold text-xl">
        <h1>{item.title}</h1>
      </div>

      <div className="w-full flex flex-col px-10">
        <table className=" w-full">
          <tbody>
            <tr className="flex py-3">
              <td className="flex justify-start items-center gap-3 w-[200px] ">
                <Circle size={10} color="#1B40FF" />
                <h1 className=" font-medium text-[#33363E]">Test Result</h1>
              </td>
              <td className=" font-bold text-[#1B40FF]">
                : {item.testResult} Mg/DL
              </td>
            </tr>
            <tr className="flex py-3">
              <td className=" flex items-center gap-3 w-[200px]">
                <Circle size={10} color="#1B40FF" />
                <h1 className=" font-medium text-[#33363E]">Interpretation</h1>
              </td>
              <td className=" font-bold text-[#1B40FF]">
                :{item.testResult < 100 && " Normal"}
                {item.testResult >= 100 &&
                  item.testResult <= 125 &&
                  " Prediabetes"}
                {item.testResult >= 126 && " Diabetes"}
              </td>
            </tr>
          </tbody>
        </table>

        <div className=" w-full px-[5%]">
          <table className=" w-full">
            <tbody>
              <tr className="flex py-3">
                <td className="flex justify-start items-center gap-3 w-[200px] ">
                  <Circle size={10} color="#1B40FF" />
                  <h1 className=" font-medium text-[#33363E]">Normal Range</h1>
                </td>
                <td className=" font-bold text-[#1B40FF]">{": < 100 mg/dL"}</td>
              </tr>
              <tr className="flex py-3">
                <td className=" flex items-center gap-3 w-[200px]">
                  <Circle size={10} color="#1B40FF" />
                  <h1 className=" font-medium text-[#33363E]">Prediabetes</h1>
                </td>
                <td className=" font-bold text-[#1B40FF]">: 100-125 mg/dL</td>
              </tr>
              <tr className="flex py-3">
                <td className=" flex items-center gap-3 w-[200px]">
                  <Circle size={10} color="#1B40FF" />
                  <h1 className=" font-medium text-[#33363E]">Diabetes</h1>
                </td>
                <td className=" font-bold text-[#1B40FF]">{": ≥ 126 mg/dL"}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* <div className=" w-full flex items-start gap-3 py-3">
          <div className=" pt-2">
            <Circle size={10} color="#1B40FF" />
          </div>
          <p className=" w-full font-medium text-[#33363E]">
            <span className=" font-bold text-[#1B40FF]">Explanation:</span> This
            result indicates that your fasting blood glucose level is in the
            prediabetes range. It is recommended to make lifestyle changes such
            as adjusting your diet and exercising regularly to prevent the
            development of diabetes.
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default SugarTestCard;
