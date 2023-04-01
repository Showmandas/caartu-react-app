import React from 'react';
import './Items.css'

const SingleItem = (props) => {
    const{id,img,title,description}=props.dataitem;
    return (
        
            <div className='col-12 col-md-12 col-lg-4 my-4'>
            <div className="card shadow" id='serviceCard'>
  <img src={img} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href="#" className="btn bg-warning text-light w-100 fw-bold" id='exploreBtn'>Explore</a>
  </div>
</div>
</div>
        
    );
};

export default SingleItem;