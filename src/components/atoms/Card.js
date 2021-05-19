import React from "react"

const Card = ({ heading, paragraph, imgUrl, projectLink, githubRep, links}) => {
  return (
    <div
      className="card"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.2)),url(" +
          imgUrl +
          ")",
      }}
    >
      <div className="content">
        <h1 className="header">{heading}</h1>
        <p className="text">{paragraph}</p>
        {links && links.map((link) => (
        <a
          href={link.url ? link.url : "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          {link.text}
        </a>))}
        {/* {githubRep && <a
          href={githubRep ? githubRep : "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >Github</a>} */}
      </div>
    </div>
  )
}

export default Card
