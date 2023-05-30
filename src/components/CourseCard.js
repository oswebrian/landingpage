import { memo, useMemo } from "react";
import "./CourseCard.css";
const CourseCard = memo(
  ({
    rectangle34,
    pamphlet1,
    bachelorOfArtInBibleTheol,
    vector,
    propHeight,
  }) => {
    const courseDetailsStyle = useMemo(() => {
      return {
        height: propHeight,
      };
    }, [propHeight]);

    return (
      <div className="course-card3">
        <div className="course5">
          <div className="course-thumbnail3">
            <img className="course-thumbnail-child" alt="" src={rectangle34} />
            <img className="pamphlet-1-icon3" alt="" src={pamphlet1} />
          </div>
          <div className="course-details7" style={courseDetailsStyle}>
            <div className="cpurse-info3">
              <div className="bachelor-of-art4">
                {bachelorOfArtInBibleTheol}
              </div>
              <div className="admission-into-a3">
                Admission into a degree program at Global University will be
                based on the following minimum requirements
              </div>
            </div>
            <div className="course-actions3">
              <div className="course-details8">
                <div className="course-details9">Course Details</div>
                <img className="vector-icon273" alt="" src={vector} />
              </div>
            </div>
          </div>
        </div>
        <div className="coming-soon-ribbon">
          <img
            className="coming-soon-ribbon-child"
            alt=""
            src="/vector-3.svg"
          />
          <div className="coming-soon">Coming Soon</div>
        </div>
      </div>
    );
  }
);

export default CourseCard;
