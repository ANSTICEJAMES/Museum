import React from 'react';
import image0 from './0.jpg';
import image1 from './1.jpg';
import image2 from './2.jpg';
function Carousel() {
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" data-interval="3500">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={image0} className="d-block w-100" alt="1 фото карусели"/>
      <div className="carousel-caption d-none d-md-block">
        <h2> <kbd>Добро пожаловать на официальный сайт политехнического музея </kbd></h2>
        <h2> <kbd> Южного Федерального Университета</kbd></h2>
      </div>
    </div>
    <div className="carousel-item">
      <img src={image1} className="d-block w-100" alt="2 фото карусели"/>
      <div className="carousel-caption d-none d-md-block ">
        <h1> <kbd>Более тысячи экспонатов</kbd></h1>
        <h4><kbd> 10 различных выставок</kbd></h4>
      </div>
    </div>
    <div className="carousel-item">
      <img src={image2} className="d-block w-100"  alt="3 фото карусели"/>
      <div className="carousel-caption d-none d-md-block">
        <h1><kbd>Экскурсии по музею</kbd></h1>
        <h4><kbd>Вы можете узнать об актуальных событиях во вкладке "Новости"</kbd></h4>
      </div>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
  );
}
export default Carousel;
