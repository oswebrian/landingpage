import { memo, useMemo } from "react";
import "./FrameComponent16.css";
const FrameComponent16 = memo(
  ({
    group44,
    fosterSpiritualFormationA,
    group43,
    increaseStudentEnrollment,
    group42,
    enhanceQualityAndInnovati,
    propTextAlign,
    propWidth,
    propAlignSelf,
    propAlignSelf1,
    propTextAlign1,
    propAlignSelf2,
    propTextAlign2,
  }) => {
    const fosterSpiritualFormationStyle = useMemo(() => {
      return {
        textAlign: propTextAlign,
        width: propWidth,
        alignSelf: propAlignSelf,
      };
    }, [propTextAlign, propWidth, propAlignSelf]);

    const increaseStudentEnrollmentStyle = useMemo(() => {
      return {
        alignSelf: propAlignSelf1,
        textAlign: propTextAlign1,
      };
    }, [propAlignSelf1, propTextAlign1]);

    const enhanceQualityAndStyle = useMemo(() => {
      return {
        alignSelf: propAlignSelf2,
        textAlign: propTextAlign2,
      };
    }, [propAlignSelf2, propTextAlign2]);

    return (
      <div className="frame-parent252">
        <div className="group-parent22">
          <img className="frame-child88" alt="" src={group44} />
          <div
            className="foster-spiritual-formation"
            style={fosterSpiritualFormationStyle}
          >
            {fosterSpiritualFormationA}
          </div>
        </div>
        <div className="group-parent23">
          <img className="frame-child88" alt="" src={group43} />
          <div
            className="increase-student-enrollment"
            style={increaseStudentEnrollmentStyle}
          >
            {increaseStudentEnrollment}
          </div>
        </div>
        <div className="group-parent23">
          <img className="frame-child88" alt="" src={group42} />
          <div
            className="increase-student-enrollment"
            style={enhanceQualityAndStyle}
          >
            {enhanceQualityAndInnovati}
          </div>
        </div>
      </div>
    );
  }
);

export default FrameComponent16;
