import React, { useState } from 'react'
import {FcGoogle} from 'react-icons/fc'
import {AiFillCloseCircle} from 'react-icons/ai'

export default function Signup({fun}) {
    return (
        <div>
               <div 
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                 <div className='w-full'>
                <div className='inline-block'>
                <h3 className="text-3xl font-semibold">
                   Create Account  
                  </h3>
                </div>
                 </div>
                  <button
                    className="p-1 ml-auto  border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => fun(0)}
                  >
                    <span className=" text-black  h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex flex-row ">
                <div className='w-full md:w-2/4 lg:w-2/4'>
                    <p className='my-2 pb-2'><strong>Enter details :</strong></p>
                    <div className='flex'>
                    <input type='text' placeholder='First name' className='border-2 border-gray-400 rounded-lg h-10 w-full p-2 required' ></input>
                    <input type='text' placeholder='Last name' className='border-2 border-gray-400 rounded-lg h-10 w-full p-2 ' ></input>
                    </div>
<input type='email' placeholder='Email' className='border-2 border-gray-400 rounded-lg h-10 w-full p-2  focus:border-blue-500 ' ></input>
<input type='password' placeholder='Password' className='border-2 border-gray-400 rounded-lg h-10 w-full p-2 ' ></input>
<div className='flex'>
<button className='rounded-3xl bg-blue-400 w-2/4 h-10  mt-5 text-md mr-2 hover:bg-green-400'  onClick={() => fun(0)}>Signup</button>
<button className='rounded-3xl text-blue-400  w-2/4 h-10 mt-5 text-md  ml-2 leading-10 text-center hover:bg-blue-400 hover:text-black hover:rounded-3Xl'onClick={() => fun(1)}>  or login</button>
</div>


<button className='rounded-3xl bg-gray-200 w-full h-10 mt-3 mb-1 text-sm hover:bg-green-400'  onClick={() => fun(0)}>Login with Google</button>
<button className='rounded-3xl bg-gray-200 w-full h-10 my-1 text-sm hover:bg-green-400'  onClick={() => fun(0)}>Login with Facebook</button>

                </div>
                  <div className='md:w-2/4 hidden w-0 md:block lg:block lg:w-2/4'>
               <div className='flex justify-center'>
               <img src='https://img.freepik.com/free-vector/access-control-system-abstract-concept_335657-3180.jpg' className='h-70 w-70 leading-70 '/>
               </div>
                    
               

                  </div>
                </div>
                {/*footer*/}
                {/* <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                  onClick={()=>{fun(0)}}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={()=>{fun(0)}}
                  >
                    Login
                  </button>
                </div> */}
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </div>
    )
}