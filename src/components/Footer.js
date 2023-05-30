import { memo, useMemo } from "react";
import "./Footer.css";
const Footer = memo(({ propTop }) => {
  const footerStyle = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div className="footer14" style={footerStyle}>
      <div className="location-garden-estate-off-th-parent5">
        <div className="location-garden-estate-container7">
          <p className="location14">
            <span className="location15">Location:</span>
          </p>
          <p className="location14">
            <span className="garden-estate-off11">{`Garden Estate Off Thika RoadOffice `}</span>
          </p>
          <p className="location14">
            <span className="location15">Hours:</span>
          </p>
          <p className="location14">
            <span className="garden-estate-off11">8:00am – 5:00pm</span>
          </p>
          <p className="location14">
            <span className="location15">Telephone:</span>
          </p>
          <p className="location14">
            <span className="garden-estate-off11">0754 569 687</span>
          </p>
          <p className="location14">
            <span className="location15">Email</span>
          </p>
          <p className="location14">
            <a
              className="adminnpbccoke23"
              href="http://npbc.co.ke/#"
              target="_blank"
            >
              <span className="adminnpbccoke24">admin@npbc.co.ke</span>
            </a>
          </p>
        </div>
        <div className="npbc-online-reflection-container7">
          <p className="location14">
            <a
              className="adminnpbccoke23"
              href="https://online.npbc.co.ke/"
              target="_blank"
            >
              NPBC Online
            </a>
          </p>
          <p className="location14">
            <a
              className="adminnpbccoke23"
              href="https://npbc.co.ke/index.php/category/reflection-blog/"
              target="_blank"
            >
              Reflection Blog
            </a>
          </p>
          <p className="location14">
            <a
              className="adminnpbccoke23"
              href="https://npbc.co.ke/#"
              target="_blank"
            >
              Community Engagement
            </a>
          </p>
          <p className="news-and-events14">
            <a
              className="adminnpbccoke23"
              href="https://npbc.co.ke/#"
              target="_blank"
            >
              News and Events
            </a>
          </p>
          <p className="news-and-events14">
            <a
              className="adminnpbccoke23"
              href="https://npbc.co.ke/#"
              target="_blank"
            >
              Research Projects
            </a>
          </p>
        </div>
        <div className="admissions-student-life-container7">
          <p className="location14">
            <a
              className="adminnpbccoke23"
              href="https://npbc.co.ke/index.php/admissions/"
              target="_blank"
            >
              Admissions
            </a>
          </p>
          <p className="location14">
            <a
              className="adminnpbccoke23"
              href="https://npbc.co.ke/index.php/student-life-2/"
              target="_blank"
            >
              Student Life
            </a>
          </p>
          <p className="location14">
            <a
              className="adminnpbccoke23"
              href="http://gmail.com/"
              target="_blank"
            >
              Staff Mail
            </a>
          </p>
          <p className="location14">
            <a
              className="adminnpbccoke23"
              href="https://online.npbc.co.ke/"
              target="_blank"
            >
              NPBC Online
            </a>
          </p>
        </div>
        <div className="history-mission-container7">
          <p className="location14">
            <a
              className="adminnpbccoke23"
              href="https://npbc.co.ke/#"
              target="_blank"
            >{`History & Mission`}</a>
          </p>
          <p className="location14">
            <a
              className="adminnpbccoke23"
              href="https://npbc.co.ke/index.php/staff-and-faculty/"
              target="_blank"
            >
              Staff and Faculty
            </a>
          </p>
          <p className="location14">
            <a
              className="adminnpbccoke23"
              href="https://npbc.co.ke/#"
              target="_blank"
            >
              Downloads
            </a>
          </p>
          <p className="news-and-events14">
            <a
              className="adminnpbccoke23"
              href="https://npbc.co.ke/#"
              target="_blank"
            >
              Community
            </a>
          </p>
          <p className="location14">
            <a
              className="adminnpbccoke23"
              href="https://www.facebook.com/Nairobi-Pentecostal-Bible-College-NPBC-569223493163146/"
              target="_blank"
            >
              Social Media
            </a>
          </p>
          <p className="location14">
            <a
              className="adminnpbccoke23"
              href="https://npbc.co.ke/#"
              target="_blank"
            >
              Employment
            </a>
          </p>
        </div>
        <b className="npbc19">NPBC</b>
        <b className="quick-links7">QUICK LINKS</b>
        <b className="research7">RESEARCH</b>
        <b className="explore7">Explore</b>
      </div>
    </div>
  );
});

export default Footer;
