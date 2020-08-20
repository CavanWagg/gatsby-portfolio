import React, { useEffect } from "react"

export default () => {
  return (
    <div className="main-grid">
      <section>
        <header className="major">
          <h2>Blog</h2>
        </header>
        <div
          id="retainable-rss-embed"
          data-rss="https://medium.com/feed/@waggx002"
          data-maxcols="1 "
          data-layout="grid"
          data-poststyle="external"
          data-readmore="Read the rest"
          data-buttonclass="readmore"
        />
      </section>
    </div>
  )
}
