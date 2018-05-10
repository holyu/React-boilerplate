import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const HeaderComponent = ({ logout }) => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <Link to="/dashboard" className="header__title">
          <h1>Simple Webpack React Boilerplate</h1>
        </Link>
        <button className="button button--link" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  </header>
);

HeaderComponent.propTypes = {
  logout: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(startLogout()),
});

export default connect(undefined, mapDispatchToProps)(HeaderComponent);
