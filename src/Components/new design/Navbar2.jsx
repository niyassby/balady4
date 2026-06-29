import React, { useEffect, useRef, useState } from 'react'
import './navbar.css'
import logo from '../../assets/Image/logo.svg'
import { ArrowDown01Icon, LinkSquare02Icon, Search01Icon } from 'hugeicons-react'
// import '../View/new view/app.min2.css'

function Navbar2() {
    const [showId, setShowId] = useState(null)
    const [showNav, setShowNav] = useState(false)
    const ref = useRef(null)
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                setShowId(null)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [ref])
    return (
        <header dir='rtl' className='top-navbar border-b'>
            <div className="ibm-plex-sans-arabic font-medium mainHeader relative w-full  container-fluid">
                <div className="row">
                    <div className="flex items-center w-full columns px-[15px]">
                        <div className="region region--header">
                            <div id="block-sitebranding"
                                className="clearfix site-branding block block-system block-system-branding-block">
                                <a href="https://balady.gov.sa/ar" rel="home"
                                    className="site-branding__logo"><img className='text-sm text-[#07706d]'
                                        src={logo}
                                        alt="الرئيسية" /></a>
                            </div>
                        </div>
                        <nav
                            className="navbar navbar-expand-lg position-static header-mobile-container">
                            <button onClick={() => setShowNav(!showNav)} className="navbar-toggler md:hidden" type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#000000"
                                    viewBox="0 0 30 30" width="30px" height="30px">
                                    <path
                                        d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z">
                                    </path>
                                </svg>
                            </button>
                            <div ref={ref} className={`navbar-collapse flex max-md:flex-col max-md:items-center max-md:justify-center  overflow-hidden transition-all duration-300 ease-in-out ${showNav ? 'max-md:max-h-[1000px]' : 'max-md:max-h-0'}`} id="navbarSupportedContent">
                                <div className="region region--header-content ">
                                    <nav aria-labelledby="block-balady-main-menu-menu"
                                        id="block-balady-main-menu"
                                        className="block block-menu navigation menu--main">
                                        <h2 className="visually-hidden block-title"
                                            id="block-balady-main-menu-menu">القائمة الرئيسية</h2>
                                        <div className="block-content">
                                            <ul className="menu flex  w-full  gap-3 " aria-hidden="false">
                                                <li className="menu-item menu-item--expanded  dropdown menu-item-first menu-level-0  menu-count-1 "
                                                    aria-hidden="false">
                                                    <button onClick={() => setShowId(showId == 1 ? null : 1)} className=" dropdown-toggle w-full " >
                                                        <span>عن بلدي</span> <ArrowDown01Icon size={16} />
                                                    </button>
                                                    {showId == 1 && <div className="dropdown-menu absolute left-0 w-screen p-5 top-20 ">
                                                        <ul className="menu" aria-hidden="false">
                                                            <li className="menu-item menu-item--expanded  menu-level-1 menu-count-1"
                                                                aria-hidden="false">
                                                                <span>عن بلدي-1</span>
                                                                <ul className="menu"
                                                                    aria-hidden="false">
                                                                    <li className="menu-item menu-level-2 menu-count-1"
                                                                        aria-hidden="false">
                                                                        <a href="https://balady.gov.sa/ar/about-balady/about-us"
                                                                            data-drupal-link-system-path="node/22458">من
                                                                            نحن</a>
                                                                    </li>
                                                                    <li className="menu-item menu-level-2 menu-count-2"
                                                                        aria-hidden="false">
                                                                        <a href="https://balady.gov.sa/ar/ministry-structure"
                                                                            data-drupal-link-system-path="node/11036">الهيكل
                                                                            التنظيمي</a>
                                                                    </li>
                                                                    <li className="menu-item menu-level-2 menu-count-3"
                                                                        aria-hidden="false">
                                                                        <a href="https://balady.gov.sa/ar/rules"
                                                                            data-drupal-link-system-path="rules">الأنظمة
                                                                            واللوائح</a>
                                                                    </li>
                                                                    <li className="menu-item menu-level-2 menu-count-4"
                                                                        aria-hidden="false">
                                                                        <a href="https://balady.gov.sa/ar/about-balady/policy"
                                                                            data-drupal-link-system-path="node/22522">السياسات
                                                                            والاستراتيجيات</a>
                                                                    </li>
                                                                </ul>

                                                            </li>
                                                            <li className="menu-item menu-item--expanded  menu-level-1 menu-count-2"
                                                                aria-hidden="false">
                                                                <span>عن بلدي-2</span>
                                                                <ul className="menu"
                                                                    aria-hidden="false">
                                                                    <li className="menu-item menu-level-2 menu-count-1"
                                                                        aria-hidden="false">
                                                                        <a href="https://balady.gov.sa/ar/tenders-and-procurement"
                                                                            data-drupal-link-system-path="node/10981">المنافسات
                                                                            والمشتريات</a>
                                                                    </li>
                                                                    <li className="menu-item menu-level-2 menu-count-2"
                                                                        aria-hidden="false">
                                                                        <a href="https://balady.gov.sa/ar/budget-statistics"
                                                                            data-drupal-link-system-path="budget-statistics">الميزانية
                                                                            والمصروفات</a>
                                                                    </li>
                                                                    <li className="menu-item menu-level-2 menu-count-3"
                                                                        aria-hidden="false">
                                                                        <a href="https://balady.gov.sa/ar/about-balady/policy/%D8%A3%D9%87%D8%AF%D8%A7%D9%81-%D8%A7%D9%84%D8%AA%D9%86%D9%85%D9%8A%D8%A9-%D8%A7%D9%84%D9%85%D8%B3%D8%AA%D8%AF%D8%A7%D9%85%D8%A9"
                                                                            data-drupal-link-system-path="node/22506">التنمية
                                                                            المستدامة</a>
                                                                    </li>
                                                                    <li className="menu-item menu-level-2 menu-count-4"
                                                                        aria-hidden="false">
                                                                        <a href="https://balady.gov.sa/ar/partners"
                                                                            data-drupal-link-system-path="node/10903">الشراكات</a>
                                                                    </li>
                                                                </ul>

                                                            </li>
                                                            <li className="menu-item menu-item--expanded  menu-level-1 menu-count-3"
                                                                aria-hidden="false">
                                                                <span>عن بلدي-3</span>
                                                                <ul className="menu"
                                                                    aria-hidden="false">
                                                                    <li className="menu-item menu-level-2 menu-count-1"
                                                                        aria-hidden="false">
                                                                        <a href="https://balady.gov.sa/ar/e-participation"
                                                                            data-drupal-link-system-path="e-participation">المشاركة
                                                                            الإلكترونية</a>
                                                                    </li>
                                                                    <li className="menu-item menu-level-2 menu-count-2"
                                                                        aria-hidden="false">
                                                                        <a href="https://balady.gov.sa/ar/open-data"
                                                                            data-drupal-link-system-path="node/22594">البيانات
                                                                            المفتوحة</a>
                                                                    </li>
                                                                    <li className="menu-item menu-level-2 menu-count-3"
                                                                        aria-hidden="false">
                                                                        <a href="https://balady.gov.sa/ar/news"
                                                                            data-drupal-link-system-path="node/11152">الأخبار</a>
                                                                    </li>
                                                                    <li className="menu-item menu-level-2 menu-count-4"
                                                                        aria-hidden="false">
                                                                        <a href="https://balady.gov.sa/ar/events-list"
                                                                            data-drupal-link-system-path="node/11176">الفعاليات</a>
                                                                    </li>
                                                                </ul>

                                                            </li>
                                                            <li className="menu-item menu-item--expanded  menu-level-1 menu-count-4"
                                                                aria-hidden="false">
                                                                <span>عن بلدي-4</span>
                                                                <ul className="menu"
                                                                    aria-hidden="false">
                                                                    <li className="menu-item menu-level-2 menu-count-1"
                                                                        aria-hidden="false">
                                                                        <a href="https://balady.gov.sa/ar/initiatives"
                                                                            data-drupal-link-system-path="node/10897">المبادرات</a>
                                                                    </li>
                                                                    <li className="menu-item menu-level-2 menu-count-2"
                                                                        aria-hidden="false">
                                                                        <a href="https://balady.gov.sa/ar/e-participation/11180"
                                                                            data-drupal-link-system-path="node/11180">البيانات
                                                                            والإحصائيات</a>
                                                                    </li>
                                                                    <li className="menu-item menu-level-2 menu-count-3"
                                                                        aria-hidden="false">
                                                                        <a href="https://balady.gov.sa/ar/recruitment"
                                                                            data-drupal-link-system-path="recruitment">الوظائف</a>
                                                                    </li>
                                                                    <li className="menu-item menu-level-2 menu-count-4"
                                                                        aria-hidden="false">
                                                                        <a href="https://balady.gov.sa/ar/help-and-support"
                                                                            data-drupal-link-system-path="node/22322">المساعدة
                                                                            والدعم</a>
                                                                    </li>
                                                                </ul>

                                                            </li>
                                                        </ul>

                                                    </div>}
                                                </li>
                                                <li className="menu-item menu-item--expanded  dropdown menu-item-first menu-level-0  menu-count-2"
                                                    aria-hidden="false">
                                                    <button onClick={() => setShowId(showId == 2 ? null : 2)} className=" dropdown-toggle" href="#"
                                                        role="button" data-bs-auto-close="outside"
                                                        aria-expanded="false" aria-hidden="false"
                                                        data-toggle="dropdown">
                                                        <span>الخدمات</span><ArrowDown01Icon size={16} />
                                                    </button>
                                                    {showId == 2 && <div className="dropdown-menu absolute left-0 w-screen p-5 top-20  bg-white">
                                                        <ul className="menu" aria-hidden="false">
                                                            <li className="menu-item menu-item--expanded  menu-level-1 menu-count-1"
                                                                aria-hidden="false">
                                                                <span>الصفحات الشخصية</span>
                                                                <ul className="menu"
                                                                    aria-hidden="false">
                                                                    <li className="menu-item menu-level-2 menu-count-1"
                                                                        aria-hidden="false">
                                                                        <a
                                                                            href="https://apps.balady.gov.sa/Eservices/Inquiries/Request">إدارة
                                                                            الطلبات</a>
                                                                    </li>
                                                                    <li className="menu-item menu-level-2 menu-count-2"
                                                                        aria-hidden="false">
                                                                        <a
                                                                            href="https://apps.balady.gov.sa/Eservices/Inquiries/Licenses">إدارة
                                                                            الرخص</a>
                                                                    </li>
                                                                </ul>

                                                            </li>
                                                            <li className="menu-item menu-item--expanded  menu-level-1 menu-count-2"
                                                                aria-hidden="false">
                                                                <span>الرخص التجارية</span>
                                                                <ul className="menu"
                                                                    aria-hidden="false">
                                                                    <li className="menu-item menu-level-2 menu-count-1"
                                                                        aria-hidden="false">
                                                                        <a
                                                                            href="https://balady.gov.sa/services/11010">إصدار
                                                                            رخصة تجارية</a>
                                                                    </li>
                                                                    <li className="menu-item menu-level-2 menu-count-2"
                                                                        aria-hidden="false">
                                                                        <a
                                                                            href="https://balady.gov.sa/services/10485">تجديد
                                                                            رخصة نشاط تجاري</a>
                                                                    </li>
                                                                    <li className="menu-item menu-level-2 menu-count-3"
                                                                        aria-hidden="false">
                                                                        <a
                                                                            href="https://balady.gov.sa/services/10492">إلغاء
                                                                            رخصة نشاط تجاري</a>
                                                                    </li>
                                                                </ul>

                                                            </li>
                                                            <li className="menu-item menu-item--expanded  menu-level-1 menu-count-3"
                                                                aria-hidden="false">
                                                                <span>الرخص الإنشائية</span>
                                                                <ul className="menu"
                                                                    aria-hidden="false">
                                                                    <li className="menu-item menu-level-2 menu-count-1"
                                                                        aria-hidden="false">
                                                                        <a
                                                                            href="https://balady.gov.sa/services/10472">إصدار
                                                                            رخصة بناء</a>
                                                                    </li>
                                                                    <li className="menu-item menu-level-2 menu-count-2"
                                                                        aria-hidden="false">
                                                                        <a
                                                                            href="https://balady.gov.sa/services/10538">خدمة
                                                                            إصدار رخصة تسوير أراضي
                                                                            فضاء</a>
                                                                    </li>
                                                                </ul>

                                                            </li>
                                                            <li className="menu-item menu-item--expanded  menu-level-1 menu-count-4"
                                                                aria-hidden="false">
                                                                <span>الشهادات الصحية</span>
                                                                <ul className="menu"
                                                                    aria-hidden="false">
                                                                    <li className="menu-item menu-level-2 menu-count-1"
                                                                        aria-hidden="false">
                                                                        <a
                                                                            href="https://balady.gov.sa/services/10592">إصدار
                                                                            شهادة صحية</a>
                                                                    </li>
                                                                    <li className="menu-item menu-level-2 menu-count-2"
                                                                        aria-hidden="false">
                                                                        <a
                                                                            href="https://balady.gov.sa/services/10596">تجديد
                                                                            شهادة صحية</a>
                                                                    </li>
                                                                </ul>

                                                            </li>
                                                            <li className="menu-item menu-level-1 menu-count-5"
                                                                aria-hidden="false">
                                                                <span>صوت العميل</span>
                                                            </li>
                                                            <li className="menu-item menu-level-1 menu-count-6"
                                                                aria-hidden="false">
                                                                <a href="https://balady.gov.sa/ar/products"
                                                                    data-drupal-link-system-path="node/10894">عرض
                                                                    المزيد</a>
                                                            </li>
                                                        </ul>

                                                    </div>}
                                                </li>
                                                <li className="menu-item menu-item-first menu-level-0 menu-count-3"
                                                    aria-hidden="false">
                                                    <a href="https://balady.gov.sa/ar/general-inquiries"
                                                        data-drupal-link-system-path="general-inquiries">الاستعلامات</a>
                                                </li>
                                                <li className="menu-item menu-item--expanded  dropdown menu-item-first menu-level-0  menu-count-4"
                                                    aria-hidden="false">
                                                    <button onClick={() => setShowId(showId == 4 ? null : 4)} className=" dropdown-toggle" href="#"
                                                        role="button" data-bs-auto-close="outside"
                                                        aria-expanded="false" aria-hidden="false"
                                                        data-toggle="dropdown">
                                                        <span>تواصل معنا</span> <ArrowDown01Icon size={16} />
                                                    </button>
                                                    {showId == 4 && <div className="dropdown-menu absolute left-0 w-screen p-5 top-20  bg-white">
                                                        <ul className="menu" aria-hidden="false">
                                                            <li className="menu-item menu-level-1 menu-count-1"
                                                                aria-hidden="false">
                                                                <a
                                                                    href="https://momah.gov.sa/ar/report-corruption">الإبلاغ
                                                                    عن شبهة فساد</a>
                                                            </li>
                                                            <li className="menu-item menu-level-1 menu-count-2"
                                                                aria-hidden="false">
                                                                <a href="https://balady.gov.sa/ar/form/contact-us"
                                                                    data-drupal-link-system-path="node/22578">اتصل
                                                                    بنا</a>
                                                            </li>
                                                            <li className="menu-item menu-level-1 menu-count-3"
                                                                aria-hidden="false">
                                                                <a href="https://balady.gov.sa/ar/help-and-support/social-media"
                                                                    data-drupal-link-system-path="help-and-support/social-media">وسائل
                                                                    التواصل الإجتماعي</a>
                                                            </li>
                                                            <li className="menu-item menu-level-1 menu-count-4"
                                                                aria-hidden="false">
                                                                <a href="https://balady.gov.sa/ar/help-and-support/faq-list"
                                                                    data-drupal-link-system-path="help-and-support/faq-list">الأسئلة
                                                                    الشائعة</a>
                                                            </li>
                                                            <li className="menu-item menu-level-1 menu-count-5"
                                                                aria-hidden="false">
                                                                <a href="https://balady.gov.sa/ar/branches/ministry"
                                                                    data-drupal-link-system-path="branches/ministry">دليل
                                                                    فروع الوزارة</a>
                                                            </li>
                                                            <li className="menu-item menu-level-1 menu-count-6"
                                                                aria-hidden="false">
                                                                <a
                                                                    href="https://balady.gov.sa/services/%D8%A7%D9%84%D8%A3%D9%85%D8%A7%D9%86%D8%A9-%D8%A7%D9%84%D8%A7%D9%81%D8%AA%D8%B1%D8%A7%D8%B6%D9%8A%D8%A9">الأمانات
                                                                    الافتراضية</a>
                                                            </li>
                                                            <li className="menu-item menu-level-1 menu-count-7"
                                                                aria-hidden="false">
                                                                <a href="https://balady.gov.sa/ar/services/%D8%AD%D8%AC%D8%B2-%D9%85%D9%88%D8%B9%D8%AF-%D8%A5%D9%84%D9%83%D8%AA%D8%B1%D9%88%D9%86%D9%8A"
                                                                    data-drupal-link-system-path="node/10541">حجز
                                                                    موعد</a>
                                                            </li>
                                                            <li className="menu-item menu-level-1 menu-count-8"
                                                                aria-hidden="false">
                                                                <a
                                                                    href="https://metaverse.sakani.sa/mv?q=Q4wErTyUiOpAsD7fGhJkLzXcVbNm6T9">الدعم
                                                                    الفني بلغة الإشارة</a>
                                                            </li>
                                                            <li className="menu-item menu-level-1 menu-count-9"
                                                                aria-hidden="false">
                                                                <a href="https://balady.gov.sa/ar/branches/amana"
                                                                    data-drupal-link-system-path="branches/amana">دليل
                                                                    الامانات </a>
                                                            </li>
                                                            <li className="menu-item menu-level-1 menu-count-10"
                                                                aria-hidden="false">
                                                                <a href="https://balady.gov.sa/ar/services/%D8%A7%D9%84%D8%AA%D9%88%D8%A7%D8%B5%D9%84-%D9%85%D8%B9-%D9%85%D9%83%D8%AA%D8%A8-%D9%85%D8%B9%D8%A7%D9%84%D9%8A-%D8%A7%D9%84%D9%88%D8%B2%D9%8A%D8%B1"
                                                                    data-drupal-link-system-path="node/10716">التواصل
                                                                    مع مكتب معالي الوزير</a>
                                                            </li>
                                                        </ul>

                                                    </div>}
                                                </li>
                                            </ul>

                                        </div>
                                    </nav>
                                </div>
                                <div className="header-left header-left_hide">
                                    <div className="region-header-left flex items-start">
                                        <a href="https://business.balady.sa/"
                                            className="b-business balady-app btn btn-primary "
                                            aria-label="بلدي أعمال" rel="nofollow noreferrer">بلدي
                                            أعمال
                                            <LinkSquare02Icon size={16} strokeWidth={2} />
                                        </a>

                                        <div className="header-search headersearch_hide">
                                            <a role="button" className="search-link gap-1" id="searchBtn"
                                                aria-label="بحث" href="#headerSearch"
                                                data-toggle="modal"><Search01Icon size={25} strokeWidth={1.5} />
                                                بحث</a>
                                        </div>




                                        <div className="modal fade modal-search hidden" id="headerSearch"
                                            tabindex="-1" aria-labelledby="headerSearch"
                                            aria-hidden="true">
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <button type="button"
                                                            className="btn-close modal-search-btn-close"
                                                            data-dismiss="modal"
                                                            aria-label="Close"></button>
                                                    </div>
                                                    <div className="modal-body">
                                                        <div className="modal-search-content">
                                                            <div className="search-api-form search">
                                                                <form className="form-search"
                                                                    action="solr-serach-v1"
                                                                    method="get"
                                                                    id="form-solr-serach"
                                                                    accept-charset="UTF-8">
                                                                    <div className="form-item-search">
                                                                        <input className="form-control"
                                                                            type="text"
                                                                            id="edit-search-api-fulltext"
                                                                            name="search_api_fulltext"
                                                                            value="" size="30"
                                                                            maxlength="128"
                                                                            placeholder="ابحث عن ما تريد"
                                                                            autocomplete="off" />
                                                                        <button type="submit"
                                                                            className="btn btn-primary btn-search"
                                                                            data-search-url="https://balady.gov.sa"
                                                                            onclick="redirectToPortalSearch(event,this)">بحث</button>
                                                                    </div>
                                                                </form>
                                                                <a href="https://balady.gov.sa/solr-serach-v1"
                                                                    className="btn btn-outline-light btn-adv-search">البحث
                                                                    المتقدم</a>
                                                            </div>
                                                            <div className="modal-search-suggestions">
                                                                <div className="suggestions-content">
                                                                    <h2 className="text-suggestions">
                                                                        اقتراحات شائعة
                                                                    </h2>
                                                                    <div className="row g-3">
                                                                        <div className="col-auto">
                                                                            <a className="btn btn-light btn-sug"
                                                                                href="https://balady.gov.sa/products/10920">
                                                                                <i
                                                                                    className="hgi hgi-stroke hgi-plus-sign"></i>
                                                                                الرخص التجارية
                                                                            </a>
                                                                        </div>
                                                                        <div className="col-auto">
                                                                            <a className="btn btn-light btn-sug"
                                                                                href="https://balady.gov.sa/products/10470">
                                                                                <i
                                                                                    className="hgi hgi-stroke hgi-plus-sign"></i>الرخص
                                                                                الإنشائية
                                                                            </a>
                                                                        </div>
                                                                        <div className="col-auto">
                                                                            <a className="btn btn-light btn-sug"
                                                                                href="https://balady.gov.sa/services/10541">
                                                                                <i
                                                                                    className="hgi hgi-stroke hgi-plus-sign"></i>حجز
                                                                                المواعيد الإلكترونية
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
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}


export default Navbar2
