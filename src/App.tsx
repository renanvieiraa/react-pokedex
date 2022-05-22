import React from 'react';
import './App.scss';
import { MenuTopBar } from './core/menu-top-bar/menu-top-bar';
import IndexRoutes from './routes/routes';

function App() {
  return (
    <>
      <header>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <MenuTopBar />
            </div>
          </div>
        </div>
      </header>
      <section className='container'>
        <div className='row'>
          <div className='col-12'>
            <IndexRoutes></IndexRoutes>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
