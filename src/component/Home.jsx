import React from 'react';
import Products from './Products';

const Home = () => {
    return (
        <div className='hero'>
            <div className="card bg-dark text-white border-0">
                <img src="/assets/image/background/bg-1.jpg" className="card-img" alt="Background" style={{ height: '500px', objectFit: 'cover' }} />
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <div className="container">
                        <h5 className="card-title display-3 fw-bold mb-0">NEW SEASION ARRIVALS</h5>
                        <p className="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>
                    </div>
                </div>
            </div>
            <Products />
        </div>
        
    );
}

export default Home;