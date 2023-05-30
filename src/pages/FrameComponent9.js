import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import CoursesContainer from "../components/CoursesContainer";
import "./FrameComponent9.css";
const FrameComponent9 = () => {
  const navigate = useNavigate();

  const onVectorIconClick = useCallback(() => {
    navigate("/frame-34");
  }, [navigate]);

  const onVectorIcon1Click = useCallback(() => {
    navigate("/frame-38");
  }, [navigate]);

  const onApplyNowContainer1Click = useCallback(() => {
    navigate("/frame-38");
  }, [navigate]);

  return (
    <div className="rectangle-parent4">
      <div className="frame-child46" />
      <div className="frame-parent213">
        <div className="welcome-wrapper5">
          <b className="welcome7">Welcome</b>
        </div>
        <div className="welcome-wrapper5">
          <b className="welcome7">All you need</b>
        </div>
        <div className="welcome-wrapper5">
          <b className="welcome7">Select Course</b>
        </div>
        <div className="welcome-wrapper5">
          <b className="welcome7">Your Details</b>
        </div>
        <div className="welcome-wrapper5">
          <b className="welcome7">Payment</b>
        </div>
        <div className="welcome-wrapper5">
          <b className="welcome7">Preview Application</b>
        </div>
        <div className="welcome-wrapper5">
          <b className="welcome7">Finish</b>
        </div>
      </div>
      <div className="frame-child47" />
      <div className="frame-child48" />
      <div className="apply-now30">
        <img className="icround-log-in-icon18" alt="" src="/icroundlogin.svg" />
        <b className="welcome7">Close</b>
      </div>
      <img
        className="vector-icon241"
        alt=""
        src="/vector6.svg"
        onClick={onVectorIconClick}
      />
      <img
        className="vector-icon242"
        alt=""
        src="/vector210.svg"
        onClick={onVectorIcon1Click}
      />
      <b className="now-you-can-container">
        <p className="now-you-can">Now you can select the program</p>
        <p className="now-you-can">you are applying for</p>
      </b>
      <b className="program-of-choice">Program of Choice</b>
      <b className="course-details">Course Details</b>
      <b className="available-courses">Available Courses</b>
      <div className="frame-child49" />
      <div className="frame-child50" />
      <div className="frame-child51" />
      <div className="vector-parent32">
        <img className="vector-icon243" alt="" src="/vector54.svg" />
        <div className="associate-diploma">Certificate</div>
      </div>
      <div className="vector-parent33">
        <img className="vector-icon243" alt="" src="/vector54.svg" />
        <div className="associate-diploma">Associate Diploma</div>
      </div>
      <div className="vector-parent34">
        <img className="vector-icon243" alt="" src="/vector15.svg" />
        <div className="associate-diploma">Diploma</div>
      </div>
      <div className="vector-parent35">
        <img className="vector-icon243" alt="" src="/vector54.svg" />
        <div className="associate-diploma">Undergraduate Programs</div>
      </div>
      <div className="vector-parent36">
        <img className="vector-icon243" alt="" src="/vector54.svg" />
        <div className="associate-diploma">Postgraduate Diploma</div>
      </div>
      <div className="duration1">Duration:</div>
      <div className="course1">Course:</div>
      <div className="frequency">Frequency:</div>
      <div className="length">Length:</div>
      <div className="years3">2 Years</div>
      <div className="diploma-in-bible6">Diploma in Bible and Theology</div>
      <div className="lessons-per-week">5 lessons per week</div>
      <div className="hours16">2.5 hours</div>
      <div className="frame-child52" />
      <div className="course-outline-parent">
        <div className="associate-diploma">Course Outline</div>
        <img className="vector-icon248" alt="" src="/vector16.svg" />
      </div>
      <div className="frame-child53" />
      <div className="frame-child54" />
      <div className="fees-details-parent">
        <div className="associate-diploma">Fees Details</div>
        <img className="vector-icon248" alt="" src="/vector16.svg" />
      </div>
      <div className="frame-child55" />
      <div className="frame-child56" />
      <div className="frame-child57" />
      <div className="frame-child58" />
      <div className="search2">
        <div className="vector-parent37">
          <img className="vector-icon250" alt="" src="/vector17.svg" />
          <div className="search3">Search</div>
        </div>
      </div>
      <CoursesContainer
        diplomaInBibleAndTheology="Diploma in Bible and  Theology"
        regularVirtual="Regular/Virtual"
      />
      <CoursesContainer
        diplomaInBibleAndTheology="Diploma in Christian Ministry"
        regularVirtual="Regular"
        propTop="536px"
        propBorder="1px solid var(--color-gainsboro-200)"
      />
      <div className="frame-child59" />
      <div className="apply-now31" onClick={onApplyNowContainer1Click}>
        <img
          className="icround-log-in-icon18"
          alt=""
          src="/icroundlogin6.svg"
        />
        <b className="welcome7">Continue</b>
      </div>
      <b className="need-help9">Need Help?</b>
    </div>
  );
};

export default FrameComponent9;
