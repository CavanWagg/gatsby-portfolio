import React from "react"
import drinkmaker from "../../../static/drinkmaker.jpg"
import loveFoundation from "../../../static/love-foundation.png"
import pomodoro from "../../../static/pomodoro.png"
import sickFits from "../../../static/sick-fits.png"


export default () =>
  <div className="main-grid">
    <section className="two">
      <header className="major"><h2>Recent Work</h2></header>
      <div className="work-container">
        <article className="work-item">
          <a
            target="_blank"
            href="https://drinkworks.com/"
            className="image fit thumb"
          ><img src={drinkmaker} alt="Drinkworks"
            /></a>

          <h3>Drinkworks<span>&#174;</span></h3>
          <p>
            Ecommerce site for Drinkworks<span>&#174;</span>.
        </p>
        </article>
        <article className="work-item">
          <a
            target="_blank"
            href="https://sickfits-next-ckw.herokuapp.com/items"
            className="image fit thumb"
          ><img src={sickFits} alt="Drinkworks"
            /></a>

          <h3>Sick Fits</h3>
          <p>
            Full-stack online store application built with React, Apollo, Graphql, and Prisma. from Wes Bos' course
        </p>
        </article>
        <article className="work-item">
          <a
            target="_blank"
            href="https://priceless-leakey-c384c9.netlify.com/"
            className="image fit thumb"
          ><img src={pomodoro} alt="Pomodoro App"
            /></a>
          <h3>React Pomodoro</h3>
          <p>
            A timer for executing the pomodoro productivity technique.
            Alternate between work sessions and break sessions and receive
            sound or web notifications.
        </p>
        </article>
        <article className="work-item">
          <a
            target="_blank"
            href="https://donationnation.herokuapp.com/"
            className="image fit thumb"
          ><img src={loveFoundation} alt="Donation App"
            /></a>

          <h3>Love Foundation</h3>
          <p>
            A MERN stack donation app for non-profits. Users can create a
            profile and give one-time or monthly donations through use of the
            Stripe API.
            </p>
        </article>
      </div>
      <a className='more-link' href="https://github.com/CavanWagg">More...</a>
    </section>
  </div>