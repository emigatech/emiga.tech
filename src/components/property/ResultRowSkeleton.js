import React, { Component } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import uuid from 'react-uuid'

function Item() {
  return(
      <div className="col-12 border mt-1 mb-1 w-100">
        <div className="container pt-2 pb-2">

          <div className="d-flex justify-content-between pt-2 pb-2">
            <div></div>
            <div>
              <h6 className="text-muted d-sm-none d-md-block">
                <Skeleton count={1} width={120}/>
              </h6>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12 col-md-4 col-lg-4 mt-1 mb-1 p-0 h-280 rounded-0">
                <div className="rounded-0 bg-skeleton" style={{height:'280px'}}></div>
            </div>
            <div className="col-sm-12 col-md-8 col-lg-8 bg-white p-3 mt-1 mb-1">
                <h4>
                  <Skeleton/>
                </h4>
                <p className="pt-2 pb-2">
                    <Skeleton count={2}/>
                    <Skeleton count={1} width={120}/>
                </p>
            </div>
          </div>

          <div className="d-flex justify-content-between pt-2 pb-2">
            <div>
              <Skeleton count={1} width={120}/>
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
