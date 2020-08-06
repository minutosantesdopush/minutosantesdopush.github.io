import React from "react"

export const PostTemplate = ({ pageContext: { title, date, html } }) => (
  <div className="blog-post">
    <h1>{title}</h1>
    <h2>{date}</h2>
    <div
      className="blog-post-content"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  </div>
)

export default PostTemplate
