import { useState, useCallback } from "react";
import FrameComponent from "./FrameComponent";
import PortalPopup from "../components/PortalPopup";
import Header from "../components/Header";
import MainNavbar from "../components/MainNavbar";
import FrameComponent17 from "../components/FrameComponent17";
import FrameComponent11 from "../components/FrameComponent11";
import "./ArticleNewsOrEvent.css";
const ArticleNewsOrEvent = () => {
  const [isFrame1Open, setFrame1Open] = useState(false);

  const openFrame1 = useCallback(() => {
    setFrame1Open(true);
  }, []);

  const closeFrame1 = useCallback(() => {
    setFrame1Open(false);
  }, []);

  return (
    <>
      <div className="article-news-or-event">
        <Header biperson="/biperson.svg" />
        <MainNavbar riarrowDropDownLine="/riarrowdropdownline1.svg" />
        <img className="mask-group-icon" alt="" src="/mask-group@2x.png" />
        <div className="article-news-or-event-child" />
        <div className="article-news-or-event-item" />
        <div className="the-nairobi-pentecostal-bible-wrapper">
          <div className="the-nairobi-pentecostal">
            The Nairobi Pentecostal Bible College officially becomes an
            accredited training institution
          </div>
        </div>
        <div className="frame-group">
          <div className="author-dean-of-students-wrapper">
            <div className="author-dean-of">Author: Dean of Students</div>
          </div>
          <div className="line-parent">
            <div className="frame-child3" />
            <div className="date-published-24-march-2023-parent">
              <div className="author-dean-of">
                Date Published: 24 March 2023
              </div>
              <div className="vector-parent">
                <img className="vector-icon" alt="" src="/vector19.svg" />
                <div className="author-dean-of">Share</div>
              </div>
            </div>
          </div>
        </div>
        <div className="i-am-pleased-to-announce-that-parent">
          <div className="i-am-pleased">
            I am pleased to announce that our college has officially received
            accreditation from the regional accrediting agency. This is a
            significant milestone for our institution and a testament to the
            hard work and dedication of our entire community. Accreditation is a
            rigorous and comprehensive evaluation process that ensures that our
            college meets or exceeds the highest standards of academic quality
            and integrity. It is a recognition of our commitment to excellence
            in education and our ongoing efforts to provide our students with
            the best possible learning experience.
          </div>
          <div className="i-am-pleased">
            <p className="the-accreditation-process">
              The accreditation process involves an extensive review of our
              academic programs, faculty qualifications, student services,
              facilities, and more. The review team conducted an on-site visit
              to our campus and conducted interviews with students, faculty,
              staff, and administrators.
            </p>
            <p className="the-accreditation-process">
              After a thorough evaluation of our institution, the review team
              has recommended that our college be accredited for a period of ten
              years. This is the maximum length of accreditation that can be
              awarded, and it is a clear indication of the high quality of
              education that we provide.
            </p>
          </div>
          <div className="i-am-pleased">
            As an accredited college, our students will have access to a wide
            range of benefits, including transfer-ability of credits,
            eligibility for financial aid, and increased employment
            opportunities. This accreditation is also a significant milestone
            for our graduates, as it demonstrates to future employers and
            graduate schools that our degrees are of the highest quality.
          </div>
          <div className="i-am-pleased">
            I want to thank everyone in our community who contributed to this
            achievement. It is a team effort, and it would not have been
            possible without the hard work and dedication of our faculty, staff,
            and students. I am proud of what we have accomplished together and
            look forward to building on this success in the years to come.
          </div>
        </div>
        <div className="vector-group">
          <img className="vector-icon1" alt="" src="/vector20.svg" />
          <div className="search">Search</div>
        </div>
        <FrameComponent17 latestNews="Latest News" />
        <div className="frame-container">
          <div className="campus-events-parent">
            <div className="campus-events">Campus Events</div>
            <div className="upcoming-parent">
              <div className="author-dean-of">Upcoming</div>
              <img className="vector-icon2" alt="" src="/vector21.svg" />
            </div>
            <div className="show-all">Show all</div>
          </div>
          <div className="frame-div">
            <FrameComponent11 />
            <FrameComponent11 />
            <FrameComponent11 />
          </div>
        </div>
        <FrameComponent17 latestNews={`Articles & Blogs`} propTop="1915px" />
        <div className="article-news-or-event-inner">
          <div className="vector-parent">
            <div className="frame-parent2">
              <div className="frame-parent3">
                <div className="our-intake-is-ongoing-parent">
                  <div className="our-intake-is">Our Intake is ongoing</div>
                  <div className="the-february-intake">
                    The February intake is now open
                  </div>
                </div>
                <div className="we-conduct-intakes">{`We conduct intakes twice an year in the months of February and September for all our courses `}</div>
              </div>
              <div className="intake-closes-in-parent">
                <div className="our-intake-is">Intake closes in</div>
                <div className="frame-parent4">
                  <div className="days-parent">
                    <div className="author-dean-of">Days</div>
                    <div className="div">10</div>
                  </div>
                  <div className="days-parent">
                    <div className="author-dean-of">Hours</div>
                    <div className="div">12</div>
                  </div>
                  <div className="days-parent">
                    <div className="author-dean-of">Minutes</div>
                    <div className="div">47</div>
                  </div>
                  <div className="days-parent">
                    <div className="author-dean-of">Seconds</div>
                    <div className="div">22</div>
                  </div>
                </div>
              </div>
              <div className="our-application-process-is-cle-parent">
                <div className="our-application-process">
                  Our application process is clear and simple so you can apply
                  from anywhere.
                </div>
                <div className="apply-now-parent">
                  <div className="apply-now2" onClick={openFrame1}>
                    <img
                      className="icround-log-in-icon2"
                      alt=""
                      src="/icroundlogin6.svg"
                    />
                    <b className="search">Apply Now</b>
                  </div>
                  <div className="view-courses-first">View courses first</div>
                </div>
              </div>
            </div>
            <img
              className="mask-group-icon1"
              alt=""
              src="/mask-group9@2x.png"
            />
          </div>
        </div>
        <div className="footer">
          <div className="footer1">
            <div className="location-garden-estate-off-th-parent">
              <div className="location-garden-estate-container">
                <p className="the-accreditation-process">
                  <span className="location1">Location:</span>
                </p>
                <p className="the-accreditation-process">
                  <span className="garden-estate-off">{`Garden Estate Off Thika RoadOffice `}</span>
                </p>
                <p className="the-accreditation-process">
                  <span className="location1">Hours:</span>
                </p>
                <p className="the-accreditation-process">
                  <span className="garden-estate-off">8:00am – 5:00pm</span>
                </p>
                <p className="the-accreditation-process">
                  <span className="location1">Telephone:</span>
                </p>
                <p className="the-accreditation-process">
                  <span className="garden-estate-off">0754 569 687</span>
                </p>
                <p className="the-accreditation-process">
                  <span className="location1">Email</span>
                </p>
                <p className="the-accreditation-process">
                  <a
                    className="adminnpbccoke1"
                    href="http://npbc.co.ke/#"
                    target="_blank"
                  >
                    <span className="adminnpbccoke2">admin@npbc.co.ke</span>
                  </a>
                </p>
              </div>
              <div className="npbc-online-reflection-container">
                <p className="the-accreditation-process">
                  <a
                    className="adminnpbccoke1"
                    href="https://online.npbc.co.ke/"
                    target="_blank"
                  >
                    NPBC Online
                  </a>
                </p>
                <p className="the-accreditation-process">
                  <a
                    className="adminnpbccoke1"
                    href="https://npbc.co.ke/index.php/category/reflection-blog/"
                    target="_blank"
                  >
                    Reflection Blog
                  </a>
                </p>
                <p className="the-accreditation-process">
                  <a
                    className="adminnpbccoke1"
                    href="https://npbc.co.ke/#"
                    target="_blank"
                  >
                    Community Engagement
                  </a>
                </p>
                <p className="news-and-events">
                  <a
                    className="adminnpbccoke1"
                    href="https://npbc.co.ke/#"
                    target="_blank"
                  >
                    News and Events
                  </a>
                </p>
                <p className="news-and-events">
                  <a
                    className="adminnpbccoke1"
                    href="https://npbc.co.ke/#"
                    target="_blank"
                  >
                    Research Projects
                  </a>
                </p>
              </div>
              <div className="admissions-student-life-container">
                <p className="the-accreditation-process">
                  <a
                    className="adminnpbccoke1"
                    href="https://npbc.co.ke/index.php/admissions/"
                    target="_blank"
                  >
                    Admissions
                  </a>
                </p>
                <p className="the-accreditation-process">
                  <a
                    className="adminnpbccoke1"
                    href="https://npbc.co.ke/index.php/student-life-2/"
                    target="_blank"
                  >
                    Student Life
                  </a>
                </p>
                <p className="the-accreditation-process">
                  <a
                    className="adminnpbccoke1"
                    href="http://gmail.com/"
                    target="_blank"
                  >
                    Staff Mail
                  </a>
                </p>
                <p className="the-accreditation-process">
                  <a
                    className="adminnpbccoke1"
                    href="https://online.npbc.co.ke/"
                    target="_blank"
                  >
                    NPBC Online
                  </a>
                </p>
              </div>
              <div className="history-mission-container">
                <p className="the-accreditation-process">
                  <a
                    className="adminnpbccoke1"
                    href="https://npbc.co.ke/#"
                    target="_blank"
                  >{`History & Mission`}</a>
                </p>
                <p className="the-accreditation-process">
                  <a
                    className="adminnpbccoke1"
                    href="https://npbc.co.ke/index.php/staff-and-faculty/"
                    target="_blank"
                  >
                    Staff and Faculty
                  </a>
                </p>
                <p className="the-accreditation-process">
                  <a
                    className="adminnpbccoke1"
                    href="https://npbc.co.ke/#"
                    target="_blank"
                  >
                    Downloads
                  </a>
                </p>
                <p className="news-and-events">
                  <a
                    className="adminnpbccoke1"
                    href="https://npbc.co.ke/#"
                    target="_blank"
                  >
                    Community
                  </a>
                </p>
                <p className="the-accreditation-process">
                  <a
                    className="adminnpbccoke1"
                    href="https://www.facebook.com/Nairobi-Pentecostal-Bible-College-NPBC-569223493163146/"
                    target="_blank"
                  >
                    Social Media
                  </a>
                </p>
                <p className="the-accreditation-process">
                  <a
                    className="adminnpbccoke1"
                    href="https://npbc.co.ke/#"
                    target="_blank"
                  >
                    Employment
                  </a>
                </p>
              </div>
              <b className="npbc">NPBC</b>
              <b className="quick-links">QUICK LINKS</b>
              <b className="research">RESEARCH</b>
              <b className="explore">Explore</b>
            </div>
          </div>
          <div className="g5a0631-1-scaled-1-parent">
            <img
              className="g5a0631-1-scaled-1-icon"
              alt=""
              src="/1g5a06311scaled-1@2x.png"
            />
            <div className="become-a-student-at-npbc-parent">
              <b className="become-a-student-container">
                <p className="the-accreditation-process">{`Become a student at `}</p>
                <p className="the-accreditation-process">NPBC</p>
              </b>
              <div className="button-primary">
                <div className="button">Apply Today</div>
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
    </>
  );
};

export default ArticleNewsOrEvent;
