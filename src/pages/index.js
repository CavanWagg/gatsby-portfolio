import React from "react"
import Header from "../components/Header"
import About from "../components/Main/About"
import Projects from "../components/Main/Projects"
import Experience from "../components/Main/Experience"
import Footer from "../components/Footer"
import Helmet from "react-helmet"

export default () => {
  return (
  <div>
    <Helmet>
    <link href="https://fonts.googleapis.com/css?family=Noto+Sans:400,700&display=swap" rel="stylesheet"/>
    </Helmet>
      <Header />
      <About />
      <Projects />
      <Experience />
      <Footer footerType="footer-mobile"/>
  </div>
  )
}


