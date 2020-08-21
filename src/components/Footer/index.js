import React from "react"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"
import { FiCodesandbox } from "react-icons/fi"
export default ({ footerType }) => {
  return (
    <footer className={`main-grid ${footerType} `} id="footer">
      <div className="inner">
        <ul className="icons">
          <li>
            <a
              target="_blank"
              href="https://github.com/CavanWagg"
              className="icon fa-github"
            >
              <FaGithub />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/cavan-wagg/"
              className="icon fa-linkedin"
            >
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://codesandbox.io/u/CavanWagg/sandboxes"
              className="icon fi-Codesandbox"
            >
              <FiCodesandbox />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;tf=1&amp;to=cavan.wagg@gmail.com"
              className="icon fa-envelope-o"
            >
              <FaEnvelope />
            </a>
          </li>
        </ul>
        <ul className="copyright">
          <li className="copy-info">&copy; Cavan Wagg 2020</li>
        </ul>
      </div>
    </footer>
  )
}
