import React, { useState } from 'react'
// import Navbar from '../components/Navbar'
import '../App.css'
import morning from '../assets/morning.png'
import noon from '../assets/noon.png'
import night from '../assets/night.png'

export default function AddMedicine() {
  const[mor , setMor] = useState(false);
  const[noo , setNoo] = useState(false);
  const[eve , setEve] = useState(false);
  var st1 = (mor) ? " border-green-600" : "";
  var st2 = (noo) ? "  border-green-600" : "";
  var st3 = (eve) ? " border-green-600" : "";
  return (
    <div className='addmedi'>
      <div>  <h1 className='w-full text-center text-3xl font-bold mb-5 my-2'>Enter the details of the medicine 💊 : </h1></div>
    <div className=' h-screen  w-full  flex-col'>

<div className='h-screen w-full flex justify-center text-center '>
 <div className=' bg-purple-100 w-3/4 h-3/4 lg:w-2/4 md:w-2/4'>
 
  <table className='w-full'>
   <tr className=''>
      <th align='right'><div className='text-xl mr-5 font-semibold  mt-3'>Medicine Name  : </div></th>
      <td align='left'>  <div className='w-3/4'><input type="text" className='h-10 rounded border-gray-200 w-full p-2  mt-3' placeholder='Name'/></div></td>
    </tr>
    <tr className=''>
      <th align='right'><div className='text-xl mr-5  font-semibold my-2'>Number of Tablets  : </div></th>
      <td align='left'>  <div className='w-3/4'><input type="text" className='h-10 rounded border-gray-200 w-full p-2 my-2' placeholder='Number'/></div></td>
    </tr>
  </table>
  <h1 className='text-2xl font-bold mt-2'>Select timeline : </h1>
  <table className='w-full mt-2'>
  <tr align='center'>
      <td className='text-md'>Morning</td>
      <td className='text-md'>Noon</td>
      <td className='text-md'>Night</td>
    </tr>
    <tr align='center'>
      <td onClick={()=>{setMor(!mor)}}><img src={morning} alt="morning" className={'h-40 w-40 cover p-1 border-8 rounded-full ' + st1}/></td>
      <td onClick={()=>{setNoo(!noo)}}><img src={noon} alt="noon" className={'h-40 w-40 cover  border-8 rounded-full ' + st2} /></td>
      <td onClick={()=>{setEve(!eve)}}><img src={night} alt="night" className={'h-40 w-40 cover border-8 rounded-full  ' + st3} /></td>
    </tr>
    <tr align='center'>
      <td className='pt-2 '> <input type="time" name="morning" id="mor" /> </td>
      <td className='pt-2'><input type="time" name="noon" id="noo" /></td>
      <td className='pt-2'><input type="time" name="evening" id="eve" /></td>
    </tr>
  </table>
  <h1 className='text-2xl font-bold mt-4 pb-2'>Select date : </h1>
  <table className='w-full mt-2 '>
    <tr>
        {/* <td align='right' className='w-1/4 pr-4'> </td> */}
      <td align='right' className='w-1/4 px-10'>From : <input type="date" name="" id="" /></td>
      {/* <td align='right' className='w-1/4 pr-4'>To : </td> */}
      <td align='left' className='w-1/4 px-10'>To :<input type="date" name="" id="" /></td>
    </tr>
  </table>

 <div className=' w-1/4  ' style={{float : 'right'}}>
 <button className='mt-4 bg-blue-300 p-2 rounded-3xl w-3/4 '>Add</button>
 </div>

 





 </div> 
</div>
    </div>
    </div>
  )
}
