import { memo } from "react";
import CourseCard from "./CourseCard";
import "./Certificate.css";
const Certificate = memo(() => {
  return (
    <div className="certificate2">
      <div className="certificate-programs1">Certificate Programs</div>
      <div className="certificate-courses">
        <div className="course-card4">
          <div className="course6">
            <div className="course-thumbnail4">
              <img
                className="pamphlet-1-icon4"
                alt=""
                src="/pamphlet-1@2x.png"
              />
            </div>
            <div className="course-details10">
              <div className="cpurse-info4">
                <div className="bachelor-of-art5">{`Certificate in Bible & Theology`}</div>
                <div className="admission-into-a4">
                  Admission into a degree program at Global University will be
                  based on the following minimum requirements
                </div>
              </div>
              <div className="course-actions4">
                <div className="course-details11">
                  <div className="course-details12">Course Details</div>
                  <img className="vector-icon274" alt="" src="/vector42.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <CourseCard
          rectangle34="/rectangle-34@2x.png"
          pamphlet1="/pamphlet-1@2x.png"
          bachelorOfArtInBibleTheol={`Certificate in Marriage & Family Therapy`}
          vector="/vector43.svg"
        />
        <CourseCard
          rectangle34="/rectangle-34@2x.png"
          pamphlet1="/pamphlet-1@2x.png"
          bachelorOfArtInBibleTheol={`Certificate in Church Administration & Management`}
          vector="/vector43.svg"
          propHeight="154px"
        />
      </div>
      <div className="certificate-courses1">
        <CourseCard
          rectangle34="/rectangle-341@2x.png"
          pamphlet1="/pamphlet-11@2x.png"
          bachelorOfArtInBibleTheol="Certificate in Children Ministry"
          vector="/vector44.svg"
          propHeight="150px"
        />
      </div>
    </div>
  );
});

export default Certificate;
