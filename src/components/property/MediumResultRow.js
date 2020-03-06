import React, { Component } from "react";
import Moment from 'react-moment';
import dompurify from 'dompurify';

class ResultsRow extends Component {

  render() {
    const sanitizer = dompurify.sanitize;

    return (
        <div className="col-sm-12 col-md-10 col-lg-10 mt-2 mb-2" key={this.props.index}>
          <div className="container blog-post">
            <div className="row border">
              <div className="d-flex justify-content-between col-12 p-3 border-bottom w-100">
                <div>
                  <h6>
                    <a rel="nofollow noopener noreferrer" target="_blank" href={this.props.url} title={"Go to "+this.props.title}>
                      {this.props.title}
                    </a>
                    <span className="text-muted"> by {this.props.author}</span>
                  </h6>
                </div>
                <div>
                  <h6 className="text-muted d-sm-none d-md-block">
                    <Moment format="DD MMMM HH:mm, YYYY">{sanitizer(this.props.date)}</Moment>
                  </h6>
                </div>
              </div>
              <div className="col-12 pt-3 p-3 bg-white" dangerouslySetInnerHTML={{__html: sanitizer(this.props.content)}}/>
            </div>
          </div>
        </div>
      );
    }
}

export default ResultsRow;
