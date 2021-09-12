import Carousel from "nuka-carousel";

import { useState } from "react";

function Carousell(props) {
  const [carouselConfig] = useState({
    nextButtonClassName: "hidden",
    prevButtonClassName: "hidden",
    pagingDotsContainerClassName: "dots-container",
    pagingDotsStyle: {
      fill: "white",
      borderRadius: "50%",
      display: "inline-block",
      margin: "0rem 0.5rem",
      width: "5px",
      height: "5px",
    },
  });

  return (
    <Carousel
      defaultControlsConfig={carouselConfig}
      withoutControls={true}
      slidesToScroll={props.slide || 1}
      slidesToShow={props.slides || 1}
      cellSpacing={10}
      {...props}
    />
  );
}

export default Carousell;
