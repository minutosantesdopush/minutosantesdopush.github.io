import React from 'react';
import Header from '../Header';
import Hero from '../Hero';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import "./Layout.scss"

const useStyles = withStyles((theme) => ({
  root: {
    position: 'relative',
    flexGrow: 1,
  },
  content: {
    position: 'absolute',
    top: '-40vh'
  },
}));

export const Layout = ({ children, classes }) => (
    <div className={classes.root}>
        <Hero />
        <Grid container className={classes.content}>
            { children }
        </Grid>
    </div>
);

export default useStyles(Layout);