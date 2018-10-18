import React from "react";

export default function MainSlider(props) {
  const { penultimaPartida, ultimaPartida } = props;

  return (
    <div className="main-slider-section">
      <div className="main-slider">
        <div
          id="main-slider"
          className="carousel slide"
          data-ride="carousel"
          data-interval="4000"
          style={{ height: "600px" }}
        >
          <div className="carousel-inner" role="listbox">
            <div className="item" style={{ height: "540px" }}>
              <div className="main-slider-caption">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="match-date">
                        26/04/2018 / 18:30 / {penultimaPartida.time[0].Estadio}
                      </div>
                      <div className="team">
                        {" "}
                        {penultimaPartida.time[0].Nome}
                        <div className="big-count">
                          {penultimaPartida.placarCasa}:
                          {penultimaPartida.placarFora}
                        </div>
                        {penultimaPartida.time[1].Nome}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item" style={{ height: "540px" }}>
              <div className="main-slider-caption">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="match-date">
                        26/04/2018 / 18:30 / Hugão
                      </div>
                      <div className="team"> Leopardos - Medicina</div>
                      <div className="counter" data-date="1534185200000">
                        <ul>
                          <li>
                            <div className="digit days" />
                            <div className="descr">Dias</div>
                          </li>
                          <li>
                            <div className="digit hours" />
                            <div className="descr">Horas</div>
                          </li>
                          <li>
                            <div className="digit minutes" />
                            <div className="descr">Minutos</div>
                          </li>
                          <li>
                            <div className="digit seconds" />
                            <div className="descr">Segundos</div>
                          </li>
                        </ul>
                      </div>
                      <div className="booking">
                        <a href="#">Assistir Ao vivo</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item active" style={{ height: "540px" }}>
              <div className="main-slider-caption">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="match-date">
                        26/04/2018 / 18:30 / {ultimaPartida.time[0].Estadio}
                      </div>
                      <div className="team">
                        {" "}
                        {ultimaPartida.time[0].Nome}
                        <div className="big-count">
                          {ultimaPartida.placarCasa}:{ultimaPartida.placarFora}
                        </div>
                        {ultimaPartida.time[1].Nome}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a
            className="nav-arrow left-arrow"
            href="#main-slider"
            role="button"
            data-slide="prev"
          >
            <i className="fa fa-angle-left" aria-hidden="true" />
            <span className="sr-only" />
          </a>
          <a
            className="nav-arrow right-arrow"
            href="#main-slider"
            role="button"
            data-slide="next"
          >
            <i className="fa fa-angle-right" aria-hidden="true" />
            <span className="sr-only" />
          </a>
          <div className="event-nav">
            <div className="container">
              <div className="row no-gutter carousel-indicators">
                <div
                  className="col-sm-4"
                  data-slide-to="0"
                  data-target="#main-slider"
                >
                  <a href="#" className="nav-item">
                    <span className="championship">
                      {penultimaPartida.time[0].campeonato.Nome} -{" "}
                      {penultimaPartida.situacao}
                    </span>
                    <span className="teams-wrap">
                      <span className="team">
                        <img src="images/logo.png" alt="team-logo" />
                      </span>
                      <span className="score">
                        <span>
                          {penultimaPartida.placarCasa}:
                          {penultimaPartida.placarFora}
                        </span>
                      </span>
                      <span className="team1">
                        <span>
                          <img
                            src="team/images/soccer/team-logo2.png"
                            alt="team-logo"
                          />
                        </span>
                      </span>
                    </span>
                    {penultimaPartida.penaltiFora > 0 ||
                    penultimaPartida.penaltiCasa > 0 ? (
                      <span className="game-result">
                        ({penultimaPartida.penaltiCasa}-
                        {penultimaPartida.penaltiFora}) Penaltis
                      </span>
                    ) : null}
                  </a>
                </div>

                <div
                  className="col-sm-4"
                  data-slide-to="1"
                  data-target="#main-slider"
                >
                  <a href="#" className="nav-item">
                    <span className="championship">Leopardos - Capane</span>
                    <span className="teams-wrap">
                      <span className="team">
                        <img src="images/logo.png" alt="team-logo" />
                      </span>
                      <span
                        className="score countdown"
                        data-date="1534185200000"
                      >
                        <span className="days" />
                        <span className="hours" />
                        <span className="minutes" />
                        <span className="seconds" />
                      </span>
                      <span className="team1">
                        <span>
                          <img
                            src="team/images/soccer/team-logo1.png"
                            alt="team-logo"
                          />
                        </span>
                      </span>
                    </span>
                    <span className="game-result">
                      26/04/2018 / 18:30 / Hugão
                    </span>
                  </a>
                </div>

                <div
                  className="col-sm-4 active"
                  data-slide-to="2"
                  data-target="#main-slider"
                >
                  <a href="#" className="nav-item">
                    <span className="championship">
                      {ultimaPartida.campeonato.Nome} - {ultimaPartida.situacao}{" "}
                    </span>
                    <span className="teams-wrap">
                      <span className="team">
                        <img
                          src="team/images/soccer/team-logo3.png"
                          alt="team-logo"
                        />
                      </span>
                      <span className="score">
                        <span>
                          {ultimaPartida.placarCasa} -{" "}
                          {ultimaPartida.placarFora}
                        </span>
                      </span>

                      <span className="team1">
                        <span>
                          <img src="images/logo.png" alt="team-logo" />
                        </span>
                      </span>
                    </span>
                    {ultimaPartida.penaltiFora > 0 ||
                    ultimaPartida.penaltiCasa > 0 ? (
                      <span className="game-result">
                        ({ultimaPartida.penaltiCasa}-{ultimaPartida.penaltiFora}
                        ) Penaltis
                      </span>
                    ) : null}
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
