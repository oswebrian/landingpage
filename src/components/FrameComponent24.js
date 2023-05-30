import { memo, useMemo } from "react";
import "./FrameComponent24.css";
const FrameComponent24 = memo(({ studentsManualHandbook, propLeft }) => {
  const frameDiv12Style = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div className="group-parent17" style={frameDiv12Style}>
      <div className="rectangle-parent6">
        <img className="group-child24" alt="" src="/rectangle-342@2x.png" />
        <img className="pamphlet-1-icon5" alt="" src="/pamphlet-12@2x.png" />
      </div>
      <div className="frame-parent244">
        <div className="students-manualhandbook-parent">
          <div className="students-manualhandbook">
            {studentsManualHandbook}
          </div>
          <div className="this-contains-all-information-wrapper13">
            <div className="this-contains-all15">
              This contains all information about each of the courses we offer
            </div>
          </div>
        </div>
        <div className="open-in-browser-parent13">
          <div className="open-in-browser15">Open in browser</div>
          <div className="download1">
            <div className="open-in-browser15">Download</div>
            <img className="vector-icon290" alt="" src="/vector2.svg" />
          </div>
        </div>
      </div>
    </div>
  );
});

export default FrameComponent24;
