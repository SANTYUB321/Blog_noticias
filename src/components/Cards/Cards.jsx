import React from 'react'
import { JsonNews } from '../JsonNews/JsonNews'


export const Cards = ({imageSorce, date, descripcion}) => {
  return (
    <div className=' w-3-5 flex justify-around m-2.5 bg-slate-900 rounded-lg mr-28'>
        <div className='pl-2 py-2'>
            <img src={imageSorce} alt="" className='w-24 h-20' />
        </div>
        <div className='w-4/5 mx-5 mt-1'>
        <p className='text-gray-500'>{date}</p>
        <h2 className='text-white' >{descripcion}</h2>
        <hr className='mt-2 ' />
        </div>
        

    </div>
  )
}
