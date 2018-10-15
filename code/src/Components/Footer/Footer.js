import React from "react";

export default function Footer() {
  return (
    <footer className="footer" id="Footer">
      <div className="wrapper-overfllow">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-12">
              <div className="footer-left">
                <div className="wrap">
                  <a href="index-2.html" className="foot-logo">
                    <img
                      src="team/images/soccer/footer-logo.png"
                      alt="footer-logo"
                    />
                  </a>
                  <p>
                    Activated charcoal trust fund ugh prism af, beard marfa air
                    plant stumptown gastropub farm-to-table jianbing.
                  </p>
                  <ul className="foot-left-menu">
                    <li>
                      <a href="staff.html">First team</a>
                    </li>
                    <li>
                      <a href="staff.html">Second team</a>
                    </li>
                    <li>
                      <a href="amateurs.html">Amateurs</a>
                    </li>
                    <li>
                      <a href="donations.html">Donation</a>
                    </li>
                    <li>
                      <a href="trophies.html">trophies</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 col-lg-offset-1">
              <div className="foot-news">
                <h4>Recent news</h4>
                <div className="item">
                  <a href="news.html" className="image">
                    <img
                      className="img-responsive"
                      src="team/images/soccer/foot-news-img.jpg"
                      alt="news-image"
                    />
                  </a>
                  <a href="news.html" className="name">
                    When somersaulting Sanchez shouldered Mexico’s hopes
                  </a>
                  <a href="news.html" className="date">
                    25 Sep 2016
                  </a>
                  <span className="separator">in</span>
                  <a href="news.html" className="category">
                    Highlights
                  </a>
                </div>
              </div>
            </div>
            <div className=" col-lg-3 col-md-4 col-sm-12">
              <div className="foot-contact">
                <h4>Contact us</h4>
                <ul className="contact-list">
                  <li>
                    <i className="fa fa-flag" aria-hidden="true" />
                    <span>
                      276 Upper Parliament Street, Liverpool L8, Great Britain
                    </span>
                  </li>
                  <li>
                    <i className="fa fa-envelope" aria-hidden="true" />
                    <a href="mailto:team@email.com">team@email.com</a>
                  </li>
                  <li className="phone">
                    <i className="fa fa-phone" aria-hidden="true" />
                    <span>+61 3 8376 6284</span>
                  </li>
                </ul>
                <ul className="socials">
                  <li>
                    <a href="#">
                      <i className="fa fa-facebook-square" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-twitter" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-google" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-pinterest" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-instagram" aria-hidden="true" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-xs-6">
              <div className="copyrights">
                © 2017 Team - Sport club psd template
              </div>
            </div>
            <div className="col-xs-6">
              <div className="created">
                <a href="#">
                  Created by{" "}
                  <img
                    src="team/images/common/created-icon.png"
                    alt="create-by-image"
                  />
                  torbara
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
