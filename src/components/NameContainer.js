import { memo, useMemo } from "react";
import "./NameContainer.css";
const NameContainer = memo(({ fullName, propZIndex }) => {
  const frameDiv14Style = useMemo(() => {
    return {
      zIndex: propZIndex,
    };
  }, [propZIndex]);

  return (
    <div className="frame-parent260" style={frameDiv14Style}>
      <div className="first-name-parent142">
        <div className="first-name144">{fullName}</div>
        <img className="vector-icon309" alt="" src="/vector7.svg" />
      </div>
      <div className="instance-child130" />
    </div>
  );
});

export default NameContainer;
