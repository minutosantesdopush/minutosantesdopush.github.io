import React from 'react';
import Hero from '../Hero';
import Logo from '../Logo';
import { withStyles } from '@material-ui/core/styles';

import "./Layout.scss"

const useStyles = withStyles((theme) => ({
  root: {
    position: 'relative',
    flexGrow: 1,
    height: '100vh',
    background: '#7fd9b3',
    overflowX: 'hidden',
    [theme.breakpoints.up('md')] :{
      overflowY: 'hidden',
    }
  },
  content: {
    position: 'relative',
    zIndex: 1,
    right: '0',
    padding: '0 20px 20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      marginBottom: '20px',
    },

    [theme.breakpoints.up('md')] :{
      position: 'absolute',
      padding: '20px',
      width: '50%',
      '& > *': {
        maxWidth: '650px',
        marginBottom: '40px',
      }
    },

    [theme.breakpoints.up('lg')] :{
      '& > *': {
        maxWidth: '800px',
        marginBottom: '50px',
      }
    }
  },
  logo: {
    position: 'relative',
    height: '100px',

    '& > div': {
      position: 'absolute',
      right: 'calc(-50% + 135px)',
      top: '15px',
      transform: 'scale(0.7) rotate(20deg)',
    },

    [theme.breakpoints.up('md')] :{
      position: 'absolute',
      height: '0',
      transform: 'scale(1.3) rotate(-20deg)',
      bottom: '700px',
      left: '50px',

      '& > div': {
        position: 'relative',
        right: 'auto',
        top: 'auto',
        transform: 'none',
      }
    },

    [theme.breakpoints.up('lg')] :{
      bottom: '950px',
      left: '100px',
    }
  }
}));

export const Layout = ({ children, classes }) => (
  <div className={classes.root}>
    <div className={classes.logo}>
      <Logo />
    </div>
    <Hero />
    <div className={classes.content}>
      { children }
    </div>
  </div>
);

export default useStyles(Layout);