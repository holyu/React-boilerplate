import React from 'react';
import ContentHead from './ContentHead';

export const DashboardPageComponent = () => (
  <div>
    <ContentHead />
    <div className="content-container">
      <ul>
        Prod:
        <li>Webpack 4.8.3</li>
        <li>React 16.4.0 + Redux 4.0.0</li>
        <li>Normalize 8.0.0 + Sass</li>
        <li>Firebase 5.0.4</li>
      </ul>
      <ul>
        Dev & Test:
        <li>Jest 23.0.0 + Enzyme 3.3.0</li>
        <li>Eslint 4.19.1 (airbnb config 16.1.0)</li>
      </ul>
    </div>
  </div>
);

export default DashboardPageComponent;
