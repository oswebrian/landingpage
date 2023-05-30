import { memo, useMemo } from "react";
import "./Profile.css";
const Profile = memo(
  ({ propLeft, propTop, propDisplay, propDisplay1, propDisplay2 }) => {
    const profileStyle = useMemo(() => {
      return {
        left: propLeft,
        top: propTop,
      };
    }, [propLeft, propTop]);

    const vectorIconStyle = useMemo(() => {
      return {
        display: propDisplay,
      };
    }, [propDisplay]);

    const vectorIcon1Style = useMemo(() => {
      return {
        display: propDisplay1,
      };
    }, [propDisplay1]);

    const vectorIcon2Style = useMemo(() => {
      return {
        display: propDisplay2,
      };
    }, [propDisplay2]);

    return (
      <div className="profile1" style={profileStyle}>
        <div className="profile-photo-parent">
          <div className="profile-photo">
            <img
              className="npbc-leader-2-removebg-preview-icon"
              alt=""
              src="/npbc-leader-2removebgpreview-1@2x.png"
            />
          </div>
          <div className="persons-info">
            <div className="about-me">
              <div className="name-education">
                <div className="dr-grace-mwalimu">Dr. Grace Mwalimu</div>
                <div className="serving-patron">Serving Patron</div>
                <div className="badiplomacy-foreign">{`B.A.Diplomacy & Foreign Affairs`}</div>
              </div>
              <div className="dr-grace-is">
                Dr. Grace is a graduate of NPBC and has been a lecturer for 15
                years training Bible scholars in matters of theology.
              </div>
            </div>
            <div className="social-media15">
              <div className="vector-parent39">
                <img
                  className="vector-icon264"
                  alt=""
                  src="/vector32.svg"
                  style={vectorIconStyle}
                />
                <img
                  className="vector-icon265"
                  alt=""
                  src="/vector33.svg"
                  style={vectorIcon1Style}
                />
                <img className="vector-icon264" alt="" src="/vector34.svg" />
                <img
                  className="vector-icon264"
                  alt=""
                  src="/vector35.svg"
                  style={vectorIcon2Style}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default Profile;
