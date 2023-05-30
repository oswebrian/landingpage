import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./FrameComponent10.css";
const FrameComponent10 = () => {
  const navigate = useNavigate();

  const onApplyNowContainerClick = useCallback(() => {
    navigate("/frame-36");
  }, [navigate]);

  const onVectorIconClick = useCallback(() => {
    navigate("/frame-32");
  }, [navigate]);

  const onVectorIcon1Click = useCallback(() => {
    navigate("/frame-36");
  }, [navigate]);

  return (
    <div className="rectangle-parent5">
      <div className="frame-child60" />
      <div className="frame-parent214">
        <div className="welcome-wrapper6">
          <b className="here-is-everything-container">Welcome</b>
        </div>
        <div className="welcome-wrapper6">
          <b className="here-is-everything-container">All you need</b>
        </div>
        <div className="welcome-wrapper6">
          <b className="here-is-everything-container">Select Course</b>
        </div>
        <div className="welcome-wrapper6">
          <b className="here-is-everything-container">Your Details</b>
        </div>
        <div className="welcome-wrapper6">
          <b className="here-is-everything-container">Payment</b>
        </div>
        <div className="welcome-wrapper6">
          <b className="here-is-everything-container">Preview Application</b>
        </div>
        <div className="welcome-wrapper6">
          <b className="here-is-everything-container">Finish</b>
        </div>
      </div>
      <div className="frame-child61" />
      <div className="frame-child62" />
      <div className="apply-now32" onClick={onApplyNowContainerClick}>
        <img
          className="icround-log-in-icon20"
          alt=""
          src="/icroundlogin6.svg"
        />
        <b className="here-is-everything-container">Continue</b>
      </div>
      <div className="apply-now33">
        <img className="icround-log-in-icon20" alt="" src="/icroundlogin.svg" />
        <b className="here-is-everything-container">Close</b>
      </div>
      <img
        className="vector-icon251"
        alt=""
        src="/vector6.svg"
        onClick={onVectorIconClick}
      />
      <img
        className="vector-icon252"
        alt=""
        src="/vector210.svg"
        onClick={onVectorIcon1Click}
      />
      <div className="here-is-everything-you-need-to-parent">
        <b className="here-is-everything-container">
          <p className="here-is-everything">Here is everything you need to</p>
          <p className="here-is-everything">complete your application</p>
        </b>
        <div className="we-are-glad1">
          We are glad to see you want to learn with us
        </div>
      </div>
      <b className="your-upload-documents">Your Upload Documents</b>
      <b className="terms-and-conditions">Terms and Conditions</b>
      <div className="these-are-the">
        These are the documents you wll upload to support your application.
      </div>
      <div className="frame-child63" />
      <div className="frame-child64" />
      <div className="national-identification-cardp-wrapper">
        <div className="national-identification-cardp">
          National Identification Card/Passport
        </div>
      </div>
      <div className="academic-transcripts-and-certi-wrapper">
        <div className="national-identification-cardp">
          Academic Transcripts and Certificates
        </div>
      </div>
      <div className="photo-size-passport-wrapper">
        <div className="national-identification-cardp">{`Photo-size passport `}</div>
      </div>
      <b className="application-fee">Application Fee</b>
      <div className="for-each-program-should-be-sen-parent">
        <div className="for-each-program">
          For each program should be sent through the college till number 43934
          with a SIM card registered with your name.
        </div>
        <div className="for-each-program">
          You will pay later in the Payment step for this process. The
          application fees are as follows:
        </div>
      </div>
      <div className="frame-child65" />
      <div className="diplomas-and-certificate-parent">
        <div className="national-identification-cardp">
          Diplomas and Certificate
        </div>
        <div className="ksh-5001">Ksh 500</div>
      </div>
      <div className="undergraduate-and-postgraduate-parent">
        <div className="national-identification-cardp">
          Undergraduate and Postgraduate
        </div>
        <div className="ksh-5001">Ksh 3,000</div>
      </div>
      <div className="students-should-read-the-polic-parent">
        <div className="for-each-program">
          <span>{`Students should read the policies and align their life, thought and deed to it. `}</span>
          <span className="read-the-policies">Read the policies</span>
        </div>
        <div className="it-covers-the-following-parent">
          <div className="it-covers-the">It covers the following:</div>
          <div className="frame-parent215">
            <div className="academic-policies-parent">
              <div className="national-identification-cardp">
                Academic policies
              </div>
              <img className="vector-icon253" alt="" src="/vector18.svg" />
            </div>
            <div className="academic-policies-parent">
              <div className="national-identification-cardp">
                Character and Discipline
              </div>
              <img className="vector-icon253" alt="" src="/vector18.svg" />
            </div>
            <div className="academic-policies-parent">
              <div className="national-identification-cardp">
                Financial policies
              </div>
              <img className="vector-icon253" alt="" src="/vector18.svg" />
            </div>
            <div className="academic-policies-parent">
              <div className="national-identification-cardp">
                Health and Safety
              </div>
              <img className="vector-icon253" alt="" src="/vector18.svg" />
            </div>
            <div className="academic-policies-parent">
              <div className="national-identification-cardp">
                Use of College Resources
              </div>
              <img className="vector-icon253" alt="" src="/vector18.svg" />
            </div>
          </div>
        </div>
      </div>
      <div className="vector-parent38">
        <img className="vector-icon253" alt="" src="/vector39.svg" />
        <div className="national-identification-cardp">
          I have read and I agree to the policies
        </div>
      </div>
      <b className="need-help10">Need Help?</b>
    </div>
  );
};

export default FrameComponent10;
