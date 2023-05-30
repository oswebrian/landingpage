import { memo, useState, useMemo, useCallback } from "react";
import FrameComponent from "../pages/FrameComponent";
import PortalPopup from "./PortalPopup";
import "./FrameComponent18.css";
const FrameComponent18 = memo(
  ({ maskGroup, propTop, propCursor, onViewCoursesFirstClick }) => {
    const [isFrame3Open, setFrame3Open] = useState(false);
    const frameDiv10Style = useMemo(() => {
      return {
        top: propTop,
      };
    }, [propTop]);

    const viewCoursesFirstStyle = useMemo(() => {
      return {
        cursor: propCursor,
      };
    }, [propCursor]);

    const openFrame3 = useCallback(() => {
      setFrame3Open(true);
    }, []);

    const closeFrame3 = useCallback(() => {
      setFrame3Open(false);
    }, []);

    return (
      <>
        <div className="course-profile-inner1" style={frameDiv10Style}>
          <div className="frame-parent237">
            <div className="frame-parent238">
              <div className="frame-parent239">
                <div className="our-intake-is-ongoing-group">
                  <div className="our-intake-is1">Our Intake is ongoing</div>
                  <div className="the-february-intake2">
                    The February intake is now open
                  </div>
                </div>
                <div className="we-conduct-intakes2">{`We conduct intakes twice an year in the months of February and September for all our courses `}</div>
              </div>
              <div className="intake-closes-in-container">
                <div className="our-intake-is1">Intake closes in</div>
                <div className="frame-parent240">
                  <div className="days-container">
                    <div className="days2">Days</div>
                    <div className="div80">10</div>
                  </div>
                  <div className="days-container">
                    <div className="days2">Hours</div>
                    <div className="div80">12</div>
                  </div>
                  <div className="days-container">
                    <div className="days2">Minutes</div>
                    <div className="div80">47</div>
                  </div>
                  <div className="days-container">
                    <div className="days2">Seconds</div>
                    <div className="div80">22</div>
                  </div>
                </div>
              </div>
              <div className="our-application-process-is-cle-group">
                <div className="our-application-process2">
                  Our application process is clear and simple so you can apply
                  from anywhere.
                </div>
                <div className="apply-now-group">
                  <div className="apply-now36" onClick={openFrame3}>
                    <img
                      className="icround-log-in-icon23"
                      alt=""
                      src="/icroundlogin7.svg"
                    />
                    <b className="apply-now37">Apply Now</b>
                  </div>
                  <div
                    className="view-courses-first2"
                    onClick={onViewCoursesFirstClick}
                    style={viewCoursesFirstStyle}
                  >
                    View courses first
                  </div>
                </div>
              </div>
            </div>
            <img className="mask-group-icon13" alt="" src={maskGroup} />
          </div>
        </div>
        {isFrame3Open && (
          <PortalPopup
            overlayColor="rgba(113, 113, 113, 0.3)"
            placement="Centered"
            onOutsideClick={closeFrame3}
          >
            <FrameComponent onClose={closeFrame3} />
          </PortalPopup>
        )}
      </>
    );
  }
);

export default FrameComponent18;
