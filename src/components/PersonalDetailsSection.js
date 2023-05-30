import { memo, useMemo } from "react";
import "./PersonalDetailsSection.css";
const PersonalDetailsSection = memo(
  ({ alexMumbua, jan2023, nextOfKinDetails, propTop }) => {
    const frameDiv15Style = useMemo(() => {
      return {
        top: propTop,
      };
    }, [propTop]);

    return (
      <div className="frame-parent261" style={frameDiv15Style}>
        <div className="alex-mumbua-parent">
          <div className="alex-mumbua">{alexMumbua}</div>
          <div className="jan-20231">{jan2023}</div>
        </div>
        <div className="union-parent3">
          <img className="union-icon10" alt="" src="/union.svg" />
          <div className="you-left-of-at-parent">
            <div className="alex-mumbua">You left of at</div>
            <div className="next-of-kin10">{nextOfKinDetails}</div>
          </div>
        </div>
      </div>
    );
  }
);

export default PersonalDetailsSection;
