import { memo } from "react";
import "./GroupComponent2.css";
const GroupComponent2 = memo(({ founding, nov16th1969 }) => {
  return (
    <div className="frame-parent249">
      <div className="frame-parent250">
        <div className="founding-parent">
          <div className="founding">{founding}</div>
          <div className="nov-16th-1969">{nov16th1969}</div>
        </div>
        <div className="we-exist-to4">
          We exist to bring maturity to church and transformation to society
          through equipped leadership based on Christian values and principles
          by training people in their area of calling
        </div>
      </div>
      <img className="union-icon9" alt="" src="/union7.svg" />
    </div>
  );
});

export default GroupComponent2;
