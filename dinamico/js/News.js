$.getJSON(`${apiUrl}/posts`, data => {
  $.each(data, (key, news) => {
    moment.locale("pt-BR");
    const { Titulo, user, createdAt, Imagem } = news;
    $("#news").prepend(`
    <div class="item img-top">
        <div class="img-wrap">
            ${
              true
                ? ""
                : '<div class="bage"><a href="news-single.html">highlight</a></div>'
            }
            <a href="news-single.html"><img src="${apiUrl}${
      Imagem.url
    }" alt="post image"></a>
        </div>
        <div class="info">
            <a href="news-single.html" class="name">${Titulo}</a>
            <div class="wrap">
                <a href="news-single.html">${moment(
                  createdAt,
                  "YYYY-DD-MM hh:mm"
                ).format("LL")}</a> por <a href="news-single.html">${
      user.username
    }</a>
            </div>
            <div class="clear"></div>
        </div>
    </div>
    `);
  });
});
