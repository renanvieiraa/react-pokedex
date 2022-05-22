import React from 'react';
import { HomePage } from '../pages/home/home';

function IndexRoutes() {
  const currentRoutePath = window.location.pathname || '/';
  switch (currentRoutePath) {
    case '/':
      // window.location.replace('');
      return <HomePage />;
    case '/new-home':
      return <div>new home</div>;

    case '/404':
      return <div>404 - not found</div>;
    default:
      window.location.href = '/404';
      return <></>;
  }
}

export default IndexRoutes;
