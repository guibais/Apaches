import React from "react";
import NewsList from "./Subcomponents/NewsList";

export default function News() {
  return (
    <div className="content">
      <div className="container">
        <div className="row row-offcanvas row-offcanvas-left">
          <NewsList />
        </div>
      </div>
    </div>
  );
}
