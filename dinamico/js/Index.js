$.getJSON(`${apiUrl}/partidas`, data => {
  data.filter(partida => partida.concluida);

  const partidasHeader = x => {
    moment.locale("pt-BR");
    // SLIDER
    $(`#slider${x == 1 ? "Esquerda" : "Direita"} > .match-date`).append(`
    ${moment(data[x].data, "YYYY-DD-MM HH:mm").format("LL")} / ${moment(
      data[x].data,
      "YYYY-DD-MM HH:mm"
    ).format("LT")} / ${data[x].campeonato.Nome}
    `);
    $(`#slider${x == 1 ? "Esquerda" : "Direita"} > .team`).append(`
    ${data[x].time[0].Nome}
    <div class="big-count">
    ${data[x].placarCasa} : ${data[x].placarFora}
    </div>
    ${data[x].time[1].Nome}`);

    // HEADER
    $(`#partida${x == 1 ? "Esquerda" : "Direita"} > .championship`).append(
      `${data[x].campeonato.Nome} - ${data[x].situacao}`
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
    $.getJSON(`${apiUrl}/times/${time[0].id}`, t => {
      $(`#logoCasa${key}`).append(
        `<img src=${apiUrl}${t.Logo.url} alt="team-image">`
      );
    });
    $.getJSON(`${apiUrl}/times/${time[1].id}`, t => {
      $(`#logoFora${key}`).append(
        `<img src=${apiUrl}${t.Logo.url} alt="team-image">`
      );
    });
  });
});
