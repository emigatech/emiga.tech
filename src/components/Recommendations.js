import React, { Component } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import uuid from 'react-uuid'

class Recommendations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      data: []
    };
  }
  componentDidMount() {
    fetch(this.props.request)
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

    if (error){
      return ('');
    }

    else if (!isLoaded) {
      return (
        <SkeletonTheme color="#dee2e6" highlightColor="#f8f9fa">
        <div className="nav-scroller bg-white border-top border-bottom">
          <nav className="nav nav-underline">
            <span className="nav-link"><Skeleton width={64}/></span>
            <span className="nav-link"><Skeleton width={64}/></span>
            <span className="nav-link"><Skeleton width={64}/></span>
            <span className="nav-link"><Skeleton width={64}/></span>
            <span className="nav-link"><Skeleton width={64}/></span>
            <span className="nav-link"><Skeleton width={64}/></span>
            <span className="nav-link"><Skeleton width={64}/></span>
            <span className="nav-link"><Skeleton width={64}/></span>
            <span className="nav-link"><Skeleton width={64}/></span>
            <span className="nav-link"><Skeleton width={64}/></span>
            <span className="nav-link"><Skeleton width={64}/></span>
            <span className="nav-link"><Skeleton width={64}/></span>
            <span className="nav-link"><Skeleton width={64}/></span>
            <span className="nav-link"><Skeleton width={64}/></span>
            <span className="nav-link"><Skeleton width={64}/></span>
            <span className="nav-link"><Skeleton width={64}/></span>
            <span className="nav-link"><Skeleton width={64}/></span>
            <span className="nav-link"><Skeleton width={64}/></span>
            <span className="nav-link"><Skeleton width={64}/></span>
            <span className="nav-link"><Skeleton width={64}/></span>
          </nav>
        </div>
        </SkeletonTheme>
      );
    }

    else {
      if (data && data.length) {
        return (
          <div className="nav-scroller bg-white border-top border-bottom">
            <nav className="nav nav-underline">
            {data.map((data,index) => (
                <a className="nav-link" key={uuid()} title={"Go to "+data.word} href={"/?q="+data.word.split(' ').join('+')}>
                  {data.word}
                </a>
            ))}
            </nav>
          </div>
        );
      }
      else {
        return ('');
      }
    }
  }
}
export default Recommendations;
