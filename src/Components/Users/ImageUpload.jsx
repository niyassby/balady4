import React, { useState, useCallback, useRef } from 'react';
import { HiOutlineTrash } from "react-icons/hi2";
import { TbCloudUpload } from "react-icons/tb";

const ImageUpload = ({profile, setProfile}) => {
  // const [image, setImage] = useState(null);
  const [fileInfo, setFileInfo] = useState({ name: '', size: 0 });
  const [error, setError] = useState('');
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  const MAX_FILE_SIZE_MB = 2;
  const MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE_MB * 1024 * 1024;

  const [uploadProgress, setUploadProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  // Simulate file upload progress
  const simulateUpload = () => {
    let progress = 0;
    setIsComplete(true);
    const interval = setInterval(() => {
      progress += 10;
      setUploadProgress(progress);
      if (progress >= 100) {
        clearInterval(interval);
      }
    }, 200);
  };

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false); // Reset dragging state
    const files = e.dataTransfer.files;
    if (files && files[0]) {
      handleFile(files[0]);
    }
  }, []);

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true); // Set dragging state
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false); // Reset dragging state
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      handleFile(file);
    }
  };

  const handleClearImage = () => {
    setProfile(null)
    setFileInfo({ name: '', size: 0 });
    if (fileInputRef.current) {
      fileInputRef.current.value = ''; // Clear the file input value
    }
  };

  const handleFile = (file) => {
    if (file.size > MAX_FILE_SIZE_BYTES) {
      setError(`File size exceeds ${MAX_FILE_SIZE_MB} MB.`);
      setTimeout(()=>{
        setError('')
      }, 3000)
      handleClearImage
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setFileInfo({ name: file.name, size: file.size });
      simulateUpload();
      setTimeout(() => {
        setProfile(file)
        setUploadProgress(0);
        setIsComplete(false);
      }, 3000);
      setError('');
    };
    reader.readAsDataURL(file);
  };

 

  return (
    <div className='my-6'>
      {profile ? 
        <div className='flex gap-3 items-end rounded-lg'>
          <div className='w-[150px] border rounded-lg overflow-hidden bg-blue-200 aspect-[3/4]'>
            <img src={profile && URL.createObjectURL(profile)} className="w-full h-full rounded-lg object-cover" />
          </div>
          <div className="">
            <div className="text-neutral-800 text-sm max-w-[300px]">{fileInfo.name} / {(fileInfo.size / 1024 / 1024).toFixed(2)} MB</div>
            <div onClick={handleClearImage} className='mt-1 rounded-lg cursor-pointer flex gap-1 items-center text-blue-500 font-semibold hover:underline'>
              Delete
              <HiOutlineTrash size={22} strokeWidth={1.2} />
            </div>
          </div>
        </div> :

        <div className="flex flex-col items-center justify-center bg-blue-50 p-5 rounded-xl">
          <div
            className={`w-full min-h-48 p-5 rounded-lg border border-dashed ${isDragging ? 'border-blue-600 bg-blue-100' : 'border-blue-200 bg-blue-50'} flex flex-col items-center justify-center cursor-pointer relative`}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
          >
            <div className='flex flex-col items-center'>
              <TbCloudUpload size={40} strokeWidth={0.5} color='#262626' />
              <span className="text-gray-600 text-center mt-1">Drag & Drop your image here<br /><span className='text-blue-500 font-medium'>Or click to upload</span></span>
              {isComplete && <div className='w-full flex items-center flex-col justify-center'>
                <div className="mb-2 w-full flex justify-center items-center">
                  <span className="text-sm text-gray-800 ">{uploadProgress}%</span>
                </div>
                <div className="flex w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                  <div style={{ width: `${uploadProgress}%` }} className="flex flex-col justify-center rounded-full overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 "></div>
                </div>
              </div>}
            </div>

            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileInputChange}
              className="absolute inset-0 opacity-0 cursor-pointer"
            />
            {error ? (
              <div className="mt-3 text-red-500 text-sm">{error} Please choose another file</div>
            ):(
              <div className="mt-3 text-gray-600 text-sm">Max. file size 2MB</div>
            )}
          </div>
        </div>}

    </div>
  );
};

export default ImageUpload;
