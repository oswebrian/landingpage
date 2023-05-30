import { memo } from "react";
import FrameComponent22 from "./FrameComponent22";
import "./DefaultNews1.css";
const DefaultNews1 = memo(() => {
  return (
    <div className="default-news1">
      <div className="news-section2">
        <div className="campus-events1">Campus Events</div>
        <div className="news-section-inner" />
        <div className="more2">More</div>
      </div>
      <div className="frame-parent226">
        <div className="mask-group-parent6">
          <img className="mask-group-icon11" alt="" src="/mask-group3@2x.png" />
          <div className="from-to-date-container">
            <div className="from-to-date8">
              <div className="registrars-office2">Registrar’s Office</div>
              <div className="from-to-date-child13" />
              <div className="campus-events1">For all</div>
              <div className="from-to-date-child14" />
              <div className="campus-events1">27 Mar 2023</div>
            </div>
            <div className="the-nairobi-pentecostal2">
              The Nairobi Pentecostal Bible College officially becomes an
              accredited training institution
            </div>
          </div>
          <div className="upcoming-container">
            <div className="campus-events1">Upcoming</div>
          </div>
        </div>
        <div className="frame-parent227">
          <FrameComponent22
            maskGroup="/mask-group4@2x.png"
            deanOfStudents="Dean of Students"
            toStudents="For students"
            mar2023="4 Apr 2023"
            studentPortalsHaveBeenAct="Student portals have been activated. You can now login and set up your profile"
            upcoming="Upcoming"
          />
          <FrameComponent22
            maskGroup="/mask-group5@2x.png"
            deanOfStudents="Registrar’s Office"
            toStudents="For staff"
            mar2023="10 Mar 2023"
            studentPortalsHaveBeenAct="NPBC launches the new 5 floor building for active use as lecture hall and offices"
            upcoming="Passed"
            propHeight="unset"
            propFlex="unset"
            propWidth="unset"
            propAlignSelf="unset"
            propWidth1="536px"
            propAlignSelf1="unset"
            propWidth2="536px"
            propColor="#7d7c7c"
          />
        </div>
      </div>
    </div>
  );
});

export default DefaultNews1;
