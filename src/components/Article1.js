import { memo } from "react";
import "./Article1.css";
const Article1 = memo(() => {
  return (
    <div className="article-1">
      <div className="rectangle-group">
        <img className="frame-child75" alt="" src="/rectangle-16@2x.png" />
        <div className="frame-parent228">
          <div className="dr-john-james-parent">
            <div className="dr-john-james">Dr John James</div>
            <div className="frame-child76" />
            <div className="dr-john-james">1st March 2023</div>
          </div>
          <div className="what-a-degree">
            What a degree in theology taught me about ministry
          </div>
          <div className="we-exist-to2">
            We exist to bring maturity to church and transformation to society
            through equipped leadership based on Christian values and principles
            by training people in their area of calling
          </div>
        </div>
      </div>
      <div className="button-primary10">
        <div className="button10">Read</div>
      </div>
    </div>
  );
});

export default Article1;
