import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div dir='rtl'><section className="copyright-wrapper">
            <div className="container mx-auto">
                <div className="row">
                    <div className="col">
                        <div className="region region-copyright">
                            <div id="block-balady-new-copyright" className="Copyright block block-block-content">


                                <div className="block-content">

                                    <div
                                        className="clearfix text-formatted field field--name-body field--type-text-with-summary field--label-hidden field__item">
                                        <div className="copyright-content">
                                            <div className="footer-links">
                                                <a className="menu-item" href="https://balady.gov.sa/ar/node/11293"
                                                    aria-label="خريطة الموقع">خريطة الموقع</a>
                                                <a className="menu-item" href="https://balady.gov.sa/en/rss.xml"
                                                    aria-label="RSS">RSS</a>
                                                <a className="menu-item" href="https://balady.gov.sa/ar/node/22490"
                                                    aria-label="شروط الاستخدام">شروط الاستخدام</a>
                                            </div>
                                            <p>جميع الحقوق محفوظة لوزارة البلديات والإسكان © 2026</p>
                                            <p>تم تطويره وصيانته بواسطة وزارة البلديات والإسكان</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div id="block-balady-new-logos" className="logos block block-block-content">


                                <div className="block-content">

                                    <div
                                        className="clearfix text-formatted field field--name-body field--type-text-with-summary field--label-hidden field__item">
                                        <div className="footer-logos">
                                            <a href="https://www.vision2030.gov.sa/" className="vision-logo"
                                                rel="nofollow noreferrer" aria-label="رؤية 2030" title="رؤية 2030">
                                                <img src="./footer_logos.svg" className='text-[#07706d] border'
                                                    alt="balady" title="رؤية 2030" />
                                            </a>
                                            <a href="https://raqmi.dga.gov.sa/platforms/DigitalStamp/ShowCertificate/316"
                                                className="dga-logo" rel="nofollow noreferrer"
                                                aria-label="مسجل لدى هيئة الحكومة الرقمية"
                                                title="مسجل لدى هيئة الحكومة الرقمية">
                                                <img src="./GetStampFile/3313" className='text-sm font-medium border'
                                                    alt="مسجل لدى هيئة الحكومة الرقمية"
                                                    title="مسجل لدى هيئة الحكومة الرقمية" />
                                            </a>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </section></div>
    )
}

export default Footer