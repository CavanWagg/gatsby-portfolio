import React from "react"
import Footer from '../Footer'
import headShot from "../../../static/wagg-cavan.png"


export default () => {
  return (
    <header className="main-grid header">
      <div className="header-content">
        <div href="#" className="avatar"
        ><img
            className="face"
            src={headShot}
            alt="Cavan Wagg - Front End Developer"
          /></div>
        <h1 className='header-title'>
          I'm <span>Cavan</span> <br /><strong>front-end dev</strong>
        </h1>
      </div>
      <Footer footerType="footer-landscape" />
    </header>
  )
}