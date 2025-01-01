import React from "react";
import Slider from "react-slick";
import "./carousel.css";

export default function Carousel({ items }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  // Limit items to the first 4 posts
  const carouselItems = items.slice(0, 4);
  const PF = "http://localhost:5000/images/";
  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {carouselItems.map((post, index) => (
          <div key={index} className="carousel-slide">
            <div className="carousel-image" >
            {post.photo && <img className="carouseltImg" src={PF + post.photo} alt="" />}
            </div>

              <div className="carousel-text">
                <h2 className="carousel-title">{post.title}</h2>
                <p className="carousel-desc">{post.desc}</p>
              
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
