import React from 'react'
import ImageGallery from 'react-image-gallery'
import "react-image-gallery/styles/css/image-gallery.css"
import Prog1 from '../../assets/prog-1.jpg'
import Prog2 from '../../assets/prog-2.jpg'
import Prog3 from '../../assets/prog-3.jpg'

export const GalleryImages = () => {
    const images = [

     {   
        original: Prog1,
    
    },
    {   
      original: Prog2,
    
    },
    {   
      original: Prog3,
    
    }

    ]
  return (
    <div className='w-full h-auto  bg-slate-900 py-10'>
        <ImageGallery  items={images} />
    </div>
  )
}
