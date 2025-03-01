import React from 'react'

export default function Footer() {
  return (
    <>
    
    <div className='container-fluid fixed-bottom' id='footerr'>
    <footer className="footer ">
    <div className="container-fluid">
      <div className="row align-items-center text-center">
        <div className="col-md-4">
          <p className="text-white">
            Samagra Samajik Suraksha Mission, Govt. of Madhya Pradesh
          </p>
        </div>
        <div className="col-md-4 text-right">
          <p className="text-white">Total Hits: <span id='num'>93286</span></p>
        </div>

        <div className="col-md-4 text-right">
         
          <p className="text-white">Designed &amp; Developed by<span className='blink' style={{marginLeft:'5px', color:'#f2184f'}}>MPS DC</span></p>
        </div>
      </div>
    </div>
  </footer>
    </div>
    </>
  )
}
