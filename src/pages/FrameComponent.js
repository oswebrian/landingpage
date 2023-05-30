import { memo, useCallback } from "react";
import RegistrationRequirementsContai from "../components/RegistrationRequirementsContai";
import { useNavigate } from "react-router-dom";
import "./FrameComponent.css";
const FrameComponent = memo(({ onClose }) => {
  const navigate = useNavigate();

  const onApplyNowContainerClick = useCallback(() => {
    navigate("/frame-34");
  }, [navigate]);

  return (
    <div className="rectangle-parent">
      <div className="frame-child" />
      <div className="frame-parent">
        <div className="welcome-wrapper">
          <b className="welcome">Welcome</b>
        </div>
        <div className="welcome-wrapper">
          <b className="welcome">All you need</b>
        </div>
        <div className="welcome-wrapper">
          <b className="welcome">Select Course</b>
        </div>
        <div className="welcome-wrapper">
          <b className="welcome">Your Details</b>
        </div>
        <div className="welcome-wrapper">
          <b className="welcome">Payment</b>
        </div>
        <div className="welcome-wrapper">
          <b className="welcome">Preview Application</b>
        </div>
        <div className="welcome-wrapper">
          <b className="welcome">Finish</b>
        </div>
      </div>
      <div className="frame-item" />
      <div className="frame-inner" />
      <div className="welcome-to-npbc-parent">
        <b className="welcome">Welcome to NPBC</b>
        <div className="we-are-glad">
          We are glad to see you want to learn with us
        </div>
      </div>
      <b className="application-stages">Application Stages</b>
      <b className="complete-later">Complete later</b>
      <b className="need-help">Need Help?</b>
      <div className="this-process-involves">
        This process involves 5 simple steps and takes 20 - 30 minutes only.
        Here is what to expect.
      </div>
      <div className="in-case-you-abort-the-process-parent">
        <div className="in-case-you">
          In case you abort the process, we will save your progress so you can
          continue from where you left. It will be available for up to 30 days.
        </div>
        <div className="in-case-you">
          <span>{`Resume your application by searching for your name under `}</span>
          <span className="admissions">Admissions</span>
          <span> in the homepage</span>
        </div>
      </div>
      <div className="just-in-case-container">
        <span>{`Just in case you get stuck, simply get in touch with us by clicking `}</span>
        <span className="need-help1">Need Help?</span>
        <span> at the left corner of this widget</span>
      </div>
      <div className="line-div" />
      <div className="frame-child1" />
      <div className="frame-child2" />
      <div className="you-will-use-this-name-to-find-parent">
        <div className="in-case-you">
          You will use this name to find your application
        </div>
        <div className="your-name-parent">
          <div className="your-name">Your name</div>
          <div className="rectangle-div" />
          <div className="save-wrapper">
            <div className="save">Save</div>
          </div>
        </div>
      </div>
      <RegistrationRequirementsContai />
      <div className="apply-now" onClick={onApplyNowContainerClick}>
        <img className="icround-log-in-icon" alt="" src="/icroundlogin.svg" />
        <b className="welcome">Get Started</b>
      </div>
      <div className="apply-now1">
        <img className="icround-log-in-icon" alt="" src="/icroundlogin.svg" />
        <b className="welcome">Close</b>
      </div>
    </div>
  );
});

export default FrameComponent;
