import React from 'react'
import New4 from '../../assets/new01.jpg'

export const News = () => {
  return (
    <div className=' flex flex-col p-2.5 w-2/4 h-3/5 items-center '>
      <section className=' flex flex-col w-96  h-96 items-center   bg-slate-900 pt-7 rounded-lg'>
        <div className='w-4/5 h-2/5'>
            <img src={New4} alt="" className='w-full h-full' />
        </div>
        <div className='w-4/5'>
        <p className='text-gray-500'>19/05/2022</p>

        <h2 className='text-white text-lg' >Microsoft lanzó cursos gratuitos para aprender a programar por internet</h2>
        <p className='text-gray-500' >La diferencia con este curso, según reportaron desde Microsoft, está puesta en su dos principios pedagógicos que lo diferencian del resto de las opciones actualmente disponibles</p>
        
        </div>
        </section>

    </div>
  )
}
