import React, { useEffect, useState } from 'react';
// import SingleItem from './SingleItem';
import TShirt from './ServiceCards/TShirt'
import Meals from './ServiceCards/Meals';
import Cake from './ServiceCards/Cake';
const Items = () => {
    const[items,setItems]=useState([]);
    useEffect(()=>{
        fetch('SlideInfo.json')
        .then(res=>res.json())
        .then(data=>setItems(data))
    },[])
    return (
        <div className='shadow-sm card container my-5 p-5' id='services'>
            <h2>Services</h2>
            <hr className='w-25 border-4'/>
            <div className='row row-cols-3'>

            <TShirt/>
            <Meals/>
            <Cake/>
            </div>
        </div>
    );
};

export default Items;