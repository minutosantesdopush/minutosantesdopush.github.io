import React from 'react';
import clx from 'classnames';
import { withStyles } from '@material-ui/core/styles';

// 7fd9b3  -> most
// 6bb896 -> cicle

const useStyles = withStyles((theme) => ({
  root: {
    height: '100vh',
    position: 'relative',
    background: '#7fd9b3',
  },
  image: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0,
    maxWidth: '280px',
    [theme.breakpoints.up('md')] :{
      maxWidth: '500px',
    },
    [theme.breakpoints.up('lg')] :{
      maxWidth: '750px',
    }
  },
  circlebg: {
    width: '100%',
    position: 'absolute',
    bottom: '-100px',
    left: 0,
    maxWidth: '280px',
    height: '280px',
    background: '#6bb896',
    borderRadius: '50%',
    [theme.breakpoints.up('md')] :{
      maxWidth: '500px',
      height: '500px',
    },
    [theme.breakpoints.up('lg')] :{
      maxWidth: '750px',
      height: '750px',
    }
  },
  '@keyframes yeshead': {
    '0%': { bottom: '0px' },
    '40%': { bottom: '-6px' },
    '75%': { bottom: '0px' },
  },
  '@keyframes flaskhang': {
    '0%': { left: '0px' },
    '25%': { left: '1px', tranform: 'rotate(4deg)' },
    '75%': { left: '-1px', tranform: 'rotate(-4deg)' },
    '100%': { left: '0', tranform: 'rotate(0deg)' },
  },
  head: {
    animationName: '$yeshead',
    animationDuration: '2s',
    animationTimingFunction: 'linear',
    animationIterationCount:'infinite',
    [theme.breakpoints.up('lg')] :{
      animationDuration: '1s',
    }
  },
  flask: {
    animationName: '$flaskhang',
    animationDuration: '1s',
    animationTimingFunction: 'linear',
    animationIterationCount:'infinite',
    [theme.breakpoints.up('lg')] :{
      animationDuration: '.5s',
    }
  },
  bubbles: {
    '> span': {
      display: 'block',
      width: '10px',
      height: '10px',
      borderRadius: '50%',
      background: 'rgba(255, 255, 255, 0.3)'
    }
  }
}));

export const Hero = ({ classes }) => (
    <div className={classes.root}>
      <div className={classes.circlebg} />
      <img className={classes.image} src="/body.png" />
      <img className={clx(classes.image, classes.head)} src="/head.png" />
      <img className={clx(classes.image, classes.flask)} src="/reactflask.png" />
      <img className={classes.image} src="/hand.png" />
      <div class={classes.bubbles}>
        <span />
      </div>
    </div>
);

export default useStyles(Hero);