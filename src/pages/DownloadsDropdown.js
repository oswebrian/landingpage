import "./DownloadsDropdown.css";
const DownloadsDropdown = () => {
  return (
    <div className="downloads-dropdown">
      <img className="downloads-dropdown-child" alt="" src="/polygon-1.svg" />
      <div className="application-downloads-parent">
        <div className="application-downloads">
          <div className="applications-title">
            <b className="applications">APPLICATIONS</b>
            <div className="applications-title-child" />
          </div>
          <div className="frame-parent28">
            <div className="courses-catalogue-wrapper">
              <b className="applications">Courses Catalogue</b>
            </div>
            <div className="courses-catalogue-wrapper">
              <b className="applications">Admission Forms</b>
            </div>
            <div className="courses-catalogue-wrapper">
              <b className="applications">Academic Calendar</b>
            </div>
          </div>
        </div>
        <div className="frame-child16" />
        <div className="student-downloads">
          <div className="applications-title">
            <b className="applications">STUDENTS</b>
            <div className="applications-title-child" />
          </div>
          <div className="frame-parent28">
            <div className="courses-catalogue-wrapper">
              <b className="applications">Fee Structures</b>
            </div>
            <div className="courses-catalogue-wrapper">
              <b className="applications">Student’s Handbook</b>
            </div>
            <div className="courses-catalogue-wrapper">
              <b className="applications">Graduation List</b>
            </div>
          </div>
        </div>
        <div className="frame-child16" />
        <div className="application-downloads">
          <div className="applications-title">
            <b className="applications">GENERAL</b>
            <div className="applications-title-child" />
          </div>
          <div className="frame-parent28">
            <div className="courses-catalogue-wrapper">
              <b className="applications">School Brochures</b>
            </div>
            <div className="courses-catalogue-wrapper">
              <b className="applications">School Magazines</b>
            </div>
            <div className="courses-catalogue-wrapper">
              <b className="applications">Code of Conduct</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadsDropdown;
