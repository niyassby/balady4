import React, { useEffect, useState } from "react";
import { LuAlignJustify } from "react-icons/lu";
import { IoIosArrowDown, IoMdArrowDropdown } from "react-icons/io";
import { BsLink } from "react-icons/bs";
import logo from "../../assets/Image/logoWhite.svg";
import logo2 from "../../assets/Image/logo.svg";
import { menuData } from "../../Context/Utils/menuItem";
import { RiSettings4Fill } from "react-icons/ri";
import { HiOutlineSearch } from "react-icons/hi";

function Navbar() {
  const [isToggle, setToggle] = useState(false);
  const [isScroll, setScroll] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false); 
  const [isIndex, setIndex] = useState(null);
  const handleToggle = () => {
    setToggle(!isToggle);
  };

  const handleScroll = () => {
    setScroll(window.scrollY > 50);
  };

  const handleDropdownToggle = (index) => {
    setIndex(isIndex === index ? null : index);
    setOpenDropdown(isIndex === index ? false : true);
  };

  useEffect(() => {
    if(isIndex == null){
      setOpenDropdown(false)
    }
    
  }, [isIndex])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <div
      className={`w-full min-h-[105px] flex justify-between  fixed top-0 left-0 z-50 pb -4 ${
        isScroll && "shadow-md"
      }`}
    >
      <div  style={{backgroundImage: `linear-gradient(220deg, #000 30.33%, ${isScroll ? "#389492" :"#3894925c"} 83.58%)`}}  className="w-full max-lg:hidden relative min-h-[78px] max-h-[600px] overflow-y-auto flex flex-wrap  justify-between mx-auto py-[19px] md:py-2 px-3 transition-all duration-1000 ease-in-out">
        <div className="flex items-center ml-3 justify-between w-full lg:w-auto">
          <button
            onClick={handleToggle}
            type="button"
            className="lg:hidden flex"
          >
            <LuAlignJustify size={30} color="#fff" />
          </button>
          <a className="lg:hidden" href="https://balady.gov.sa/ar">
            <img className="w-[110px]" src={logo} alt="Balady Logo" />
          </a>
          <div className="w-full flex relative items-center justify-center max-lg:hidden gap-x-6 text-white">
            <div className="flex items-center gap-1 flex-col">
              <span><RiSettings4Fill size={24} /></span>
              <h1 className="text-sm ">الإعدادات</h1>
            </div>
            <div className="flex items-center gap-1 flex-col">
              <span><HiOutlineSearch size={26} strokeWidth={3} /></span>
              <h1 className="text-sm ">بحث</h1>
            </div>
          </div>
        </div>
        <div
          className={`w-full z-[1000] lg:flex  lg:items-center relative justify-end mx-3 lg:w-auto ${
            isToggle ? "block" : "hidden lg:block"
          }`}
        >
          <ul
            dir="rtl"
            className=" flex flex-col lg:flex-row   gap-4 lg:gap-9  max-lg:mt-4  lg:mr-4 text-right"
          >
            {menuData.menu.map((menuItem, index) => (
              <li
                key={index}
                className="relative  "
                onFocus={() => handleDropdownToggle(index)}
                onBlur={() => handleDropdownToggle(index)}
              >
                <button
                  className="font-medium arabicBold text-white flex items-center gap-2 text-[20px] lg:flex-col hover:text-[#68a12d]"
                >
                  {menuItem.title} 
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3.5" stroke="currentColor" class="size-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>

                  {/* <IoIosArrowDown size={20}  className="" /> */}
                </button>
                <div>
                  {isIndex === index && (
                    <div className=" top-20 lg:hidden min-h-28 bg-white shadow-lg w-full left-0">
                      {menuItem.submenus ? (
                        <div dir="rtl" className="w-full  px-11 py-3">
                          {menuItem.submenus.map((submenu, index) => {
                            return (
                              <div key={index}>
                                <h1 className="font-medium mb-4 text-[#0F1721]">
                                  {submenu.title}
                                </h1>
                                <ul>
                                  {submenu?.items?.map((link, index) => {
                                    return (
                                      <li
                                        key={index}
                                        className="px-1 py-1 text-[#0F1721] hover:text-[#478608] transition-all duration-300 hover:-translate-x-1"
                                      >
                                        <a href={link.url}>{link.title}</a>
                                      </li>
                                    );
                                  })}
                                </ul>
                              </div>
                            );
                          })}
                        </div>
                      ) : (
                        <div dir="rtl" className="w-full px-11 py-5">
                          {menuItem.items.map((submenu, index) => {
                            return (
                              <div key={index}>
                                <a href={submenu.url}>
                                  <h1 className="font-medium mb-4 text-[#0F1721] hover:text-[#478608] transition-all duration-300 hover:-translate-x-1">
                                    {submenu.title}
                                  </h1>
                                </a>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>
          <a className="max-lg:hidden" href="https://balady.gov.sa/ar">
            <img dir="rtl" className="w-[100px] text-main-600" src={logo2} alt="الرئيسية" />
          </a>
        </div>
      </div>
      {openDropdown && (
        <div className="absolute max-lg:hidden top-[100px] min-h-36 bg-white shadow-lg shadow-black w-full left-0">
          {menuData.menu[isIndex].submenus ? (
            <div
              dir="rtl"
              className="w-full grid lg:grid-cols-4 gap-3 px-11 py-3"
            >
              {menuData.menu[isIndex].submenus.map((submenu, index) => {
                return (
                  <div key={index}>
                    <h1 className={`font-semibold text-[20px] mb-4 text-[#064847]`}>
                      {submenu.title}
                    </h1>
                    <ul className="flex flex-col items-start">
                      {submenu?.items?.map((link, i) => {
                        return (
                          <li
                            key={i}
                            className="px-2 rounded-md py-1 text-[20px] text-[#064847] hover:text-white hover:bg-[#064847]   transition-all duration-300 hover:-translate-x-1"
                          >
                            <a href={link.url}>{link.title}</a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>
          ) : (
            <div
              dir="rtl"
              className="w-full grid lg:grid-cols-3 gap-3 px-11 py-5"
            >
              {menuData.menu[isIndex].items.map((submenu, index) => {
                return (
                  <div key={index}>
                    <a href={submenu.url}>
                      <h1 className="px-2 flex items-center gap-1  py-1 text-[20px] text-[#064847] hover:text-white hover:bg-[#064847]   transition-all duration-300 hover:-translate-x-1">
                       <BsLink size={22} strokeWidth={0.5}/> {submenu.title}
                      </h1>
                    </a>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      <div style={{backgroundImage: "linear-gradient(220deg, #000 30.33%, #389492 83.58%)"}}  className={`w-full  lg:hidden relative min-h-[99px]  no-scrollbar  flex flex-col  mx-auto py-[19px] md:py-2 px-3 transition-all duration-500 ease-in-out ${
            openDropdown && isToggle
              ? `h-[700px] overflow-auto`
              : isToggle
              ? "h-[490px] "
              : "h-[99px] overflow-hidden "
          }`}>
            {/* <div style={{backgroundImage: "linear-gradient(220deg, #000 30.33%, #3894925c 83.58%)"}} className="absolute inset-0 w-full h-full  z-0"></div> */}
        <div className="flex items-center mt-5 fi xed relative justify-between w-full ">
          <button onClick={handleToggle} type="button">
            <LuAlignJustify size={30} color="#fff" />
          </button>
          <a className="lg:hidden" href="https://balady.gov.sa/ar">
            <img dir="rtl" className="w-[110px] text-main-700 "  src={logo2} alt="الرئيسية" />
          </a>
        </div>
        <div className="mt-8"
          // className={`w-full  z-[1000] Flipped px-10  bg-gradient-to-t from-[#2e7372] to-[#000000] absolute left-0 top-20 transition-all duration-300 ${
          //   openDropdown && isToggle
          //     ? `h-[600px] pb-5`
          //     : isToggle
          //     ? "h-[390px] pb-5"
          //     : "h-0"
          // }`}
        >
          <div className="w-full h-full ">
            <ul
              dir="rtl"
              className=" flex flex-col  lg:space-x-8 gap-4 lg:gap-0 mt-4 lg:mt-0 lg:ml-auto lg:mr-8 text-right"
            >
              {menuData.menu.map((menuItem, index) => (
                <li
                  key={index}
                  className="relative  "
                  onClick={() => handleDropdownToggle(index)}
                >
                  <button className="font-medium arabicBold text-[20px] text-white flex items-center gap-1  lg:flex-col hover:text-[#68a12d]">
                    {menuItem.title} <IoMdArrowDropdown />
                  </button>
                  {isIndex === index && (
                    <div
                      className=" bg-white shadow-md shadow-black w-full max-sm:max-w-60 mt-2 "
                    >
                      {menuItem.submenus ? (
                        <div className="w-full  px-5 py-3">
                          {menuItem.submenus.map((submenu, index) => {
                            return (
                              <div key={index}>
                                <h1 className="font-semibold text-[20px] mb-4 text-[#064847]">
                                  {submenu.title}
                                </h1>
                                <ul>
                                  {submenu?.items?.map((link, index) => {
                                    return (
                                      <li
                                        key={index}
                                        className="px-2 rounded-md py-1 text-[20px] text-[#064847] hover:text-white hover:bg-[#064847]   transition-all duration-300 hover:-translate-x-1"
                                      >
                                        <a href={link.url}>{link.title}</a>
                                      </li>
                                    );
                                  })}
                                </ul>
                              </div>
                            );
                          })}
                        </div>
                      ) : (
                        <div
                          //   dir="rtl"
                          className="w-full px-5 py-5"
                        >
                          {menuItem?.items?.map((submenu, index) => {
                            return (
                              <div key={index}>
                                <a href={submenu.url}>
                                  <h1 className="px-2 flex items-center gap-1  py-1 text-[20px] text-[#064847] hover:text-white hover:bg-[#064847]   transition-all duration-300 hover:-translate-x-1">
                                  <BsLink size={22} className="flex-shrink-0" strokeWidth={0.5}/>{submenu.title}
                                  </h1>
                                </a>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  )}
                  {/* </div> */}
                </li>
              ))}
            </ul>
          </div>
        </div>
          <div className="w-full flex relative items-center justify-center mt-8 gap-x-6 text-white">
            <div className="flex items-center gap-1 flex-col">
              <span><RiSettings4Fill size={24} /></span>
              <h1 className="text-sm ">الإعدادات</h1>
            </div>
            <div className="flex items-center gap-1 flex-col">
              <span><HiOutlineSearch size={26} strokeWidth={3} /></span>
              <h1 className="text-sm ">بحث</h1>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Navbar;
