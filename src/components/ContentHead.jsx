import React from 'react';
import { Link } from 'react-router-dom';

export const ContentHeadComponent = () => (
  <div className="page-header">
    <div className="content-container">
      <h1 className="page-header__title">
        <span>React</span> / <span>Sass</span> / <span>Firebase</span>
      </h1>
      <div className="page-header__actions">
        <Link className="button" to="/">
          Click
        </Link>
      </div>
    </div>
  </div>
);

export default ContentHeadComponent;
