import React, { useRef } from 'react'
import QRCode from 'qrcode.react';
import { FiDownload } from "react-icons/fi";
import { CgClose } from "react-icons/cg";
import { useNavigate } from 'react-router-dom';

function PopUp({uniqueId, setPopup}) {
    const linkRef = useRef(null);
    const navigate = useNavigate();

    const handleClose = () => {
        setPopup(false);
        navigate('/admin');
    }
    const downloadQRCode = () => {
        if (linkRef.current) {
          const canvas = linkRef.current.querySelector('canvas')
          if (canvas) {
            // Convert canvas to Data URL
            const dataURL = canvas.toDataURL('image/png');
            const link = document.createElement('a');
            link.href = dataURL;
            link.download = 'qrcode.png';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }
        }
      };
      
    const mainUrl = import.meta.env.VITE_DOMAIN;
    const route = '#/Eservices/HealthIssue/PrintedLicenses'
    const URL = `${mainUrl+route}?id=${uniqueId}`
  return (
    <div className='w-full h-screen fixed z-50 bg-neutral-900/80 flex items-center justify-center inset-0 '>
      <div onClick={()=>handleClose()} className='w-full h-full  absolute z-0 inset-0'></div>
        <div className='max-w-[500px] max-h-[600px] p-14 rounded-lg bg-white flex flex-col mx-auto relative z-10'>
            <div ref={linkRef} className='mb-10' id='qrImage'>
                <QRCode
                    size={256}
                    value={URL}
                />
            </div>
            <button onClick={()=>downloadQRCode()} type="button" className="py-2 gap-2  px-3 flex items-center text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 ">
                <FiDownload  size={18} />
                Download
            </button>
            <div onClick={()=>handleClose()} className='absolute right-4 top-4 hover:bg-slate-200 cursor-pointer bg-gray-100 rounded-full p-1'>
                <CgClose size={22} />
            </div>
        </div>
    </div>
  )
}

export default PopUp