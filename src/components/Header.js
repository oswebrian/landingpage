import { memo, useState, useCallback } from "react";
import FrameComponent from "../pages/FrameComponent";
import PortalPopup from "./PortalPopup";
import "./Header.css";
const Header = memo(({ biperson }) => {
  const [isFrameOpen, setFrameOpen] = useState(false);

  const openFrame = useCallback(() => {
    setFrameOpen(true);
  }, []);

  const closeFrame = useCallback(() => {
    setFrameOpen(false);
  }, []);

  return (
    <>
      <div className="component-1">
        <div className="component-1-child" />
        <img className="npbc2-1-1-icon" alt="" src="/npbc21-1@2x.png" />
        <img
          className="asset-2npbc-logo-1"
          alt=""
          src="/asset-2npbc-logo-1@2x.png"
        />
        <img
          className="screenshot-2023-02-28-at-2221-icon1"
          alt=""
          src="/screenshot-20230228-at-2221-1@2x.png"
        />
        <b className="nairobi-pentecostal-bible2">{`Nairobi Pentecostal Bible College `}</b>
        <div className="frame-parent217">
          <div className="material-symbolscall-outline-parent">
            <img
              className="material-symbolscall-outline-icon"
              alt=""
              src="/materialsymbolscalloutlinerounded.svg"
            />
            <div className="div47">+254 754 569687</div>
          </div>
          <div className="biperson-parent">
            <img className="biperson-icon" alt="" src={biperson} />
            <div className="access-portals">Access Portals</div>
          </div>
          <div className="apply-now34" onClick={openFrame}>
            <img
              className="icround-log-in-icon22"
              alt=""
              src="/icroundlogin6.svg"
            />
            <b className="access-portals">Apply Now</b>
          </div>
        </div>
      </div>
      {isFrameOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFrame}
        >
          <FrameComponent onClose={closeFrame} />
        </PortalPopup>
      )}
    </>
  );
});

export default Header;
