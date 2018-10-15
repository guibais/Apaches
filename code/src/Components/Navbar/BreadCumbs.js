import React from "react";
import { withRouter } from "react-router-dom";

export default function BreadCumbs(props) {
  if (props.location.pathname === "/") return null;
  return (
    <section className="image-header">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="info">
              <div className="wrap">
                <ul className="breadcrumbs">
                  <li>
                    <a href="index-2.html">Main</a>/
                  </li>
                  <li>Category</li>
                </ul>
                <h1>Category</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
BreadCumbs = withRouter(BreadCumbs);
