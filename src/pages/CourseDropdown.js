import "./CourseDropdown.css";
const CourseDropdown = () => {
  return (
    <div className="course-dropdown">
      <img className="course-dropdown-child" alt="" src="/polygon-1.svg" />
      <div className="history-group">
        <div className="diploma-programs-wrapper">
          <b className="undergraduate-programs">Undergraduate Programs</b>
        </div>
        <div className="diploma-programs-wrapper">
          <b className="undergraduate-programs">Diploma Programs</b>
        </div>
        <div className="certificate-programs-wrapper">
          <b className="undergraduate-programs">Certificate Programs</b>
        </div>
        <div className="diploma-programs-wrapper">
          <b className="undergraduate-programs">Study Modes</b>
        </div>
      </div>
    </div>
  );
};

export default CourseDropdown;
