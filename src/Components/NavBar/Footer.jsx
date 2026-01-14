import React from 'react'
import footLogo from '../../assets/Image/footerLogo.svg'

function Footer() {
  return (
    <>
        <footer className="w-full bg-[#043433] ">
            <div className="w-full max-w-7xl mx-auto">
                <div className="flex justify-between items-center max-md:flex-col-reverse py-3 md:py-5 px-4 text-[10px] md:text-sm text-[#D8D8D8] arabic">
                    <div className="side-two">
                        <ul className="list-none flex flex-row-reverse gap-3">
                            <li className='hover:underline'>
                                <a href="https://balady.gov.sa/form/contact-us">اتصل بنا </a>
                            </li>
                            <li className='hover:underline'>
                                <a href="https://balady.gov.sa/node/11026" target="_blank">شروط الاستخدام</a>
                            </li>
                            <li className='hover:underline'>
                                <a href="https://balady.gov.sa/node/11293" target="_blank">خريطة الموقع</a>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-row-reverse gap-6 items-center max-md:flex-col max-md:gap-2 mb-3">
                        <a className="footer-logo" href="https://www.vision2030.gov.sa/ar/v2030/vrps/qol/" target="_blank">
                            <img src={footLogo} className='w-[60px]' alt="" />
                        </a>
                        <div className="flex items-center gap-1 ">وزارة البلديات والإسكان<span>{new Date().getFullYear()} ©</span></div>
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer