import '../../assets/App.css';

import React from 'react';
import { Route, Switch } from 'react-router';

import AboutScreen from '../../screens/About';
import ContactScreen from '../../screens/Contact';
import GalleryScreen from '../../screens/Gallery';
import HomeScreen from '../../screens/Home';
import ProjectScreen from '../../screens/Projects';

interface Props {}

export function Routes(props: Props) {
  // The function actually applying the offset
  function offsetAnchor() {
    if (window.location.hash.length !== 0) {
      window.scrollTo(window.scrollX, window.scrollY - 100);
    }
  }

  // This will capture hash changes while on the page
  window.addEventListener("hashchange", offsetAnchor);

  // This is here so that when you enter the page with a hash,
  // it can provide the offset in that case too. Having a timeout
  // seems necessary to allow the browser to jump to the anchor first.
  window.setTimeout(offsetAnchor, 1); // The delay of 1 is arbitrary and may not always work right (although it did in my testing).
  return (
    <Switch>
      <Route path={"/about"} component={AboutScreen} />
      <Route path={"/projects"} component={ProjectScreen} />
      <Route path={"/gallery"} component={GalleryScreen} />
      <Route path={"/contact"} component={ContactScreen} />
      <Route path={"/"} component={HomeScreen} />
    </Switch>
  );
}