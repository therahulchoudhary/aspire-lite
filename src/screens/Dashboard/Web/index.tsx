import Navbar from "../../../components/Navbar";
import { withDashboardMethods } from "../DashboardMethods";
import styles from "./DashboardWeb.module.css";
import AddIcon from "../../../assets/box.svg";
import { CardActions, settings } from "../../../constants/MockData";
import Slider from "react-slick";
import CustomCard from "../../../components/CustomCard";
import CardDetailIcon from "../../../assets/Group 11889.svg";
import TransactionIcon from "../../../assets/Group 11889-1.svg";
import TransactionItem from "../../../components/TransactionItem";
import CardDetailRow from "../../../components/CardDetailRow";
import { IDashboardProps } from "../DashboardInterfaces";
import Accordion from "../../../components/Accordion";
import DialogBox from "../../../components/DialogBox";
import { CARD_ACTIONS, CARD_STATUS } from "../../../typings/Types";

const DashboardWeb = (props: IDashboardProps): JSX.Element => {
  const {
    selectedCard,
    availableCards,
    showAddCardForm,
    showConfirmationModal,
    handleCardSelection,
    handleCardAction,
    closeHandler,
    handleCancelCard,
    handleAddNewCard,
    addCard,
    inputRef,
    inputError
  } = props;

  return (
    <div className="row p-0 m-0">
      <div className="col-md-3 p-0">
        <Navbar />
      </div>
      <div className={`col-md-9 ${styles.sectionRight}`}>
        <div className="d-flex align-items-end justify-content-between">
          <div>
            <p className="mb-2">Available Balance</p>
            <div className="d-flex align-items-center text-dark">
              <div className={`text-white ${styles.currencyTag}`}>S$</div>
              <p className={`m-0 mx-2 ${styles.balance}`}>3,000</p>
            </div>
          </div>
          <div
            className={`d-flex align-items-center ${styles.newCardButton}`}
            onClick={handleAddNewCard}
          >
            <img src={AddIcon} alt="" />
            <p className="m-0 mx-2">New card</p>
          </div>
        </div>
        <div className={`d-flex py-4 ${styles.tabs}`}>
          <p className={`me-4 m-0 ${styles.activeTab}`}>My debit cards</p>
          <p className="m-0 opacity-25">All company cards</p>
        </div>
        <div className={`${styles.sectionDetail}`}>
          <div className="row">
            <div className="col-md-6">
              <div className="carousel pb-4 mb-3">
                <Slider
                  {...settings}
                  afterChange={(index) => handleCardSelection(index)}
                >
                  {availableCards?.map((card) => (
                    <CustomCard
                      cardNumber={card.cardNumber}
                      name={card.name}
                      cvv={card.cvv}
                      expiry={card.expiry}
                      status={card.status}
                      key={`Cards#${card.cardId}`}
                    />
                  ))}
                </Slider>
              </div>
              <div className={`d-flex ${styles.cardActions}`}>
                {CardActions.map((action) => (
                  <div
                    key={`CardAction#${action.title}`}
                    className={styles.actionItem}
                    onClick={() => handleCardAction(action.action)}
                  >
                    <img src={action.icon} alt="" />
                    <p className="m-0 w-75 pt-2">
                      {action.action === CARD_ACTIONS.CHANGE_STATUS
                        ? selectedCard?.status === CARD_STATUS.FREEZED
                          ? "Unfreeze card"
                          : "Freeze card"
                        : action.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-md-6 mt-4">
              <Accordion
                title="Card details"
                icon={CardDetailIcon}
                id={"cardDetails"}
              >
                <div className="accordion-body">
                  <CardDetailRow
                    title={"Card Name"}
                    value={selectedCard?.name || "Card Holder"}
                  />
                  <CardDetailRow
                    title={"Card Number"}
                    value={selectedCard?.cardNumber || "XXXX XXXX XXXX 1234"}
                  />
                  <CardDetailRow
                    title={"Expiry"}
                    value={selectedCard?.expiry || "XX/XX"}
                  />
                  <CardDetailRow
                    title={"CVV"}
                    value={selectedCard?.cvv || "XXX"}
                  />
                </div>
              </Accordion>
              <Accordion
                title="Recent transactions"
                icon={TransactionIcon}
                id={"recentTransaction"}
              >
                <div className="accordion-body">
                  {selectedCard?.transactions?.map((transaction) => (
                    <TransactionItem
                      type={transaction.type}
                      amount={transaction.amount}
                      date={transaction.date}
                      name={transaction.name}
                      transfer_type={transaction.transfer_type}
                      message={transaction.message}
                      key={`TransactionBy#${
                        transaction.name + transaction.amount
                      }`}
                    />
                  ))}
                </div>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
      <DialogBox isVisible={showAddCardForm} closeHandler={closeHandler}>
        <div>
          <label className="pb-2">Enter Card Name</label>
          <input type="text" className={`form-control ${inputError.status && 'is-invalid'}`} ref={inputRef} />
          <p className="text-danger">{inputError.message}</p>
        </div>
        <div className={`d-flex justify-content-end pt-2 ${styles.addCardModal}`}>
          <button onClick={addCard}>
            Add
          </button>
          <button onClick={closeHandler}>
            Cancel
          </button>
        </div>
      </DialogBox>
      <DialogBox isVisible={showConfirmationModal} closeHandler={closeHandler}>
        <div className={styles.confirmationModal}>
          <p>Are you sure you want to cancel this card?</p>
          <div className="d-flex justify-content-end">
            <button onClick={handleCancelCard}>
              Yes, Cancel
            </button>
            <button onClick={closeHandler}>
              No
            </button>
          </div>
        </div>
      </DialogBox>
    </div>
  );
};

export default withDashboardMethods(DashboardWeb);
