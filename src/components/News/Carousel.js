import React from 'react';
import './Carousel.css'
import image0 from './0.jpg';
import image1 from './1.jpg';
import image2 from './2.jpg';
import image3 from './22.jpg';

function Carousel() {
  return (
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
          </ol>
          <div class="carousel-inner">
              <div class="carousel-item active">
                  <img src={image0} class="d-block w-100" alt="1 фото карусельки"></img>
              </div>
              <div class="carousel-item">
                  <img src={image1} class="d-block w-100" alt="2 фото карусельки"></img>
              </div>
              <div class="carousel-item">
                  <img src={image2} class="d-block w-100" alt="3 фото карусельки"></img>
              </div>
              <div class="carousel-item">
                  <img src={image3} class="d-block w-100" alt="4 фото карусельки"></img>
              </div>
          </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
      </div>
  );
}
export default Carousel;