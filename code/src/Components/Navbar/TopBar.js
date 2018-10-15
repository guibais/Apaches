import React from "react";

export default function TopBar() {
  return (
    <div className="top-bar">
      <div className="container">
        <div className="row">
          <div className="col-md-7 hidden-sm hidden-xs">
            <div className="top-contacts">
              <ul className="socials">
                <li>
                  <div href="https://www.facebook.com/atleticaleopardos/">
                    <i className="fa fa-facebook-square" aria-hidden="true" />
                  </div>
                </li>
                <li>
                  <div href="#embreve">
                    <i className="fa fa-twitter" aria-hidden="true" />
                  </div>
                </li>
                <li>
                  <div href="https://www.instagram.com/atleticaleopardos/">
                    <i className="fa fa-instagram" aria-hidden="true" />
                  </div>
                </li>
              </ul>
              <ul className="contacts">
                <li className="phone">
                  <div href="mailto:leopardos@atleticaleopardos.com.br">
                    <i className="fa fa-envelope-square" aria-hidden="true" />
                    Contato
                  </div>
                </li>
                <li className="skype">
                  <div href="#embreve">
                    <i className="fa fa-skype" aria-hidden="true" />
                    atleticaleopardos
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-5">
            <div className="top-language">
              <ul className="list">
                <li className="dropdown">
                  <div
                    href="#"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    Login
                  </div>
                  <ul className="dropdown-menu">
                    <li>
                      <div href="#">ok</div>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="top-search">
              <form>
                <input type="text" name="text" />
                <button>
                  <i className="fa fa-search" aria-hidden="true" />
                </button>
              </form>
            </div>
            <div className="clear" />
          </div>
        </div>
      </div>
    </div>
  );
}
