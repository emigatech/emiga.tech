import React, { Component } from "react";

import Navbar from '../components/Navbar';
import Recommendations from '../components/Recommendations.js';
import Footer from '../components/Footer';
import Results from '../components/Results.js';

import {Helmet} from "react-helmet";

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
const API_KEY   = '2ea799f80e51479280acfe2b5ce2d4a8';
const NEWS_API  = 'https://api.emiga.tech/https://newsapi.org/v2/top-headlines?country=us&sortBy=popularity&language=en&pageSize=100&apiKey='+API_KEY+'&category=technology';
const EVERY_API = 'https://api.emiga.tech/https://newsapi.org/v2/everything?language=en&sortBy=popularity&pageSize=100&apiKey='+API_KEY+'&q=';
const WORD_API  = 'https://api.emiga.tech/https://api.datamuse.com/words?ml=';

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

class App extends Component {
  render() {

      return (
        <div>
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
          <Navbar/>
            <Recommendations request={recommendations}/>
            <div className="container pt-2 pb-5">
              <Results request={results}/>
            </div>
          <Footer/>
        </div>
      );
    }
}

export default App;
