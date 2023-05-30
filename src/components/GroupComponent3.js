import { memo } from "react";
import "./GroupComponent3.css";
const GroupComponent3 = memo(() => {
  return (
    <div className="affordable-parent">
      <div className="affordable1">Affordable</div>
      <div className="accessible">Accessible</div>
      <div className="accredited1">Accredited</div>
      <div className="relevant-to-ministry-container">
        <p className="relevant">{`Relevant `}</p>
        <p className="relevant">to Ministry</p>
      </div>
      <img className="group-child26" alt="" src="/group-12.svg" />
      <img className="group-child27" alt="" src="/group-13.svg" />
      <img className="group-child28" alt="" src="/group-14.svg" />
      <img className="group-child29" alt="" src="/group-15.svg" />
    </div>
  );
});

export default GroupComponent3;
