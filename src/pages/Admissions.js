import { useState, useCallback } from "react";
import FrameComponent from "./FrameComponent";
import PortalPopup from "../components/PortalPopup";
import Header from "../components/Header";
import MainNavbar from "../components/MainNavbar";
import FrameComponent19 from "../components/FrameComponent19";
import GroupComponent from "../components/GroupComponent";
import CampusLocation from "../components/CampusLocation";
import "./Admissions.css";
const Admissions = () => {
  const [isFrame1Open, setFrame1Open] = useState(false);
  const [isFrame2Open, setFrame2Open] = useState(false);
  const [isFrame3Open, setFrame3Open] = useState(false);

  const openFrame1 = useCallback(() => {
    setFrame1Open(true);
  }, []);

  const closeFrame1 = useCallback(() => {
    setFrame1Open(false);
  }, []);

  const openFrame2 = useCallback(() => {
    setFrame2Open(true);
  }, []);

  const closeFrame2 = useCallback(() => {
    setFrame2Open(false);
  }, []);

  const openFrame3 = useCallback(() => {
    setFrame3Open(true);
  }, []);

  const closeFrame3 = useCallback(() => {
    setFrame3Open(false);
  }, []);

  return (
    <>
      <div className="admissions7">
        <Header biperson="/biperson.svg" />
        <MainNavbar
          riarrowDropDownLine="/riarrowdropdownline2.svg"
          propBackgroundColor="unset"
          propBackgroundColor1="5px solid #a22531"
          propBackgroundColor2="unset"
          propBackgroundColor3="unset"
          propBackgroundColor4="unset"
          propBackgroundColor5="unset"
        />
        <FrameComponent19
          studentLifeCarouselImage1="/studentlife-carousel-image-1@2x.png"
          nurturingPotentialBuildin="Your search for a  wholesome approach to theological teachings ends here"
          propDisplay="unset"
          propWidth="1098px"
          propDisplay1="none"
        />
        <div className="admissions-child" />
        <div className="admissions-item" />
        <b className="our-assurance">Our Assurance</b>
        <div className="we-boast-of-container">
          <p className="we-boast-of">We boast of having the most elaborate</p>
          <p className="we-boast-of">
            applications and admission process in the industry
          </p>
        </div>
        <div className="footer6">
          <div className="footer7">
            <div className="location-garden-estate-off-th-parent1">
              <div className="location-garden-estate-container3">
                <p className="we-boast-of">
                  <span className="location7">Location:</span>
                </p>
                <p className="we-boast-of">
                  <span className="garden-estate-off3">{`Garden Estate Off Thika RoadOffice `}</span>
                </p>
                <p className="we-boast-of">
                  <span className="location7">Hours:</span>
                </p>
                <p className="we-boast-of">
                  <span className="garden-estate-off3">8:00am – 5:00pm</span>
                </p>
                <p className="we-boast-of">
                  <span className="location7">Telephone:</span>
                </p>
                <p className="we-boast-of">
                  <span className="garden-estate-off3">0754 569 687</span>
                </p>
                <p className="we-boast-of">
                  <span className="location7">Email</span>
                </p>
                <p className="we-boast-of">
                  <a
                    className="adminnpbccoke10"
                    href="http://npbc.co.ke/#"
                    target="_blank"
                  >
                    <span className="adminnpbccoke11">admin@npbc.co.ke</span>
                  </a>
                </p>
              </div>
              <div className="npbc-online-reflection-container3">
                <p className="we-boast-of">
                  <a
                    className="adminnpbccoke10"
                    href="https://online.npbc.co.ke/"
                    target="_blank"
                  >
                    NPBC Online
                  </a>
                </p>
                <p className="we-boast-of">
                  <a
                    className="adminnpbccoke10"
                    href="https://npbc.co.ke/index.php/category/reflection-blog/"
                    target="_blank"
                  >
                    Reflection Blog
                  </a>
                </p>
                <p className="we-boast-of">
                  <a
                    className="adminnpbccoke10"
                    href="https://npbc.co.ke/#"
                    target="_blank"
                  >
                    Community Engagement
                  </a>
                </p>
                <p className="news-and-events6">
                  <a
                    className="adminnpbccoke10"
                    href="https://npbc.co.ke/#"
                    target="_blank"
                  >
                    News and Events
                  </a>
                </p>
                <p className="news-and-events6">
                  <a
                    className="adminnpbccoke10"
                    href="https://npbc.co.ke/#"
                    target="_blank"
                  >
                    Research Projects
                  </a>
                </p>
              </div>
              <div className="admissions-student-life-container3">
                <p className="we-boast-of">
                  <a
                    className="adminnpbccoke10"
                    href="https://npbc.co.ke/index.php/admissions/"
                    target="_blank"
                  >
                    Admissions
                  </a>
                </p>
                <p className="we-boast-of">
                  <a
                    className="adminnpbccoke10"
                    href="https://npbc.co.ke/index.php/student-life-2/"
                    target="_blank"
                  >
                    Student Life
                  </a>
                </p>
                <p className="we-boast-of">
                  <a
                    className="adminnpbccoke10"
                    href="http://gmail.com/"
                    target="_blank"
                  >
                    Staff Mail
                  </a>
                </p>
                <p className="we-boast-of">
                  <a
                    className="adminnpbccoke10"
                    href="https://online.npbc.co.ke/"
                    target="_blank"
                  >
                    NPBC Online
                  </a>
                </p>
              </div>
              <div className="history-mission-container3">
                <p className="we-boast-of">
                  <a
                    className="adminnpbccoke10"
                    href="https://npbc.co.ke/#"
                    target="_blank"
                  >{`History & Mission`}</a>
                </p>
                <p className="we-boast-of">
                  <a
                    className="adminnpbccoke10"
                    href="https://npbc.co.ke/index.php/staff-and-faculty/"
                    target="_blank"
                  >
                    Staff and Faculty
                  </a>
                </p>
                <p className="we-boast-of">
                  <a
                    className="adminnpbccoke10"
                    href="https://npbc.co.ke/#"
                    target="_blank"
                  >
                    Downloads
                  </a>
                </p>
                <p className="news-and-events6">
                  <a
                    className="adminnpbccoke10"
                    href="https://npbc.co.ke/#"
                    target="_blank"
                  >
                    Community
                  </a>
                </p>
                <p className="we-boast-of">
                  <a
                    className="adminnpbccoke10"
                    href="https://www.facebook.com/Nairobi-Pentecostal-Bible-College-NPBC-569223493163146/"
                    target="_blank"
                  >
                    Social Media
                  </a>
                </p>
                <p className="we-boast-of">
                  <a
                    className="adminnpbccoke10"
                    href="https://npbc.co.ke/#"
                    target="_blank"
                  >
                    Employment
                  </a>
                </p>
              </div>
              <b className="npbc6">NPBC</b>
              <b className="quick-links3">QUICK LINKS</b>
              <b className="research3">RESEARCH</b>
              <b className="explore3">Explore</b>
            </div>
          </div>
          <div className="g5a0631-1-scaled-1-parent1">
            <img
              className="g5a0631-1-scaled-1-icon3"
              alt=""
              src="/1g5a06311scaled-1@2x.png"
            />
            <div className="become-a-student-at-npbc-parent1">
              <b className="become-a-student-container3">
                <p className="we-boast-of">{`Become a student at `}</p>
                <p className="we-boast-of">NPBC</p>
              </b>
              <div className="button-primary3">
                <div className="button3">Apply Today</div>
              </div>
            </div>
          </div>
        </div>
        <div className="how-to-apply1">How to Apply</div>
        <div className="admissions-inner">
          <div className="admission-process-parent">
            <div className="admission-process">Admission Process</div>
            <div className="line-group">
              <div className="frame-child8" />
              <div className="frame-parent6">
                <div className="union-parent">
                  <img className="union-icon" alt="" src="/union1.svg" />
                  <div className="admission-process">
                    <p className="we-boast-of">Pick</p>
                    <p className="course">course</p>
                  </div>
                </div>
                <div className="union-parent">
                  <img className="union-icon" alt="" src="/union1.svg" />
                  <div className="admission-process">
                    <p className="we-boast-of">Check</p>
                    <p className="course">requirements</p>
                  </div>
                </div>
                <div className="union-parent">
                  <img className="union-icon" alt="" src="/union2.svg" />
                  <div className="admission-process">
                    <p className="we-boast-of">Make</p>
                    <p className="course">application</p>
                  </div>
                </div>
                <div className="union-parent">
                  <img className="union-icon" alt="" src="/union1.svg" />
                  <div className="admission-process">
                    <p className="we-boast-of">Get</p>
                    <p className="course">admitted</p>
                  </div>
                </div>
                <div className="union-parent">
                  <img className="union-icon" alt="" src="/union2.svg" />
                  <div className="admission-process">
                    <p className="we-boast-of">Receive</p>
                    <p className="course">orientation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="admissions-child1" />
        <div className="we-offer-two">
          We offer two modes of application, online application and physical
          application. We simplified our application process to only have what
          is absolutely necessary for the application and at the time of
          application.
        </div>
        <div className="we-have-courses">
          We have courses for everyone with any level of qualification and
          educational background At NPBC, we are committed to providing a
          high-quality education in biblical studies and ministry training. In
          order to ensure that our students are well-prepared for their future
          ministry work.
        </div>
        <div className="admissions-child2" />
        <div className="admissions-child3" />
        <div className="online-application">Online Application</div>
        <div className="physical-application">Physical Application</div>
        <div className="our-online-application">
          Our online application is simple and clear, having only 5 steps to
          complete your entire application. Get help using the “Need Help” link
          at the bottom left at any point in the process.
        </div>
        <div className="the-physical-application">{`The physical application mode is customized to accommodate those who find it hard to apply online.  Our physical application process can happen in three ways. `}</div>
        <div className="admissions-child4" />
        <div className="group-parent3">
          <GroupComponent
            seeRegistrationRequiremen="See Registration Requirements"
            viewTheMainRequirementsFo="View the main requirements for the general application process including documents to upload, terms and conditions and the application fee"
          />
          <GroupComponent
            seeRegistrationRequiremen="Select Course"
            viewTheMainRequirementsFo="Choose a study level, certificate, diploma or undergraduate, pick a course among the choices and see the qualifications needed for the choice you made"
            propHeight="85px"
          />
          <GroupComponent
            seeRegistrationRequiremen="Enter your Details"
            viewTheMainRequirementsFo="Input correct details under the sections as follows; personal details, contact, next of kin, educational background, verify course, current occupation and finally upload the relevant files"
            propHeight="85px"
          />
          <GroupComponent
            seeRegistrationRequiremen="Payment"
            viewTheMainRequirementsFo="View the payment details and edit where necessary and request for Mpesa payment prompt to proceed"
            propHeight="68px"
          />
          <GroupComponent
            seeRegistrationRequiremen={`Preview Application & Finish`}
            viewTheMainRequirementsFo="View all the details as you have entered them to ascertain their correctness. Finally confirm your application with a final declaration"
            propHeight="85px"
          />
        </div>
        <div className="apply-now6" onClick={openFrame1}>
          <img
            className="icround-log-in-icon3"
            alt=""
            src="/icroundlogin8.svg"
          />
          <b className="submit-filled-form">Submit filled form</b>
        </div>
        <div className="apply-now7" onClick={openFrame2}>
          <img
            className="icround-log-in-icon3"
            alt=""
            src="/icroundlogin9.svg"
          />
          <b className="submit-filled-form">Apply Now</b>
        </div>
        <b className="contact-us">Contact Us</b>
        <b className="view-courses">View courses</b>
        <CampusLocation
          visitCampusToApply="Visit campus to apply"
          gardenEstateOffThikaRoadO="Garden Estate Off Thika Road Office"
          viewLocations="View locations"
          vector="/vector36.svg"
          callForDirections="Call for  directions"
        />
        <CampusLocation
          visitCampusToApply="Fill form and submit in-person"
          gardenEstateOffThikaRoadO="Garden Estate Off Thika Road Office"
          viewLocations="View locations"
          vector="/vector37.svg"
          callForDirections="Download  Form"
          propTop="1555px"
        />
        <CampusLocation
          visitCampusToApply="Fill form and submit via email"
          gardenEstateOffThikaRoadO="NPBC Email : admin@npbc.co.ke"
          viewLocations="Submit form"
          vector="/vector37.svg"
          callForDirections="Download  Form"
          propTop="1673px"
        />
        <div className="admissions-child5" />
        <div className="our-intakes-parent">
          <div className="admission-process">Our Intakes</div>
          <div className="the-february-intake1">
            The February intake is now open
          </div>
        </div>
        <div className="course-qualifications">Course Qualifications</div>
        <div className="undergraduate">Undergraduate</div>
        <div className="certificate">Certificate</div>
        <div className="all-undergraduate-courses-container">
          <p className="we-boast-of">{`All undergraduate courses require a KCSE grade of C+ `}</p>
          <p className="we-boast-of">
            or Diploma in Bible and Theology and go for Ksh 7,500
          </p>
        </div>
        <div className="certificate-courses-are">
          Certificate courses are open to everyone with any level of
          qualification at a fee of Ksh 1,100
        </div>
        <div className="diploma-courses-generally">
          Diploma courses generally require C- or KCE division II, KACE one (1)
          Principal or an equivalent qualification or Certificate of
          Experiential Learning or KNQF 5
        </div>
        <div className="find-out-the">
          Find out the specific qualification needed in each particular course
          by selecting a course you are interested in.
        </div>
        <div className="find-out-the1">
          Find out the specific qualification needed in each particular course
          by selecting a course you are interested in.
        </div>
        <div className="the-fee-ranges">
          The fee ranges from 1500Ksh to 2000 Ksh per course depending on the
          course you choose but more specific details are found in the courses
          page.
        </div>
        <div className="diploma">Diploma</div>
        <div className="we-conduct-intakes1">{`We conduct intakes twice an year in the months of February and September for all our courses `}</div>
        <div className="our-application-process1">{`Our application process is clear and simple so you can apply from anywhere. `}</div>
        <div className="admissions-child6" />
        <div className="admissions-child7" />
        <div className="intake-closes-in-group">
          <div className="admission-process">Intake closes in</div>
          <div className="frame-parent7">
            <div className="days-group">
              <div className="days1">Days</div>
              <div className="div12">10</div>
            </div>
            <div className="days-group">
              <div className="days1">Hours</div>
              <div className="div12">12</div>
            </div>
            <div className="days-group">
              <div className="days1">Minutes</div>
              <div className="div12">47</div>
            </div>
            <div className="days-group">
              <div className="days1">Seconds</div>
              <div className="div12">22</div>
            </div>
          </div>
        </div>
        <div className="view-courses-first1">View courses first</div>
        <img
          className="n-1-icon"
          alt=""
          src="/315999374-512023994282245-4822197605089008107-n-1@2x.png"
        />
        <div className="admissions-child8" />
        <div className="admissions-child9" />
        <div className="admissions-child10" />
        <div className="apply-now9" onClick={openFrame3}>
          <img
            className="icround-log-in-icon3"
            alt=""
            src="/icroundlogin7.svg"
          />
          <b className="submit-filled-form">Apply Now</b>
        </div>
        <div className="questions-asked-about-our-admi-parent">
          <div className="admission-process">
            Questions asked about our admission
          </div>
          <div className="frame-parent8">
            <div className="group-parent4">
              <div className="finances-quiz-parent">
                <div className="finances-quiz">Finances Quiz</div>
                <div className="group-child6" />
              </div>
              <div className="admission-process">Career Guidance</div>
              <div className="admission-process">Application Status</div>
              <div className="admission-process">Faculty Quizzes</div>
              <div className="admission-process">{`Hostels & Residence`}</div>
              <div className="admission-process">Campus Facilities</div>
            </div>
            <div className="questions1">
              <div className="can-i-apply-for-financial-aid-parent">
                <div className="finances-quiz">
                  Can I apply for financial aid?
                </div>
                <div className="div16">+</div>
                <div className="group-child7" />
              </div>
              <div className="can-i-apply-for-financial-aid-parent">
                <div className="finances-quiz">
                  Can I visit the campus before I apply?
                </div>
                <div className="div16">+</div>
                <div className="group-child7" />
              </div>
              <div className="can-i-apply-for-financial-aid-parent">
                <div className="finances-quiz">
                  What is the credit transfer policy?
                </div>
                <div className="div16">+</div>
                <div className="group-child7" />
              </div>
              <div className="can-i-apply-for-financial-aid-parent">
                <div className="finances-quiz">
                  What is the deadline of fee payment in the semesters?
                </div>
                <div className="div16">+</div>
                <div className="group-child7" />
              </div>
              <div className="can-i-apply-for-financial-aid-parent">
                <div className="finances-quiz">
                  What are the charges for supplementary exams?
                </div>
                <div className="div16">+</div>
                <div className="group-child7" />
              </div>
              <div className="can-i-apply-for-financial-aid-parent">
                <div className="finances-quiz">
                  Do you receive bursary cheques or offer internal bursaries?
                </div>
                <div className="div16">+</div>
                <div className="group-child7" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {isFrame1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFrame1}
        >
          <FrameComponent onClose={closeFrame1} />
        </PortalPopup>
      )}
      {isFrame2Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFrame2}
        >
          <FrameComponent onClose={closeFrame2} />
        </PortalPopup>
      )}
      {isFrame3Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFrame3}
        >
          <FrameComponent onClose={closeFrame3} />
        </PortalPopup>
      )}
    </>
  );
};

export default Admissions;
