import React from 'react';

const AboutUs = () => {
    return (
        <div className='container'>
            <div className='row shadow my-3 p-5' style={{backgroundColor:"#F7DB6A"}}>
                <div className="col-md-12 col-12 col-lg-6 mt-5">
                    <h2>About Us</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum vero cumque ipsum sapiente deleniti doloribus facilis! Nemo dicta tenetur commodi. Quas, qui ratione! Saepe inventore tenetur odit quia magnam excepturi eveniet incidunt, veniam omnis facilis enim blanditiis rem dolores harum aliquid quaerat quod fugit, mollitia corporis nobis nihil sequi error? Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis minus quo ducimus maiores tempore nemo dolores hic assumenda! Exercitationem aperiam illum optio quae beatae, distinctio accusamus dolor doloremque impedit totam non molestias delectus reprehenderit voluptatibus perferendis neque voluptate architecto vero? Rem repudiandae quis atque, exercitationem quia distinctio nostrum illum deserunt! </p>
                    <a href="#" className='btn bg-warning-subtle border border-warning border-2'>Know More...</a>
                </div>
                <div className="col-md-12 col-12 col-lg-6">
                    <img src="../../../public/images/chef.avif" alt="about" className='img-fluid rounded border border-warning shadow' />
                </div>

            </div>
        </div>
    );
};

export default AboutUs;