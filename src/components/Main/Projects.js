import React from "react"

export default () =>

  <section className="main-grid" id="two">
    <header className="major"><h2>Recent Work</h2></header>
    <div className="work-container">
      <article className="work-item">
        <a
          target="_blank"
          href="https://donationnation.herokuapp.com/"
          className="image fit thumb"
        ><img src="/images/love-foundation.png" alt="Donation App"
          /></a>

        <h3>Love Foundation</h3>
        <p>
          A MERN stack donation app for non-profits. Users can create a
          profile and give one-time or monthly donations through use of the
          Stripe API.
            </p>
      </article>
      <article className="work-item">
        <a
          target="_blank"
          href="https://footballer-app.herokuapp.com/"
          className="image fit thumb"
        ><img src="/images/footballer.png" alt="Footballer Game"
          /></a>

        <h3>Footballer</h3>
        <p>
          A full-stack application utilizing Node.js, Express, Sequelize,
          and Handebars. Play as the Vikings and run or pass your way to
          victory. Choose an NFL team to play against. The game uses real
          NFL team stats paired with probability functions to determine the
          outcome of the play.
            </p>
      </article>
      <article className="work-item">
        <a
          target="_blank"
          href="https://boringpoliticalapp.herokuapp.com/"
          className="image fit thumb"
        ><img src="/images/Political.png" alt="Political App"
          /></a>

        <h3>Boring Political App</h3>
        <p>
          A front-end political app. The user can access upcoming bills
          relevant to their search and see their local representatives based
          on address or location.
            </p>
      </article>
      <article className="work-item">
        <a
          target="_blank"
          href="https://priceless-leakey-c384c9.netlify.com/"
          className="image fit thumb"
        ><img src="/images/Pomodoro.png" alt="Pomodoro App"
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
          href="https://reactjs-nyt-search.herokuapp.com"
          className="image fit thumb"
        ><img src="/images/nyt-react.png" alt="Article Search App"
          /></a>

        <h3>React NYT Search</h3>
        <p>
          Search for articles by accessing the New York Times Article Search
          API. Save articles for for later, and delete then from the
          database.
            </p>
      </article>
      <article className="work-item">
        <a
          target="_blank"
          href="https://unruffled-lumiere-91d1f3.netlify.com/"
          className="image fit thumb"
        ><img src="/images/Train.png" alt="Train Scheduler App"
          /></a>

        <h3>Train Time</h3>
        <p>
          A train schedule application that incorporates Firebase to host
          arrival and departure data. The app calculates when the next train
          will arrive relative to the current time. Users from different
          machines will be able to view same train times.
            </p>
      </article>
    </div>
  </section>