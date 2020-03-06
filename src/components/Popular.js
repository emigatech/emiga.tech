import React, { Component } from "react";
import uuid from 'react-uuid'
import MediumResults from '../components/MediumResults.js';

function Results() {
  return(
    <MediumResults username="3mig4"/>
  );
}

class Popular extends Component {

  render() {
    const e = [
      {
        slug:'free-code-camp',
        title:'Free Code Camp'
      },
      {
        slug:'the-mission',
        title:'The Mission'
      },
      {
        slug:'hacker-daily',
        title:'Hacker Noon'
      },
      {
        slug:'the-mission',
        title:'The Mission'
      },
      {
        slug:'the-economist',
        title:'The Economist'
      },
      {
        slug:'personal-growth',
        title:'Personal Growth'
      },
      {
        slug:'swlh',
        title:'The Startup'
      },
      {
        slug:'startup-grind',
        title:'Startup Grind'
      },
      {
        slug:'twitch-news',
        title:'Twitch Blog'
      },
      {
        slug:'thewashingtonpost ',
        title:'The Washington Post'
      },
      {
        slug:'the-coinbase-blog',
        title:'The Coinbase Blog'
      }
    ];
    return (
      <div>
        <div className="nav-scroller bg-white border">
          <nav className="nav nav-underline">
          {e.map((e,index) => (
              <a className="nav-link" key={uuid()} title={"Go to "+e.title} href={"/blog/"+e.slug}>
                {e.title}
              </a>
          ))}
          </nav>
        </div>
        <div className="container pt-2 pb-5 pl-0 pr-0">
          <Results/>
        </div>
      </div>
      );
    }
}

export default Popular;
