import React from 'react';
import './Slider.css'

const SlideContent = (props) => {
    console.log(props.slideinfo);
    const{img,title,id,description}=props.slideinfo;
    return (
        <div className="carousel-item active">
      <img src={img} className="d-block w-100 h-50 img-fluid" id='slideImg' alt="..."/>
      <div className="text-dark carousel-caption border border-warning-subtle w-50 m-auto d-flex flex-column" id='slidecontent'>
        <h4 className='fw-bold'>{title}</h4>
        <p className='fw-semibold'>{description}</p>
      </div>
    </div>
    );
};

export default SlideContent;