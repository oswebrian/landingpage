import { memo, useMemo } from "react";
import "./FrameComponent25.css";
const FrameComponent25 = memo(({ academicCalendar, propTop, propLeft }) => {
  const frameDiv13Style = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  return (
    <div className="group-parent18" style={frameDiv13Style}>
      <div className="rectangle-parent7">
        <img className="group-child25" alt="" src="/rectangle-342@2x.png" />
        <img className="pamphlet-1-icon6" alt="" src="/pamphlet-12@2x.png" />
      </div>
      <div className="frame-parent245">
        <div className="academic-calendar-parent">
          <div className="academic-calendar1">{academicCalendar}</div>
          <div className="this-contains-all-information-wrapper14">
            <div className="this-contains-all16">
              This contains all information about each of the courses we offer
            </div>
          </div>
        </div>
        <div className="download-controls">
          <div className="select-copy">
            <div className="select-copy1">Select copy</div>
            <img className="vector-icon291" alt="" src="/vector3.svg" />
          </div>
          <div className="open-in-browser16">Open in browser</div>
          <div className="download3">
            <div className="download4">Download</div>
            <img className="vector-icon292" alt="" src="/vector2.svg" />
          </div>
        </div>
      </div>
    </div>
  );
});

export default FrameComponent25;
