import React from "react"

export const GuideTemplate = ({ pageContext: { title, html } }) => (
  <div className="blog-post">
    <h1>{title}</h1>
    <div
      className="blog-post-content"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  </div>
)

export default GuideTemplate
