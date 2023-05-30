import { memo, useMemo } from "react";
import "./Uploads.css";
const Uploads = memo(({ propPosition, propTop, propLeft }) => {
  const uploadsStyle = useMemo(() => {
    return {
      position: propPosition,
      top: propTop,
      left: propLeft,
    };
  }, [propPosition, propTop, propLeft]);

  return (
    <div className="uploads4" style={uploadsStyle}>
      <div className="uploads-container">
        <b className="uploads5">Uploads</b>
        <div className="group-parent25">
          <div className="instance-parent36">
            <div className="frame-parent256">
              <div className="first-name-parent138">
                <div className="first-name140">National ID/Passport</div>
                <img className="vector-icon302" alt="" src="/vector7.svg" />
              </div>
              <div className="upload-field8">
                <div className="upload-parent6">
                  <img className="upload-icon8" alt="" src="/upload.svg" />
                  <div className="uploads5">Drag and drop here</div>
                </div>
              </div>
            </div>
            <div className="frame-parent257">
              <div className="first-name-parent138">
                <div className="first-name140">
                  High School Certificate/Results
                </div>
                <img className="vector-icon302" alt="" src="/vector7.svg" />
              </div>
              <div className="upload-field8">
                <div className="upload-parent6">
                  <img className="upload-icon8" alt="" src="/upload.svg" />
                  <div className="uploads5">Drag and drop here</div>
                </div>
              </div>
            </div>
            <div className="frame-parent258">
              <div className="first-name-parent138">
                <div className="first-name140">Passport-size photo</div>
                <img className="vector-icon302" alt="" src="/vector7.svg" />
              </div>
              <div className="upload-field8">
                <div className="upload-parent6">
                  <img className="upload-icon8" alt="" src="/upload.svg" />
                  <div className="uploads5">Drag and drop here</div>
                </div>
              </div>
            </div>
            <div className="frame-parent259">
              <div className="first-name-parent138">
                <div className="first-name140">Birth Certificate</div>
                <img className="vector-icon302" alt="" src="/vector7.svg" />
              </div>
              <div className="upload-field8">
                <div className="upload-parent6">
                  <img className="upload-icon8" alt="" src="/upload.svg" />
                  <div className="uploads5">Drag and drop here</div>
                </div>
              </div>
            </div>
          </div>
          <div className="apply-now38">
            <img className="vector-icon306" alt="" src="/vector10.svg" />
            <b className="add-upload-fields2">Add Upload Fields</b>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Uploads;
