import React from 'react'

const FooterSection = () => {
  return (
    <div className=' container-md mt-5 ms-md-5'>
        <div className=' container-md d-flex ms-md-5'>
            <h6 className="fw-bold border-end pe-3 border-dark fs-3">Tech Stack</h6>
            <div className='d-flex justify-content-center align-items-around'>
                <i className="fa fa-html5 mx-3 text-warning fs-3"></i>
                <i className="fa fa-css3 mr-2 text-primary fs-3"></i>
                <i className="fa fa-trello mx-3 fs-3"></i>
                <i className="fa fa-html5 mr-3 fs-3"></i>
                <i className="fa fa-html5 mx-3 fs-3"></i>
                <i className="fa fa-html5 mr-5 fs-3"></i>
            </div>
        </div>
        
    </div>
  )
}

export default FooterSection
