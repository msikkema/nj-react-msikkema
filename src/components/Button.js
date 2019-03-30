import React from 'react';
import injectSheet from 'react-jss';
import { colors, transitions } from '../style/theme';

const Button = ({ classes, label, href, ...props }) => (
  <a className={classes.button} href={href || '#'} {...props}>
    <h4 className={classes.h4}>{label}</h4>
  </a>
);

export default injectSheet({
  button: {
    padding: '5px 50px 5px 50px',
    border: `2px solid ${colors.text}`,
    transition: transitions.standard,

    '&:hover': {
      transition: transitions.standard,
      textDecoration: 'none',
      border: `2px solid ${colors.primary}`
    },

    '&:hover h4': {
      transition: transitions.standard,
      color: colors.primary
    }
  },

  h4: {
    transition: transitions.standard
  }
})(Button);
