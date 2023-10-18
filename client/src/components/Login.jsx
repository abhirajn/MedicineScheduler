import React, { useState } from 'react'
import {FcGoogle} from 'react-icons/fc'
import {AiFillCloseCircle} from 'react-icons/ai'

export default function Login({fun}) {
  // console.log(props)
  // const {fun , fun2} = props;
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
                 <div className='flex'>
                 <h3 className="text-3xl font-semibold">
                   Welcome Back !
                  </h3>
               
                 </div>
                  <button
                    className="  rounded-2xl text-black  float-right text-3xl font-semibold  hover:bg-red-200"
                    onClick={() => fun(0)}
                  >
                      ×
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex flex-row ">
                <div className='w-full md:w-2/4 lg:w-2/4'>
                    <p className='my-2 pb-2'><strong>Enter details :</strong></p>
<input type='email' placeholder='Email' className='border-2 border-gray-400 rounded-lg h-10 w-full p-2  focus:border-blue-500 ' ></input>
<input type='password' placeholder='Password' className='border-2 border-gray-400 rounded-lg h-10 w-full p-2 ' ></input>
<div className='flex'>
<button className='rounded-3xl bg-blue-400 w-2/4 h-10  mt-5 text-md mr-2 hover:bg-green-400'  onClick={() => {fun(0)}}>Submit</button>
<button className='rounded-3xl text-blue-400  w-2/4 h-10 mt-5 text-sm  ml-2 leading-10 text-center hover:bg-blue-400 hover:text-black hover:rounded-3Xl' onClick={() =>fun(2)}>  or create account</button>
</div>


<button className='rounded-3xl bg-gray-100 w-full h-10 my-2 text-sm hover:bg-green-400'  onClick={() => fun(false)}>Login with Google</button>
<p className='w-full my-3  text-center text-blue-400 cursor-pointer text-sm '  onClick={() =>fun(0)}>Forgot password</p>

                </div>
                  <div className='md:w-2/4 hidden w-0 md:block lg:block lg:w-2/4'>
               <div className='flex justify-center'>
               <img src='https://img.freepik.com/free-vector/access-control-system-abstract-concept_335657-3180.jpg' className='h-70 w-70 leading-70'/>
               </div>
                    
               

                  </div>
                </div>
                {/*footer*/}
                {/* <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                  onClick={()=> props.fun(false)}}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={()=> props.fun(false)}}
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