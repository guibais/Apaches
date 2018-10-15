import React from "react";

export default function MainMatch(props) {
  const renderMatches = () =>
    props.partidas.map((index, key) => {
      const {
        placarCasa,
        placarFora,
        time,
        situacao,
        data,
        campeonato
      } = index;
      return (
        <a href="#" className="item" key={key}>
          <span className="championship">
            {campeonato.Nome} - {situacao}
          </span>
          <span className="teams-wrap">
            <span className="team">
              <span>
                <img src="images/logo.png" alt="team-image" />
              </span>
              <span>{time[0].Nome}</span>
            </span>
            <span className="score">
              <span>
                {placarCasa}:{placarFora}
              </span>
            </span>
            <span className="team1">
              <span>{time[1].Nome}</span>
              <span>
                <img src="team/images/common/team-logo2.png" alt="team-image" />
              </span>
            </span>
          </span>
          <span className="game-result">(5-4) Penaltis</span>
        </a>
      );
    });

  return (
    <section className="main-match-shedule">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-12 col-xs-12">
            <h6>Próximo Jogo</h6>

            <div className="main-next-match bg-cover">
              <img
                src="team/images/soccer/next-match-bg.jpg"
                className="next-match-background-img"
                alt="next-image"
              />
              <div className="wrap">
                <div className="place">Estadio Olimpico Mogi</div>
                <div className="date">28 Abril 2018 / 18:30</div>
                <div className="teams-wrap">
                  <a href="#" className="team">
                    <span>Leopardos</span>
                    <span>
                      <img src="images/logo.png" alt="team-image" />
                    </span>
                  </a>
                  <div className="vs">vs</div>
                  <a href="#" className="team1">
                    <span>
                      <img
                        src="team/images/common/team-logo2.png"
                        alt="team-image"
                      />
                    </span>
                    <span>Capane</span>
                  </a>
                </div>
                <a href="#" className="booking">
                  PRÓXIMO JOGO
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 col-xs-12">
            <h6>Últimos jogos</h6>
            {renderMatches()}
            <div className="main-lates-matches" />
          </div>
        </div>
      </div>
    </section>
  );
}
