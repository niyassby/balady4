import React, { useState } from 'react'
import { obj } from '../../Context/Utils/Utils';
import Spinner from '../Loading/Spinner';
import { IoMdClose } from "react-icons/io";
import { HiOutlineTrash } from "react-icons/hi2";
import { useUpdateDocument } from '../../hooks/useMutation';
import { deleteFileByUrl, uploadFile } from '../../Context/API';
import ImageUpload from './ImageUpload';

function Edit({isEdit, setEdit, setOpenEdit}) {

    const [loadingUp, setLoadingUp]=useState(false)
    const [profile, setProfile] = useState(null)
    const {mutate, isPending}=useUpdateDocument()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEdit({ ...isEdit, [name]: value });
        
      };

      const handleCancel= ()=>{
        setEdit([null])
        setOpenEdit(false);
      }
      

      const handleDeleteImage = async () => {
        if (!isEdit.url) return;
        if (window.confirm("Are you sure you want to delete this image?")) {
          setLoadingUp(true);
          const success = await deleteFileByUrl(isEdit.url);
          if (success) {
            setEdit({ ...isEdit, url: "" });
          } else {
            alert("Failed to delete the image from storage.");
            // Fallback: still clear the url so they can upload a new one
            // setEdit({ ...isEdit, url: "" });
          }
          setLoadingUp(false);
        }
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
        setLoadingUp(true);
        try {
          let finalUrl = isEdit.url;
          if (profile) {
            const imageUrl = await uploadFile(profile);
            if (!imageUrl) {
              alert("Failed to upload new image.");
              setLoadingUp(false);
              return;
            }
            finalUrl = imageUrl;
          }

          const id = isEdit.id;
          const dataToUpdate = { ...isEdit, url: finalUrl };
          delete dataToUpdate.id;

          mutate({id, data: dataToUpdate}, {
            onSuccess: (data) => {
              handleCancel();
            }
          });
        } catch (err) {
          console.error(err);
        } finally {
          setLoadingUp(false);
        }
      };

  
  return (
    <div className=' w-full h-screen fixed inset-0 z-50 bg-neutral-900/80'>
        <div className="w-full h-full  px-4 py-10 sm:px-6 lg:px-8 ">
        <div className="bg-white max-w-4xl h-full mx-auto overflow-x-auto shadow p-4 sm:p-7">
            <div className="mb-8 flex justify-between">
            <h2 className="text-xl max-md:hidden font-bold text-gray-800">
                 Annual Health Certificate
            </h2>
                <button onClick={()=>handleCancel()} className='flex items-center justify-center gap-1 text-white font-medium py-1.5 text-sm rounded-full bg-main-800 px-4 hover:bg-main-700' > <IoMdClose /></button>
            </div>

            {/* Form  */}

            <div >
                <div className='w-full h-full flex flex-col items-center justify-center text-center mb-6'>
                    {isEdit.url ? (
                        <div className='flex flex-col items-center justify-center'>
                            <img className='w-36 aspect-[3/4] overflow-hidden object-cover rounded-lg border shadow-sm' src={isEdit.url} alt="" />
                            <button
                                type="button"
                                onClick={handleDeleteImage}
                                className='mt-3 flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-red-600 hover:bg-red-700 rounded-lg shadow-sm transition duration-200 cursor-pointer'
                            >
                                <HiOutlineTrash size={16} />
                                Delete Image
                            </button>
                        </div>
                    ) : (
                        <div className='w-full max-w-md'>
                            <ImageUpload profile={profile} setProfile={setProfile} />
                        </div>
                    )}
                </div>
                <div dir="rtl" className='grid grid-cols-1 md:grid-cols-2 gap-3 gap-y-10 mt-10'>
                    {obj.map((item, index)=>{
                        return(
                            <div key={index} className='relative'>
                                <label htmlFor={item.name} className="block absolute right-2 -top-3 bg-white px-2 z-0 text-base font-medium text-gray-900">{item.arabic}</label>
                                <input type="text" onChange={handleChange} id={item.name} value={isEdit[item.name]} name={item.name} className="bg-white text-right border  border-gray-300 text-gray-900 text-base rounded-lg w-full p-2.5 py-4" placeholder={item.plece} autoComplete='fales' />
                            </div>
                        )
                    })}
                    <div  className="relative">
                    <label
                      htmlFor='select'
                      className="block absolute right-2 -top-3 bg-white px-2 z-0 text-base font-medium text-gray-900"
                    >
                      Select item
                    </label>
                    <select value={isEdit?.type} name="type" onChange={handleChange} className={`bg-white text-right border placeholder:text-sm border-gray-300 text-gray-900 focus:outline-blue-500 text-base rounded-lg w-full p-2.5 py-4 `}>
                    <option value="" disabled>
                      Select one
                    </option>
                      <option value="annual">شهادة صحية سنوية</option>
                      <option value="standard">شهادة صحية الموحدة</option>
                      <option value="commercial">شهادة صحية للأنشطة التجارية</option>
                      <option value="health">شهادة صحية</option>
                    </select>
                    
                  </div>
                </div>
                <div className='w-full flex items-center flex-col justify-center gap-2 mt-6 md:flex-row'>
                    <button onClick={handleCancel} className='w-full bg-blue-300  p-3 rounded-lg text-black'>Cancel</button>
                    <button onClick={handleSubmit} className={`w-full bg-main-800 hover:bg-main-700 p-3 rounded-lg text-white`}>Submit</button>
                </div>
                
            </div>
        
        </div>
        </div>
        {(loadingUp || isPending) && <Spinner></Spinner>}
    </div>
  )
}

export default Edit
