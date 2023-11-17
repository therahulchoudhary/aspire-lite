import styles from "./TransactionItem.module.css";
import RightArrow from "../../assets/next.svg";
import Subscription from "../../assets/megaphone.svg";
import BoxIcon from "../../assets/file-storage.svg";
import AirIcon from "../../assets/flights.svg";
import { TRANSACTION_CATEGORY, TRANSFER_TYPE } from "../../typings/Types";
import Card from "../../assets/business-and-finance.svg";
import { isMobile } from "../../helpers/HelperFunctions";

interface Props {
  type: TRANSACTION_CATEGORY;
  amount: number;
  date: string;
  name: string;
  transfer_type: TRANSFER_TYPE;
  message: string;
}

const TransactionItem = (props: Props): JSX.Element => {
  const { type, amount, date, name, transfer_type, message } = props;
  const getIcon = (type: TRANSACTION_CATEGORY): string => {
    switch (type) {
      case TRANSACTION_CATEGORY.AIR_TICKET:
        return AirIcon;
      case TRANSACTION_CATEGORY.SUBSCRIPTION:
        return Subscription;
      case TRANSACTION_CATEGORY.PAYMENT:
        return BoxIcon;
    }
  };

  const getBGColor = (type: TRANSACTION_CATEGORY): string => {
    switch (type) {
      case TRANSACTION_CATEGORY.AIR_TICKET:
        return '#00D6B51A';
      case TRANSACTION_CATEGORY.SUBSCRIPTION:
        return '#F251951A';
      case TRANSACTION_CATEGORY.PAYMENT:
        return '#009DFF1A';
    }
  }
  return (
    <div className={`py-3 ${styles.transactionItem}`}>
      <div className="d-flex justify-content-between align-items-start">
        <div className="d-flex align-items-start">
          <div className="d-flex align-items-center justify-content-center rounded-circle p-3" style={{background: getBGColor(type)}}>
            <img src={getIcon(type)} alt="transaction_category" />
          </div>
          <div className="ms-3">
            <p className={`m-0 pb-1 ${styles.heading}`}>{name}</p>
            <p className={`m-0 ${styles.date}`}>{date}</p>
            <div className="d-flex py-2">
              <div className={styles.messageIcon}>
                <img src={Card} alt="message_icon" />
              </div>
              <p className={`m-0 ms-2 ${styles.message}`}>{message}</p>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center">
          <p className={`m-0 ${isMobile() ? 'me-1' : 'me-3'} ${styles.transactionAmount} ${transfer_type === TRANSFER_TYPE.CREDIT ? 'text-success' : 'text-black'}`}>
            {transfer_type === TRANSFER_TYPE.CREDIT ? "+" : "-"} S$ {amount}
          </p>
          <img src={RightArrow} alt={"right_arrow"} />
        </div>
      </div>
    </div>
  );
};

export default TransactionItem;