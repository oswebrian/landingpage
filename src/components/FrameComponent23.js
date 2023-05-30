import { memo, useMemo } from "react";
import "./FrameComponent23.css";
const FrameComponent23 = memo(
  ({ programPamphlets, description, downloadsItemRowTop }) => {
    const frameDiv11Style = useMemo(() => {
      return {
        top: downloadsItemRowTop,
      };
    }, [downloadsItemRowTop]);

    return (
      <div className="table-title-parent" style={frameDiv11Style}>
        <div className="table-title">
          <div className="mbs">{programPamphlets}</div>
        </div>
        <div className="table-head">
          <div className="item-wrapper">
            <div className="item">Item</div>
          </div>
          <div className="description-wrapper">
            <div className="item">{description}</div>
          </div>
          <div className="size-wrapper">
            <div className="item">Size</div>
          </div>
          <div className="actions-wrapper">
            <div className="item">Actions</div>
          </div>
        </div>
        <div className="table-content1">
          <div className="downloads-item-row">
            <div className="all-programs-pamphlet-wrapper">
              <div className="all-programs-pamphlet">All Programs Pamphlet</div>
            </div>
            <div className="this-contains-all-information-wrapper">
              <div className="all-programs-pamphlet">
                This contains all information about
              </div>
            </div>
            <div className="mbs-wrapper">
              <div className="mbs">1.5Mbs</div>
            </div>
            <div className="open-in-browser-parent">
              <div className="mbs">Open in browser</div>
              <img className="vector-icon275" alt="" src="/vector45.svg" />
            </div>
          </div>
          <div className="downloads-item-row">
            <div className="all-programs-pamphlet-wrapper">
              <div className="all-programs-pamphlet">
                BA in Bible and Theology
              </div>
            </div>
            <div className="this-contains-all-information-wrapper">
              <div className="all-programs-pamphlet">
                This contains all information about
              </div>
            </div>
            <div className="mbs-container">
              <div className="mbs">345Kb</div>
            </div>
            <div className="open-in-browser-parent">
              <div className="mbs">Open in browser</div>
              <img className="vector-icon275" alt="" src="/vector45.svg" />
            </div>
          </div>
          <div className="downloads-item-row">
            <div className="all-programs-pamphlet-wrapper">
              <div className="all-programs-pamphlet">
                BA in Christian Education
              </div>
            </div>
            <div className="this-contains-all-information-wrapper">
              <div className="all-programs-pamphlet">
                This contains all information about
              </div>
            </div>
            <div className="mbs-container">
              <div className="mbs">274Kb</div>
            </div>
            <div className="open-in-browser-parent">
              <div className="mbs">Open in browser</div>
              <img className="vector-icon275" alt="" src="/vector45.svg" />
            </div>
          </div>
          <div className="downloads-item-row">
            <div className="all-programs-pamphlet-wrapper">
              <div className="all-programs-pamphlet">
                BA in Intercultural Studies
              </div>
            </div>
            <div className="this-contains-all-information-wrapper">
              <div className="all-programs-pamphlet">
                This contains all information about
              </div>
            </div>
            <div className="mbs-container">
              <div className="mbs">433Kb</div>
            </div>
            <div className="open-in-browser-parent">
              <div className="mbs">Open in browser</div>
              <img className="vector-icon275" alt="" src="/vector45.svg" />
            </div>
          </div>
          <div className="downloads-item-row">
            <div className="all-programs-pamphlet-wrapper">
              <div className="all-programs-pamphlet">
                Diploma in Christian Ministry
              </div>
            </div>
            <div className="this-contains-all-information-wrapper">
              <div className="all-programs-pamphlet">
                This contains all information about
              </div>
            </div>
            <div className="mbs-container">
              <div className="mbs">401Kb</div>
            </div>
            <div className="open-in-browser-parent">
              <div className="mbs">Open in browser</div>
              <img className="vector-icon275" alt="" src="/vector45.svg" />
            </div>
          </div>
          <div className="downloads-item-row">
            <div className="all-programs-pamphlet-wrapper">
              <div className="all-programs-pamphlet">
                Diploma in Bible and Theology
              </div>
            </div>
            <div className="this-contains-all-information-wrapper">
              <div className="all-programs-pamphlet">
                This contains all information about
              </div>
            </div>
            <div className="mbs-container">
              <div className="mbs">298Kb</div>
            </div>
            <div className="open-in-browser-parent">
              <div className="mbs">Open in browser</div>
              <img className="vector-icon275" alt="" src="/vector45.svg" />
            </div>
          </div>
          <div className="downloads-item-row">
            <div className="all-programs-pamphlet-wrapper">
              <div className="all-programs-pamphlet">
                <p className="psychology">{`Diploma in Counseling `}</p>
                <p className="psychology">Psychology</p>
              </div>
            </div>
            <div className="this-contains-all-information-wrapper">
              <div className="all-programs-pamphlet">
                This contains all information about
              </div>
            </div>
            <div className="mbs-container">
              <div className="mbs">314Kb</div>
            </div>
            <div className="open-in-browser-parent">
              <div className="mbs">Open in browser</div>
              <img className="vector-icon275" alt="" src="/vector45.svg" />
            </div>
          </div>
          <div className="downloads-item-row">
            <div className="all-programs-pamphlet-wrapper">
              <div className="all-programs-pamphlet">
                <p className="psychology">Certificate in Bible and</p>
                <p className="psychology">Theology</p>
              </div>
            </div>
            <div className="this-contains-all-information-wrapper">
              <div className="all-programs-pamphlet">
                This contains all information about
              </div>
            </div>
            <div className="mbs-container">
              <div className="mbs">235Kb</div>
            </div>
            <div className="open-in-browser-parent">
              <div className="mbs">Open in browser</div>
              <img className="vector-icon275" alt="" src="/vector45.svg" />
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default FrameComponent23;
