import Header from "../components/Header";
import MainNavbar from "../components/MainNavbar";
import FrameComponent19 from "../components/FrameComponent19";
import CarouselText from "../components/CarouselText";
import FrameComponent12 from "../components/FrameComponent12";
import UndergradCourses from "../components/UndergradCourses";
import Undergrad from "../components/Undergrad";
import Certificate from "../components/Certificate";
import "./CoursesAndPrograms.css";
const CoursesAndPrograms = () => {
  return (
    <div className="courses-and-programs">
      <div className="courses-and-programs-child" />
      <Header biperson="/biperson.svg" />
      <MainNavbar
        riarrowDropDownLine="/riarrowdropdownline2.svg"
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
        propDisplay="unset"
        propWidth="1098px"
        propDisplay1="none"
      />
      <CarouselText propLeft="38px" />
      <div className="courses-and-programs-item" />
      <FrameComponent12
        courseStatistics="Our Statistics"
        prop="4024+"
        creditHours="Hours lectured"
        prop1="3750+"
        feesPerCourse="Students taught"
        prop2="7"
        courseGraduates="Course Programs"
        prop3="3"
        courseDuration="Upcoming programs"
        propLeft="326px"
      />
      <div className="we-offer-industry-container">
        <p className="we-offer-industry-leading-and">
          <span className="we-offer">{`We offer `}</span>
          <span className="industry-leading">industry leading</span>
          <span className="we-offer">{` and `}</span>
          <span className="industry-leading">accredited</span>
          <span> programs to</span>
        </p>
        <p className="we-offer-industry-leading-and">
          undergraduate, diploma and certificate students
        </p>
      </div>
      <div className="our-courses-are-container">
        <p className="we-offer-industry-leading-and">
          Our courses are curated to meet the spiritual and leadership needs of
          the body of Christ in Kenya, Africa
        </p>
        <p className="we-offer-industry-leading-and">
          and the world. We put care in everything we do with the consciousness
          that our students will tomorrow
        </p>
        <p className="we-offer-industry-leading-and">
          face the society in the reality of God’s plan.
        </p>
      </div>
      <div className="this-table-shows">
        This table shows all our programs with brief details for a unified view
        that makes comparison easy and convenient. All extra details on every
        course are available and can be accessed by choosing course from the
        table or the above groupings
      </div>
      <img className="vector-icon17" alt="" src="/vector38.svg" />
      <div className="course-types">
        <UndergradCourses
          vector="/vector1.svg"
          undergraduatePrograms="Undergraduate Programs"
        />
        <UndergradCourses
          vector="/vector40.svg"
          undergraduatePrograms="Diploma Programs"
          propWidth="80.24px"
        />
        <UndergradCourses
          vector="/union4.svg"
          undergraduatePrograms="Certificate Programs"
          propWidth="85.33px"
        />
        <UndergradCourses
          vector="/vector41.svg"
          undergraduatePrograms="Upcoming Programs"
          propWidth="74.81px"
        />
      </div>
      <Undergrad
        undergraduatePrograms="Undergraduate Programs"
        bachelorOfArtInBibleTheol={`Bachelor of Art in Bible & Theology`}
        bachelorOfArtInBibleTheol1={`Bachelor of Art in Bible & Theology`}
        bachelorOfArtInBibleTheol2={`Bachelor of Art in Bible & Theology`}
      />
      <Undergrad
        undergraduatePrograms="Diploma Programs"
        bachelorOfArtInBibleTheol="Diploma in Christian Ministry"
        bachelorOfArtInBibleTheol1="Diploma in Bible Theology"
        bachelorOfArtInBibleTheol2="Diploma in Counseling Psychology"
        propTop="2205px"
      />
      <Certificate />
      <div className="program-brief-view">{`Program Brief View `}</div>
      <div className="study-modes-section">
        <div className="study-modes-head">
          <div className="study-modes-parent">
            <div className="study-modes1">Study Modes</div>
            <div className="we-offer-both-container">
              <p className="we-offer-industry-leading-and">
                We offer both physical/regular and virtual/online lectures in
                most of our programs. This means you can join lecture
              </p>
              <p className="we-offer-industry-leading-and">
                sessions from anywhere or attend them in one of our locations.
              </p>
            </div>
          </div>
        </div>
        <div className="study-modes-body">
          <div className="study-modes-body-inner">
            <div className="frame-parent9">
              <div className="campus-locations-wrapper">
                <div className="campus-locations">Campus Locations</div>
              </div>
              <div className="campus-location-parent">
                <div className="campus-location">
                  <div className="campus">
                    <div className="main-campus">Main Campus</div>
                    <div className="garden-estate-off4">
                      Garden Estate Off Thika Road Office
                    </div>
                  </div>
                  <div className="view-location">
                    <div className="main-campus">View location</div>
                    <img className="union-icon5" alt="" src="/union5.svg" />
                  </div>
                </div>
                <div className="campus-location">
                  <div className="campus">
                    <div className="main-campus">Ruiru Campus</div>
                    <div className="garden-estate-off4">
                      Garden Estate Off Thika Road Office
                    </div>
                  </div>
                  <div className="view-location">
                    <div className="main-campus">View location</div>
                    <img className="union-icon5" alt="" src="/union5.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="frame-parent10">
            <div className="virtual-platforms-wrapper">
              <div className="campus-locations">Virtual Platforms</div>
            </div>
            <div className="campus-location-parent">
              <div className="npbc-lms-parent">
                <div className="main-campus">NPBC LMS</div>
                <div className="notes-and-all">
                  Notes and all learning materials are shared to all students by
                  a lecturer on the college’s LMS at the start of the semester
                </div>
              </div>
              <div className="npbc-lms-parent">
                <div className="main-campus">Google Meet</div>
                <div className="notes-and-all">
                  Every unit has a unique session link shared by the lecturer
                  early before the class starts
                </div>
              </div>
              <div className="npbc-lms-parent">
                <div className="main-campus">Zoom</div>
                <div className="notes-and-all">
                  Every unit has a unique session link shared by the lecturer
                  early before the class starts
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer8">
        <div className="footer9">
          <div className="location-garden-estate-off-th-parent2">
            <div className="location-garden-estate-container4">
              <p className="we-offer-industry-leading-and">
                <span className="location9">Location:</span>
              </p>
              <p className="we-offer-industry-leading-and">
                <span className="garden-estate-off6">{`Garden Estate Off Thika RoadOffice `}</span>
              </p>
              <p className="we-offer-industry-leading-and">
                <span className="location9">Hours:</span>
              </p>
              <p className="we-offer-industry-leading-and">
                <span className="garden-estate-off6">8:00am – 5:00pm</span>
              </p>
              <p className="we-offer-industry-leading-and">
                <span className="location9">Telephone:</span>
              </p>
              <p className="we-offer-industry-leading-and">
                <span className="garden-estate-off6">0754 569 687</span>
              </p>
              <p className="we-offer-industry-leading-and">
                <span className="location9">Email</span>
              </p>
              <p className="we-offer-industry-leading-and">
                <a
                  className="adminnpbccoke13"
                  href="http://npbc.co.ke/#"
                  target="_blank"
                >
                  <span className="adminnpbccoke14">admin@npbc.co.ke</span>
                </a>
              </p>
            </div>
            <div className="npbc-online-reflection-container4">
              <p className="we-offer-industry-leading-and">
                <a
                  className="adminnpbccoke13"
                  href="https://online.npbc.co.ke/"
                  target="_blank"
                >
                  NPBC Online
                </a>
              </p>
              <p className="we-offer-industry-leading-and">
                <a
                  className="adminnpbccoke13"
                  href="https://npbc.co.ke/index.php/category/reflection-blog/"
                  target="_blank"
                >
                  Reflection Blog
                </a>
              </p>
              <p className="we-offer-industry-leading-and">
                <a
                  className="adminnpbccoke13"
                  href="https://npbc.co.ke/#"
                  target="_blank"
                >
                  Community Engagement
                </a>
              </p>
              <p className="news-and-events8">
                <a
                  className="adminnpbccoke13"
                  href="https://npbc.co.ke/#"
                  target="_blank"
                >
                  News and Events
                </a>
              </p>
              <p className="news-and-events8">
                <a
                  className="adminnpbccoke13"
                  href="https://npbc.co.ke/#"
                  target="_blank"
                >
                  Research Projects
                </a>
              </p>
            </div>
            <div className="admissions-student-life-container4">
              <p className="we-offer-industry-leading-and">
                <a
                  className="adminnpbccoke13"
                  href="https://npbc.co.ke/index.php/admissions/"
                  target="_blank"
                >
                  Admissions
                </a>
              </p>
              <p className="we-offer-industry-leading-and">
                <a
                  className="adminnpbccoke13"
                  href="https://npbc.co.ke/index.php/student-life-2/"
                  target="_blank"
                >
                  Student Life
                </a>
              </p>
              <p className="we-offer-industry-leading-and">
                <a
                  className="adminnpbccoke13"
                  href="http://gmail.com/"
                  target="_blank"
                >
                  Staff Mail
                </a>
              </p>
              <p className="we-offer-industry-leading-and">
                <a
                  className="adminnpbccoke13"
                  href="https://online.npbc.co.ke/"
                  target="_blank"
                >
                  NPBC Online
                </a>
              </p>
            </div>
            <div className="history-mission-container4">
              <p className="we-offer-industry-leading-and">
                <a
                  className="adminnpbccoke13"
                  href="https://npbc.co.ke/#"
                  target="_blank"
                >{`History & Mission`}</a>
              </p>
              <p className="we-offer-industry-leading-and">
                <a
                  className="adminnpbccoke13"
                  href="https://npbc.co.ke/index.php/staff-and-faculty/"
                  target="_blank"
                >
                  Staff and Faculty
                </a>
              </p>
              <p className="we-offer-industry-leading-and">
                <a
                  className="adminnpbccoke13"
                  href="https://npbc.co.ke/#"
                  target="_blank"
                >
                  Downloads
                </a>
              </p>
              <p className="news-and-events8">
                <a
                  className="adminnpbccoke13"
                  href="https://npbc.co.ke/#"
                  target="_blank"
                >
                  Community
                </a>
              </p>
              <p className="we-offer-industry-leading-and">
                <a
                  className="adminnpbccoke13"
                  href="https://www.facebook.com/Nairobi-Pentecostal-Bible-College-NPBC-569223493163146/"
                  target="_blank"
                >
                  Social Media
                </a>
              </p>
              <p className="we-offer-industry-leading-and">
                <a
                  className="adminnpbccoke13"
                  href="https://npbc.co.ke/#"
                  target="_blank"
                >
                  Employment
                </a>
              </p>
            </div>
            <b className="npbc8">NPBC</b>
            <b className="quick-links4">QUICK LINKS</b>
            <b className="research4">RESEARCH</b>
            <b className="explore4">Explore</b>
          </div>
        </div>
        <div className="g5a0631-1-scaled-1-parent2">
          <img
            className="g5a0631-1-scaled-1-icon4"
            alt=""
            src="/1g5a06311scaled-1@2x.png"
          />
          <div className="become-a-student-at-npbc-parent2">
            <b className="become-a-student-container4">
              <p className="we-offer-industry-leading-and">{`Become a student at `}</p>
              <p className="we-offer-industry-leading-and">NPBC</p>
            </b>
            <div className="button-primary4">
              <div className="button4">Apply Today</div>
            </div>
          </div>
        </div>
      </div>
      <div className="frame-parent12">
        <div className="frame-parent13">
          <div className="program-name-wrapper">
            <div className="campus-locations">Program Name</div>
          </div>
          <div className="program-name-wrapper">
            <div className="campus-locations">Target Group</div>
          </div>
          <div className="program-name-wrapper">
            <div className="campus-locations"> Credit Hours</div>
          </div>
          <div className="program-name-wrapper">
            <div className="campus-locations">Enrollment Criteria</div>
          </div>
          <div className="program-name-wrapper">
            <div className="campus-locations">Duration</div>
          </div>
          <div className="fees-per-course-wrapper">
            <div className="campus-locations">Fees per course</div>
          </div>
        </div>
        <div className="table-content">
          <div className="frame-parent14">
            <div className="frame-parent15">
              <div className="bachelor-of-arts-in-bible-and-wrapper">
                <div className="bachelor-of-arts">
                  Bachelor of Arts in Bible and Theology
                </div>
              </div>
              <div className="bachelor-of-arts-in-bible-and-wrapper">
                <div className="church-ministers-and">
                  Church Ministers and Administrators
                </div>
              </div>
              <div className="bachelor-of-arts-in-bible-and-wrapper">
                <div className="campus-locations">120</div>
              </div>
              <div className="bachelor-of-arts-in-bible-and-wrapper">
                <div className="church-ministers-and">
                  C+ or Diploma in Bible and Theology
                </div>
              </div>
              <div className="bachelor-of-arts-in-bible-and-wrapper">
                <div className="years">4 years or 2 years after Diploma</div>
              </div>
              <div className="ksh-7500-wrapper">
                <div className="campus-locations">Ksh 7500</div>
              </div>
            </div>
            <div className="frame-child9" />
          </div>
          <div className="frame-parent14">
            <div className="frame-parent15">
              <div className="bachelor-of-arts-in-bible-and-wrapper">
                <div className="bachelor-of-arts">
                  Bachelor of Arts in Christian Education
                </div>
              </div>
              <div className="bachelor-of-arts-in-bible-and-wrapper">
                <div className="church-ministers-and">
                  Trainers and Curriculum workers
                </div>
              </div>
              <div className="bachelor-of-arts-in-bible-and-wrapper">
                <div className="campus-locations">120</div>
              </div>
              <div className="bachelor-of-arts-in-bible-and-wrapper">
                <div className="church-ministers-and">
                  C+ or Diploma in Bible and Theology
                </div>
              </div>
              <div className="bachelor-of-arts-in-bible-and-wrapper">
                <div className="years">4 years or 2 years after Diploma</div>
              </div>
              <div className="ksh-7500-wrapper">
                <div className="campus-locations">Ksh 7500</div>
              </div>
            </div>
            <div className="frame-child9" />
          </div>
          <div className="frame-parent14">
            <div className="frame-parent15">
              <div className="bachelor-of-arts-in-bible-and-wrapper">
                <div className="bachelor-of-arts">
                  Bachelor of Arts in Intercultural Studies
                </div>
              </div>
              <div className="bachelor-of-arts-in-bible-and-wrapper">
                <div className="church-ministers-and">Missionaries</div>
              </div>
              <div className="bachelor-of-arts-in-bible-and-wrapper">
                <div className="campus-locations">120</div>
              </div>
              <div className="bachelor-of-arts-in-bible-and-wrapper">
                <div className="church-ministers-and">
                  C+ or Diploma in Bible and Theology
                </div>
              </div>
              <div className="bachelor-of-arts-in-bible-and-wrapper">
                <div className="years">4 years or 2 years after Diploma</div>
              </div>
              <div className="ksh-7500-wrapper">
                <div className="campus-locations">Ksh 7500</div>
              </div>
            </div>
            <div className="frame-child9" />
          </div>
          <div className="frame-parent14">
            <div className="frame-parent15">
              <div className="bachelor-of-arts-in-bible-and-wrapper">
                <div className="bachelor-of-arts">
                  Diploma in Christian Ministry
                </div>
              </div>
              <div className="bachelor-of-arts-in-bible-and-wrapper">
                <div className="church-ministers-and">
                  Christian Ministers and Workers in the Church and Para Church
                  Orgamisations and Ministries
                </div>
              </div>
              <div className="bachelor-of-arts-in-bible-and-wrapper">
                <div className="campus-locations">240</div>
              </div>
              <div className="bachelor-of-arts-in-bible-and-wrapper">
                <div className="church-ministers-and">
                  KCSE C- (Minus) or KCE division II, KACE one (1) Principal or
                  an equivalent qualification or Certificate of Experiential
                  Learning or KNQF 5
                </div>
              </div>
              <div className="bachelor-of-arts-in-bible-and-wrapper">
                <div className="years">2 years</div>
              </div>
              <div className="ksh-7500-wrapper">
                <div className="campus-locations">Ksh 1500</div>
              </div>
            </div>
            <div className="frame-child9" />
          </div>
          <div className="frame-parent14">
            <div className="frame-parent15">
              <div className="bachelor-of-arts-in-bible-and-wrapper">
                <div className="bachelor-of-arts">
                  Diploma in Bible and Theology
                </div>
              </div>
              <div className="bachelor-of-arts-in-bible-and-wrapper">
                <div className="church-ministers-and">
                  Christian Ministers and Workers in the Church and Para Church
                  Orgamisations and Ministries
                </div>
              </div>
              <div className="bachelor-of-arts-in-bible-and-wrapper">
                <div className="campus-locations">240</div>
              </div>
              <div className="bachelor-of-arts-in-bible-and-wrapper">
                <div className="church-ministers-and">Open</div>
              </div>
              <div className="bachelor-of-arts-in-bible-and-wrapper">
                <div className="years">2 years</div>
              </div>
              <div className="ksh-7500-wrapper">
                <div className="campus-locations">Ksh 2000</div>
              </div>
            </div>
            <div className="frame-child9" />
          </div>
          <div className="frame-parent14">
            <div className="frame-parent15">
              <div className="bachelor-of-arts-in-bible-and-wrapper">
                <div className="bachelor-of-arts">
                  Diploma in Counseling Psychology
                </div>
              </div>
              <div className="bachelor-of-arts-in-bible-and-wrapper">
                <div className="church-ministers-and">
                  Counselors and Care givers
                </div>
              </div>
              <div className="bachelor-of-arts-in-bible-and-wrapper">
                <div className="campus-locations">240</div>
              </div>
              <div className="bachelor-of-arts-in-bible-and-wrapper">
                <div className="church-ministers-and">Open</div>
              </div>
              <div className="bachelor-of-arts-in-bible-and-wrapper">
                <div className="years">2 years</div>
              </div>
              <div className="ksh-7500-wrapper">
                <div className="campus-locations">Ksh 2000</div>
              </div>
            </div>
            <div className="frame-child9" />
          </div>
          <div className="frame-parent14">
            <div className="frame-parent15">
              <div className="bachelor-of-arts-in-bible-and-wrapper">
                <div className="bachelor-of-arts">
                  Certificate in Bible and Theology
                </div>
              </div>
              <div className="bachelor-of-arts-in-bible-and-wrapper">
                <div className="church-ministers-and">
                  Christian Ministers and Workers in the Church and Para Church
                  Orgamisations and Ministries
                </div>
              </div>
              <div className="bachelor-of-arts-in-bible-and-wrapper">
                <div className="campus-locations">120</div>
              </div>
              <div className="bachelor-of-arts-in-bible-and-wrapper">
                <div className="church-ministers-and">Open</div>
              </div>
              <div className="bachelor-of-arts-in-bible-and-wrapper">
                <div className="years">1 year</div>
              </div>
              <div className="ksh-7500-wrapper">
                <div className="campus-locations">Ksh 1100</div>
              </div>
            </div>
            <div className="frame-child9" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesAndPrograms;
