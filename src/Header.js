import React from 'react'


export default function Header() {
  return (
    <>
      <header className="header-smg-scrolly">
        <div
          className="container-fluid"
          style={{ backgroundColor: "rgb(76, 72, 72)" }}
        >
          <div className="row">
            <div className="col-lg-6 col-sm-12" id="tophead">
              <div>
                <img src="headersamajik4.png" alt="" id="img-1" />
              </div>
              <div id="heading-top">
                समग्र सामाजिक सुरक्षा मिशन,
                <br />
                <span style={{ fontSize: 12 }}>मध्य प्रदेश शासन</span>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12" id="top-btn">
              <ul>
                <li>
                  <a href="">English</a>
                </li>
                <li>
                  <a href="">
                    <i className="bx bxs-phone" />
                    Helpline No.: 0755-2700800
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="bx bx-envelope" />
                    Email: samagra.support@mp.gov.in
                  </a>
                </li>
                <li>
                  <a href="" className='blink' style={{color:'#29ff29'}}>e-KYC करें</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* navbar start */}
        {/* <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-header-sm border-bottom border-danger border-2">
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
                समाचार
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                करियर
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                विज्ञापन
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                संपर्क करें
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
    </nav> */}
        {/* Start Marque text */}
        {/* <div className="container-fluid" id="slide-section">
          <div className="container">
            <div>
              <p id="news">Latest News</p>
            </div>
            <marquee
              direction="”right”"
              onmouseover="stop()"
              onmouseout="start()"
              style={{ marginTop: 8 }}
            >
              <span>
                🟥  एक समग्र आईडी होते हुए नवीन समग्र आईडी बनवाना नियम विरुध हैं|
              </span>
              <span>
                🟥  नवीन समग्र आईडी बनाने से पहले ये जांच लें, कि आपका समग्र पहले से
                बना हुआ तो नहीं हैं।
              </span>
              <span>
                🟥  नवीन समग्र बनाने के लिए आधार अनिवार्य हैं। समग्र में आधार ई-
                केवाईसी करने के 2 विकल्प उपलब्ध हैं ।
              </span>
              <span>
                🟥  1. आधार में दर्ज मोबाइल पर OTP के माध्यम से एवं 2. बायोमैट्रिक के
                माध्यम से।
              </span>
            </marquee>
          </div>
        </div> */}
      </header>

    </>
  )
}
