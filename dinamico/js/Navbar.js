const isIndex =
  window.location.pathname == "/index.html" || window.location.pathname == "/";
const isNews = window.location.pathname == "/news.html";
const isNewsSingle = window.location.pathname == "/news-single.html";

if (!isIndex) {
  $("#Navbar").prepend(`
    <!--BREADCRUMBS BEGIN-->
        <section class="image-header">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <div class="info">
                            <div class="wrap">
                                <ul class="breadcrumbs">
                                    <li><a href="index-2.html">Main</a>/</li>
                                    <li>Category</li>
                                </ul>
                                <h1>Category</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--BREADCRUMBS END-->
    `);
}

$("#Navbar").prepend(`
<div class="top-bar">
    <div class="container">
        <div class="row">
            <div class="col-md-7 hidden-sm hidden-xs">
                <div class="top-contacts">
                    <ul class="socials">
                        <li><a href="#"><i class="fa fa-facebook-square" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i class="fa fa-google" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i class="fa fa-pinterest" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                    </ul>
                    <ul class="contacts">
                        <li class="phone"><i class="fa fa-phone-square" aria-hidden="true"></i>+61 3 8376 6284</li>
                        <li class="skype"><a href="callto:team.skype"><i class="fa fa-skype" aria-hidden="true"></i>team.skype</a></li>
                    </ul>
                </div>
            </div>
            <div class="col-md-5">
                <div class="top-language">
                    <ul class="list">
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown"><img src="team/images/common/en-flag.png"
                                    alt="selected language">EN</a>
                            <ul class="dropdown-menu">
                                <li>
                                    <a href="#"><img src="team/images/common/fr-flag.png" alt="language">FR</a>
                                </li>
                                <li>
                                    <a href="#"><img src="team/images/common/en-flag.png" alt="language">EN</a>
                                </li>
                                <li>
                                    <a href="#"><img src="team/images/common/ru-flag.png" alt="language">RU</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div class="top-search">
                    <form>
                        <input type="text" name="text">
                        <button><i class="fa fa-search" aria-hidden="true"></i></button>
                    </form>
                </div>

                <div class="clear"></div>
            </div>
        </div>
    </div>
</div>

<!--MAIN MENU WRAP BEGIN-->
<div class="main-menu-wrap sticky-menu">
    <div class="container">
        <a href="index-2.html" class="custom-logo-link"><img src="team/images/soccer/logo.png" alt="logo" class="custom-logo"></a>
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#team-menu"
            aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
        </button>
        <nav class="navbar">
            <div class="collapse navbar-collapse" id="team-menu">
                <ul class="main-menu nav">
                    <li ${isIndex ? 'class="active"' : null}>
                        <a href="/"><span>Home</span></a>
                    </li>
                    <li><a href="news.html"><span>News</span></a></li>
                    <li><a href="contacts.html"><span>Contact</span></a></li>
                </ul>
            </div>
        </nav>
    </div>
</div>


`);
