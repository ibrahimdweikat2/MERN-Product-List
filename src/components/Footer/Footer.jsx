import React from 'react'

const Footer = () => {
  return (
    <div className='p-3 d-flex justify-content-between algin-items-center bg-black text-muted fw-bold rounded-4'>
      <div className='mx-3'>
        ReactProduct&copy;
      </div>
      <div className='d-flex justify-content-between algin-items-center gap-3'>
        <div>
          <i className="fa-brands fa-facebook"></i>
        </div>
        <div>
          <i className="fa-brands fa-facebook-messenger"></i>
        </div>
        <div>
          <i className="fa-brands fa-twitter"></i>
        </div>
        <div>
          <i className="fa-brands fa-instagram"></i>
        </div>
      </div>
    </div>
  )
}

export default Footer