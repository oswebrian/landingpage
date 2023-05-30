import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import SuccessContainer from "../components/SuccessContainer";
import GenderContainer from "../components/GenderContainer";
import Uploads from "../components/Uploads";
import "./FrameComponent2.css";
const FrameComponent2 = () => {
  const navigate = useNavigate();

  const onVectorIconClick = useCallback(() => {
    navigate("/frame-34");
  }, [navigate]);

  const onApplyNowContainerClick = useCallback(() => {
    navigate("/frame-176");
  }, [navigate]);

  return (
    <div className="rectangle-top">
      <div className="frame-child23" />
      <div className="frame-parent40">
        <div className="welcome-frame">
          <b className="welcome2">Welcome</b>
        </div>
        <div className="welcome-frame">
          <b className="welcome2">All you need</b>
        </div>
        <div className="welcome-frame">
          <b className="welcome2">Select Course</b>
        </div>
        <div className="welcome-frame">
          <b className="welcome2">Your Details</b>
        </div>
        <div className="welcome-frame">
          <b className="welcome2">Payment</b>
        </div>
        <div className="welcome-frame">
          <b className="welcome2">Preview Application</b>
        </div>
        <div className="welcome-frame">
          <b className="welcome2">Finish</b>
        </div>
      </div>
      <div className="frame-child24" />
      <div className="frame-child25" />
      <SuccessContainer
        confirmationText="You checked all the boxes. Here’s what you submitted"
        onVectorIconClick={onVectorIconClick}
      />
      <div className="buttons1">
        <div className="apply-now13" onClick={onApplyNowContainerClick}>
          <img
            className="icround-log-in-icon8"
            alt=""
            src="/icroundlogin1.svg"
          />
          <b className="welcome2">Get Mpesa Prompt</b>
        </div>
        <div className="apply-now14">
          <img
            className="icround-log-in-icon8"
            alt=""
            src="/icroundlogin1.svg"
          />
          <b className="welcome2">Close</b>
        </div>
        <div className="buttons-item" />
        <b className="need-help3">Need Help?</b>
      </div>
      <div className="personal-details-parent">
        <div className="personal-details">
          <div className="personal-details-group">
            <b className="personal-details1">Personal Details</b>
            <div className="frame-parent41">
              <GenderContainer />
              <div className="frame-parent42">
                <div className="first-name-parent">
                  <div className="first-name">First Name</div>
                  <img className="vector-icon33" alt="" src="/vector7.svg" />
                </div>
                <div className="instance-child" />
              </div>
              <div className="vector-parent15">
                <img className="vector-icon34" alt="" src="/vector71.svg" />
                <div className="frame-parent42">
                  <div className="first-name-parent">
                    <div className="first-name">Date of Birth</div>
                    <img className="vector-icon33" alt="" src="/vector7.svg" />
                  </div>
                  <div className="instance-child" />
                </div>
              </div>
              <div className="frame-parent44">
                <div className="first-name-parent">
                  <div className="first-name">Second Name</div>
                  <img className="vector-icon33" alt="" src="/vector7.svg" />
                </div>
                <div className="instance-child" />
              </div>
              <div className="frame-parent45">
                <div className="first-name-parent">
                  <div className="first-name">Surname</div>
                  <img className="vector-icon33" alt="" src="/vector7.svg" />
                </div>
                <div className="instance-child" />
              </div>
              <div className="frame-parent46">
                <div className="first-name-parent">
                  <div className="first-name">National ID/Passport</div>
                  <img className="vector-icon33" alt="" src="/vector7.svg" />
                </div>
                <div className="instance-child" />
              </div>
              <div className="frame-parent47">
                <div className="first-name-parent">
                  <div className="first-name">Disability(if any)</div>
                  <img className="vector-icon33" alt="" src="/vector7.svg" />
                </div>
                <div className="instance-child" />
              </div>
              <div className="frame-parent48">
                <div className="first-name-parent">
                  <div className="first-name">Denomination/Church</div>
                  <img className="vector-icon33" alt="" src="/vector7.svg" />
                </div>
                <div className="instance-child" />
              </div>
              <div className="frame-parent49">
                <div className="vector-wrapper">
                  <img className="vector-icon33" alt="" src="/vector7.svg" />
                </div>
                <div className="frame-parent42">
                  <div className="first-name-parent">
                    <div className="first-name">Marital Status</div>
                    <img className="vector-icon33" alt="" src="/vector7.svg" />
                  </div>
                  <div className="instance-child" />
                </div>
                <img className="vector-icon43" alt="" src="/vector8.svg" />
                <div className="select">Select</div>
              </div>
            </div>
          </div>
        </div>
        <div className="personal-details">
          <div className="personal-details-group">
            <b className="personal-details1">Contact Details</b>
            <div className="instance-parent">
              <div className="frame-parent42">
                <div className="first-name-parent">
                  <div className="first-name">Phone Number</div>
                  <img className="vector-icon33" alt="" src="/vector7.svg" />
                </div>
                <div className="instance-child" />
              </div>
              <div className="frame-parent52">
                <div className="first-name-parent">
                  <div className="first-name">County/Region</div>
                  <img className="vector-icon33" alt="" src="/vector7.svg" />
                </div>
                <div className="instance-child" />
              </div>
              <div className="frame-parent44">
                <div className="first-name-parent">
                  <div className="first-name">Email</div>
                  <img className="vector-icon33" alt="" src="/vector7.svg" />
                </div>
                <div className="instance-child" />
              </div>
              <div className="frame-parent54">
                <div className="first-name-parent">
                  <div className="first-name">Town</div>
                  <img className="vector-icon33" alt="" src="/vector7.svg" />
                </div>
                <div className="instance-child" />
              </div>
              <div className="frame-parent55">
                <div className="first-name-parent">
                  <div className="first-name">Nationality</div>
                  <img className="vector-icon33" alt="" src="/vector7.svg" />
                </div>
                <div className="instance-child" />
              </div>
            </div>
          </div>
        </div>
        <div className="personal-details">
          <div className="personal-details-group">
            <b className="personal-details1">Next of Kin</b>
            <div className="instance-group">
              <div className="frame-parent56">
                <div className="first-name-parent">
                  <div className="first-name">First Name</div>
                  <img className="vector-icon33" alt="" src="/vector7.svg" />
                </div>
                <div className="instance-child" />
              </div>
              <div className="frame-parent57">
                <div className="first-name-parent">
                  <div className="first-name">Phone Number</div>
                  <img className="vector-icon33" alt="" src="/vector7.svg" />
                </div>
                <div className="instance-child" />
              </div>
              <div className="frame-parent58">
                <div className="first-name-parent">
                  <div className="first-name">Nationality</div>
                  <img className="vector-icon33" alt="" src="/vector7.svg" />
                </div>
                <div className="instance-child" />
              </div>
              <div className="frame-parent59">
                <div className="first-name-parent">
                  <div className="first-name">{`Second Name & Surname`}</div>
                  <img className="vector-icon33" alt="" src="/vector7.svg" />
                </div>
                <div className="instance-child" />
              </div>
              <div className="frame-parent60">
                <div className="first-name-parent">
                  <div className="first-name">Email</div>
                  <img className="vector-icon33" alt="" src="/vector7.svg" />
                </div>
                <div className="instance-child" />
              </div>
              <div className="frame-parent61">
                <div className="first-name-parent">
                  <div className="first-name">County/Region</div>
                  <img className="vector-icon33" alt="" src="/vector7.svg" />
                </div>
                <div className="instance-child" />
              </div>
              <div className="frame-parent62">
                <div className="first-name-parent">
                  <div className="first-name">National ID/Passport</div>
                  <img className="vector-icon33" alt="" src="/vector7.svg" />
                </div>
                <div className="instance-child" />
              </div>
              <div className="frame-parent63">
                <div className="first-name-parent">
                  <div className="first-name">Town</div>
                  <img className="vector-icon33" alt="" src="/vector7.svg" />
                </div>
                <div className="instance-child" />
              </div>
              <div className="frame-parent64">
                <div className="first-name-parent">
                  <div className="first-name">Relationship</div>
                  <img className="vector-icon33" alt="" src="/vector7.svg" />
                </div>
                <div className="instance-child" />
              </div>
            </div>
          </div>
        </div>
        <div className="personal-details">
          <div className="personal-details-group">
            <b className="personal-details1">Educational Background</b>
            <div className="frame-parent65">
              <div className="instance-container">
                <div className="frame-parent66">
                  <div className="first-name-parent">
                    <div className="first-name">High School Name</div>
                    <img className="vector-icon33" alt="" src="/vector7.svg" />
                  </div>
                  <div className="instance-child" />
                </div>
                <div className="frame-parent66">
                  <div className="first-name-parent">
                    <div className="first-name">From - Until(years)</div>
                    <img className="vector-icon33" alt="" src="/vector7.svg" />
                  </div>
                  <div className="instance-child" />
                </div>
                <div className="frame-parent66">
                  <div className="first-name-parent">
                    <div className="first-name">Qualification</div>
                    <img className="vector-icon33" alt="" src="/vector7.svg" />
                  </div>
                  <div className="instance-child" />
                </div>
              </div>
              <div className="apply-now15">
                <img className="vector-icon61" alt="" src="/vector9.svg" />
                <b className="welcome2">Add Post-secondary level</b>
              </div>
            </div>
          </div>
        </div>
        <div className="personal-details">
          <div className="personal-details-group">
            <b className="personal-details1">Program</b>
            <div className="frame-parent69">
              <div className="frame-parent70">
                <div className="first-name-parent">
                  <div className="learning-mode">Learning Mode</div>
                  <img className="vector-icon33" alt="" src="/vector7.svg" />
                </div>
                <div className="frame-parent71">
                  <div className="vector-parent16">
                    <img className="vector-icon61" alt="" src="/vector54.svg" />
                    <div className="first-name-parent">
                      <div className="learning-mode">Regular</div>
                      <img
                        className="vector-icon33"
                        alt=""
                        src="/vector7.svg"
                      />
                    </div>
                  </div>
                  <div className="vector-parent16">
                    <img className="vector-icon61" alt="" src="/vector61.svg" />
                    <div className="first-name-parent">
                      <div className="learning-mode">Virtual</div>
                      <img
                        className="vector-icon33"
                        alt=""
                        src="/vector7.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="vector-parent18">
                <img className="vector-icon34" alt="" src="/vector71.svg" />
                <div className="frame-parent42">
                  <div className="first-name-parent">
                    <div className="first-name">Start From</div>
                    <img className="vector-icon33" alt="" src="/vector7.svg" />
                  </div>
                  <div className="instance-child" />
                </div>
              </div>
              <div className="instance-parent1">
                <div className="frame-parent42">
                  <div className="first-name-parent">
                    <div className="first-name">Program Level</div>
                    <img className="vector-icon33" alt="" src="/vector7.svg" />
                  </div>
                  <div className="instance-child" />
                </div>
                <img className="vector-icon43" alt="" src="/vector8.svg" />
                <div className="select">Diploma</div>
              </div>
              <div className="instance-parent2">
                <div className="frame-parent42">
                  <div className="first-name-parent">
                    <div className="first-name">Course</div>
                    <img className="vector-icon33" alt="" src="/vector7.svg" />
                  </div>
                  <div className="instance-child" />
                </div>
                <img className="vector-icon43" alt="" src="/vector8.svg" />
                <div className="select">Diploma in Bible Theology</div>
              </div>
              <div className="instance-parent3">
                <div className="frame-parent42">
                  <div className="first-name-parent">
                    <div className="first-name">Learning Center</div>
                    <img className="vector-icon33" alt="" src="/vector7.svg" />
                  </div>
                  <div className="instance-child" />
                </div>
                <img className="vector-icon43" alt="" src="/vector8.svg" />
                <div className="select">Select</div>
              </div>
            </div>
          </div>
        </div>
        <div className="personal-details">
          <div className="personal-details-group">
            <b className="personal-details1">Occupation</b>
            <div className="instance-container">
              <div className="instance-parent4">
                <div className="frame-parent42">
                  <div className="first-name-parent">
                    <div className="first-name">Occupation Type</div>
                    <img className="vector-icon33" alt="" src="/vector7.svg" />
                  </div>
                  <div className="instance-child" />
                </div>
                <img className="vector-icon43" alt="" src="/vector8.svg" />
                <div className="select">Diploma</div>
              </div>
              <div className="frame-parent66">
                <div className="first-name-parent">
                  <div className="first-name">Company/Institution</div>
                  <img className="vector-icon33" alt="" src="/vector7.svg" />
                </div>
                <div className="instance-child" />
              </div>
              <div className="frame-parent66">
                <div className="first-name-parent">
                  <div className="first-name">Role/Course</div>
                  <img className="vector-icon33" alt="" src="/vector7.svg" />
                </div>
                <div className="instance-child" />
              </div>
            </div>
          </div>
        </div>
        <Uploads />
      </div>
    </div>
  );
};

export default FrameComponent2;
