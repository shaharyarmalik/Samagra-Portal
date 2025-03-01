import React from 'react'

export default function Navbar() {
  return (
   
          <nav className="navbar navbar-expand-lg sticky-top n bg-body-tertiary fixed-header-sm border-bottom border-danger border-2">
      <div className="container-fluid text-start">
        <a className="navbar-brand" href="#">
          <img src="SamagraLogo.png" alt="Logo" height={55} />
        </a>
        <h2 className='col-lg-4' id='logo-title'>समग्र पोर्टल</h2>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active border-bottom border-danger border-2 text-danger" aria-current="page" href="#">
                होम
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
              समग्र मिशन
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
              समग्र कार्यक्रम
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
              समग्र पोर्टल
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
              शासकीय आदेश व निर्देश
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
              यूजर मैनुअल
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
              संपर्क
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
              प्राइवेसी पॉलिसी
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
 
  )
}
