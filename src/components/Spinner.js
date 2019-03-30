/**
 * Shamelessly copied and lightly tweaked from https://codepen.io/anon/pen/oOvpxQ
 * as custom CSS animations are not my strong point.
 */
import React from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';

const Spinner = ({ classes }) => (
  <div className={classes.spinner}>
    <div className={classNames(classes.rect, classes.rect1)} />
    <div className={classNames(classes.rect, classes.rect2)} />
    <div className={classNames(classes.rect, classes.rect3)} />
    <div className={classNames(classes.rect, classes.rect4)} />
    <div className={classNames(classes.rect, classes.rect5)} />
  </div>
);

export default injectSheet({
  spinner: {
    margin: '100px auto',
    width: '100px',
    height: '80px',
    textAlign: 'center',
    fontSize: '10px'
  },

  rect: {
    backgroundColor: '#000000',
    height: '100%',
    width: '6px',
    display: 'inline-block',
    marginRight: '2px',

    '-webkit-animation': 'sk-stretchdelay 1.2s infinite ease-in-out',
    animation: 'sk-stretchdelay 1.2s infinite ease-in-out'
  },

  rect2: {
    '-webkit-animation-delay': '-1.1s',
    animationDelay: '-1.1s'
  },

  rect3: {
    '-webkit-animation-delay': '-1.0s',
    animationDelay: '-1.0s'
  },

  rect4: {
    '-webkit-animation-delay': '-0.9s',
    animationDelay: '-0.9s'
  },

  rect5: {
    '-webkit-animation-delay': '-0.8s',
    animationDelay: '-0.8s'
  },

  '@-webkit-keyframes sk-stretchdelay': {
    '0%, 40%, 100%': { '-webkit-transform': 'scaleY(0.4)' },
    '20%': { '-webkit-transform': 'scaleY(1.0)' }
  },

  '@keyframes sk-stretchdelay': {
    '0%, 40%, 100%': {
      transform: 'scaleY(0.4)',
      '-webkit-transform': 'scaleY(0.4)'
    },
    '20%': {
      transform: 'scaleY(1.0)',
      '-webkit-transform': 'scaleY(1.0)'
    }
  }
})(Spinner);
