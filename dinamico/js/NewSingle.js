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
  $("#autor").prepend(`
  <div class="avatar"><img src="team/images/common/author-avatar.jpg" alt="author-avatar"></div>
  <div class="info">
      <div class="name">${user.username}</div>
      <p>${user.Sobre}</p>
  </div>
  `);
});
$.getJSON(`${apiUrl}/comentarios`, data => {
  const comments = data.filter(
    comment => comment.post.id == searchParams.get("id")
  );
  $.each(comments, (index, comment) => {
    const { Conteudo, createdAt, reply, user } = comment;

    $("#comentarios").append(`
  ${index == 0 ? "<h4>Commentários</h4>" : ""}
  <div class="comment-item">
      <div class="avatar"><img src="team/images/common/author-avatar.jpg" alt="author-avatar"></div>
      <div class="info">
          <div class="date">
              <a href="#">25 Sep 2016</a> por <a href="#">${user.username}</a>
              <a href="#" class="quote">#</a>
          </div>
          ${Conteudo}
          <a href="#" class="reply">responder</a>
      </div>
  </div>
    <div id="reply"></div>
  ${
    index == comments.length - 1
      ? `
  <div class="leave-comment-wrap">
  <h4>Deixe um comentário</h4>
  <form>
      <div class="row">
          <div class="col-md-6">
              <div class="item">
                  <label>
                      <span>Name <i>*</i></span>
                      <input type="text" name="name">
                  </label>
              </div>
          </div>
          <div class="col-md-6">
              <div class="item">
                  <label>
                      <span>Email <i>*</i></span>
                      <input type="email" name="email">
                  </label>
              </div>
          </div>
          <div class="col-md-12">
              <div class="item">
                  <label>
                      <span>Your comment</span>
                      <textarea></textarea>
                  </label>
              </div>
          </div>
          <div class="col-md-12">
              <button class="comment-submit">post a comment</button>
          </div>
      </div>
  </form>
</div>
  `
      : ""
  }
  `);
    $.each(reply, (index, resp) => {
      const { conteudo, createdAt, user } = resp;
      $("#reply").append(`
      <div class="comment-item answer">
      <div class="avatar"><img src="team/images/common/author-avatar.jpg" alt="author-avatar"></div>
      <div class="info">
          <div class="date">
              <a href="#">25 Sep 2016</a> by <a href="#">${user.username}</a>
              <a href="#" class="quote">#</a>
          </div>
          ${conteudo}
          <a href="#" class="reply">responder</a>
      </div>
  </div>
      `);
    });
  });
});
