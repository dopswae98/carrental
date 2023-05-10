import React from 'react'
import "./mobileapp.css";
import img1 from "../images/kin.png";

const MobileApp = () => {
  return (
    <div>
        <div className="nav-section bg-light px-5">
            <div className=" text-center border border-dark border-start-0 border-end-0 border-top-0 p-3">
                <h2 fw-bold self-center>Vega</h2>
            </div>
        </div>
        <div className="stories p-3 container ">
            <div className="d-flex flex-row align-items-center justify-content-around">
                <div className="story-all">
                    <div className="stories-holder d-flex align-items-center justify-items-center">
                        <div className="story m-auto">
                            jdskjdk
                        </div>
                    </div>
                    <p className='text-center mt-1'>Ephraim</p>
                </div>
                <div className="story-all">
                    <div className="stories-holder d-flex align-items-center justify-items-center">
                        <div className="story m-auto">
                            jdskjdk
                        </div>
                    </div>
                    <p className='text-center mt-1'>Ephraim</p>
                </div>
                <div className="story-all">
                    <div className="stories-holder d-flex align-items-center justify-items-center">
                        <div className="story m-auto">
                            <img src={img1} alt="" />
                        </div>
                    </div>
                    <p className='text-center mt-1'>Ephraim</p>
                </div>
                <div className="story-all">
                    <div className="stories-holder d-flex align-items-center justify-items-center">
                        <div className="story m-auto">
                            jdskjdk
                        </div>
                    </div>
                    <p className='text-center mt-1'>Ephraim</p>
                </div>
            </div>
            <div className="discount rounded container bg-warning">
                <div className='py-3'>
                    <div className="top-discount d-flex justify-content-between align-items-center">
                        <h3>Discount for automn collection 10% Off</h3>
                        <div className="stories-holder d-flex align-items-center justify-items-center">
                            <div className="story m-auto">
                                <img src={img1} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="bottom-discount d-flex justify-content-between align-items-center pt-4">
                        <h2 className='h1'>08:34:52</h2>
                        <div className="story m-auto">
                            <img src={img1} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="new-collection">
            <div className="container">
                <h1 className="h1">New Collection</h1>
                <div className="collection-banner  rounded overflow-none bg-primary d-flex flex-column">
                    <div className="story  d-flex align-self-end mt-1">
                        <img src={img1} alt="" />
                    </div>
                    <div className="story  d-flex align-self-center">
                        <img src={img1} alt="" />
                    </div>
                    <div className="story  d-flex align-self-start mb-1">
                        <img src={img1} alt="" />
                    </div>
                </div>
                <div className="sneakers my-3">
                    <div className="sneaker-banner">
                        <h1 className="h1">Sneaker</h1>
                    </div>
                </div>
                <div className="categories my-3">
                    <div className="categories-banner">
                        <h1 className="h1">Categories</h1>
                        <div className="categories-container d-flex justify-content-between">
                            <div className="img img-1">
                                <img src={img1} alt="" />
                            </div>
                            <div className="img bg-danger img-2">
                                <img src={img1} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer fixed-bottom bg-info py-3 px-0 opacity-25">
            <div className="container">
                <div className="icons d-flex justify-content-around align-items-center">
                    <div className="home d-flex align-items-center justify-content-center bg-warning p-2">
                        <i className="fa fa-home fs-1"></i>
                        <h5 className='my-auto ms-2'>HOME</h5>
                    </div>
                    <i className="fa fa-search fs-1 fw-bold"></i>
                    <i className="fa fa-shopping-bag fs-1"></i>
                    <i className="fa fa-user fs-1 "></i>
                </div>
            </div>
        </div>
        <div className="space mt-5">
            <p className='text-hidden'>dkjfk</p>
        </div>
    </div>
  )
}

export default MobileApp
