import React, { useState } from "react";
import LazyLoad from "react-lazy-load";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Banner = () => {
  const imgsUrl = [
    "https://images.unsplash.com/photo-1548695607-9c73430ba065",
    "https://images.unsplash.com/photo-1589010588553-46e8e7c21788",
    "https://images.unsplash.com/photo-1464941913535-1f37bfb72880",
    "https://images.unsplash.com/photo-1496412705862-e0088f16f791",
  ];
  const [picture] = useState(imgsUrl);

  return (
    <Carousel showThumbs={false} showStatus={false} stopOnHover={true}>
      {picture.map((picture, i) => (
        <LazyLoad key={i}>
          <img key={i * 100} loading="lazy" src={picture} alt="datos de la foto" />
        </LazyLoad>
      ))}
    </Carousel>
  );
};

export default Banner;
