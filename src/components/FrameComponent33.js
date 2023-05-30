import { memo } from "react";
import GroupComponent1 from "./GroupComponent1";
import GroupComponent2 from "./GroupComponent2";
import "./FrameComponent33.css";
const FrameComponent33 = memo(() => {
  return (
    <div className="frame-parent251">
      <div className="group-parent20">
        <GroupComponent1
          april15th1980="April 15th 1980"
          chartering="Chartering"
        />
        <GroupComponent1 april15th1980="Jan 2nd 1945" chartering="1st Branch" />
      </div>
      <div className="frame-child87" />
      <div className="group-parent21">
        <GroupComponent2 founding="Founding" nov16th1969="Nov 16th 1969" />
        <GroupComponent2
          founding="Accreditation"
          nov16th1969="June 28th 1995"
        />
        <GroupComponent2
          founding="5th Anniversary"
          nov16th1969="Nov 16th 2019"
        />
      </div>
    </div>
  );
});

export default FrameComponent33;
