let searchParams = new URLSearchParams(window.location.search);
$.getJSON(`${apiUrl}/posts/${searchParams.get("id")}`, data => {
  const { user, comentario, Imagem, Conteudo, Tags } = data;
  var converter = new showdown.Converter();
  moment.locale("pt-BR");
  $("#noticia").prepend(`
  <div class="top-info">
    <div class="date"><a href="#">25 Sep 2016</a> por <a href="#">${
      user.username
    }</a></div>
    <div class="comment-quantity">${comentario.length} comentário${
    comentario.length == 1 ? "" : "s"
  }</div>
    </div>
    <div class="img-wrap">
    <div class="bage highlight">highlight</div>
    <img src="${apiUrl}${Imagem.url}" alt="news-single">
    </div>
    <div class="post-text">
    ${converter.makeHtml(Conteudo)}
    <div class="row">
        <div class="col-md-6">
        ${
          Tags
            ? `
        <div class="tags">
            
            <a href="#">Football</a>
            <a href="#">Sport</a>
            <a href="#">Soccer</a>
        </div>
        `
            : ""
        }
            
        </div>
        
    </div>
    </div>
  `);
});
