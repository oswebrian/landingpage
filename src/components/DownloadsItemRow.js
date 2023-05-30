import { memo } from "react";
import "./DownloadsItemRow.css";
const DownloadsItemRow = memo(({ certificateInBibleAnd, theology }) => {
  return (
    <div className="downloads-item-row8">
      <div className="all-programs-pamphlet-wrapper6">
        <div className="all-programs-pamphlet-container3">
          <p className="certificate-in-bible2">{certificateInBibleAnd}</p>
          <p className="certificate-in-bible2">{theology}</p>
        </div>
      </div>
      <div className="this-contains-all-information-wrapper6">
        <div className="all-programs-pamphlet-container3">
          This contains all information about
        </div>
      </div>
      <div className="mbs-wrapper6">
        <div className="mbs8">1.5Mbs</div>
      </div>
      <div className="open-in-browser-parent6">
        <div className="mbs8">Open in browser</div>
        <img className="vector-icon283" alt="" src="/vector45.svg" />
      </div>
    </div>
  );
});

export default DownloadsItemRow;
