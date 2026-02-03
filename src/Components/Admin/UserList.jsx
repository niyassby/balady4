import React, {  useEffect, useState } from "react";
import PopUp from "../Users/popUp";
import { HiOutlineDownload, HiX, HiOutlineInformationCircle, } from "react-icons/hi";
import Edit from "../Users/Edit";
import Spinner from "../Loading/Spinner";
import { useAllDoc } from "../../hooks/useQuery";
import { useDeleteDocument } from "../../hooks/useMutation";
import { deleteFileByUrl } from "../../Context/API";
import { newDate } from "../../Context/Utils/Functions";

function UserList({ search }) {
  const [isQrcode, setQrCode] = useState(false);
  const [qrId, setQrId] = useState("");
  const [isDlt, setDlt] = useState(null);
  const [isEdit, setEdit] = useState(null);
  const [openEdit, setOpenEdit]=useState(false)
  const [page, setPage] = useState(1);
  const {mutate}=useDeleteDocument()

  const {data, error, isLoading}=useAllDoc(search, page, 20)
  const qrHandle = (id) => {
    setQrCode(true);
    setQrId(id);
  };
  
  useEffect(()=>{
    if(search) setPage(1)
  }, [search])

  const handleEdit = (value) => {
    setOpenEdit(true)
    setEdit(value)
  };

  const handleDelete = (item) => {
    mutate(item.id, {
      onSuccess: () => {
        deleteFileByUrl(item.url)
        setDlt(null);
      }
    })
  }

  const serachValue = data?.data?.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()) 
    // item.id.toLowerCase().includes(search.toLowerCase())
  );

  if(error) return <div>Error</div>
  if(isLoading) return <Spinner/>

  return (
    <div className="">
      <div className="relative overflow-x-auto shadow-md  rounded-2xl border">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3 w-10">
                NO
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                ID Number
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                View
              </th>
              <th scope="col" className="px-6 py-3">
                Download
              </th>
              <th scope="col" className="px-6 py-3">
                Edit
              </th>
              <th scope="col" className="px-6 py-3">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            { data?.data?.map((item, i) => {
                return (
                  <tr
                    key={item.id}
                    className="bg-white border-b text-base hover:bg-gray-50 "
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-black">{i+1}</td>
                    <th
                      scope="row"
                      className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap "
                    >
                      <img
                        className="w-12 h-12 aspect-square bg-white rounded-full object-cover border"
                        src={item.url}
                      />
                      <div className="ps-3">
                        <div className="text-sm font-semibold">
                          {item.name}
                        </div>
                        <div className="font-normal text-xs text-gray-500">
                          {item.municipality}
                        </div>
                      </div>
                    </th>
                    <td className="px-6 py-4 text-sm text-black whitespace-nowrap">{item.idNumber}</td>
                    <td className="px-6 py-4 text-sm text-black whitespace-nowrap">{newDate(item.created_at)}</td>
                    <td className="px-6 py-4">
                        <a className="inline-block" href={`/#/Eservices/HealthIssue/PrintedLicenses?id=${item.id}`} target="_blank" >
                      <div
                        className="font-medium text-sm text-nowrap  text-blue-600 hover:underline"
                      >
                        View User
                      </div></a>
                    </td>
                    
                    <td className="px-6 py-4">
                      <button
                        onClick={() => qrHandle(item.id)}
                        className="text-nowrap  font-medium text-sm bg-white border hover:bg-gray-200 text-black py-2 px-3 rounded-lg cursor-pointer flex items-center gap-1"
                      >
                        QR Code
                        <HiOutlineDownload size={15} />
                      </button>
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => handleEdit(item)}
                        className="font-medium text-sm text-nowrap bg-main-800 py-2 px-4 rounded-md text-white hover:bg-main-900"
                      >
                        Edit User
                      </button>
                    </td>
                    
                    <td className="px-6 py-4">
                      <button
                        onClick={() => setDlt(item)}
                        className="font-medium text-sm text-white bg-gray-900 py-2 px-4 rounded-md  hover:shadow-xl"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        <div className="">
        <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center   border-gray-200 dark:border-neutral-700">
            <div>
              <p className="text-sm text-gray-600 dark:text-neutral-400">
                Page <span className="font-semibold text-gray-800 dark:text-neutral-200">{page}, Count: {data?.count}</span>
              </p>
            </div>

            <div>
              <div className="inline-flex gap-x-2">
                <button disabled={page === 1} onClick={()=>setPage(page-1)} type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700">
                  <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                  Prev
                </button>

                <button disabled={data?.count < 9}  onClick={()=>setPage(page+1)} type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700">
                  Next
                  <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isQrcode && <PopUp uniqueId={qrId} setPopup={setQrCode} />}
      {openEdit && <Edit isEdit={isEdit} setEdit={setEdit} setOpenEdit={setOpenEdit} />}
      {isDlt && (
        <span className="w-full z-50 h-screen fixed bg-neutral-900/80 inset-0 flex items-center justify-center">
          <div
            onClick={() => setDlt(null)}
            className=" w-full h-full absolute z-0"
          ></div>
          <div className="relative z-10 p-4 w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-lg shadow ">
              <button
                onClick={() => setDlt(null)}
                type="button"
                className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center "
              >
                <HiX size={20} />
              </button>
              <div className="p-4 md:p-5 text-center">
                <span className="mx-auto mb-4 text-gray-400 w-12 h-12 flex justify-center">
                  <HiOutlineInformationCircle size={50} strokeWidth={1} />
                </span>
                <h3 className="mb-5 text-lg font-normal text-gray-500">
                  Are you sure you want to delete this product?
                </h3>
                <button
                  onClick={() => handleDelete(isDlt)}
                  type="button"
                  className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
                >
                  Yes, I'm sure
                </button>
                <button
                  onClick={() => setDlt(null)}
                  type="button"
                  className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 "
                >
                  No, cancel
                </button>
              </div>
            </div>
          </div>
        </span>
      )}


    </div>
  );
}

export default UserList;
