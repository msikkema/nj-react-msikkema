import React from 'react';
import injectSheet from 'react-jss';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getEvents, isEventsReady, getEventsError } from '../selectors';
import Icon from './Icon';
import titleIcon from '../icons/vivid-angle-top-left.svg';
import theme from '../style/theme';
import Event from './Event';
import Spinner from './Spinner';
import Button from './Button';

const Events = ({ classes, ready, events, error }) => (
  <div className={classes.container}>
    <h3 className={classes.title}>
      <Icon className={classes.titleIcon} symbol={titleIcon} />
      Results
      {ready && events.length ? `: ${events.length} events found` : ``}
    </h3>

    {error ? (
      <div className={classes.fullSizeCenter}>
        <h1>Sorry about that</h1>
        <h4>There was an error getting your results.</h4>
        <div className={classes.buttonContainer} />
        <Button label="Return Home" href="/" />
      </div>
    ) : (
      <div>
        {ready ? (
          <div className={classes.tilesWrapper}>
            <div className={classes.tiles}>
              {events.map(event => (
                <Event
                  key={event.id}
                  className={classes.tile}
                  content={event}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className={classes.fullSizeCenter}>
            <Spinner />
            <h2>Hang tight while we find the events...</h2>
          </div>
        )}
      </div>
    )}
  </div>
);

const mapStateToProps = state => ({
  ready: isEventsReady(state),
  events: getEvents(state),
  error: getEventsError(state)
});

export default compose(
  connect(mapStateToProps),
  injectSheet({
    title: {
      paddingLeft: 20,
      position: 'relative'
    },
    titleIcon: {
      position: 'absolute',
      left: 0,
      top: 5
    },
    tilesWrapper: {
      margin: [0, 'auto'],
      maxWidth: theme.maxTileWidth,
      '@media (min-width: 768px)': {
        maxWidth: theme.maxTileWidth * 2 + theme.gutter
      },
      '@media (min-width: 1200px)': {
        maxWidth: theme.maxTileWidth * 3 + theme.gutter * 2
      }
    },
    tiles: {
      '@media (min-width: 768px)': {
        marginLeft: -theme.gutter / 2,
        marginRight: -theme.gutter / 2,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'flex-start'
      }
    },

    tile: {
      margin: [0, 'auto', theme.gutter],
      maxWidth: theme.maxTileWidth,
      '@media (min-width: 768px)': {
        marginLeft: theme.gutter / 2,
        marginRight: theme.gutter / 2,
        width: `calc(50% - ${theme.gutter}px)`
      },
      '@media (min-width: 1200px)': {
        width: `calc(${100 / 3}% - ${theme.gutter}px)`
      }
    },

    fullSizeCenter: {
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      textAlign: 'center',
      alignItems: 'center'
    },

    buttonContainer: {
      paddingTop: '60px'
    }
  })
)(Events);
