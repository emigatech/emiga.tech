import React, { Component } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import uuid from 'react-uuid'

function Item() {
  return(
    <div className="col-12 border mt-2 mb-2">
      <div className="blog-post">
        <div className="row">
          <div className="d-flex justify-content-between col-12 p-3 border-bottom">
            <div>
              <h6><Skeleton/></h6>
            </div>

            <div>
              <h6 className="text-muted d-sm-none d-md-block">
                <Skeleton/>
              </h6>
            </div>
          </div>
          <div className="col-12 pt-3 p-3 bg-white">
            <Skeleton count={5}/>
          </div>
        </div>
      </div>
    </div>
    );
}

class ResultRowSkeleton extends Component {

  render() {
    const items = [];
    for (var i=0; i<=3; i++) {
        items.push(<Item key={uuid()}/>);
    }
      return (
        <SkeletonTheme color="#dee2e6" highlightColor="#f8f9fa">
          <div className="row">
            {items}
          </div>
        </SkeletonTheme>
      );
    }
}
export default ResultRowSkeleton;
