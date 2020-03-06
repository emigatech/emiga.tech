import React, { Component } from "react";
import uuid from 'react-uuid'
import MediumResultsRow from '../components/property/MediumResultRow';
import MediumResultRowSkeleton from '../components/property/MediumResultRowSkeleton';
import {Helmet} from "react-helmet";

class MediumResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      data: []
    };
  }
  componentDidMount () {
    fetch('https://cors-anywhere.herokuapp.com/https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/'+this.props.username)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            data: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, data } = this.state;

    if (error)
    {
      return(
        <div className="pt-5 text-center">
          <Helmet>
              <title>{this.props.username.split('-').join(' ')} | emiga.tech ― You know us.</title>
              <link rel="canonical" href={window.location.href} />
              <meta name="description" content={this.props.username+" | emiga.tech provides top technology news, with investigative reporting and in-depth coverage of tech issues and events. You know us."} />
              <meta name="twitter:title" content={this.props.username+" | emiga.tech ― You know us. (All in one technology news)"} />
              <meta name="twitter:description" content={this.props.username+" | emiga.tech provides top technology news, with investigative reporting and in-depth coverage of tech issues and events. You know us."} />
              <meta property="og:url" content={window.location.href} />
              <meta property="og:title" content={this.props.username+" | emiga.tech ― You know us. (All in one technology news)"} />
              <meta property="og:description" content={this.props.username+" | emiga.tech provides top technology news, with investigative reporting and in-depth coverage of tech issues and events. You know us."} />
          </Helmet>
		       <svg height="128" viewBox="0 0 64 64" width="128" xmlns="http://www.w3.org/2000/svg"><path d="m61 39h-8a1 1 0 0 1 0-2h7v-10h-6.83a1 1 0 0 1 -.962-.728 20.5 20.5 0 0 0 -1.869-4.5 1 1 0 0 1 .164-1.2l4.833-4.833-7.076-7.075-4.833 4.836a1 1 0 0 1 -1.2.164 20.525 20.525 0 0 0 -4.5-1.869 1 1 0 0 1 -.727-.965v-6.83h-10v6.83a1 1 0 0 1 -.728.962 20.5 20.5 0 0 0 -4.5 1.869 1 1 0 0 1 -1.2-.164l-4.832-4.833-7.076 7.076 4.836 4.833a1 1 0 0 1 .164 1.2 20.553 20.553 0 0 0 -1.869 4.5 1 1 0 0 1 -.965.727h-6.83v10h6.83a1 1 0 0 1 0 2h-7.83a1 1 0 0 1 -1-1v-12a1 1 0 0 1 1-1h7.087a22.523 22.523 0 0 1 1.469-3.541l-5.013-5.012a1 1 0 0 1 0-1.414l8.49-8.49a1 1 0 0 1 1.414 0l5.013 5.013a22.473 22.473 0 0 1 3.54-1.469v-7.087a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v7.087a22.473 22.473 0 0 1 3.54 1.469l5.013-5.013a1 1 0 0 1 1.414 0l8.49 8.49a1 1 0 0 1 0 1.414l-5.013 5.012a22.619 22.619 0 0 1 1.469 3.541h7.087a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1z"/><path d="m57 54.142v-7.142a1 1 0 0 0 -.419-.814l-6.581-4.701v-9.485a18 18 0 0 0 -36 0v9.485l-6.581 4.7a1 1 0 0 0 -.419.815v7.142a4 4 0 1 0 2 0v-6.627l6.581-4.7a1 1 0 0 0 .419-.815v-10a16 16 0 0 1 32 0v10a1 1 0 0 0 .419.814l6.581 4.701v6.627a4 4 0 1 0 2 0zm-47 3.858a2 2 0 1 1 -2-2 2 2 0 0 1 2 2zm46 2a2 2 0 1 1 2-2 2 2 0 0 1 -2 2z"/><path d="m44 46.142v-14.142a12 12 0 0 0 -24 0v14.142a4 4 0 1 0 2 0v-14.142a10 10 0 0 1 20 0v14.142a4 4 0 1 0 2 0zm-21 3.858a2 2 0 1 1 -2-2 2 2 0 0 1 2 2zm20 2a2 2 0 1 1 2-2 2 2 0 0 1 -2 2z"/><path d="m33 54.142v-16.142a1 1 0 0 0 -2 0v16.142a4 4 0 1 0 2 0zm-1 5.858a2 2 0 1 1 2-2 2 2 0 0 1 -2 2z"/><path d="m32 26a6 6 0 1 0 6 6 6.006 6.006 0 0 0 -6-6zm0 10a4 4 0 1 1 4-4 4 4 0 0 1 -4 4z"/><path d="m31 6h2v2h-2z"/><path d="m13.322 13.322h2v2h-2z" transform="matrix(.707 -.707 .707 .707 -5.932 14.322)"/><path d="m6 31h2v2h-2z"/><path d="m56 31h2v2h-2z"/><path d="m48.678 13.322h2v2h-2z" transform="matrix(.707 -.707 .707 .707 4.423 39.322)"/></svg>

          <h4 className="pt-2 pb-2"><b>Connection Error</b></h4>
		      <h6>Please check your network connection.</h6>
       </div>
      );
    }

    else if (!isLoaded) {
      return (
        <div>
          <Helmet>
              <title>{this.props.username.split('-').join(' ')} | emiga.tech ― You know us.</title>
              <link rel="canonical" href={window.location.href} />
              <meta name="description" content={this.props.username+" | emiga.tech provides top technology news, with investigative reporting and in-depth coverage of tech issues and events. You know us."} />
              <meta name="twitter:title" content={this.props.username+" | emiga.tech ― You know us. (All in one technology news)"} />
              <meta name="twitter:description" content={this.props.username+" | emiga.tech provides top technology news, with investigative reporting and in-depth coverage of tech issues and events. You know us."} />
              <meta property="og:url" content={window.location.href} />
              <meta property="og:title" content={this.props.username+" | emiga.tech ― You know us. (All in one technology news)"} />
              <meta property="og:description" content={this.props.username+" | emiga.tech provides top technology news, with investigative reporting and in-depth coverage of tech issues and events. You know us."} />
          </Helmet>
          <div className="row align-items-center justify-content-center">
            <MediumResultRowSkeleton key={uuid()}/>
          </div>
        </div>
      );
    }

    else {
      if(data.items && data.items.length) {

        return (
          <div>
            <Helmet>
                <title>{this.props.username.split('-').join(' ')} | emiga.tech ― You know us.</title>
                <link rel="canonical" href={window.location.href} />
                <meta name="description" content={this.props.username+" | emiga.tech provides top technology news, with investigative reporting and in-depth coverage of tech issues and events. You know us."} />
                <meta name="twitter:title" content={this.props.username+" | emiga.tech ― You know us. (All in one technology news)"} />
                <meta name="twitter:description" content={this.props.username+" | emiga.tech provides top technology news, with investigative reporting and in-depth coverage of tech issues and events. You know us."} />
                <meta property="og:url" content={window.location.href} />
                <meta property="og:title" content={this.props.username+" | emiga.tech ― You know us. (All in one technology news)"} />
                <meta property="og:description" content={this.props.username+" | emiga.tech provides top technology news, with investigative reporting and in-depth coverage of tech issues and events. You know us."} />
            </Helmet>
            <div className="row align-items-center justify-content-center">
              {data.items.map((data, index) => (
                <MediumResultsRow
                  key={uuid()}
                  source="Medium"
                  author={data.author}
                  title={data.title}
                  description={data.description}
                  url={data.link}
                  image={data.thumbnail}
                  date={data.pubDate}
                  content={data.content}
                />
              ))}
            </div>
          </div>
        );
      }

      else {
        return (
          <div className="pt-5 text-center">
            <Helmet>
                <title>{this.props.username.split('-').join(' ')} | emiga.tech ― You know us.</title>
                <link rel="canonical" href={window.location.href} />
                <meta name="description" content={this.props.username+" | emiga.tech provides top technology news, with investigative reporting and in-depth coverage of tech issues and events. You know us."} />
                <meta name="twitter:title" content={this.props.username+" | emiga.tech ― You know us. (All in one technology news)"} />
                <meta name="twitter:description" content={this.props.username+" | emiga.tech provides top technology news, with investigative reporting and in-depth coverage of tech issues and events. You know us."} />
                <meta property="og:url" content={window.location.href} />
                <meta property="og:title" content={this.props.username+" | emiga.tech ― You know us. (All in one technology news)"} />
                <meta property="og:description" content={this.props.username+" | emiga.tech provides top technology news, with investigative reporting and in-depth coverage of tech issues and events. You know us."} />
            </Helmet>
  		       <svg height="128" viewBox="0 0 64 64" width="128" xmlns="http://www.w3.org/2000/svg"><path d="m61 39h-8a1 1 0 0 1 0-2h7v-10h-6.83a1 1 0 0 1 -.962-.728 20.5 20.5 0 0 0 -1.869-4.5 1 1 0 0 1 .164-1.2l4.833-4.833-7.076-7.075-4.833 4.836a1 1 0 0 1 -1.2.164 20.525 20.525 0 0 0 -4.5-1.869 1 1 0 0 1 -.727-.965v-6.83h-10v6.83a1 1 0 0 1 -.728.962 20.5 20.5 0 0 0 -4.5 1.869 1 1 0 0 1 -1.2-.164l-4.832-4.833-7.076 7.076 4.836 4.833a1 1 0 0 1 .164 1.2 20.553 20.553 0 0 0 -1.869 4.5 1 1 0 0 1 -.965.727h-6.83v10h6.83a1 1 0 0 1 0 2h-7.83a1 1 0 0 1 -1-1v-12a1 1 0 0 1 1-1h7.087a22.523 22.523 0 0 1 1.469-3.541l-5.013-5.012a1 1 0 0 1 0-1.414l8.49-8.49a1 1 0 0 1 1.414 0l5.013 5.013a22.473 22.473 0 0 1 3.54-1.469v-7.087a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v7.087a22.473 22.473 0 0 1 3.54 1.469l5.013-5.013a1 1 0 0 1 1.414 0l8.49 8.49a1 1 0 0 1 0 1.414l-5.013 5.012a22.619 22.619 0 0 1 1.469 3.541h7.087a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1z"/><path d="m57 54.142v-7.142a1 1 0 0 0 -.419-.814l-6.581-4.701v-9.485a18 18 0 0 0 -36 0v9.485l-6.581 4.7a1 1 0 0 0 -.419.815v7.142a4 4 0 1 0 2 0v-6.627l6.581-4.7a1 1 0 0 0 .419-.815v-10a16 16 0 0 1 32 0v10a1 1 0 0 0 .419.814l6.581 4.701v6.627a4 4 0 1 0 2 0zm-47 3.858a2 2 0 1 1 -2-2 2 2 0 0 1 2 2zm46 2a2 2 0 1 1 2-2 2 2 0 0 1 -2 2z"/><path d="m44 46.142v-14.142a12 12 0 0 0 -24 0v14.142a4 4 0 1 0 2 0v-14.142a10 10 0 0 1 20 0v14.142a4 4 0 1 0 2 0zm-21 3.858a2 2 0 1 1 -2-2 2 2 0 0 1 2 2zm20 2a2 2 0 1 1 2-2 2 2 0 0 1 -2 2z"/><path d="m33 54.142v-16.142a1 1 0 0 0 -2 0v16.142a4 4 0 1 0 2 0zm-1 5.858a2 2 0 1 1 2-2 2 2 0 0 1 -2 2z"/><path d="m32 26a6 6 0 1 0 6 6 6.006 6.006 0 0 0 -6-6zm0 10a4 4 0 1 1 4-4 4 4 0 0 1 -4 4z"/><path d="m31 6h2v2h-2z"/><path d="m13.322 13.322h2v2h-2z" transform="matrix(.707 -.707 .707 .707 -5.932 14.322)"/><path d="m6 31h2v2h-2z"/><path d="m56 31h2v2h-2z"/><path d="m48.678 13.322h2v2h-2z" transform="matrix(.707 -.707 .707 .707 4.423 39.322)"/></svg>

            <h4 className="pt-2 pb-2"><b>Oops! Something went wrong</b></h4>
  		      <h6>This page did not load correctly.</h6>
         </div>
        );
      }
    }
  }
}
export default MediumResults;
