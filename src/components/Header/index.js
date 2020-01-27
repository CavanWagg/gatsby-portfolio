import React from "react"
import Footer from '../Footer'

export default () => {
  return (
  <header className="main-grid header">
    <div className="header-content">
      <div href="#" className="avatar"
      ><img
          className="face"
          src={"/images/wagg-cavan.png"}
          alt="Cavan Wagg - Front End Developer"
        /></div>
      <h1 className='header-title'>
       I'm <span>Cavan</span> <br/><strong>front-end dev</strong>
      </h1>
    </div>
    <Footer footerType="footer-landscape" />
  </header>
  )}