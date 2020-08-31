import React from 'react';
import { withStyles } from '@material-ui/core/styles';

export const Bubble = ({
    boxStyle: { xs = {} , md = {} , lg = {} },
    bubbles, bubbleStyle = {}, bubbleAnimationOpacity = '0.4',
}) => {
    const useStyle = withStyles((theme) => ({
        '@keyframes bubble': {
            '0%': { transform: 'scale(0)' },
            '90%': { opacity: bubbleAnimationOpacity },
            '100%': { transform: 'scale(1.1)', opacity: 0 },
        },
        bubbles: {
            ...xs,
            [theme.breakpoints.up('md')]: md,
            [theme.breakpoints.up('lg')]: lg,
            position: 'absolute',
            '& > span': {
              position: 'absolute',
              top: '0px',
              display: 'block',
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              opacity: 0,
              transform: 'scale(0)',
              background: '#FFF',
              ...bubbleStyle,
              ...(
                !bubbles ? {} : bubbles.reverse().reduce((prev, current, idx) => ({
                    ...prev,
                    [`&:nth-child(${idx + 1})`]: {
                        ...current,
                        animationName: '$bubble',
                        animationDuration: '3s',
                        animationDelay: `${idx}s`,
                        animationTimingFunction: 'linear',
                        animationIterationCount:'infinite',
                    }
                }), {})
              )
            }
          }
    }));

    const Component = useStyle(({ classes }) => (
        <div className={classes.bubbles}>
            {
                (bubbles || []).map((_, idx) => (
                    <span key={idx} />
                ))
            }
        </div>
    ));

    return <Component />
};

export default Bubble;