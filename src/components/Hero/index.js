import React from 'react';
import clx from 'classnames';
import { withStyles } from '@material-ui/core/styles';

import Bubble from '../Bubble';

const useStyles = withStyles((theme) => ({
  root: {
    position: 'relative',
    height: '280px',
    width: '280px',
    bottom: 0,
    [theme.breakpoints.up('md')] :{
      position: 'absolute',
      width: '500px',
      height: '500px',
    },
    [theme.breakpoints.up('lg')] :{
      width: '750px',
      height: '750px',
    }
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
  '@keyframes boom': {
    '0%': { transform: 'scale(1)' },
    '50%': { transform: 'scale(1.1)' },
    '100%': { transform: 'scale(1)' },
  },
  '@keyframes yeshead': {
    '0%': { bottom: '0px' },
    '40%': { bottom: '-6px' },
    '75%': { bottom: '0px' },
  },
  '@keyframes flaskhang': {
    '0%': { left: '0px' },
    '25%': { left: '-1px', bottom: '3px', transform: 'rotate(1deg)' },
    '75%': { left: '1px', bottom: '-3px', transform: 'rotate(-1deg)' },
    '100%': { left: '0', transform: 'rotate(0deg)' },
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
    animationName: '$boom',
    animationDuration: '2s',
    animationTimingFunction: 'linear',
    animationIterationCount:'infinite',
    [theme.breakpoints.up('md')] :{
      maxWidth: '500px',
      height: '500px',
    },
    [theme.breakpoints.up('lg')] :{
      maxWidth: '750px',
      height: '750px',
    }
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
  },
}));

const topReactFlaskBubbles = {
  boxStyle: {
    md: {
      left: '430px',
      width: '25px',
      bottom: '320px',
      height: '35px'
    },
    lg: {
      left: '650px',
      width: '30px',
      bottom: '480px',
    }
  },
  bubbles: [
    { top: '0px', left: '5px' },
    { top: '10px', right: '5px' },
    { top: '20px', left: '5px' },
  ]
}

const topPythonFlaskBubbles = {
  boxStyle: {
    md: {
      left: '175px',
      width: '30px',
      bottom: '185px',
      height: '35px',
      transform: 'rotate(-15deg)',
    },
    lg: {
      left: '275px',
      width: '35px',
      bottom: '280px',
    }
  },
  bubbleAnimationOpacity: '0.8',
  bubbleStyle: {
    background: '#6769f8',
  },
  bubbles: [
    { top: '0px', left: '5px' },
    { top: '10px', right: '5px' },
    { top: '20px', left: '5px' },
  ]
}

const insideReactFlaskBubbles = {
  boxStyle: {
    md: {
      left: '185px',
      width: '70px',
      bottom: '80px',
      height: '20px',
    },
    lg: {
      left: '290px',
      width: '90px',
      bottom: '125px',
      height: '25px',
    }
  },
  bubbles: [
    { top: '0px', left: '5px' },
    { top: '10px', right: '5px' },
    { top: '10px', left: '15px' },
  ]
}

const insidePythonFlaskBubbles = {
  boxStyle: {
    md: {
      left: '405px',
      width: '65px',
      bottom: '210px',
      height: '20px',
    },
    lg: {
      left: '610px',
      width: '85px',
      bottom: '315px',
      height: '25px',
    }
  },
  bubbles: [
    { top: '0px', left: '5px' },
    { top: '10px', right: '5px' },
    { top: '10px', left: '15px' },
  ]
}

export const Hero = ({ classes }) => (
    <div className={classes.root}>
      <div className={classes.circlebg} />
      <img className={classes.image} src="/body.png" alt="animation body"/>
      <img className={clx(classes.image, classes.head)} src="/head.png" alt="animation head"/>
      <img className={clx(classes.image, classes.flask)} src="/reactflask.png" alt="animation flask"/>
      <img className={classes.image} src="/hand.png" alt="animation hand" />
      <Bubble {...topReactFlaskBubbles} />
      <Bubble {...topPythonFlaskBubbles} />
      <Bubble {...insideReactFlaskBubbles} />
      <Bubble {...insidePythonFlaskBubbles} />
    </div>
);

export default useStyles(Hero);