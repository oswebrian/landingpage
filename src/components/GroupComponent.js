import { memo, useMemo } from "react";
import "./GroupComponent.css";
const GroupComponent = memo(
  ({ seeRegistrationRequiremen, viewTheMainRequirementsFo, propHeight }) => {
    const groupDivStyle = useMemo(() => {
      return {
        height: propHeight,
      };
    }, [propHeight]);

    return (
      <div className="frame-parent241" style={groupDivStyle}>
        <div className="frame-parent242">
          <div className="see-registration-requirements-wrapper">
            <div className="see-registration-requirements">
              {seeRegistrationRequiremen}
            </div>
          </div>
          <div className="view-the-main">{viewTheMainRequirementsFo}</div>
        </div>
        <img className="union-icon7" alt="" src="/union3.svg" />
      </div>
    );
  }
);

export default GroupComponent;
