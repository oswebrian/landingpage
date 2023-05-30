import { memo, useMemo } from "react";
import "./RegistrationPage.css";
const RegistrationPage = memo(
  ({
    kindlyMakeYourRegistratio,
    feePayment,
    propWidth,
    propGap,
    onVectorIconClick,
  }) => {
    const pageTitleStyle = useMemo(() => {
      return {
        width: propWidth,
        gap: propGap,
      };
    }, [propWidth, propGap]);

    return (
      <div className="page-title1" style={pageTitleStyle}>
        <img
          className="vector-icon307"
          alt=""
          src="/vector6.svg"
          onClick={onVectorIconClick}
        />
        <b className="kindly-make-your-container">
          <p className="kindly-make-your">{kindlyMakeYourRegistratio}</p>
          <p className="kindly-make-your">{feePayment}</p>
        </b>
        <img className="vector-icon308" alt="" src="/vector210.svg" />
      </div>
    );
  }
);

export default RegistrationPage;
