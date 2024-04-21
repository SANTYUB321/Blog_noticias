import React from 'react'

export const Section = ({children}) => {
  return (
    <section className='w-full h-2/4 flex flex-wrap my-10 place-content-center'>
        {children}
    </section>
  )
}
