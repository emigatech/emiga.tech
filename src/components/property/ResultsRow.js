import React, { Component } from "react";
import Moment from 'react-moment';

class ResultsRow extends Component {

  render() {
    return (
        <div className="col-12 border mt-1 mb-1 w-100" key={this.props.index}>
          <div className="container pt-2 pb-2">

            <div className="d-flex justify-content-between pt-2 pb-2">
              <div></div>
              <div>
                <h6 className="text-muted d-sm-none d-md-block">
                  <Moment format="DD MMMM HH:mm, YYYY">{this.props.date}</Moment>
                </h6>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-12 col-md-4 col-lg-4 mt-1 mb-1 p-0 h-280 bg-dark">
                  <a rel="nofollow noopener noreferrer" href={this.props.url} target="_blank" title={"Go to "+this.props.title}>
                    <div data-bg={"url("+this.props.image+")"} alt={"Go to "+this.props.title} className="lazy text-center img-fluid img-responsive bg-dark"></div>
                </a>
              </div>
              <div className="col-sm-12 col-md-8 col-lg-8 bg-white p-3 mt-1 mb-1">
                  <a rel="nofollow noopener noreferrer" href={this.props.url} target="_blank" title="Go to title">
                    <h4>{this.props.title}</h4>
                  </a>
                  <p className="pt-2 pb-2">{this.props.description}</p>
              </div>
              <div className="class-col-sm-12 col-md-12 col-lg-12 pt-2 pb-2 border">
                <p className="text-muted">{this.props.content}</p>
              </div>
            </div>

            <div className="d-flex justify-content-between pt-2 pb-2">
              <div>
                <h6 className="text-muted d-sm-none d-md-block">by <b>{this.props.author}</b> on {this.props.source}</h6>
              </div>
            </div>

          </div>
        </div>
      );
    }
}


export default ResultsRow;
