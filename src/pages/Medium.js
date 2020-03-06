import React, { Component } from "react";

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MediumResults from '../components/MediumResults.js';
import { useParams } from "react-router-dom";
import {Helmet} from "react-helmet";

function Results() {
  let { username } = useParams();
  return(
    <MediumResults username={username}/>
  );
}

class Medium extends Component {

  render() {
    const q = 'Medium |';

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
            <div className="container pt-2 pb-5 pl-0 pr-0">
              <Results/>
            </div>
          <Footer/>
        </div>
      );
    }
}


export default Medium;
