import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const baseLogoStyle = {
    fontFamily: "'Rock Salt', cursive",
    fontSize: '45px',
    width: '350px',

    '& > small': {
        fontFamily: "'Rock Salt', cursive",
        fontSize: '30px',
        textAlign: 'center',
        display: 'block'
    }
};

const useStyles = withStyles(() => ({
    logoWrapper: {
        textAlign: 'center',
        position: 'relative',
    },
    logo: {
        ...baseLogoStyle,
        color: '#6bb896',
    },
    logoReflect: {
        ...baseLogoStyle,
        color: '#FFF',
        position: 'absolute',
        top: '3px',
        width: '350px',
        left: '2px',
    }
}));

export const Logo = ({ classes }) => (
    <div className={classes.logoWrapper}>
        <h1 className={classes.logo}>
            <small>Minutos antes</small>
            do Push!
        </h1>
        <span className={classes.logoReflect}>
            <small>Minutos antes</small>
            do Push!
        </span>
    </div>
);

export default useStyles(Logo);