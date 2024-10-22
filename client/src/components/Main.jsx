import React from 'react';
import TopBar from './TopBar';
import Home from './Home';
import { Element } from 'react-scroll';
import Page from './Page';
import LostItemsPage from './LostItemsPage';


function Main() {

  return (
    <div>
      <TopBar />
      <Element name="home">
        <Home />
      </Element>
      <Element name="item">
        <LostItemsPage/>
      </Element>
      <Element name="page">
        <Page  />
      </Element>
    </div>
  );
}

export default Main;
