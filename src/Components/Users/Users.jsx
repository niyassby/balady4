import React, { useState } from "react";
import ImageUpload from "./ImageUpload";
import { v4 as uuId } from "uuid";
import { obj } from "../../Context/Utils/Utils";
import PopUp from "./popUp";
import Spinner from "../Loading/Spinner";
import { useNavigate } from "react-router-dom";
import { IoChevronBackOutline } from "react-icons/io5";
import { useAddDocument } from "../../hooks/useMutation";
import { uploadFile } from "../../Context/API";

function Users() {
  const navigate = useNavigate();
  const [isError, setError] = useState(null);
  const [loadingUp, setLoadingUp] = useState(false);
  const [profile, setProfile] = useState(null);
  const [uid, setUid] = useState("");
  const [isPopup, setPopup] = useState(false);
  const {mutate}=useAddDocument()
  const [inputs, setInputs] = useState({
    municipality: "",
    honesty: "",
    idNumber: "",
    name: "",
    nationality: "",
    gender: "",
    profession: "",
    certificateNO: "",
    IssueDate: "",
    HijriDate: "",
    endDate: "",
    HijriEndDate: "",
    ProgramDate: "",
    programType: "",
    EstablishmentName: "",
    LicenseNumber: "",
    EstablishmentNumber: "",
    type: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleCancel = () => {
    // e.preventDefault();
    // Clear form
    setInputs({
      municipality: "",
      honesty: "",
      idNumber: "",
      name: "",
      nationality: "",
      gender: "",
      profession: "",
      certificateNO: "",
      IssueDate: "",
      HijriDate: "",
      endDate: "",
      HijriEndDate: "",
      ProgramDate: "",
      programType: "",
      EstablishmentName: "",
      LicenseNumber: "",
      EstablishmentNumber: "",
      type: '',
    });
    setProfile(null);
    setError(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoadingUp(true);
  
  
    // Handle image upload
    if (!profile) {
      setError('Please upload an image');
      setLoadingUp(false);
      return;
    }
    if (inputs.type === '') {
      setError('Please select a type');
      setLoadingUp(false);
      return;
    }
  
    try {
      
      const imageUrl = await uploadFile(profile);
      if(!imageUrl){
        setError('Something went wrong during image upload');
        setLoadingUp(false);
        return;
      }
      
  
      const data = {
        ...inputs,
        url:imageUrl,
      }
      mutate(data, {
        onSuccess: ()=>{
          handleCancel();
          setProfile(null);
          navigate(-1)
          // setPopup(true);
        }
      });
  
    } catch (err) {
      console.error(err);
      setError('Something went wrong during submission');
    } finally {
      setLoadingUp(false);
    }
  };
  


  return (
    <div className=" w-full">
      <div className="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 mx-auto">
        <div className="bg-white rounded-xl shadow p-4 sm:p-7">
          <div className="mb-8 flex justify-between">
            <h2 className="text-xl max-md:hidden font-bold text-gray-800">
              Annual Health Certificate
            </h2>
            <button
              onClick={() => navigate(-1)}
              className="flex items-center justify-center gap-1 text-white font-medium py-1.5 text-sm rounded-full bg-main-800 px-4 hover:bg-main-700"
            >
              {" "}
              <IoChevronBackOutline />
              Go Back
            </button>
          </div>

          <div>
            <ImageUpload profile={profile} setProfile={setProfile} />
            <div
              dir="rtl"
              className="grid grid-cols-1 md:grid-cols-2 gap-3 gap-y-10 mt-10"
            >
              {obj.map((item, index) => {
                return (
                  <div key={index} className="relative">
                    <label
                      htmlFor={item.name}
                      className="block absolute right-2 -top-3 bg-white px-2 z-0 text-base font-medium text-gray-900"
                    >
                      {item.arabic}
                    </label>
                    <input
                      type="text"
                      onChange={handleChange}
                      id={item.name}
                      value={inputs[item.name]}
                      name={item.name}
                      className="bg-white text-right border placeholder:text-sm border-gray-300 text-gray-900 focus:outline-blue-500 text-base rounded-lg w-full p-2.5 py-4"
                      placeholder={item.plece}
                      autoComplete="off"
                    />
                  </div>
                );
              })}
              <div  className="relative">
                    <label
                      htmlFor='select'
                      className="block absolute right-2 -top-3 bg-white px-2 z-0 text-base font-medium text-gray-900"
                    >
                      Select item
                    </label>
                    <select value={inputs.type} name="type" onChange={handleChange} className={`bg-white text-right border placeholder:text-sm border-gray-300 text-gray-900 focus:outline-blue-500 text-base rounded-lg w-full p-2.5 py-4 ${isError && inputs.type === '' ?  'border-red-500' : ''}`}>
                    <option value="" disabled>
                      Select one
                    </option>
                      <option value="annual">شهادة صحية سنوية</option>
                      <option value="standard">شهادة صحية الموحدة</option>
                      <option value="health">شهادة صحية</option>
                    </select>
                    
                  </div>
            </div>

            
            <div className="w-full flex items-center flex-col justify-center gap-2 mt-6 md:flex-row">
              <button
                onClick={handleCancel}
                className="w-full border  p-3 rounded-lg text-black"
              >
                Clear data
              </button>
              <button
                onClick={handleSubmit}
                className={`w-full ${
                  isError
                    ? "bg-red-500 hover:bg-red-600"
                    : "bg-main-800 hover:bg-main-700"
                } p-3 rounded-lg text-white`}
              >
                Submit doc
              </button>
            </div>
            {isError && (
              <h1 className="text-base w-full text-center text-red-500 mt-2 mb-2">
                {isError}
              </h1>
            )}
          </div>
        </div>
      </div>
      {loadingUp && <Spinner></Spinner>}
      {/* {isPopup && <PopUp uniqueId={uid} setPopup={setPopup} />} */}
    </div>
  );
}

export default Users;
