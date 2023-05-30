import { memo, useMemo } from "react";
import "./FrameComponent12.css";
const FrameComponent12 = memo(
  ({
    courseStatistics,
    prop,
    creditHours,
    prop1,
    feesPerCourse,
    prop2,
    courseGraduates,
    prop3,
    courseDuration,
    propLeft,
  }) => {
    const frameDiv9Style = useMemo(() => {
      return {
        left: propLeft,
      };
    }, [propLeft]);

    return (
      <div className="course-statistics-parent" style={frameDiv9Style}>
        <div className="course-statistics">{courseStatistics}</div>
        <div className="frame-parent229">
          <div className="parent4">
            <div className="div48">{prop}</div>
            <div className="course-graduates">{creditHours}</div>
          </div>
          <div className="parent4">
            <div className="div48">{prop1}</div>
            <div className="course-graduates">{feesPerCourse}</div>
          </div>
          <div className="parent4">
            <div className="div48">{prop2}</div>
            <div className="course-graduates">{courseGraduates}</div>
          </div>
          <div className="parent4">
            <div className="div48">{prop3}</div>
            <div className="course-graduates">{courseDuration}</div>
          </div>
        </div>
      </div>
    );
  }
);

export default FrameComponent12;
