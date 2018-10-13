$.getJSON("http://localhost:1337/partidas", function(data) {
  data.filter(partida => partida.concluida);
  const partidasHeader = x => {
    $(`#partida${x == 1 ? "Esquerda" : "Direita"} > .championship`).append(
      `${data[x].campeonato.Nome} - ${data[x].Situacao}`
    );
    $(
      `#partida${x == 1 ? "Esquerda" : "Direita"} > .teams-wrap > .score`
    ).append(`<span>${data[x].placarCasa} - ${data[x].placarFora}</span>`);
    if (data[x].penaltiCasa > 0 || data[x].penaltiFora > 0) {
      $(`#partida${x == 1 ? "Esquerda" : "Direita"} > .game-result`).append(
        `(${data[x].penaltiCasa}-${data[x].penaltiFora}) Penaltis`
      );
    }
  };
  partidasHeader(0);
  partidasHeader(1);

  $.each(data, (key, partida) => {
    const {
      placarCasa,
      placarFora,
      time,
      campeonato,
      Situacao,
      penaltiCasa,
      penaltiFora
    } = partida;
    $("#ultimasPartidas").append(` 
    <a href="#" class="item">
    <span class="championship">${campeonato.Nome} - ${Situacao}</span>
    <span class="teams-wrap">
        <span class="team">
            <span id=logoCasa${key}>
            
                
            </span>
            <span>${time[0].Nome}</span>
        </span>
        <span class="score">
            <span>${placarCasa}:${placarFora}</span>
    
        </span>
        <span class="team1">
            <span>${time[1].Nome}</span>
            <span id="logoFora${key}"></span>
        </span>
    </span>
    ${
      penaltiCasa > 0 || penaltiFora > 0
        ? `<span class="game-result">(${penaltiCasa}-${penaltiFora}) Penaltis</span>`
        : ``
    }
    </a> 
    `);
    $.getJSON(`http://localhost:1337/times/${time[0].id}`, t => {
      $(`#logoCasa${key}`).append(
        `<img src=http://localhost:1337${t.Logo.url} alt="team-image">`
      );
    });
    $.getJSON(`http://localhost:1337/times/${time[1].id}`, t => {
      $(`#logoFora${key}`).append(
        `<img src=http://localhost:1337${t.Logo.url} alt="team-image">`
      );
    });
  });
});
