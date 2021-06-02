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