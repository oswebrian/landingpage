import { memo, useMemo } from "react";
import "./MainNavbar.css";
const MainNavbar = memo(
  ({
    riarrowDropDownLine,
    propBackgroundColor,
    propBackgroundColor1,
    propBackgroundColor2,
    propBackgroundColor3,
    propBackgroundColor4,
    propBackgroundColor5,
  }) => {
    const frameDivStyle = useMemo(() => {
      return {
        backgroundColor: propBackgroundColor,
      };
    }, [propBackgroundColor]);

    const frameDiv1Style = useMemo(() => {
      return {
        backgroundColor: propBackgroundColor1,
      };
    }, [propBackgroundColor1]);

    const frameDiv2Style = useMemo(() => {
      return {
        backgroundColor: propBackgroundColor2,
      };
    }, [propBackgroundColor2]);

    const frameDiv3Style = useMemo(() => {
      return {
        backgroundColor: propBackgroundColor3,
      };
    }, [propBackgroundColor3]);

    const frameDiv4Style = useMemo(() => {
      return {
        backgroundColor: propBackgroundColor4,
      };
    }, [propBackgroundColor4]);

    const frameDiv5Style = useMemo(() => {
      return {
        backgroundColor: propBackgroundColor5,
      };
    }, [propBackgroundColor5]);

    return (
      <div className="main-navbar">
        <div className="menu">
          <div className="home-wrapper" style={frameDivStyle}>
            <b className="e-learning">{`Home `}</b>
          </div>
          <div className="admissions-parent" style={frameDiv1Style}>
            <b className="e-learning">Admissions</b>
            <img
              className="riarrow-drop-down-line-icon"
              alt=""
              src={riarrowDropDownLine}
            />
          </div>
          <div className="home-wrapper" style={frameDiv2Style}>
            <b className="e-learning">Courses</b>
          </div>
          <div className="home-wrapper">
            <b className="e-learning">E-Learning</b>
          </div>
          <div className="home-wrapper" style={frameDiv3Style}>
            <b className="e-learning">Downloads</b>
          </div>
          <div className="home-wrapper" style={frameDiv4Style}>
            <b className="e-learning">Contact Us</b>
          </div>
          <div className="about-us-wrapper" style={frameDiv5Style}>
            <b className="e-learning">About Us</b>
          </div>
        </div>
      </div>
    );
  }
);

export default MainNavbar;
