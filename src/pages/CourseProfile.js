import { useState, useCallback } from "react";
import FrameComponent from "./FrameComponent";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import MainNavbar from "../components/MainNavbar";
import FrameComponent19 from "../components/FrameComponent19";
import FrameComponent12 from "../components/FrameComponent12";
import FrameComponent30 from "../components/FrameComponent30";
import FrameComponent31 from "../components/FrameComponent31";
import Testimony from "../components/Testimony";
import Profile from "../components/Profile";
import CarouselText from "../components/CarouselText";
import FrameComponent18 from "../components/FrameComponent18";
import "./CourseProfile.css";
const CourseProfile = () => {
  const [isFrame1Open, setFrame1Open] = useState(false);
  const [isFrame2Open, setFrame2Open] = useState(false);
  const navigate = useNavigate();

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

  const onViewCoursesFirstClick = useCallback(() => {
    navigate("/courses-and-programs");
  }, [navigate]);

  return (
    <>
      <div className="course-profile">
        <Header biperson="/biperson.svg" />
        <MainNavbar
          riarrowDropDownLine="/riarrowdropdownline1.svg"
          propBackgroundColor="unset"
          propBackgroundColor1="unset"
          propBackgroundColor2="5px solid #a22531"
          propBackgroundColor3="unset"
          propBackgroundColor4="unset"
          propBackgroundColor5="unset"
        />
        <FrameComponent19
          studentLifeCarouselImage1="/studentlife-carousel-image-1@2x.png"
          nurturingPotentialBuildin="Your search for a  wholesome approach to theological teachings ends here"
        />
        <FrameComponent12
          courseStatistics="Course Statistics"
          prop="120"
          creditHours="Credit hours"
          prop1="7500"
          feesPerCourse="Fees per course"
          prop2="1850+"
          courseGraduates="Course graduates"
          prop3="4 / 2"
          courseDuration="Course duration"
        />
        <div className="course-profile-child" />
        <div className="course-profile-item" />
        <div className="course-profile-inner" />
        <div className="course-profile-child1" />
        <div className="course-profile-child2" />
        <div className="course-profile-child3" />
        <div className="course-profile-child4" />
        <div className="course-profile-child5" />
        <div className="frame-parent5">
          <div className="course-brief-parent">
            <b className="course-brief">Course Brief</b>
            <div className="frame-child4" />
          </div>
          <b className="course-brief">Qualification</b>
          <b className="course-brief">Course Outline</b>
          <b className="course-brief">Course Fees</b>
          <b className="course-brief">Course Accreditation</b>
          <b className="course-brief">Testimonials</b>
        </div>
        <div className="course-brief1">Course Brief</div>
        <div className="course-qualification1">Course Qualification</div>
        <div className="application-requirements">Application Requirements</div>
        <div className="kcse-certificate-or">
          KCSE certificate or Diploma certificate
        </div>
        <div className="national-id-or">National ID or passport</div>
        <div className="ksh-3000-application">Ksh 3000 application fee</div>
        <div className="photo-passport">Photo passport</div>
        <div className="photo-passport1">Photo passport</div>
        <div className="the-course-covers">
          The course covers these topics in the years of study exhaustively to
          reveal the Bible in the context of the discussion and how leadership
          and management should be done in the context of churches
        </div>
        <div className="the-fees-indicated">
          The fees indicated below should be paid by every student before the
          day of registration. Please note that payment must be paid in any
          branch of the following banks in Kenya
        </div>
        <div className="npbc-is-an">
          NPBC is an approved institution to offer undergraduate programs by the
          Commission for University Education. Accreditation happened when it
          was chartered but other courses added later are accredited
          individually.
        </div>
        <div className="in-2017-the">
          In 2017, the Nairobi Pentecostal Bible College was officially
          recognized by the commission as a credible institution to train
          graduate students with a Bachelor of Arts in Bible and Theology.
        </div>
        <div className="the-following-is">
          The following is the breakdown of the fees for this course payable at
          the beginning of the semester or anywhere within the year. The
          application fees payable once at the end of an application are
          included in the list
        </div>
        <div className="course-outline1">Course Outline</div>
        <div className="fee-structure">Fee Structure</div>
        <div className="course-accreditation1">Course Accreditation</div>
        <div className="hear-what-alumni-container">
          <span>{`Hear what `}</span>
          <span className="alumni-students">alumni students</span>
          <span> had to say about the course</span>
        </div>
        <div className="we-have-a-container">
          <span>{`We have a first-class `}</span>
          <span className="alumni-students">lecturers team</span>
          <span> to handle your the course</span>
        </div>
        <div className="our-guarantee">{`Our guarantee `}</div>
        <div className="what-you-will">
          What you will love about this course
        </div>
        <div className="bbl-777">BBL 777</div>
        <b className="bachelor-of-art">Bachelor of Art in Bible and Theology</b>
        <div className="the-bachelor-of">{`The Bachelor of Arts in Bible and Theology program at NPBC is designed for church ministers and administrators who want to deepen their knowledge of the Bible, theology, and ministry. This program has been offered since 1996 and is currently offered both virtually and in person, providing students with the flexibility to study in a way that fits their lifestyle. `}</div>
        <div className="the-course-lasts">
          The course lasts for 4 years if the student does not have a diploma in
          theology related course or 2 years when the student has studied such a
          course before. The course includes 120 credit hours. This applies to
          all undergraduate courses.
        </div>
        <img className="mask-group-icon2" alt="" src="/mask-group6@2x.png" />
        <div className="course-profile-child6" />
        <div className="intake-ongoing">Intake ongoing</div>
        <div className="group-parent">
          <img className="group-icon" alt="" src="/group-51.svg" />
          <div className="indepth-exegesis">Indepth exegesis</div>
        </div>
        <div className="group-container">
          <img className="group-icon" alt="" src="/group-50.svg" />
          <div className="indepth-exegesis">Accessible tutors</div>
        </div>
        <div className="group-parent1">
          <img className="group-icon" alt="" src="/group-49.svg" />
          <div className="indepth-exegesis">Emphasis on basics</div>
        </div>
        <div className="group-parent2">
          <img className="group-icon" alt="" src="/group-48.svg" />
          <div className="indepth-exegesis">Affordable</div>
        </div>
        <div className="questions">
          <div className="year-1-parent">
            <div className="year-1">Year 1</div>
            <div className="div4">+</div>
            <div className="group-child" />
          </div>
          <div className="group-div">
            <div className="unit-1-parent">
              <div className="unit-1">Unit 1</div>
              <div className="div5">+</div>
              <div className="group-item" />
            </div>
            <div className="unit-2-parent">
              <div className="unit-2">Unit 2</div>
              <div className="div5">+</div>
              <div className="group-item" />
            </div>
            <div className="unit-3-parent">
              <div className="unit-3">Unit 3</div>
              <div className="div5">+</div>
              <div className="group-item" />
            </div>
            <div className="unit-4-parent">
              <div className="unit-4">Unit 4</div>
              <div className="div5">+</div>
              <div className="group-item" />
            </div>
          </div>
          <div className="year-1-parent">
            <div className="year-2">Year 2</div>
            <div className="div4">+</div>
            <div className="group-child" />
          </div>
          <div className="year-1-parent">
            <div className="year-3">Year 3</div>
            <div className="div4">+</div>
            <div className="group-child" />
          </div>
          <div className="year-1-parent">
            <div className="year-2">Year 4</div>
            <div className="div4">+</div>
            <div className="group-child" />
          </div>
        </div>
        <div className="vector-container">
          <img className="vector-icon3" alt="" src="/vector22.svg" />
          <div className="indepth-exegesis">
            A student should have completed secondary school education
          </div>
        </div>
        <div className="vector-parent1">
          <img className="vector-icon3" alt="" src="/vector22.svg" />
          <div className="indepth-exegesis">
            <p className="student-should-have">
              Student should have attained a minimum of C+ in KCSE or have
              diploma in
            </p>
            <p className="student-should-have">
              theology from a recognized institution cation
            </p>
          </div>
        </div>
        <div className="vector-parent2">
          <img className="vector-icon3" alt="" src="/vector22.svg" />
          <div className="student-should-be">
            Student should have be a practicing Christian under someone’s
            authority
          </div>
        </div>
        <div className="vector-parent3">
          <img className="vector-icon3" alt="" src="/vector22.svg" />
          <div className="student-should-be">
            Student should be available for the period of the course duration
          </div>
        </div>
        <img className="vector-icon7" alt="" src="/vector23.svg" />
        <img className="vector-icon8" alt="" src="/vector24.svg" />
        <img className="vector-icon9" alt="" src="/vector25.svg" />
        <img className="vector-icon10" alt="" src="/vector26.svg" />
        <img className="vector-icon11" alt="" src="/vector27.svg" />
        <div className="vector-parent4">
          <img className="vector-icon3" alt="" src="/vector22.svg" />
          <div className="student-should-be">
            Student should be proficient in English in reading and writing
          </div>
        </div>
        <img className="vector-icon13" alt="" src="/vector28.svg" />
        <img className="vector-icon14" alt="" src="/vector29.svg" />
        <img className="vector-icon15" alt="" src="/vector30.svg" />
        <img className="vector-icon16" alt="" src="/vector31.svg" />
        <div className="apply-now4" onClick={openFrame1}>
          <b className="course-brief">Download Outline</b>
          <img
            className="material-symbolsdownload-icon"
            alt=""
            src="/materialsymbolsdownload.svg"
          />
        </div>
        <div className="apply-now5" onClick={openFrame2}>
          <b className="course-brief">Download Fee Structure</b>
          <img
            className="material-symbolsdownload-icon"
            alt=""
            src="/materialsymbolsdownload1.svg"
          />
        </div>
        <FrameComponent30 />
        <FrameComponent31 />
        <img
          className="accreditation-1-icon"
          alt=""
          src="/accreditation-1@2x.png"
        />
        <Testimony />
        <div className="scroll-indicators">
          <div className="scroll-indicators-child" />
          <div className="scroll-indicators-item" />
          <div className="scroll-indicators-child" />
        </div>
        <Testimony propLeft="1152px" />
        <div className="footer4">
          <div className="footer5">
            <div className="location-garden-estate-off-th-container">
              <div className="location-garden-estate-container2">
                <p className="student-should-have">
                  <span className="location5">Location:</span>
                </p>
                <p className="student-should-have">
                  <span className="garden-estate-off2">{`Garden Estate Off Thika RoadOffice `}</span>
                </p>
                <p className="student-should-have">
                  <span className="location5">Hours:</span>
                </p>
                <p className="student-should-have">
                  <span className="garden-estate-off2">8:00am – 5:00pm</span>
                </p>
                <p className="student-should-have">
                  <span className="location5">Telephone:</span>
                </p>
                <p className="student-should-have">
                  <span className="garden-estate-off2">0754 569 687</span>
                </p>
                <p className="student-should-have">
                  <span className="location5">Email</span>
                </p>
                <p className="student-should-have">
                  <a
                    className="adminnpbccoke7"
                    href="http://npbc.co.ke/#"
                    target="_blank"
                  >
                    <span className="adminnpbccoke8">admin@npbc.co.ke</span>
                  </a>
                </p>
              </div>
              <div className="npbc-online-reflection-container2">
                <p className="student-should-have">
                  <a
                    className="adminnpbccoke7"
                    href="https://online.npbc.co.ke/"
                    target="_blank"
                  >
                    NPBC Online
                  </a>
                </p>
                <p className="student-should-have">
                  <a
                    className="adminnpbccoke7"
                    href="https://npbc.co.ke/index.php/category/reflection-blog/"
                    target="_blank"
                  >
                    Reflection Blog
                  </a>
                </p>
                <p className="student-should-have">
                  <a
                    className="adminnpbccoke7"
                    href="https://npbc.co.ke/#"
                    target="_blank"
                  >
                    Community Engagement
                  </a>
                </p>
                <p className="news-and-events4">
                  <a
                    className="adminnpbccoke7"
                    href="https://npbc.co.ke/#"
                    target="_blank"
                  >
                    News and Events
                  </a>
                </p>
                <p className="news-and-events4">
                  <a
                    className="adminnpbccoke7"
                    href="https://npbc.co.ke/#"
                    target="_blank"
                  >
                    Research Projects
                  </a>
                </p>
              </div>
              <div className="admissions-student-life-container2">
                <p className="student-should-have">
                  <a
                    className="adminnpbccoke7"
                    href="https://npbc.co.ke/index.php/admissions/"
                    target="_blank"
                  >
                    Admissions
                  </a>
                </p>
                <p className="student-should-have">
                  <a
                    className="adminnpbccoke7"
                    href="https://npbc.co.ke/index.php/student-life-2/"
                    target="_blank"
                  >
                    Student Life
                  </a>
                </p>
                <p className="student-should-have">
                  <a
                    className="adminnpbccoke7"
                    href="http://gmail.com/"
                    target="_blank"
                  >
                    Staff Mail
                  </a>
                </p>
                <p className="student-should-have">
                  <a
                    className="adminnpbccoke7"
                    href="https://online.npbc.co.ke/"
                    target="_blank"
                  >
                    NPBC Online
                  </a>
                </p>
              </div>
              <div className="history-mission-container2">
                <p className="student-should-have">
                  <a
                    className="adminnpbccoke7"
                    href="https://npbc.co.ke/#"
                    target="_blank"
                  >{`History & Mission`}</a>
                </p>
                <p className="student-should-have">
                  <a
                    className="adminnpbccoke7"
                    href="https://npbc.co.ke/index.php/staff-and-faculty/"
                    target="_blank"
                  >
                    Staff and Faculty
                  </a>
                </p>
                <p className="student-should-have">
                  <a
                    className="adminnpbccoke7"
                    href="https://npbc.co.ke/#"
                    target="_blank"
                  >
                    Downloads
                  </a>
                </p>
                <p className="news-and-events4">
                  <a
                    className="adminnpbccoke7"
                    href="https://npbc.co.ke/#"
                    target="_blank"
                  >
                    Community
                  </a>
                </p>
                <p className="student-should-have">
                  <a
                    className="adminnpbccoke7"
                    href="https://www.facebook.com/Nairobi-Pentecostal-Bible-College-NPBC-569223493163146/"
                    target="_blank"
                  >
                    Social Media
                  </a>
                </p>
                <p className="student-should-have">
                  <a
                    className="adminnpbccoke7"
                    href="https://npbc.co.ke/#"
                    target="_blank"
                  >
                    Employment
                  </a>
                </p>
              </div>
              <b className="npbc4">NPBC</b>
              <b className="quick-links2">QUICK LINKS</b>
              <b className="research2">RESEARCH</b>
              <b className="explore2">Explore</b>
            </div>
          </div>
          <div className="g5a0631-1-scaled-1-container">
            <img
              className="g5a0631-1-scaled-1-icon2"
              alt=""
              src="/1g5a06311scaled-1@2x.png"
            />
            <div className="become-a-student-at-npbc-container">
              <b className="become-a-student-container2">
                <p className="student-should-have">{`Become a student at `}</p>
                <p className="student-should-have">NPBC</p>
              </b>
              <div className="button-primary2">
                <div className="button2">Apply Today</div>
              </div>
            </div>
          </div>
        </div>
        <Profile />
        <Profile
          propLeft="1152px"
          propTop="6702px"
          propDisplay="unset"
          propDisplay1="unset"
          propDisplay2="unset"
        />
        <CarouselText />
        <FrameComponent18
          maskGroup="/mask-group8@2x.png"
          onViewCoursesFirstClick={onViewCoursesFirstClick}
        />
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
    </>
  );
};

export default CourseProfile;
