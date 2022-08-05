import "./alert.css";
import { WarningSVG } from "../../assets/icons/Warning";

/* import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons"; */
const Alert = () => {
  return (
    <div className="alert-container">
      <WarningSVG />
      <p className="alert-container__text">We use the market rate. This is for informational purposes only.</p>
    </div>
  );
};

export default Alert;
