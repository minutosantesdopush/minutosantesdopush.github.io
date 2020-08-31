import React from "react"
import { withStyles } from '@material-ui/core/styles';



const useStyles = withStyles(() => ({
  post: {
    background: '#FFF',
    position: 'absolute',
    right: '0',
    top: '0',
    height: '100vh',
    overflow: 'scroll',
    padding: '20px',
  }
}));

export const PostTemplate = ({ classes, pageContext: { title, date, html } }) => (
  <div className={classes.post}>
    <h1>{title}</h1>
    <h2>{date}</h2>
    <div
      className="blog-post-content"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  </div>
)

export default useStyles(PostTemplate);
