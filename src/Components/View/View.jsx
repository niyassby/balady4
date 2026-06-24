import React, { useState } from "react";
import { obj } from "../../Context/Utils/Utils";
import { useSearchParams } from "react-router-dom";
import Logoloding from "../Loading/logoLoading";
import { useOneUser } from "../../hooks/useQuery";

function View() {
  const [isFocused, setIsFocused] = useState(false);
  const [idParams, setIdParams] = useSearchParams();
  const userId = idParams.get("id");
  const { data: idUser, isLoading, isError, error } = useOneUser(userId);

  if (isError || error) return <div>error</div>;

  return (
    <>
      {/* <div className={`transition-all   duration-500  ${!isLoading ? 'opacity-0 invisible': 'opacity-100 visible'} `}>
            <Logoloding/>
            </div> */}
      <div
        className={`w-full relative z-10   pb-10 transition-all  duration-500  ${
          !isLoading ? "opacity-100 visible" : "opacity-0 invisible "
        }`}
      >
        <div className="max-w-[90rem] mx-auto">
          <div className="container mx-auto bg-white rounded-xl max-md:rounded-none p-5 pb-14">
            <div className="p-3 max-md:p-0">
              <div className="w-full flex flex-col items-center">
                {idUser?.type && (
                  <h1 className="text-[#484e56] text-[2rem]  font-extrabold text-center">
                    {idUser?.type === "standard"
                      ? "الشهادة الصحية الموحدة"
                      : idUser?.type === "annual"
                      ? "الشهادة الصحية السنوية"
                      : idUser?.type === "commercial"
                      ? "شهادة صحية للأنشطة التجارية"
                      : "شهادة صحية"}
                  </h1>
                )}
                <img
                  src={idUser && idUser.url}
                  className="w-[200px] h-[200px] m-4 object-cover "
                />
              </div>
              <div
                dir="rtl"
                className="w-full relative z-0 grid grid-cols-1 md:grid-cols-2 gap-y-4 "
              >
                {obj &&
                  obj.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="relative px-4 max-md:px-3 space-y-1 cursor-not-allowed"
                      >
                        <label
                          htmlFor={item.name}
                          className=" font-bold   leading-[1]   text-sm text-black "
                        >
                          {item.arabic}
                        </label>
                        <div
                          readOnly
                          onFocus={() => setIsFocused(true)} // Handle focus event
                          onBlur={() => setIsFocused(false)}
                          id={item.name}
                          tabIndex="0"
                          name={item.name}
                          className={`bg-[#F2F2F2] cursor-not-allowed text-[#4c515a] flex items-center z-0 arabicLight text-right border transition-all duration-300 ease-in-out outline-none ${
                            isFocused && " focus:border-black focus:border-b-2 "
                          }  border-[#9DA4AE] text-[16px] rounded w-full pl-[12px] py-2 pr-[20px] h-[40px]`}
                        >
                          {idUser && idUser[item.name]}
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default View;
