import React from 'react';
import loaderImg from '../images/loader.gif';

export const LoadingPageComponent = () => (
  <div className="loader">
    <img alt="loding..." className="loader__image" src={loaderImg} />
  </div>
);

export default LoadingPageComponent;
