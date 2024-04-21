import React from 'react'
import new1 from '../../assets/New1.png'
import new2 from '../../assets/New2.png'
import new3 from '../../assets/New3.png'
import { Cards } from '../Cards/Cards'


export const jsonNews = [
  
{
 id:1,
  img : new1,
  date:'29/04/2023',
 descripcion: 'Python y Chat GPT, entre las habilidades que se demandan en la nueva economía',
},

{
  id:2,
  img: new2,
  date:'12/11/2022',
 descripcion: 'Las herramientas de Inteligencia Artificial que facilitan programar y desarrollar código',
},

{
id:3,
img: new3,
date:'16/07/2022',
 descripcion: 'La inteligencia artificial, un arma para prevenir y combatir los delitos cibernéticos',
},

]
export const JsonNews =() =>{
return(
  jsonNews.map(card =>(
    <div key={card.id}>
        <Cards imageSorce={card.img} date={card.date} descripcion={card.descripcion} />
    </div>
)
  )
  
)
}