import React from "react";

export default function MainSlider(props) {
  const { penultimaPartida } = props;

  return (
    <div class="main-slider-section">
      <div class="main-slider">
        <div
          id="main-slider"
          class="carousel slide"
          data-ride="carousel"
          data-interval="4000"
        >
          <div class="carousel-inner" role="listbox">
            <div class="item active">
              <div class="main-slider-caption">
                <div class="container">
                  <div class="row">
                    <div class="col-md-12">
                      <div class="match-date">26/04/2018 / 18:30 / Hugão</div>
                      <div class="team">
                        {" "}
                        Leoparodos
                        <div class="big-count">2:0</div>
                        Capane
                      </div>
                      <div class="booking">
                        <a href="#">Veja mais</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="main-slider-caption">
                <div class="container">
                  <div class="row">
                    <div class="col-md-12">
                      <div class="match-date">26/04/2018 / 18:30 / Hugão</div>
                      <div class="team"> Leopardos - Medicina</div>
                      <div class="counter" data-date="1534185200000">
                        <ul>
                          <li>
                            <div class="digit days" />
                            <div class="descr">Dias</div>
                          </li>
                          <li>
                            <div class="digit hours" />
                            <div class="descr">Horas</div>
                          </li>
                          <li>
                            <div class="digit minutes" />
                            <div class="descr">Minutos</div>
                          </li>
                          <li>
                            <div class="digit seconds" />
                            <div class="descr">Segundos</div>
                          </li>
                        </ul>
                      </div>
                      <div class="booking">
                        <a href="#">Assistir Ao vivo</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="main-slider-caption">
                <div class="container">
                  <div class="row">
                    <div class="col-md-12">
                      <div class="match-date">26/04/2018 / 18:30 / Hugão</div>
                      <div class="team">
                        {" "}
                        Direito
                        <div class="big-count">2:5</div>
                        Leopardos
                      </div>
                      <div class="booking">
                        <a href="#">Veja mais</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a
            class="nav-arrow left-arrow"
            href="#main-slider"
            role="button"
            data-slide="prev"
          >
            <i class="fa fa-angle-left" aria-hidden="true" />
            <span class="sr-only" />
          </a>
          <a
            class="nav-arrow right-arrow"
            href="#main-slider"
            role="button"
            data-slide="next"
          >
            <i class="fa fa-angle-right" aria-hidden="true" />
            <span class="sr-only" />
          </a>
          <div class="event-nav">
            <div class="container">
              <div class="row no-gutter carousel-indicators">
                <div
                  class="col-sm-4 active"
                  data-slide-to="0"
                  data-target="#main-slider"
                >
                  <a href="#" class="nav-item">
                    <span class="championship">
                      Campeonato - Quarta de finais
                    </span>
                    <span class="teams-wrap">
                      <span class="team">
                        <img src="images/logo.png" alt="team-logo" />
                      </span>
                      <span class="score">
                        <span>2:0</span>
                      </span>
                      <span class="team1">
                        <span>
                          <img
                            src="team/images/soccer/team-logo2.png"
                            alt="team-logo"
                          />
                        </span>
                      </span>
                    </span>
                    <span class="game-result">(0-0) Penaltis</span>
                  </a>
                </div>

                <div
                  class="col-sm-4"
                  data-slide-to="1"
                  data-target="#main-slider"
                >
                  <a href="#" class="nav-item">
                    <span class="championship">Leopardos - Capane</span>
                    <span class="teams-wrap">
                      <span class="team">
                        <img src="images/logo.png" alt="team-logo" />
                      </span>
                      <span class="score countdown" data-date="1534185200000">
                        <span class="days" />
                        <span class="hours" />
                        <span class="minutes" />
                        <span class="seconds" />
                      </span>
                      <span class="team1">
                        <span>
                          <img
                            src="team/images/soccer/team-logo1.png"
                            alt="team-logo"
                          />
                        </span>
                      </span>
                    </span>
                    <span class="game-result">26/04/2018 / 18:30 / Hugão</span>
                  </a>
                </div>

                <div
                  class="col-sm-4"
                  data-slide-to="2"
                  data-target="#main-slider"
                >
                  <a href="#" class="nav-item">
                    <span class="championship">Copa Mundo - Final</span>
                    <span class="teams-wrap">
                      <span class="team">
                        <img
                          src="team/images/soccer/team-logo3.png"
                          alt="team-logo"
                        />
                      </span>
                      <span class="score">
                        <span>VS</span>
                      </span>

                      <span class="team1">
                        <span>
                          <img src="images/logo.png" alt="team-logo" />
                        </span>
                      </span>
                    </span>
                    <span class="game-result">(5-4) Penaltis</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
