import "./AboutUsDropdown.css";
const AboutUsDropdown = () => {
  return (
    <div className="about-us-dropdown">
      <img className="about-us-dropdown-child" alt="" src="/polygon-1.svg" />
      <div className="history-container">
        <div className="news-and-articles-wrapper">
          <b className="our-history">Our History</b>
        </div>
        <div className="news-and-articles-wrapper">
          <b className="our-history">News and Articles</b>
        </div>
        <div className="mission-vision-and-core-value-wrapper">
          <b className="our-history">Mission, Vision and Core values</b>
        </div>
        <div className="news-and-articles-wrapper">
          <b className="our-history">Strategic Goals</b>
        </div>
        <div className="news-and-articles-wrapper">
          <b className="our-history">NPBC Leadership</b>
        </div>
        <div className="news-and-articles-wrapper">
          <b className="our-history">Partners</b>
        </div>
      </div>
    </div>
  );
};

export default AboutUsDropdown;
