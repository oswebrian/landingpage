import { memo } from "react";
import "./GroupComponent1.css";
const GroupComponent1 = memo(({ april15th1980, chartering }) => {
  return (
    <div className="frame-parent247">
      <div className="frame-parent248">
        <div className="april-15th-1980-parent">
          <div className="april-15th-1980">{april15th1980}</div>
          <div className="chartering">{chartering}</div>
        </div>
        <div className="we-exist-to3">
          We exist to bring maturity to church and transformation to society
          through equipped leadership based on Christian values and principles
          by training people in their area of calling
        </div>
      </div>
      <img className="union-icon8" alt="" src="/union6.svg" />
    </div>
  );
});

export default GroupComponent1;
