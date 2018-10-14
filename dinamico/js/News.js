$.getJSON(`${apiUrl}/posts`, data => {
  $.each(data, (key, news) => {
    moment.locale("pt-BR");
    const { Titulo, user, createdAt, Imagem, id } = news;
    $("#news").prepend(`
    <div class="item img-top">
        <div class="img-wrap">
            ${
              true
                ? ""
                : '<div class="bage"><a href="news-single.html">highlight</a></div>'
            }
            <a href="news-single.html?id=${id}"><img src="${apiUrl}${
      Imagem.url
    }" alt="post image"></a>
        </div>
        <div class="info">
            <a href="news-single.html?id=${id}" class="name">${Titulo}</a>
            <div class="wrap">
                <a href="news-single.html?id=${id}">${moment(
      createdAt,
      "YYYY-DD-MM hh:mm"
    ).format("LL")}</a> por <a href="news-single.html?id=${id}">${
      user.username
    }</a>
            </div>
            <div class="clear"></div>
        </div>
    </div>
    `);
  });
});
