import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

export const PublicRouteComponent = ({ isAuthenticated, component: Component, ...rest }) => (
  <Route
    {...rest}
    component={props => (isAuthenticated ? <Redirect to="/dashboard" /> : <Component {...props} />)}
  />
);

const mapStateToProps = state => ({
  isAuthenticated: !!state.auth.uid,
});

PublicRouteComponent.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(PublicRouteComponent);
