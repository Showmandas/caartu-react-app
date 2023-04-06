import React, { useEffect, useState } from 'react';
import SlideContent from './SlideContent';

const Slider = () => {
    // for slider 
    const[slider,setSlider]=useState([]);

    useEffect(()=>{
        fetch('SlideInfo.json')
        .then(res=>res.json())
        .then(data=>setSlider(data))
    },[])

    return (
        <div id="carouselExampleCaptions" className="carousel slide container acitve">
  
  <div className="carousel-inner">
    {
        slider.map(slideinfo=>{
            return <SlideContent slideinfo={slideinfo} key={slideinfo.id}/>
        })
    }
    
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    );
};

export default Slider;