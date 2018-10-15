import React from "react";

export default function NewsList() {
  return (
    <div className="news-list col-xs-12 col-md-9">
      <p className="hidden-md hidden-lg">
        <button
          type="button"
          className="btn sidebar-btn"
          data-toggle="offcanvas"
          title="Toggle sidebar"
        >
          sidebar
        </button>
      </p>
      <div className="item img-top">
        <div className="img-wrap">
          <div className="bage">
            <a href="news-single.html">highlight</a>
          </div>
          <a href="news-single.html">
            <img src="team/images/soccer/news-list-img.jpg" alt="post image" />
          </a>
        </div>
        <div className="info">
          <a href="news-single.html" className="name">
            Bauza: Bono and Tolos will start against Intertupo
          </a>
          <div className="wrap">
            <a href="news-single.html">25 Sep 2016</a> by{" "}
            <a href="news-single.html">Mason Carrington</a>
          </div>
          <div className="clear" />
        </div>
      </div>
      <div className="item">
        <div className="info">
          <a href="news-single.html" className="name">
            Post Format: Aside
          </a>
          <div className="wrap">
            <a href="news-single.html">25 Sep 2016</a> by{" "}
            <a href="news-single.html">Mason Carrington</a>
          </div>
          <div className="comment-quantity">3 comments</div>
          <div className="clear" />
          <p>
            Pabst irony tattooed, synth sriracha selvage pok pok. Wayfarers
            kinfolk sartorial, helvetica you probably haven't heard of them
            tumeric venmo deep v mixtape semiotics brunch. Next level paleo
            taxidermy, bespoke messenger bag leggings occupy food truck.
          </p>
          <a href="news-single.html" className="continue">
            Continue Reading
          </a>
        </div>
      </div>
      <div className="item">
        <div className="info">
          <a href="news-single.html" className="name">
            Post Format: Link
          </a>
          <div className="wrap">
            <a href="news-single.html">25 Sep 2016</a> by{" "}
            <a href="contacts.html">Mason Carrington</a>
          </div>
          <div className="clear" />
        </div>
      </div>
      <div className="item">
        <div className="info">
          <a href="news-single.html" className="name">
            Post Format: Image
          </a>
          <div className="wrap">
            <a href="#">25 Sep 2016</a> by{" "}
            <a href="contacts.html">Mason Carrington</a>
          </div>
          <div className="clear" />
        </div>
        <div className="img-wrap">
          <a href="news-single.html">
            <img src="team/images/soccer/news-list-img.jpg" alt="post image" />
          </a>
        </div>
      </div>
      <div className="item quote">
        <div className="info">
          <a href="news-single.html" className="name">
            Post Format: Quote. Ogi farm-to-table migas vinyl, semiotics yuccie
            swag ugh helvetica 8-bit.{" "}
          </a>
          <div className="wrap">
            <a href="news-single.html">25 Sep 2016</a> by{" "}
            <a href="news-single.html">Mason Carrington</a>
          </div>
          <div className="comment-quantity">3 comments</div>
          <div className="clear" />
        </div>
      </div>
      <div className="item status">
        <div className="info">
          <a href="news-single.html" className="name">
            Post Format: Status
          </a>
          <div className="wrap">
            <a href="news-single.html">25 Sep 2016</a> by{" "}
            <a href="news-single.html">Mason Carrington</a>
          </div>
          <div className="comment-quantity">3 comments</div>
          <div className="clear" />
        </div>
      </div>
      <div className="pagination-wrap">
        <ul className="pagination">
          <li>
            <a href="#">
              <i className="fa fa-chevron-left" aria-hidden="true" />
            </a>
          </li>
          <li>
            <a href="#">1</a>
          </li>
          <li className="active">
            <a href="#">2</a>
          </li>
          <li>
            <a href="#">3</a>
          </li>
          <li>
            <a href="#">4</a>
          </li>
          <li>
            <a href="#">5</a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-chevron-right" aria-hidden="true" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
