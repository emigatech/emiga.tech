import React, { Component } from "react";
import '../scss/index.scss';
import 'bootstrap';

import Navbar from '../components/Navbar';
import Recommendations from '../components/Recommendations.js';
import Footer from '../components/Footer';
import Results from '../components/Results.js';

class App extends Component {

    render() {

      return (
        <div>
          <Navbar/>
            <Recommendations request={this.props.recommendations}/>
            <div className="container pt-2 pb-5">
              <Results request={this.props.results}/>
            </div>
          <Footer/>
        </div>
      );
    }
}


export default App;
