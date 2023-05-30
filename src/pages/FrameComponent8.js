import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import RegistrationPage from "../components/RegistrationPage";
import DetailsSections from "../components/DetailsSections";
import GenderContainer from "../components/GenderContainer";
import Uploads from "../components/Uploads";
import "./FrameComponent8.css";
const FrameComponent8 = () => {
  const navigate = useNavigate();

  const onVectorIconClick = useCallback(() => {
    navigate("/frame-34");
  }, [navigate]);

  const onApplyNowContainer2Click = useCallback(() => {
    navigate("/frame-174");
  }, [navigate]);

  return (
    <div className="rectangle-parent3">
      <div className="frame-child43" />
      <div className="frame-parent174">
        <div className="welcome-wrapper4">
          <b className="welcome6">Welcome</b>
        </div>
        <div className="welcome-wrapper4">
          <b className="welcome6">All you need</b>
        </div>
        <div className="welcome-wrapper4">
          <b className="welcome6">Select Course</b>
        </div>
        <div className="welcome-wrapper4">
          <b className="welcome6">Your Details</b>
        </div>
        <div className="welcome-wrapper4">
          <b className="welcome6">Payment</b>
        </div>
        <div className="welcome-wrapper4">
          <b className="welcome6">Preview Application</b>
        </div>
        <div className="welcome-wrapper4">
          <b className="welcome6">Finish</b>
        </div>
      </div>
      <div className="frame-child44" />
      <div className="frame-child45" />
      <RegistrationPage
        kindlyMakeYourRegistratio="Fill in your correct details to"
        feePayment="complete your application"
        propWidth="unset"
        propGap="498px"
        onVectorIconClick={onVectorIconClick}
      />
      <DetailsSections />
      <div className="personal-details-container">
        <div className="personal-details2">
          <div className="contact-details-container">
            <b className="personal-details3">Personal Details</b>
            <div className="frame-parent175">
              <GenderContainer />
              <div className="frame-parent176">
                <div className="first-name-parent106">
                  <div className="first-name108">First Name</div>
                  <img className="vector-icon195" alt="" src="/vector7.svg" />
                </div>
                <div className="instance-child98" />
              </div>
              <div className="vector-parent28">
                <img className="vector-icon196" alt="" src="/vector71.svg" />
                <div className="frame-parent176">
                  <div className="first-name-parent106">
                    <div className="first-name108">Date of Birth</div>
                    <img className="vector-icon195" alt="" src="/vector7.svg" />
                  </div>
                  <div className="instance-child98" />
                </div>
              </div>
              <div className="frame-parent178">
                <div className="first-name-parent106">
                  <div className="first-name108">Second Name</div>
                  <img className="vector-icon195" alt="" src="/vector7.svg" />
                </div>
                <div className="instance-child98" />
              </div>
              <div className="frame-parent179">
                <div className="first-name-parent106">
                  <div className="first-name108">Surname</div>
                  <img className="vector-icon195" alt="" src="/vector7.svg" />
                </div>
                <div className="instance-child98" />
              </div>
              <div className="frame-parent180">
                <div className="first-name-parent106">
                  <div className="first-name108">National ID/Passport</div>
                  <img className="vector-icon195" alt="" src="/vector7.svg" />
                </div>
                <div className="instance-child98" />
              </div>
              <div className="frame-parent181">
                <div className="first-name-parent106">
                  <div className="first-name108">Disability(if any)</div>
                  <img className="vector-icon195" alt="" src="/vector7.svg" />
                </div>
                <div className="instance-child98" />
              </div>
              <div className="frame-parent182">
                <div className="first-name-parent106">
                  <div className="first-name108">Denomination/Church</div>
                  <img className="vector-icon195" alt="" src="/vector7.svg" />
                </div>
                <div className="instance-child98" />
              </div>
              <div className="frame-parent183">
                <div className="vector-frame">
                  <img className="vector-icon195" alt="" src="/vector7.svg" />
                </div>
                <div className="frame-parent176">
                  <div className="first-name-parent106">
                    <div className="first-name108">Marital Status</div>
                    <img className="vector-icon195" alt="" src="/vector7.svg" />
                  </div>
                  <div className="instance-child98" />
                </div>
                <img className="vector-icon205" alt="" src="/vector8.svg" />
                <div className="select5">Select</div>
              </div>
            </div>
          </div>
        </div>
        <div className="personal-details2">
          <div className="contact-details-container">
            <b className="personal-details3">Contact Details</b>
            <div className="instance-parent29">
              <div className="frame-parent176">
                <div className="first-name-parent106">
                  <div className="first-name108">Phone Number</div>
                  <img className="vector-icon195" alt="" src="/vector7.svg" />
                </div>
                <div className="instance-child98" />
              </div>
              <div className="frame-parent186">
                <div className="first-name-parent106">
                  <div className="first-name108">County/Region</div>
                  <img className="vector-icon195" alt="" src="/vector7.svg" />
                </div>
                <div className="instance-child98" />
              </div>
              <div className="frame-parent178">
                <div className="first-name-parent106">
                  <div className="first-name108">Email</div>
                  <img className="vector-icon195" alt="" src="/vector7.svg" />
                </div>
                <div className="instance-child98" />
              </div>
              <div className="frame-parent188">
                <div className="first-name-parent106">
                  <div className="first-name108">Town</div>
                  <img className="vector-icon195" alt="" src="/vector7.svg" />
                </div>
                <div className="instance-child98" />
              </div>
              <div className="frame-parent189">
                <div className="first-name-parent106">
                  <div className="first-name108">Nationality</div>
                  <img className="vector-icon195" alt="" src="/vector7.svg" />
                </div>
                <div className="instance-child98" />
              </div>
            </div>
          </div>
        </div>
        <div className="personal-details2">
          <div className="contact-details-container">
            <b className="personal-details3">Next of Kin</b>
            <div className="instance-parent30">
              <div className="frame-parent190">
                <div className="first-name-parent106">
                  <div className="first-name108">First Name</div>
                  <img className="vector-icon195" alt="" src="/vector7.svg" />
                </div>
                <div className="instance-child98" />
              </div>
              <div className="frame-parent191">
                <div className="first-name-parent106">
                  <div className="first-name108">Phone Number</div>
                  <img className="vector-icon195" alt="" src="/vector7.svg" />
                </div>
                <div className="instance-child98" />
              </div>
              <div className="frame-parent192">
                <div className="first-name-parent106">
                  <div className="first-name108">Nationality</div>
                  <img className="vector-icon195" alt="" src="/vector7.svg" />
                </div>
                <div className="instance-child98" />
              </div>
              <div className="frame-parent193">
                <div className="first-name-parent106">
                  <div className="first-name108">{`Second Name & Surname`}</div>
                  <img className="vector-icon195" alt="" src="/vector7.svg" />
                </div>
                <div className="instance-child98" />
              </div>
              <div className="frame-parent194">
                <div className="first-name-parent106">
                  <div className="first-name108">Email</div>
                  <img className="vector-icon195" alt="" src="/vector7.svg" />
                </div>
                <div className="instance-child98" />
              </div>
              <div className="frame-parent195">
                <div className="first-name-parent106">
                  <div className="first-name108">County/Region</div>
                  <img className="vector-icon195" alt="" src="/vector7.svg" />
                </div>
                <div className="instance-child98" />
              </div>
              <div className="frame-parent196">
                <div className="first-name-parent106">
                  <div className="first-name108">National ID/Passport</div>
                  <img className="vector-icon195" alt="" src="/vector7.svg" />
                </div>
                <div className="instance-child98" />
              </div>
              <div className="frame-parent197">
                <div className="first-name-parent106">
                  <div className="first-name108">Town</div>
                  <img className="vector-icon195" alt="" src="/vector7.svg" />
                </div>
                <div className="instance-child98" />
              </div>
              <div className="frame-parent198">
                <div className="first-name-parent106">
                  <div className="first-name108">Relationship</div>
                  <img className="vector-icon195" alt="" src="/vector7.svg" />
                </div>
                <div className="instance-child98" />
              </div>
            </div>
          </div>
        </div>
        <div className="personal-details2">
          <div className="contact-details-container">
            <b className="personal-details3">Educational Background</b>
            <div className="frame-parent199">
              <div className="instance-parent31">
                <div className="frame-parent200">
                  <div className="first-name-parent106">
                    <div className="first-name108">High School Name</div>
                    <img className="vector-icon195" alt="" src="/vector7.svg" />
                  </div>
                  <div className="instance-child98" />
                </div>
                <div className="frame-parent200">
                  <div className="first-name-parent106">
                    <div className="first-name108">From - Until(years)</div>
                    <img className="vector-icon195" alt="" src="/vector7.svg" />
                  </div>
                  <div className="instance-child98" />
                </div>
                <div className="frame-parent200">
                  <div className="first-name-parent106">
                    <div className="first-name108">Qualification</div>
                    <img className="vector-icon195" alt="" src="/vector7.svg" />
                  </div>
                  <div className="instance-child98" />
                </div>
              </div>
              <div className="apply-now27">
                <img className="vector-icon223" alt="" src="/vector9.svg" />
                <b className="welcome6">Add Post-secondary level</b>
              </div>
            </div>
          </div>
        </div>
        <div className="personal-details2">
          <div className="contact-details-container">
            <b className="personal-details3">Program</b>
            <div className="frame-parent203">
              <div className="frame-parent204">
                <div className="first-name-parent106">
                  <div className="learning-mode4">Learning Mode</div>
                  <img className="vector-icon195" alt="" src="/vector7.svg" />
                </div>
                <div className="frame-parent205">
                  <div className="vector-parent29">
                    <img
                      className="vector-icon223"
                      alt=""
                      src="/vector54.svg"
                    />
                    <div className="first-name-parent106">
                      <div className="learning-mode4">Regular</div>
                      <img
                        className="vector-icon195"
                        alt=""
                        src="/vector7.svg"
                      />
                    </div>
                  </div>
                  <div className="vector-parent29">
                    <img
                      className="vector-icon223"
                      alt=""
                      src="/vector61.svg"
                    />
                    <div className="first-name-parent106">
                      <div className="learning-mode4">Virtual</div>
                      <img
                        className="vector-icon195"
                        alt=""
                        src="/vector7.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="vector-parent31">
                <img className="vector-icon196" alt="" src="/vector71.svg" />
                <div className="frame-parent176">
                  <div className="first-name-parent106">
                    <div className="first-name108">Start From</div>
                    <img className="vector-icon195" alt="" src="/vector7.svg" />
                  </div>
                  <div className="instance-child98" />
                </div>
              </div>
              <div className="instance-parent32">
                <div className="frame-parent176">
                  <div className="first-name-parent106">
                    <div className="first-name108">Program Level</div>
                    <img className="vector-icon195" alt="" src="/vector7.svg" />
                  </div>
                  <div className="instance-child98" />
                </div>
                <img className="vector-icon205" alt="" src="/vector8.svg" />
                <div className="select5">Diploma</div>
              </div>
              <div className="instance-parent33">
                <div className="frame-parent176">
                  <div className="first-name-parent106">
                    <div className="first-name108">Course</div>
                    <img className="vector-icon195" alt="" src="/vector7.svg" />
                  </div>
                  <div className="instance-child98" />
                </div>
                <img className="vector-icon205" alt="" src="/vector8.svg" />
                <div className="select5">Diploma in Bible Theology</div>
              </div>
              <div className="instance-parent34">
                <div className="frame-parent176">
                  <div className="first-name-parent106">
                    <div className="first-name108">Learning Center</div>
                    <img className="vector-icon195" alt="" src="/vector7.svg" />
                  </div>
                  <div className="instance-child98" />
                </div>
                <img className="vector-icon205" alt="" src="/vector8.svg" />
                <div className="select5">Select</div>
              </div>
            </div>
          </div>
        </div>
        <div className="personal-details2">
          <div className="contact-details-container">
            <b className="personal-details3">Occupation</b>
            <div className="instance-parent31">
              <div className="instance-parent35">
                <div className="frame-parent176">
                  <div className="first-name-parent106">
                    <div className="first-name108">Occupation Type</div>
                    <img className="vector-icon195" alt="" src="/vector7.svg" />
                  </div>
                  <div className="instance-child98" />
                </div>
                <img className="vector-icon205" alt="" src="/vector8.svg" />
                <div className="select5">Diploma</div>
              </div>
              <div className="frame-parent200">
                <div className="first-name-parent106">
                  <div className="first-name108">Company/Institution</div>
                  <img className="vector-icon195" alt="" src="/vector7.svg" />
                </div>
                <div className="instance-child98" />
              </div>
              <div className="frame-parent200">
                <div className="first-name-parent106">
                  <div className="first-name108">Role/Course</div>
                  <img className="vector-icon195" alt="" src="/vector7.svg" />
                </div>
                <div className="instance-child98" />
              </div>
            </div>
          </div>
        </div>
        <Uploads propPosition="unset" propTop="unset" propLeft="unset" />
      </div>
      <div className="buttons5">
        <div className="apply-now28" onClick={onApplyNowContainer2Click}>
          <img
            className="icround-log-in-icon16"
            alt=""
            src="/icroundlogin5.svg"
          />
          <b className="welcome6">Proceed</b>
        </div>
        <div className="apply-now29">
          <img
            className="icround-log-in-icon16"
            alt=""
            src="/icroundlogin1.svg"
          />
          <b className="welcome6">Close</b>
        </div>
        <div className="buttons-child3" />
        <b className="need-help8">Need Help?</b>
      </div>
    </div>
  );
};

export default FrameComponent8;
