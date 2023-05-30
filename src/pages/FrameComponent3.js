import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import RegistrationPage from "../components/RegistrationPage";
import "./FrameComponent3.css";
const FrameComponent3 = () => {
  const navigate = useNavigate();

  const onVectorIconClick = useCallback(() => {
    navigate("/frame-34");
  }, [navigate]);

  const onApplyNowContainerClick = useCallback(() => {
    navigate("/frame-175");
  }, [navigate]);

  return (
    <div className="rectangle-wrapper">
      <div className="frame-child26" />
      <div className="frame-parent79">
        <div className="welcome-wrapper1">
          <b className="welcome3">Welcome</b>
        </div>
        <div className="welcome-wrapper1">
          <b className="welcome3">All you need</b>
        </div>
        <div className="welcome-wrapper1">
          <b className="welcome3">Select Course</b>
        </div>
        <div className="welcome-wrapper1">
          <b className="welcome3">Your Details</b>
        </div>
        <div className="welcome-wrapper1">
          <b className="welcome3">Payment</b>
        </div>
        <div className="welcome-wrapper1">
          <b className="welcome3">Preview Application</b>
        </div>
        <div className="welcome-wrapper1">
          <b className="welcome3">Finish</b>
        </div>
      </div>
      <div className="frame-child27" />
      <div className="frame-child28" />
      <RegistrationPage
        kindlyMakeYourRegistratio="Kindly make your registration"
        feePayment="fee payment"
        onVectorIconClick={onVectorIconClick}
      />
      <b className="guidelines">Guidelines</b>
      <div className="frame-child29" />
      <div className="this-payment-marks-container">
        <ul className="this-payment-marks-the-complet">
          <li className="this-payment-marks">
            This payment marks the completion of your application and is
            separate from the first term’s fees.
          </li>
          <li className="this-payment-marks">
            The amount varies between courses (500 Ksh for diplomas and
            certificates and Ksh 3,000 for undergraduates and post graduate.
          </li>
          <li>
            We recommend paying using a sim card registered under your name
            although its not compulsory.
          </li>
        </ul>
      </div>
      <b className="payment-information">Payment Information</b>
      <div className="use-another-way">Use another way</div>
      <div className="buttons2">
        <div className="apply-now16" onClick={onApplyNowContainerClick}>
          <img
            className="icround-log-in-icon10"
            alt=""
            src="/icroundlogin1.svg"
          />
          <b className="welcome3">Get Mpesa Prompt</b>
        </div>
        <div className="apply-now17">
          <img
            className="icround-log-in-icon10"
            alt=""
            src="/icroundlogin1.svg"
          />
          <b className="welcome3">Close</b>
        </div>
        <div className="buttons-inner" />
        <b className="need-help4">Need Help?</b>
      </div>
      <div className="john-doe-wrapper">
        <div className="john-doe">John Doe</div>
      </div>
      <div className="ksh-500-wrapper">
        <div className="john-doe">Ksh 500</div>
      </div>
      <div className="frame-parent80">
        <div className="name-wrapper">
          <b className="john-doe">Name</b>
        </div>
        <div className="name-wrapper">
          <b className="john-doe">Amount</b>
        </div>
        <div className="name-wrapper">
          <b className="john-doe">Mpesa Number</b>
        </div>
      </div>
      <div className="parent3">
        <div className="john-doe">0712345678</div>
        <img className="vector-icon79" alt="" src="/vector11.svg" />
      </div>
      <div className="frame-parent81">
        <div className="frame-wrapper">
          <div className="frame-parent82">
            <div className="name-wrapper">
              <b className="john-doe">Recipient</b>
            </div>
            <div className="name-wrapper">
              <b className="john-doe">Till Number</b>
            </div>
            <div className="name-wrapper">
              <b className="john-doe">Purpose</b>
            </div>
          </div>
        </div>
        <div className="frame-parent83">
          <div className="nairobi-pentecostal-bible-coll-wrapper">
            <div className="nairobi-pentecostal-bible-container">
              <p className="college">Nairobi Pentecostal Bible</p>
              <p className="college">College</p>
            </div>
          </div>
          <div className="application-fee-for-diploma-in-wrapper">
            <div className="nairobi-pentecostal-bible-container">43934</div>
          </div>
          <div className="application-fee-for-diploma-in-wrapper">
            <div className="nairobi-pentecostal-bible-container">
              Application fee for Diploma in Bible Theology
            </div>
          </div>
        </div>
      </div>
      <div className="frame-child30" />
    </div>
  );
};

export default FrameComponent3;
