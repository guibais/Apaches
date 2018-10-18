import React from "react";
import { URL } from "../../Strings";
import Pagination from "react-js-pagination";

const ReactMarkdown = require("react-markdown");

export default function NewsList(props) {
  const News = () =>
    props.news.map((index, key) => {
      const { Titulo, Conteudo, user, createdAt, comentario, Imagem } = index;
      if (key === 0)
        return (
          <div className="item img-top" id={key}>
            <div className="img-wrap">
              <div className="bage">
                <a href="news-single.html">highlight</a>
              </div>
              <a href="news-single.html">
                <img src={URL + Imagem.url} alt="post" />
              </a>
            </div>
            <div className="info">
              <a href="news-single.html" className="name">
                {Titulo}
              </a>
              <div className="wrap">
                <a href="news-single.html">{createdAt}</a> por{" "}
                <a href="news-single.html">{user.Name}</a>
              </div>
              <div className="clear" />
            </div>
          </div>
        );
      return (
        <div className="item" id={key}>
          <div className="info">
            <a href="news-single.html" className="name">
              {Titulo}
            </a>
            <div className="wrap">
              <a href="news-single.html">{createdAt}</a> por
              <a href="news-single.html">{user.Name}</a>
            </div>
            <div className="comment-quantity">
              {comentario.length}{" "}
              {comentario.length === 1 ? "comentário" : "comentários"}
            </div>
            <div className="clear" />
            <p>
              <ReactMarkdown source={Conteudo} />
            </p>
            <a href="news-single.html" className="continue">
              Continue Lendo
            </a>
          </div>
        </div>
      );
    });
  return (
    <div className="news-list col-xs-12 col-md-9">
      <p className="hidden-md hidden-lg">
        <button
          type="button"
          className="btn sidebar-btn"
          data-toggle="offcanvas"
          title="Toggle sidebar"
        >
          sidebar
        </button>
      </p>

      <News />

      <div className="pagination-wrap">
        <Pagination
          activePage={props.activePage}
          itemsCountPerPage={5}
          totalItemsCount={props.count}
          pageRangeDisplayed={4}
          onChange={props.changePage}
        />
      </div>
    </div>
  );
}
