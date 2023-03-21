import React from 'react'
import drink from '../assets/drink.png'
import car from '../assets/car.png'
import house from '../assets/house.png'
import wifi from '../assets/wifi.png'

const Facilities = () => {
    const data = [
        {
            id:1,
            text:'Welcome Drinks',
            photo: drink
        },
        {
            id:2,
            text:'Car Rental',
            photo: car 
        },
        {
            id:1,
            text:'Resort & Spa',
            photo: house
        },
        {
            id:1,
            text:'Free Wifi',
            photo: wifi
        },
    ]
  return (
    <div className="flex justify-center mt-[71px]">

    <div className='w-[840px] ' >
<div className="flex justify-between items-center">
    {
        data.map((item)=>{
            const {id,text,photo} = item
            return(
                <>

                <div className="bg-[#ff75000a] h-[74px] w-[74px] rounded-full flex items-center justify-center">
                 <img className='z-10' src={photo} alt="" /> 
                </div>
    <p className='w-[90px] h-[42px] font-semibold text-base'>{text}</p>
                </>
                
            )
        })
    }
   
</div>
    </div>
    </div>
  )
}

export default Facilities