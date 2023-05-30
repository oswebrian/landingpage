import { useState, useCallback } from "react";
import FrameComponent5 from "../components/FrameComponent5";
import PortalPopup from "../components/PortalPopup";
import "./AdmissionDropdown.css";
const AdmissionDropdown = () => {
  const [isFrameOpen, setFrameOpen] = useState(false);

  const openFrame = useCallback(() => {
    setFrameOpen(true);
  }, []);

  const closeFrame = useCallback(() => {
    setFrameOpen(false);
  }, []);

  return (
    <>
      <div className="admission-dropdown">
        <img className="admission-dropdown-child" alt="" src="/polygon-1.svg" />
        <div className="history-parent">
          <div className="history">
            <b className="how-to-apply">How to Apply</b>
          </div>
          <div className="history">
            <b className="how-to-apply">Course Qualification</b>
          </div>
          <div className="our-intakes-wrapper">
            <b className="how-to-apply">Our Intakes</b>
          </div>
          <div className="history">
            <b className="how-to-apply">Application FAQs</b>
          </div>
          <div className="resume-application-wrapper" onClick={openFrame}>
            <b className="how-to-apply">Resume Application</b>
          </div>
        </div>
      </div>
      {isFrameOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFrame}
        >
          <FrameComponent5 onClose={closeFrame} />
        </PortalPopup>
      )}
    </>
  );
};

export default AdmissionDropdown;
