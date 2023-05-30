import { memo } from "react";
import "./SuccessContainer.css";
const SuccessContainer = memo(({ confirmationText, onVectorIconClick }) => {
  return (
    <div className="page-title">
      <img
        className="vector-icon295"
        alt=""
        src="/vector6.svg"
        onClick={onVectorIconClick}
      />
      <b className="you-have-successfully">{confirmationText}</b>
      <img className="vector-icon296" alt="" src="/vector210.svg" />
    </div>
  );
});

export default SuccessContainer;
