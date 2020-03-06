import React, { Component } from "react";

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Popular from '../components/Popular';
import {Helmet} from "react-helmet";

class Medium extends Component {

  render() {

      return (
        <div>
          <Navbar/>
          <Popular/>
          <Footer/>
            <Helmet>
                <title>Editor's Choices | emiga.tech ― You know us.</title>
                <link rel="canonical" href={window.location.href} />
                <meta name="description" content={"Editor's Choices | emiga.tech provides top technology news, with investigative reporting and in-depth coverage of tech issues and events. You know us."} />
                <meta name="twitter:title" content={"Editor's Choices | emiga.tech ― You know us. (All in one technology news)"} />
                <meta name="twitter:description" content={"Editor's Choices | emiga.tech provides top technology news, with investigative reporting and in-depth coverage of tech issues and events. You know us."} />
                <meta property="og:url" content={window.location.href} />
                <meta property="og:title" content={"Editor's Choices | emiga.tech ― You know us. (All in one technology news)"} />
                <meta property="og:description" content={"Editor's Choices | emiga.tech provides top technology news, with investigative reporting and in-depth coverage of tech issues and events. You know us."} />
            </Helmet>
        </div>
      );
    }
}


export default Medium;
