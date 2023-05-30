import { memo, useMemo } from "react";
import "./CarouselText.css";
const CarouselText = memo(({ propLeft }) => {
  const carouselText2Style = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div className="carousel-text4" style={carouselText2Style}>
      <div className="carousel-text-child6" />
      <div className="carousel-text-child7" />
      <b className="our-assurance2">Our Assurance</b>
      <div className="your-search-for-container1">
        <p className="your-search-for1">Your search for a wholesome approach</p>
        <p className="your-search-for1">to theological teachings ends here</p>
      </div>
    </div>
  );
});

export default CarouselText;
