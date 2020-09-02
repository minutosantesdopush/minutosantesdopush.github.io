import React from "react"
import { withStyles } from '@material-ui/core/styles';
import { formatSubheader } from '../util/post';


const useStyles = withStyles(() => ({
  post: {
    background: '#FFF',
    position: 'absolute',
    right: '0',
    top: '0',
    height: '100vh',
    overflow: 'scroll',
    padding: '50px 20px',
  },
  topper: {
    background: 'rgba(0, 0, 0, 0.05)',
    padding: '10px 30px',
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
  },
  title: {
    fontSize: '40px',
    padding: '0 10px 5px',
  },
  content: {
    paddingBottom: '80px',
    '& ul': {
      padding: '10px 20px 10px 35px'
    },
    '& p': {
      padding: '10px',
    },
    '& h2': {
      padding: '15px 10px 0',
      fontSize: '24px',
      fontWeight: '400',
    },
    '& strong': {
      fontWeight: 'bold'
    },
    '& blockquote': {
      opacity: '0.6',
      fontSize: '25px',
      padding: '10px',
      textAlign: 'center',
    }
  }
}));

export const PostTemplate = ({ classes, pageContext: { title, date, html, timeToRead } }) => (
  <div className={classes.post}>
    <span className={classes.topper}>
    { formatSubheader({ frontmatter: { date }, timeToRead })}
    </span>
    <h1 className={classes.title}>{title}</h1>
    <div
      className={classes.content}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  </div>
)

export default useStyles(PostTemplate);
