import { memo, useMemo } from "react";
import "./FrameComponent19.css";
const FrameComponent19 = memo(
  ({
    studentLifeCarouselImage1,
    nurturingPotentialBuildin,
    propDisplay,
    propWidth,
    propDisplay1,
  }) => {
    const frameDiv8Style = useMemo(() => {
      return {
        display: propDisplay,
      };
    }, [propDisplay]);

    const carouselText1Style = useMemo(() => {
      return {
        width: propWidth,
        display: propDisplay1,
      };
    }, [propWidth, propDisplay1]);

    return (
      <div
        className="student-life-carousel-image-1-parent"
        style={frameDiv8Style}
      >
        <img
          className="student-life-carousel-image-1"
          alt=""
          src={studentLifeCarouselImage1}
        />
        <div className="carousel-text3" style={carouselText1Style}>
          <div className="carousel-text-child4" />
          <div className="carousel-text-child5" />
          <b className="our-philosophy3">Our Philosophy</b>
          <div className="nurturing-potential-building3">
            {nurturingPotentialBuildin}
          </div>
        </div>
      </div>
    );
  }
);

export default FrameComponent19;
