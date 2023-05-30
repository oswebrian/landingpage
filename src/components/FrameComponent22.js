import { memo, useMemo } from "react";
import "./FrameComponent22.css";
const FrameComponent22 = memo(
  ({
    maskGroup,
    deanOfStudents,
    toStudents,
    mar2023,
    studentPortalsHaveBeenAct,
    upcoming,
    propHeight,
    propFlex,
    propWidth,
    propAlignSelf,
    propWidth1,
    propAlignSelf1,
    propWidth2,
    propColor,
  }) => {
    const frameDiv7Style = useMemo(() => {
      return {
        height: propHeight,
      };
    }, [propHeight]);

    const newsInfoStyle = useMemo(() => {
      return {
        flex: propFlex,
        width: propWidth,
      };
    }, [propFlex, propWidth]);

    const fromToDateStyle = useMemo(() => {
      return {
        alignSelf: propAlignSelf,
        width: propWidth1,
      };
    }, [propAlignSelf, propWidth1]);

    const studentPortalsHaveStyle = useMemo(() => {
      return {
        alignSelf: propAlignSelf1,
        width: propWidth2,
      };
    }, [propAlignSelf1, propWidth2]);

    const upcomingStyle = useMemo(() => {
      return {
        color: propColor,
      };
    }, [propColor]);

    return (
      <div className="mask-group-parent5" style={frameDiv7Style}>
        <img className="mask-group-icon10" alt="" src={maskGroup} />
        <div className="news-info1" style={newsInfoStyle}>
          <div className="from-to-date7" style={fromToDateStyle}>
            <div className="dean-of-students5">{deanOfStudents}</div>
            <div className="from-to-date-child11" />
            <div className="to-students5">{toStudents}</div>
            <div className="from-to-date-child12" />
            <div className="to-students5">{mar2023}</div>
          </div>
          <div
            className="student-portals-have5"
            style={studentPortalsHaveStyle}
          >
            {studentPortalsHaveBeenAct}
          </div>
        </div>
        <div className="upcoming-wrapper">
          <div className="to-students5" style={upcomingStyle}>
            {upcoming}
          </div>
        </div>
      </div>
    );
  }
);

export default FrameComponent22;
