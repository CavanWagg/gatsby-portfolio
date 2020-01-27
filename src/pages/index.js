import React from "react"
import Header from "../components/Header"
import About from "../components/Main/About"
import Projects from "../components/Main/Projects"
import Experience from "../components/Main/Experience"
import Footer from "../components/Footer"
import Helmet from "react-helmet"
import favicon32 from "../../static/favicon32.png";
import favicon57 from "../../static/favicon57.png";
import favicon76 from "../../static/favicon76.png";

export default () => {
  return (
    <div>
      <Helmet
        title={'Cavan Wagg - Front-End Dev'}
        meta={[
          {
            name: "description",
            content: "Cavan Wagg - Front-End Web Developer",
          },
          {
            name: "keywords",
            content: "frontend, developer",
          },
        ]}
        link={[
          { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Fira+Code:400,700|Noto+Sans:400,700&display=swap" },
          { rel: 'icon', type: 'image/png', sizes: "32x32", href: `${favicon32}` },
          { rel: 'icon', type: 'image/png', sizes: "57x57", href: `${favicon57}` },
          { rel: 'shortcut icon', type: 'image/png', href: `${favicon76}` },
        ]}
      />
      <Header />
      <About />
      <Projects />
      <Experience />
      <Footer footerType="footer-mobile" />
    </div>
  )
}


