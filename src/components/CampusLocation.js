import { memo, useMemo } from "react";
import "./CampusLocation.css";
const CampusLocation = memo(
  ({
    visitCampusToApply,
    gardenEstateOffThikaRoadO,
    viewLocations,
    vector,
    callForDirections,
    propTop,
  }) => {
    const campusLocationStyle = useMemo(() => {
      return {
        top: propTop,
      };
    }, [propTop]);

    return (
      <div className="campus-location2" style={campusLocationStyle}>
        <div className="campus2">
          <div className="visit-campus-to">{visitCampusToApply}</div>
          <div className="garden-estate-off10">{gardenEstateOffThikaRoadO}</div>
        </div>
        <div className="view-locations-parent">
          <div className="visit-campus-to">{viewLocations}</div>
          <div className="view-location4">
            <img className="vector-icon268" alt="" src={vector} />
            <div className="visit-campus-to">{callForDirections}</div>
          </div>
        </div>
      </div>
    );
  }
);

export default CampusLocation;
