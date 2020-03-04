import React, { Component } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

class ResultRowSkeleton extends Component {

  render() {
      return (
        <SkeletonTheme color="#dee2e6" highlightColor="#f8f9fa">
          <div className="row">

              <div className="col-12 border mt-1 mb-1 w-100">
                <div className="container pt-2 pb-2">
                  <div className="row">
                    <div className="col-sm-12 col-md-4 col-lg-4 mt-1 mb-1 p-0 h-280 rounded-0">
                        <Skeleton className="rounded-0" height={280}/>
                    </div>
                    <div className="col-sm-12 col-md-8 col-lg-8 bg-white p-3 mt-1 mb-1">
                        <h4><Skeleton/></h4>
                        <p className="pt-2 pb-2">
                            <Skeleton count={2}/>
                            <Skeleton count={1} width={120}/>
                        </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 border mt-1 mb-1 w-100">
                <div className="container pt-2 pb-2">
                  <div className="row">
                    <div className="col-sm-12 col-md-4 col-lg-4 mt-1 mb-1 p-0 h-280">
                        <Skeleton className="rounded-0" height={280}/>
                    </div>
                    <div className="col-sm-12 col-md-8 col-lg-8 bg-white p-3 mt-1 mb-1">
                        <h4><Skeleton/></h4>
                        <p className="pt-2 pb-2">
                            <Skeleton count={2}/>
                            <Skeleton count={1} width={120}/>
                        </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 border mt-1 mb-1 w-100">
                <div className="container pt-2 pb-2">
                  <div className="row">
                    <div className="col-sm-12 col-md-4 col-lg-4 mt-1 mb-1 p-0 h-280">
                        <Skeleton className="rounded-0" height={280}/>
                    </div>
                    <div className="col-sm-12 col-md-8 col-lg-8 bg-white p-3 mt-1 mb-1">
                        <h4><Skeleton/></h4>
                        <p className="pt-2 pb-2">
                            <Skeleton count={2}/>
                            <Skeleton count={1} width={120}/>
                        </p>
                    </div>
                  </div>
                </div>
              </div>

          </div>
        </SkeletonTheme>
      );
    }
}
export default ResultRowSkeleton;
