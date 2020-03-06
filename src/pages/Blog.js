import React, { Component } from "react";

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Popular from '../components/Popular';
import {Helmet} from "react-helmet";

class Medium extends Component {

  render() {
    const q = 'Blog |';

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
              <h1 className="pr-3 pl-3">Popular posts</h1>
              <Popular/>
            </div>
          <Footer/>
        </div>
      );
    }
}


export default Medium;
