import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import SuccessContainer from "../components/SuccessContainer";
import "./FrameComponent1.css";
const FrameComponent1 = () => {
  const navigate = useNavigate();

  const onVectorIconClick = useCallback(() => {
    navigate("/frame-34");
  }, [navigate]);

  return (
    <div className="rectangle-root">
      <div className="frame-child20" />
      <div className="frame-parent39">
        <div className="welcome-container">
          <b className="welcome1">Welcome</b>
        </div>
        <div className="welcome-container">
          <b className="welcome1">All you need</b>
        </div>
        <div className="welcome-container">
          <b className="welcome1">Select Course</b>
        </div>
        <div className="welcome-container">
          <b className="welcome1">Your Details</b>
        </div>
        <div className="welcome-container">
          <b className="welcome1">Payment</b>
        </div>
        <div className="welcome-container">
          <b className="welcome1">Preview Application</b>
        </div>
        <div className="welcome-container">
          <b className="welcome1">Finish</b>
        </div>
      </div>
      <div className="frame-child21" />
      <div className="frame-child22" />
      <SuccessContainer
        confirmationText="You have successfully completed your application"
        onVectorIconClick={onVectorIconClick}
      />
      <div className="buttons">
        <div className="apply-now11">
          <img
            className="icround-log-in-icon6"
            alt=""
            src="/icroundlogin1.svg"
          />
          <b className="welcome1">Finish</b>
        </div>
        <div className="apply-now12">
          <img
            className="icround-log-in-icon6"
            alt=""
            src="/icroundlogin1.svg"
          />
          <b className="welcome1">Close</b>
        </div>
        <div className="buttons-child" />
        <b className="need-help2">Need Help?</b>
      </div>
      <b className="thank-you-for-container">
        <p className="thank-you-for">
          Thank you for taking your time to apply. We will contact you soon
          regarding
        </p>
        <p className="thank-you-for">
          your application. Here is a digital signature to sign off your
          declaration.
        </p>
      </b>
      <img className="vector-icon32" alt="" src="/vector39.svg" />
      <div className="i-declare-that-container">
        <p className="thank-you-for">
          I declare that the information given herein is true and accurate
        </p>
        <p className="thank-you-for">
          to the best of my knowledge and fully understand that any information
        </p>
        <p className="thank-you-for">
          {" "}
          found to be false would lead to automatic disqualification.
        </p>
      </div>
    </div>
  );
};

export default FrameComponent1;
