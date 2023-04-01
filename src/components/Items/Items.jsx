import React, { useEffect, useState } from 'react';
import SingleItem from './SingleItem';

const Items = () => {
    const[items,setItems]=useState([]);
    useEffect(()=>{
        fetch('SlideInfo.json')
        .then(res=>res.json())
        .then(data=>setItems(data))
    },[])
    return (
        <div className='shadow-sm card' id='services'>
            <h2>Services</h2>
            <hr className='w-25 border-4'/>
            <div className='row row-cols-3'>

            {
                items.map(dataitem=>{
                    return <SingleItem dataitem={dataitem} key={dataitem.id}/>
                })
            }
            </div>
        </div>
    );
};

export default Items;