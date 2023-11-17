import styles from "./CustomCard.module.css";
import logo from "../../assets/Aspire Logo-1.svg";
import cardType from "../../assets/Visa Logo.svg";
import eye from "../../assets/remove_red_eye-24px.svg";
import { useState } from "react";
import { CARD_STATUS } from "../../typings/Types";
import { isMobile } from "../../helpers/HelperFunctions";

interface Props {
  cardNumber: string;
  expiry: string;
  cvv: string;
  name?: string;
  status: CARD_STATUS;
}

const CustomCard = (props: Props): JSX.Element => {
  const [showCardNumber, setShowCardNumber] = useState<boolean>(false);
  const { cardNumber, expiry, cvv, name, status } = props;

  const handleShowCard = () => {
    setShowCardNumber(true);
    setTimeout(() => {
      setShowCardNumber(false);
    }, 3000);
  };

  return (
    <div className="w-100 mt-4 position-relative">
      <div
        className={`${styles.customCard} ${
          status === CARD_STATUS.FREEZED && styles.inactive
        }`}
      >
        <div className="d-flex justify-content-end">
          <img src={logo} alt="" />
        </div>
        <h4 className={`text-white ${isMobile() ? "py-2" : "py-4"}`}>{name}</h4>
        <div
          className={`d-flex justify-content-between align-item-center text-white ${
            styles.cardNumber
          } ${isMobile() ? "w-100" : "w-75"}`}
        >
          <div className="m-0">
            {showCardNumber ? (
              <span>{cardNumber.toString().slice(0, 5)}</span>
            ) : (
              <span>&#x25cf; &#x25cf; &#x25cf; &#x25cf;</span>
            )}
          </div>
          <div className="m-0">
            {showCardNumber ? (
              <span>{cardNumber.toString().slice(5, 9)}</span>
            ) : (
              <span>&#x25cf; &#x25cf; &#x25cf; &#x25cf;</span>
            )}
          </div>
          <div className="m-0">
            {showCardNumber ? (
              <span>{cardNumber.toString().slice(9, 14)}</span>
            ) : (
              <span>&#x25cf; &#x25cf; &#x25cf; &#x25cf;</span>
            )}
          </div>
          <div>
            <span>{cardNumber.toString().slice(14, 19)}</span>
          </div>
        </div>
        <div
          className={`d-flex justify-content-between align-items-center text-white ${
            isMobile() ? "w-75 py-2" : "w-50 py-4"
          }`}
        >
          <div>Thru: {expiry}</div>
          <div>CVV: {showCardNumber ? cvv : "* * *"}</div>
        </div>
        <div className="d-flex justify-content-end">
          <img src={cardType} alt="card_type" />
        </div>
      </div>
      <div className={`${styles.showCardButton}`} onClick={handleShowCard}>
        <img src={eye} alt="eye_icon" />
        <p className="m-0">Show card number</p>
      </div>
    </div>
  );
};

export default CustomCard;
