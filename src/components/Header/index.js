import React from "react"
import Footer from '../Footer'

export default () => {
  return (
  <header className="main-grid" id="header">
    <div className="header-content">
      <div href="#" className="avatar"
      ><img
          className="face"
          src={"/images/wagg-cavan.png"}
          alt="Cavan Wagg - Front End Developer"
        /></div>
      <h1>
        I'm Cavan, <strong>Front End Developer</strong> <br />
        &amp; <strong>Handcrafted Code Creator</strong>
      </h1>
    </div>
    <Footer footerType="footer-landscape" />
  </header>
  )}