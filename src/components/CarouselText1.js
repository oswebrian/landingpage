import { memo, useMemo } from "react";
import "./CarouselText1.css";
const CarouselText1 = memo(
  ({ propWidth, propHeight, propWidth1, propHeight1, propTop }) => {
    const carouselTextStyle = useMemo(() => {
      return {
        width: propWidth,
        height: propHeight,
      };
    }, [propWidth, propHeight]);

    const rectangleDivStyle = useMemo(() => {
      return {
        width: propWidth1,
        height: propHeight1,
      };
    }, [propWidth1, propHeight1]);

    const yourSearchForContainerStyle = useMemo(() => {
      return {
        top: propTop,
      };
    }, [propTop]);

    return (
      <div className="carousel-text2" style={carouselTextStyle}>
        <div className="carousel-text-child2" style={rectangleDivStyle} />
        <div className="carousel-text-child3" />
        <b className="our-assurance1">Our Assurance</b>
        <div
          className="your-search-for-container"
          style={yourSearchForContainerStyle}
        >
          <p className="your-search-for">
            Your search for a wholesome approach
          </p>
          <p className="your-search-for">to theological teachings ends here</p>
        </div>
      </div>
    );
  }
);

export default CarouselText1;
