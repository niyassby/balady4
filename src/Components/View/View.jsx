import React, { useState } from 'react'
import { obj } from '../../Context/Utils/Utils'
import { useSearchParams } from 'react-router-dom'
import Logoloding from '../Loading/logoLoading'
import { useOneUser } from '../../hooks/useQuery';

function View() {
    const [isFocused, setIsFocused] = useState(false);
    const [idParams, setIdParams]=useSearchParams()
    const userId = idParams.get('id')
    const {data:idUser, isLoading, isError, error} = useOneUser(userId)

    if(isError || error) return <div>error</div>

    return (
        <>
            <div className={`transition-all   duration-500  ${!isLoading ? 'opacity-0 invisible': 'opacity-100 visible'} `}>
            <Logoloding/>
            </div>
            <div className={`w-full relative z-10  pt-32 max-md:pt-[98px] pb-10 transition-all  duration-500  ${!isLoading ? 'opacity-100 visible': 'opacity-0 invisible '}`}>
                <div className='max-w-[71.3rem] mx-auto'>
                    <div className='container mx-auto bg-white rounded-xl max-md:rounded-none p-5 pb-14'>
                        <div className='p-3 max-md:p-0'>
                        <div className='w-full flex flex-col items-center'>
                            {idUser?.type && idUser?.type === 'standard' ?<h1 className='text-[#484e56] text-[2rem] arabicBold font-extrabold text-center'>الشهادة الصحية الموحدة</h1>:
                            idUser?.type === 'annual' ? <h1 className='text-[#484e56] text-[2rem] arabicBold font-extrabold text-center'>الشهادة الصحية السنوية</h1>:
                            <h1 className='text-[#484e56] text-[2rem] arabicBold font-semibold text-center'>شهادة صحية</h1>}
                            <img src={idUser && idUser.url} className='w-[150px] h-[200px] border m-4 object-cover ' />
                        </div>
                        <div dir="rtl" className='w-full relative z-0 grid grid-cols-1 md:grid-cols-2 gap-y-5 '>
                                {obj && obj.map((item, index)=>{
                                    return(
                                        <div key={index} className='relative px-4 max-md:px-3 space-y-1 cursor-not-allowed'>
                                            <label htmlFor={item.name} className="arabicBold    leading-[1]   text-sm text-black ">{item.arabic}</label>
                                            <div 
                                                readOnly  
                                                onFocus={() => setIsFocused(true)} // Handle focus event
                                                onBlur={() => setIsFocused(false)}
                                                id={item.name}
                                                tabIndex="0"
                                                name={item.name}
                                                className={`bg-[#F2F2F2] text-[#949C94] flex items-center z-0 arabicLight text-right border transition-all duration-300 ease-in-out outline-none ${isFocused && 'focus:tex t-main-700 focus:border-main-800 '} focus:ring ring-main-800/30 border-[#d7d7d7] text-[13px] rounded-lg w-full pl-[12px] py-2 pr-[20px] h-[36px]`}>
                                                    {idUser && idUser[item.name]}
                                            </div>
                                        </div>
                                    )
                                })}
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
    )

}

export default View