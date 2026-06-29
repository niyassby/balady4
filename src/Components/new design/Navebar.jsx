import React, { useEffect, useRef, useState } from 'react'
import flag from '../../assets/flag.svg'
import { ArrowDown01Icon, BookmarkAdd02Icon, Link04Icon, LinkSquare02Icon, PrinterIcon, Settings01Icon, SquareLockPasswordIcon } from 'hugeicons-react';
import './navbar.css'
import { FaBellSlash, FaCalendarAlt } from 'react-icons/fa';
import dsfootericon from '../../assets/ds-footer-icon.svg'

function Navebar() {
    const [showSettings, setShowSettings] = useState(false);
    const popupRef = useRef(null);
    const [showDigitalStamp, setShowDigitalStamp] = useState(false);

    useEffect(() => {
        function handleClickOutside(event) {
            if (popupRef.current && !popupRef.current.contains(event.target)) {
                setShowSettings(false);
            }
        }

        if (showSettings) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [showSettings]);

    useEffect(() => {
        // ================================
        // PRINT BUTTON
        // ================================
        const handlePrint = (e) => {
            if (e.target.closest('.print-page')) {
                e.preventDefault()
                window.print()
            }
        }

        // ================================
        // BOOKMARK ALERT
        // ================================
        const handleBookmark = (e) => {
            if (e.target.closest('.bookmark-page')) {
                alert("يمكنك إضافة هذه الصفحة إلى الإشارات المرجعية الخاصة بك عن طريق الضغط على CTRL + D")
            }
        }


        // ================================
        // ADD EVENTS
        // ================================
        document.addEventListener('click', handlePrint)
        document.addEventListener('click', handleBookmark)

        // ================================
        // CLEANUP (IMPORTANT)
        // ================================
        return () => {
            document.removeEventListener('click', handlePrint)
            document.removeEventListener('click', handleBookmark)
        }

    }, [])
    return (
        <div dir='rtl' className='ibm-plex-sans-arabic font-medium'>
            <div className='bg-[#F3F4F6] text-[#161616] w-full md:h-[40px] h-[1 24px] gap-2 flex max-md:flex-col items-center md:justify-between px-4'>
                <div className="flex text-[14px] max-md:flex-col pt-2 md:py-0 items-center  gap-3 max-md:w-full">
                    <div className="digital-stamp-icon">
                        <img src={flag} alt="" />
                    </div>
                    <div className="digital-stamp-text">
                        <span>موقع حكومي مسجل لدى هيئة الحكومة الرقمية</span>
                    </div>
                    <button onClick={() => setShowDigitalStamp(!showDigitalStamp)} className="text-[#166A45] flex items-end gap-2 digital-stamp-link max-md:w-full max-md:justify-end" >
                        كيف تتحقق <ArrowDown01Icon size={16} />
                    </button>
                </div>
                <div className="top-header-left ">
                    <div className="dropdown setting-header">
                        <button className="btn site-setting-btn " onClick={() => setShowSettings(!showSettings)}>
                            <Settings01Icon size={18} strokeWidth={1.5} /> <span className='ibm-plex-sans-arabic'>الإعدادات</span>
                        </button>
                        {showSettings && <div ref={popupRef} className="dropdown-menu z-[9999999]">
                            <div className="region region-topinnercontent-right">
                                <div className="se-align-left block block-share-everywhere block-share-everywhere-block"
                                    id="block-balady-new-shareeverywhereblock">
                                    <div className="share block-content">
                                        <div className=" d-inline-block se-block "
                                            data-block="topinnercontent_right">
                                            <div className="block-content">
                                                <div className="se-container">
                                                    <div id="se-trigger-baladywebarnode"
                                                        className="se-trigger ">
                                                        <ul>
                                                            <li>
                                                                <button type="button"
                                                                    className="dropdown-item print-page">
                                                                    <PrinterIcon size={20} strokeWidth={1.5} /> <span
                                                                        className="accesability-label">الطباعة</span>
                                                                </button>
                                                            </li>
                                                            <li>
                                                                <div
                                                                    className="dropdown-item bookmark-page bookmark-content">
                                                                    <BookmarkAdd02Icon size={20} strokeWidth={1.5} /> <span
                                                                        className="accesability-label">حفظ
                                                                        الصفحة</span>
                                                                </div>
                                                            </li>
                                                            <li
                                                                className="dropdown-item text-right notifications_hide">
                                                                <FaBellSlash size={20} />
                                                                <a
                                                                    className="showNotificationModal">
                                                                    ضبط إعدادات الإشعارات
                                                                </a>
                                                            </li>
                                                            <li
                                                                className="dropdown-item text-right notifications_hide">
                                                                <FaCalendarAlt size={16} />
                                                                <a className="setDateTypeHIJRI">
                                                                    استخدام التاريخ الهجري
                                                                </a>
                                                            </li>
                                                            <li
                                                                className="dropdown-item text-right notifications_hide">
                                                                <FaCalendarAlt size={16} />
                                                                <a className="setDateTypeGREGORIAN">
                                                                    استخدام التاريخ الميلادي
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>

                        </div>}
                    </div>
                    <div id="munner-header">
                        <button className="btn muneer-trigger-btn icon-position-before"
                            type="button" aria-label="أدوات سهولة الوصول"
                            data-muneer-trigger="">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M12.1258 6.45755C12.7404 5.88688 13.125 5.07185 13.125 4.16699C13.125 2.4411 11.7259 1.04199 10 1.04199C8.27411 1.04199 6.875 2.4411 6.875 4.16699C6.875 5.07185 7.25958 5.88688 7.8742 6.45755C5.82146 7.29607 4.375 9.31261 4.375 11.667V13.9587H6.59535L7.84535 18.9587H12.1547L13.4047 13.9587H15.625V11.667C15.625 9.31261 14.1785 7.29607 12.1258 6.45755ZM8.125 4.16699C8.125 3.13146 8.96447 2.29199 10 2.29199C11.0355 2.29199 11.875 3.13146 11.875 4.16699C11.875 5.20253 11.0355 6.04199 10 6.04199C8.96447 6.04199 8.125 5.20253 8.125 4.16699ZM10 7.29199C7.58375 7.29199 5.625 9.25075 5.625 11.667V12.7087H7.57132L8.82132 17.7087H11.1787L12.4287 12.7087H14.375V11.667C14.375 9.25075 12.4162 7.29199 10 7.29199Z"
                                    fill="#161616"></path>
                            </svg> <span className='ibm-plex-sans-arabic'>أدوات سهولة الوصول</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className={` ${showDigitalStamp ? "max-h-[700px]" : "max-h-0"} transition-all duration-700 ease-in-out overflow-hidden `}>
                <div className="digital-stamp-container w-full bg-[#F3F4F6] border-b px-6 py-7">
                    <div >
                        <div className="digital-stamp-content ">
                            <div className="grid md:grid-cols-2 gap-3 ">
                                <div className="col-md-6">
                                    <div className="ds-content_item">
                                        <div className="ds-content_item_icon">
                                            <Link04Icon size={18} strokeWidth={1.5} />
                                        </div>
                                        <div className="ds-content_item_content">
                                            <h2>روابط المواقع الالكترونية الرسمية السعودية
                                                تنتهي<span>&nbsp;.gov.sa</span>&nbsp;
                                            </h2>
                                            <p>جميع روابط المواقع الرسمية التابعة للجهات الحكومية في
                                                المملكة العربية السعودية تنتهي
                                                بـ .gov.sa</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="ds-content_item">
                                        <div className="ds-content_item_icon">
                                            <SquareLockPasswordIcon size={18} strokeWidth={1.5} />
                                        </div>
                                        <div className="ds-content_item_content">
                                            <h2>المواقع الالكترونية الحكومية تستخدم
                                                بروتوكول<span>&nbsp;HTTPS</span>&nbsp;للتشفير و
                                                الأمان.</h2>
                                            <p> المواقع الالكترونية الآمنة في المملكة العربية
                                                السعودية تستخدم بروتوكول HTTPS
                                                للتشفير.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="digital-stamp-footer">
                            <div className="row g-3">
                                <div className="col-md-12">
                                    <div className="ds-footer_item">
                                        <div className="ds-footer_item_icon">
                                            <img src={dsfootericon} alt="" />
                                        </div>
                                        <div className="ds-footer_item_content">
                                            <p> مسجل لدى هيئة الحكومة الرقمية برقم:</p>
                                            <a href="https://raqmi.dga.gov.sa/platforms/DigitalStamp/ShowCertificate/316"
                                                className="ds-footer_link">
                                                <span className="link__label">20250428339 </span><LinkSquare02Icon size={18} strokeWidth={1.5} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navebar