import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPageComponent = ({ login }) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">Boilerplate</h1>
      <p>Some info.</p>
      <button className="button" onClick={login}>
        Login with Google
      </button>
    </div>
  </div>
);

LoginPageComponent.propTypes = {
  login: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  login: () => dispatch(startLogin()),
});

export default connect(undefined, mapDispatchToProps)(LoginPageComponent);
