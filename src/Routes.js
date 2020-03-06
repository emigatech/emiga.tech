import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import App from './pages/App';
import Error from './pages/Error';
import Medium from './pages/Medium';
import Blog from './pages/Blog';

import TermsAndConditions from './pages/TermsAndConditions';
import Privacy from './pages/Privacy';
import $ from 'jquery';

import {Helmet} from "react-helmet";

class Routes extends Component {
  render() {
    return (
      <Router>
          <Switch>
            <Route exact path="/">
              <App/>
            </Route>

            <Route exact path="/blog/:username">
              <Medium/>
            </Route>

            <Route exact path="/blog">
              <Blog/>
            </Route>

            <Route exact path="/privacy-policy">
              <Helmet>
                  <title>Privacy Policy | emiga.tech ― You know us.</title>
                  <link rel="canonical" href={window.location.href} />
                  <meta name="description" content="Privacy Policy | emiga.tech provides top technology news, with investigative reporting and in-depth coverage of tech issues and events. You know us." />
                  <meta name="twitter:title" content="Privacy Policy | emiga.tech ― You know us. (All in one technology news)" />
                  <meta name="twitter:description" content="Privacy Policy | emiga.tech provides top technology news, with investigative reporting and in-depth coverage of tech issues and events. You know us." />
                  <meta property="og:url" content={window.location.href} />
                  <meta property="og:title" content="Privacy Policy | emiga.tech ― You know us. (All in one technology news)" />
                  <meta property="og:description" content="Privacy Policy | emiga.tech provides top technology news, with investigative reporting and in-depth coverage of tech issues and events. You know us." />
              </Helmet>
              <Privacy/>
            </Route>

            <Route exact path="/terms-and-conditions">
              <Helmet>
                  <title>Terms and Conditions | emiga.tech ― You know us.</title>
                  <link rel="canonical" href={window.location.href} />
                  <meta name="description" content="Terms and Conditions | emiga.tech provides top technology news, with investigative reporting and in-depth coverage of tech issues and events. You know us." />
                  <meta name="twitter:title" content="Terms and Conditions | emiga.tech ― You know us. (All in one technology news)" />
                  <meta name="twitter:description" content="Terms and Conditions | emiga.tech provides top technology news, with investigative reporting and in-depth coverage of tech issues and events. You know us." />
                  <meta property="og:url" content={window.location.href} />
                  <meta property="og:title" content="Terms and Conditions | emiga.tech ― You know us. (All in one technology news)" />
                  <meta property="og:description" content="Terms and Conditions | emiga.tech provides top technology news, with investigative reporting and in-depth coverage of tech issues and events. You know us." />
              </Helmet>
              <TermsAndConditions/>
            </Route>

            <Route path="*">
              <div>
                <Helmet>
                    <title>Error 404 | emiga.tech ― You know us.</title>
                    <meta name="robots" content="noindex.nofollow" />
                    <link rel="canonical" href={window.location.href} />
                    <meta name="description" content="Error 404 | emiga.tech provides top technology news, with investigative reporting and in-depth coverage of tech issues and events. You know us." />
                    <meta name="twitter:title" content="Error 404 | emiga.tech ― You know us. (All in one technology news)" />
                    <meta name="twitter:description" content="Error 404 | emiga.tech provides top technology news, with investigative reporting and in-depth coverage of tech issues and events. You know us." />
                    <meta property="og:url" content={window.location.href} />
                    <meta property="og:title" content="Error 404 | emiga.tech ― You know us. (All in one technology news)" />
                    <meta property="og:description" content="Error 404 | emiga.tech provides top technology news, with investigative reporting and in-depth coverage of tech issues and events. You know us." />
                </Helmet>
                <Error/>
              </div>
            </Route>
          </Switch>
      </Router>
    );
  }
};
export default Routes;
