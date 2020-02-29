import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import App from './pages/App';
import TermsAndConditions from './pages/TermsAndConditions';
import Privacy from './pages/Privacy';
import $ from 'jquery';

import {Helmet} from "react-helmet";

/**
  Basic Functions
*/
$(window).scroll(function(e) {
    var scroll = $(window).scrollTop();
    if (scroll >= 57) {  $('.footer').show(); }
    else {  $('.footer').hide();  }
});
const query = (function(a) {
  if (a == "") return {};
  var b = {};
  for (var i = 0; i < a.length; ++i)
  {
      var p=a[i].split('=', 2);
      if (p.length == 1)
          b[p[0]] = "";
      else
          b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
  }
  return b;
})(window.location.search.substr(1).split('&'));

/**
  Config
*/
const API_KEY   = '3e8413b7a20d4df9a11665687faef077';
const NEWS_API  = 'https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?country=us&sortBy=popularity&language=en&pageSize=100&apiKey='+API_KEY+'&category=technology';
const EVERY_API = 'https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/everything?language=en&sortBy=popularity&pageSize=100&apiKey='+API_KEY+'&q=';
const WORD_API  = 'https://cors-anywhere.herokuapp.com/https://api.datamuse.com/words?ml=';

if(query['q'] === undefined) {
  var results = NEWS_API;
  var recommendations = WORD_API+'technology';
  var q = '';
}
else {
  var results = EVERY_API+query['q'];
  var recommendations = WORD_API+query['q'];
  var q = query['q']+' | ';
}

class Routes extends Component {
  render() {
    return (
      <Router>
          <Switch>
            <Route exact path="/">
              <Helmet>
                  <title>{q} emiga.tech ― You know us.</title>
                  <link rel="canonical" href={window.location.href} />
                  <meta name="description" content={q+"emiga.tech provides top technology news, with investigative reporting and in-depth coverage of tech issues and events. You know us."} />
                  <meta name="twitter:title" content={q+"emiga.tech ― You know us. (All in one technology news)"} />
                  <meta name="twitter:description" content={q+"emiga.tech provides top technology news, with investigative reporting and in-depth coverage of tech issues and events. You know us."} />
                  <meta property="og:url" content={window.location.href} />
                  <meta property="og:title" content={q+"emiga.tech ― You know us. (All in one technology news)"} />
                  <meta property="og:description" content={q+"emiga.tech provides top technology news, with investigative reporting and in-depth coverage of tech issues and events. You know us."} />
              </Helmet>
              <App recommendations={recommendations} results={results}/>
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
                <h1>Error 404</h1>
              </div>
            </Route>
          </Switch>
      </Router>
    );
  }
};
export default Routes;
