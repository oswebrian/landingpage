import { memo, useMemo } from "react";
import "./Testimony.css";
const Testimony = memo(({ propLeft }) => {
  const testimonyStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div className="testimony" style={testimonyStyle}>
      <div className="quotes-parent">
        <img className="quotes-icon" alt="" src="/quotes.svg" />
        <div className="in-2017-the-nairobi-pentecost-parent">
          <div className="in-2017-the1">
            In 2017, the Nairobi Pentecostal Bible College was officially
            recognized by the commission as a credible institution to train
            graduate students with a Bachelor of Arts in Bible and Theology.
          </div>
          <div className="profile">
            <img
              className="mask-group-icon12"
              alt=""
              src="/mask-group7@2x.png"
            />
            <div className="bishop-james-michael-parent">
              <div className="bishop-james-michael">Bishop James Michael</div>
              <div className="fgck-taita-taveta-parent">
                <div className="fgck-taita-taveta">FGCK Taita Taveta</div>
                <div className="frame-child85" />
                <div className="fgck-taita-taveta">2022</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Testimony;
