import { memo, useMemo } from "react";
import "./CoursesContainer.css";
const CoursesContainer = memo(
  ({ diplomaInBibleAndTheology, regularVirtual, propTop, propBorder }) => {
    const frameDiv16Style = useMemo(() => {
      return {
        top: propTop,
        border: propBorder,
      };
    }, [propTop, propBorder]);

    return (
      <div className="frame-wrapper3" style={frameDiv16Style}>
        <div className="rectangle-parent9">
          <img className="frame-child92" alt="" src="/rectangle-5@2x.png" />
          <div className="diploma-in-bible-and-theology-parent">
            <div className="diploma-in-bible7">{diplomaInBibleAndTheology}</div>
            <div className="study-mode-parent">
              <div className="study-mode">Study Mode:</div>
              <div className="regularvirtual">{regularVirtual}</div>
            </div>
            <div className="start-date-parent">
              <div className="study-mode">Start Date:</div>
              <div className="regularvirtual">1st Feb 2024</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default CoursesContainer;
