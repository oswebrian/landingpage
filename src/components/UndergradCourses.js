import { memo, useMemo } from "react";
import "./UndergradCourses.css";
const UndergradCourses = memo(
  ({ vector, undergraduatePrograms, propWidth }) => {
    const vectorIcon3Style = useMemo(() => {
      return {
        width: propWidth,
      };
    }, [propWidth]);

    return (
      <div className="undergrad-courses">
        <div className="frame-parent243">
          <div className="vector-parent40">
            <img
              className="vector-icon269"
              alt=""
              src={vector}
              style={vectorIcon3Style}
            />
            <div className="undergraduate-programs2">
              {undergraduatePrograms}
            </div>
          </div>
          <div className="graduate-with-a">
            Graduate with a Bachelor of Arts in the program your choose. This
            program is meant for those who have completed their secondary school
            studies and attained a minimum of C+ in KCSE
          </div>
        </div>
      </div>
    );
  }
);

export default UndergradCourses;
