import { memo } from "react";
import "./DefaultNews.css";
const DefaultNews = memo(() => {
  return (
    <div className="default-news">
      <div className="news-section1">
        <div className="registrars-office">Latest News</div>
        <div className="news-section-item" />
        <div className="more1">More</div>
      </div>
      <div className="frame-parent224">
        <div className="mask-group-parent2">
          <img className="mask-group-icon7" alt="" src="/mask-group3@2x.png" />
          <div className="from-to-date-parent">
            <div className="from-to-date4">
              <div className="registrars-office">Registrar’s Office</div>
              <div className="from-to-date-child5" />
              <div className="to-all">To all</div>
              <div className="from-to-date-child6" />
              <div className="registrars-office">3 Days ago</div>
            </div>
            <div className="the-nairobi-pentecostal1">
              The Nairobi Pentecostal Bible College officially becomes an
              accredited training institution
            </div>
          </div>
        </div>
        <div className="frame-parent225">
          <div className="mask-group-parent3">
            <img
              className="mask-group-icon8"
              alt=""
              src="/mask-group2@2x.png"
            />
            <div className="news-info">
              <div className="from-to-date4">
                <div className="registrars-office">Dean of Students</div>
                <div className="from-to-date-child5" />
                <div className="to-all">To students</div>
                <div className="from-to-date-child6" />
                <div className="registrars-office">15 Mar 2023</div>
              </div>
              <div className="student-portals-have4">
                Student portals have been activated. You can now login and set
                up your profile
              </div>
            </div>
          </div>
          <div className="mask-group-parent2">
            <img className="mask-group-icon8" alt="" />
            <div className="from-to-date-parent">
              <div className="from-to-date6">
                <div className="registrars-office">Registrar’s Office</div>
                <div className="from-to-date-child5" />
                <div className="to-all">To staff</div>
                <div className="from-to-date-child6" />
                <div className="registrars-office">24 Jan 2023</div>
              </div>
              <div className="npbc-launches-the">
                NPBC launches the new 5 floor building for active use as lecture
                hall and offices
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default DefaultNews;
