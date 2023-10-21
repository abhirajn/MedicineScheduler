import React from 'react'
import '../App.css'
import Navbar from '../components/Navbar'
export default function AddCareTaker() {
  return (
    <div className='addcare w-full h-screen fixed text-center'>
        <Navbar/>
       <h1 className='text-xl font-bold'>Enter details of caretaker :</h1>
       <div className='mt-5 h-screen w-full flex justify-center text-center'>
        <div className='h-3/4 w-2/4 bg-gray-100 bg-opacity-60'>
        <table className='w-full'>
        <tr className=''>
      <th align='right'><div className='text-xl mr-5 font-semibold  mt-3'>Name  : </div></th>
      <td align='left'>  <div className='w-2/4'><input type="text" className='h-10 rounded border-gray-200 w-full p-2  mt-3' placeholder='Name'/></div></td>
    </tr>
    <tr className=''>
      <th align='right'><div className='text-xl mr-5 font-semibold  mt-3'>Email  : </div></th>
      <td align='left'>  <div className='w-2/4'><input type="text" className='h-10 rounded border-gray-200 w-full p-2  mt-3' placeholder='Name'/></div></td>
    </tr>
    <tr className=''>
      <th align='right'><div className='text-xl mr-5 font-semibold  mt-3'>Phone number  : </div></th>
      <td align='left'>  <div className='w-2/4'><input type="text" className='h-10 rounded border-gray-200 w-full p-2  mt-3' placeholder='Name'/></div></td>
    </tr>
    <tr className=''>
      <th align='right'><div className='text-xl mr-5 font-semibold  mt-3'>Realtion  : </div></th>
      <td align='left'>  <div className='w-2/4'><input type="text" className='h-10 rounded border-gray-200 w-full p-2  mt-3' placeholder='Name'/></div></td>
    </tr>
        </table>
        </div>
       </div>
        
        </div>
  )
}
