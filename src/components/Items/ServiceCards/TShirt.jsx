import React from 'react';
// import { useLoaderData } from 'react-router-dom';

const ServiceCards = () => {
    
    return (
        <div className='col-12 col-md-12 col-lg-4 my-4'>
        <div className="card  shadow" id='serviceCard'>
<img src="https://img.freepik.com/free-psd/white-t-shirts-mockup-design_53876-98813.jpg?w=740&t=st=1680366876~exp=1680367476~hmac=b5bef95961b472b39754378c758cbace40b76c67d71b88914f994e887cfa2bfb" className="card-img-top" alt="..."/>
<div className="card-body">
<h5 className="card-title">T-shirt</h5>
<p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, facilis? Rem animi id facere dolores perspiciatis culpa eaque sequi exercitationem.</p>
<button className="btn bg-warning text-light w-100 fw-bold" id='exploreBtn'>Explore</button>
</div>
</div>
</div>
    );
};

export default ServiceCards;