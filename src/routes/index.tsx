import React from 'react';
import App from '../App';

function IndexRoutes() {
  const currentRoutePath = window.location.pathname || '/';
  switch (currentRoutePath) {
    case '/':
      //   return <App />;
      return <App></App>;
    case '/new-home':
      return <div>new home</div>;
    default:
      //   return <App />;
      return <App></App>;
  }
}

export default IndexRoutes;
