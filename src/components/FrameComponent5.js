import { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./FrameComponent5.css";
const FrameComponent5 = memo(({ onClose }) => {
  const navigate = useNavigate();

  const onFrameContainer5Click = useCallback(() => {
    navigate("/frame-181");
  }, [navigate]);

  return (
    <div className="rectangle-frame">
      <div className="frame-child34" />
      <div className="frame-child35" />
      <div className="frame-child36" />
      <b className="your-progress-is1">Your progress is safe</b>
      <div className="instance-parent12" onClick={onFrameContainer5Click}>
        <div className="frame-parent111">
          <div className="learning-mode-container">
            <div className="first-name55">First Name</div>
            <img className="vector-icon115" alt="" src="/vector7.svg" />
          </div>
          <div className="instance-child49" />
        </div>
        <div className="frame-parent111">
          <div className="learning-mode-container">
            <div className="first-name55">Second Name</div>
            <img className="vector-icon115" alt="" src="/vector7.svg" />
          </div>
          <div className="instance-child49" />
        </div>
      </div>
      <div className="next-of-kin4">
        <div className="next-of-kin-container">
          <b className="next-of-kin5">Next of Kin</b>
          <div className="instance-parent13">
            <div className="frame-parent113">
              <div className="learning-mode-container">
                <div className="first-name55">First Name</div>
                <img className="vector-icon115" alt="" src="/vector7.svg" />
              </div>
              <div className="instance-child49" />
            </div>
            <div className="frame-parent114">
              <div className="learning-mode-container">
                <div className="first-name55">Phone Number</div>
                <img className="vector-icon115" alt="" src="/vector7.svg" />
              </div>
              <div className="instance-child49" />
            </div>
            <div className="frame-parent115">
              <div className="learning-mode-container">
                <div className="first-name55">Nationality</div>
                <img className="vector-icon115" alt="" src="/vector7.svg" />
              </div>
              <div className="instance-child49" />
            </div>
            <div className="frame-parent116">
              <div className="learning-mode-container">
                <div className="first-name55">{`Second Name & Surname`}</div>
                <img className="vector-icon115" alt="" src="/vector7.svg" />
              </div>
              <div className="instance-child49" />
            </div>
            <div className="frame-parent117">
              <div className="learning-mode-container">
                <div className="first-name55">Email</div>
                <img className="vector-icon115" alt="" src="/vector7.svg" />
              </div>
              <div className="instance-child49" />
            </div>
            <div className="frame-parent118">
              <div className="learning-mode-container">
                <div className="first-name55">County/Region</div>
                <img className="vector-icon115" alt="" src="/vector7.svg" />
              </div>
              <div className="instance-child49" />
            </div>
            <div className="frame-parent119">
              <div className="learning-mode-container">
                <div className="first-name55">National ID/Passport</div>
                <img className="vector-icon115" alt="" src="/vector7.svg" />
              </div>
              <div className="instance-child49" />
            </div>
            <div className="frame-parent120">
              <div className="learning-mode-container">
                <div className="first-name55">Town</div>
                <img className="vector-icon115" alt="" src="/vector7.svg" />
              </div>
              <div className="instance-child49" />
            </div>
            <div className="frame-parent121">
              <div className="learning-mode-container">
                <div className="first-name55">Relationship</div>
                <img className="vector-icon115" alt="" src="/vector7.svg" />
              </div>
              <div className="instance-child49" />
            </div>
          </div>
        </div>
      </div>
      <div className="educational-background4">
        <div className="next-of-kin-container">
          <b className="next-of-kin5">Educational Background</b>
          <div className="frame-parent122">
            <div className="instance-parent14">
              <div className="frame-parent111">
                <div className="learning-mode-container">
                  <div className="first-name55">High School Name</div>
                  <img className="vector-icon115" alt="" src="/vector7.svg" />
                </div>
                <div className="instance-child49" />
              </div>
              <div className="frame-parent111">
                <div className="learning-mode-container">
                  <div className="first-name55">From - Until(years)</div>
                  <img className="vector-icon115" alt="" src="/vector7.svg" />
                </div>
                <div className="instance-child49" />
              </div>
              <div className="frame-parent111">
                <div className="learning-mode-container">
                  <div className="first-name55">Qualification</div>
                  <img className="vector-icon115" alt="" src="/vector7.svg" />
                </div>
                <div className="instance-child49" />
              </div>
            </div>
            <div className="apply-now20">
              <img className="vector-icon129" alt="" src="/vector9.svg" />
              <b className="get-started6">Add Post-secondary level</b>
            </div>
          </div>
        </div>
      </div>
      <div className="program4">
        <div className="next-of-kin-container">
          <b className="next-of-kin5">Program</b>
          <div className="frame-parent126">
            <div className="frame-parent127">
              <div className="learning-mode-container">
                <div className="learning-mode2">Learning Mode</div>
                <img className="vector-icon115" alt="" src="/vector7.svg" />
              </div>
              <div className="frame-parent128">
                <div className="vector-parent22">
                  <img className="vector-icon129" alt="" src="/vector54.svg" />
                  <div className="learning-mode-container">
                    <div className="learning-mode2">Regular</div>
                    <img className="vector-icon115" alt="" src="/vector7.svg" />
                  </div>
                </div>
                <div className="vector-parent22">
                  <img className="vector-icon129" alt="" src="/vector61.svg" />
                  <div className="learning-mode-container">
                    <div className="learning-mode2">Virtual</div>
                    <img className="vector-icon115" alt="" src="/vector7.svg" />
                  </div>
                </div>
              </div>
            </div>
            <div className="vector-parent24">
              <img className="vector-icon135" alt="" src="/vector71.svg" />
              <div className="frame-parent129">
                <div className="learning-mode-container">
                  <div className="first-name55">Start From</div>
                  <img className="vector-icon115" alt="" src="/vector7.svg" />
                </div>
                <div className="instance-child49" />
              </div>
            </div>
            <div className="instance-parent15">
              <div className="frame-parent129">
                <div className="learning-mode-container">
                  <div className="first-name55">Program Level</div>
                  <img className="vector-icon115" alt="" src="/vector7.svg" />
                </div>
                <div className="instance-child49" />
              </div>
              <img className="vector-icon138" alt="" src="/vector8.svg" />
              <div className="diploma5">Diploma</div>
            </div>
            <div className="instance-parent16">
              <div className="frame-parent129">
                <div className="learning-mode-container">
                  <div className="first-name55">Course</div>
                  <img className="vector-icon115" alt="" src="/vector7.svg" />
                </div>
                <div className="instance-child49" />
              </div>
              <img className="vector-icon138" alt="" src="/vector8.svg" />
              <div className="diploma5">Diploma in Bible Theology</div>
            </div>
            <div className="instance-parent17">
              <div className="frame-parent129">
                <div className="learning-mode-container">
                  <div className="first-name55">Learning Center</div>
                  <img className="vector-icon115" alt="" src="/vector7.svg" />
                </div>
                <div className="instance-child49" />
              </div>
              <img className="vector-icon138" alt="" src="/vector8.svg" />
              <div className="diploma5">Select</div>
            </div>
          </div>
        </div>
      </div>
      <div className="occupation4">
        <div className="next-of-kin-container">
          <b className="next-of-kin5">Occupation</b>
          <div className="instance-parent14">
            <div className="instance-parent18">
              <div className="frame-parent129">
                <div className="learning-mode-container">
                  <div className="first-name55">Occupation Type</div>
                  <img className="vector-icon115" alt="" src="/vector7.svg" />
                </div>
                <div className="instance-child49" />
              </div>
              <img className="vector-icon138" alt="" src="/vector8.svg" />
              <div className="diploma5">Diploma</div>
            </div>
            <div className="frame-parent111">
              <div className="learning-mode-container">
                <div className="first-name55">Company/Institution</div>
                <img className="vector-icon115" alt="" src="/vector7.svg" />
              </div>
              <div className="instance-child49" />
            </div>
            <div className="frame-parent111">
              <div className="learning-mode-container">
                <div className="first-name55">Role/Course</div>
                <img className="vector-icon115" alt="" src="/vector7.svg" />
              </div>
              <div className="instance-child49" />
            </div>
          </div>
        </div>
      </div>
      <div className="uploads2">
        <div className="next-of-kin-container">
          <b className="next-of-kin5">Uploads</b>
          <div className="frame-parent122">
            <div className="instance-parent19">
              <div className="frame-parent129">
                <div className="learning-mode-container">
                  <div className="learning-mode2">National ID/Passport</div>
                  <img className="vector-icon115" alt="" src="/vector7.svg" />
                </div>
                <div className="upload-field4">
                  <div className="upload-parent2">
                    <img className="upload-icon4" alt="" src="/upload.svg" />
                    <div className="next-of-kin5">Drag and drop here</div>
                  </div>
                </div>
              </div>
              <div className="frame-parent137">
                <div className="learning-mode-container">
                  <div className="learning-mode2">
                    High School Certificate/Results
                  </div>
                  <img className="vector-icon115" alt="" src="/vector7.svg" />
                </div>
                <div className="upload-field4">
                  <div className="upload-parent2">
                    <img className="upload-icon4" alt="" src="/upload.svg" />
                    <div className="next-of-kin5">Drag and drop here</div>
                  </div>
                </div>
              </div>
              <div className="frame-parent138">
                <div className="learning-mode-container">
                  <div className="learning-mode2">Passport-size photo</div>
                  <img className="vector-icon115" alt="" src="/vector7.svg" />
                </div>
                <div className="upload-field4">
                  <div className="upload-parent2">
                    <img className="upload-icon4" alt="" src="/upload.svg" />
                    <div className="next-of-kin5">Drag and drop here</div>
                  </div>
                </div>
              </div>
              <div className="frame-parent139">
                <div className="learning-mode-container">
                  <div className="learning-mode2">Birth Certificate</div>
                  <img className="vector-icon115" alt="" src="/vector7.svg" />
                </div>
                <div className="upload-field4">
                  <div className="upload-parent2">
                    <img className="upload-icon4" alt="" src="/upload.svg" />
                    <div className="next-of-kin5">Drag and drop here</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="apply-now20">
              <img className="vector-icon129" alt="" src="/vector10.svg" />
              <b className="get-started6">Add Upload Fields</b>
            </div>
          </div>
        </div>
      </div>
      <b className="pick-up-from1">
        Pick up from where you left. Enter the names you saved your progress by
        to retrieve your progress.
      </b>
    </div>
  );
});

export default FrameComponent5;
