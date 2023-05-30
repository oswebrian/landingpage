import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./FrameComponent7.css";
const FrameComponent7 = () => {
  const navigate = useNavigate();

  const onFrameContainer13Click = useCallback(() => {
    navigate("/frame-179");
  }, [navigate]);

  const onApplyNowContainerClick = useCallback(() => {
    navigate("/frame-38");
  }, [navigate]);

  return (
    <div className="rectangle-parent2">
      <div className="frame-child40" />
      <div className="frame-parent171">
        <div className="welcome-wrapper3">
          <b className="discard-progress">Welcome</b>
        </div>
        <div className="welcome-wrapper3">
          <b className="discard-progress">All you need</b>
        </div>
        <div className="welcome-wrapper3">
          <b className="discard-progress">Select Course</b>
        </div>
        <div className="welcome-wrapper3">
          <b className="discard-progress">Your Details</b>
        </div>
        <div className="welcome-wrapper3">
          <b className="discard-progress">Payment</b>
        </div>
        <div className="welcome-wrapper3">
          <b className="discard-progress">Preview Application</b>
        </div>
        <div className="welcome-wrapper3">
          <b className="discard-progress">Finish</b>
        </div>
      </div>
      <div className="frame-child41" />
      <div className="frame-child42" />
      <img className="vector-icon191" alt="" src="/vector12.svg" />
      <b className="save-your-application">Save your application progress</b>
      <img className="vector-icon192" alt="" src="/vector210.svg" />
      <div className="how-should-we">How should we save your progress?</div>
      <div className="instance-parent28">
        <div className="frame-parent172">
          <div className="first-name-parent104">
            <div className="first-name106">First Name</div>
            <img className="vector-icon193" alt="" src="/vector7.svg" />
          </div>
          <div className="instance-child96" />
        </div>
        <div className="frame-parent172">
          <div className="first-name-parent104">
            <div className="first-name106">Second Name</div>
            <img className="vector-icon193" alt="" src="/vector7.svg" />
          </div>
          <div className="instance-child96" />
        </div>
      </div>
      <div className="save-container" onClick={onFrameContainer13Click}>
        <div className="first-name106">Save</div>
      </div>
      <b className="you-are-about-container">
        <span>{`You are about to abort your application process. Let us save your details so you can easily resume when you are ready. You can choose to discard your progress and it won’t be saved. Do you `}</span>
        <span className="need-help6">need help?</span>
        <span>{` `}</span>
      </b>
      <div className="buttons4">
        <div className="apply-now25" onClick={onApplyNowContainerClick}>
          <img
            className="icround-log-in-icon14"
            alt=""
            src="/icroundlogin4.svg"
          />
          <b className="discard-progress">Resume</b>
        </div>
        <div className="apply-now26">
          <img
            className="icround-log-in-icon14"
            alt=""
            src="/icroundlogin3.svg"
          />
          <b className="discard-progress">Discard Progress</b>
        </div>
        <div className="buttons-child2" />
        <b className="need-help7">Need Help?</b>
      </div>
    </div>
  );
};

export default FrameComponent7;
