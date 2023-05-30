import { memo, useMemo } from "react";
import "./Undergrad.css";
const Undergrad = memo(
  ({
    undergraduatePrograms,
    bachelorOfArtInBibleTheol,
    bachelorOfArtInBibleTheol1,
    bachelorOfArtInBibleTheol2,
    propTop,
  }) => {
    const undergradStyle = useMemo(() => {
      return {
        top: propTop,
      };
    }, [propTop]);

    return (
      <div className="undergrad" style={undergradStyle}>
        <div className="undergraduate-programs3">{undergraduatePrograms}</div>
        <div className="undergrad-courses1">
          <div className="course-card">
            <div className="course2">
              <div className="course-thumbnail">
                <img
                  className="pamphlet-1-icon"
                  alt=""
                  src="/pamphlet-1@2x.png"
                />
              </div>
              <div className="course-details1">
                <div className="cpurse-info">
                  <div className="bachelor-of-art1">
                    {bachelorOfArtInBibleTheol}
                  </div>
                  <div className="admission-into-a">
                    Admission into a degree program at Global University will be
                    based on the following minimum requirements
                  </div>
                </div>
                <div className="course-actions">
                  <div className="enrol">
                    <div className="course-details2">Course Details</div>
                    <img
                      className="vector-icon270"
                      alt=""
                      src="/vector42.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="course-card">
            <div className="course2">
              <div className="course-thumbnail">
                <img
                  className="pamphlet-1-icon"
                  alt=""
                  src="/pamphlet-1@2x.png"
                />
              </div>
              <div className="course-details1">
                <div className="cpurse-info">
                  <div className="bachelor-of-art1">
                    {bachelorOfArtInBibleTheol1}
                  </div>
                  <div className="admission-into-a">
                    Admission into a degree program at Global University will be
                    based on the following minimum requirements
                  </div>
                </div>
                <div className="course-actions">
                  <div className="enrol">
                    <div className="course-details2">Course Details</div>
                    <img
                      className="vector-icon270"
                      alt=""
                      src="/vector42.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="course-card">
            <div className="course2">
              <div className="course-thumbnail">
                <img
                  className="pamphlet-1-icon"
                  alt=""
                  src="/pamphlet-1@2x.png"
                />
              </div>
              <div className="course-details1">
                <div className="cpurse-info">
                  <div className="bachelor-of-art1">
                    {bachelorOfArtInBibleTheol2}
                  </div>
                  <div className="admission-into-a">
                    Admission into a degree program at Global University will be
                    based on the following minimum requirements
                  </div>
                </div>
                <div className="course-actions">
                  <div className="enrol">
                    <div className="course-details2">Course Details</div>
                    <img
                      className="vector-icon270"
                      alt=""
                      src="/vector42.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default Undergrad;
