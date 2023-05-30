import { memo } from "react";
import "./GenderContainer.css";
const GenderContainer = memo(() => {
  return (
    <div className="frame-parent254">
      <div className="gender-parent">
        <div className="gender">Gender</div>
        <img className="vector-icon297" alt="" src="/vector7.svg" />
      </div>
      <div className="frame-parent255">
        <div className="vector-parent43">
          <img className="vector-icon298" alt="" src="/vector54.svg" />
          <div className="gender-parent">
            <div className="male">Male</div>
            <img className="vector-icon297" alt="" src="/vector7.svg" />
          </div>
        </div>
        <div className="vector-parent43">
          <img className="vector-icon298" alt="" src="/vector61.svg" />
          <div className="gender-parent">
            <div className="male">Female</div>
            <img className="vector-icon297" alt="" src="/vector7.svg" />
          </div>
        </div>
      </div>
    </div>
  );
});

export default GenderContainer;
