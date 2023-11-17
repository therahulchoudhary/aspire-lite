import { useEffect, useRef, useState } from "react";
import { IDashboardProps } from "./DashboardInterfaces";
import { CARD_ACTIONS, CARD_STATUS, ICard } from "../../typings/Types";
import { useAction } from "../../store/actions";
import { useSelector } from "react-redux";
import { IReduxState } from "../../typings/ReduxInterface";
import { getRandomCardNumber, getRandomExpiry, validateString } from "../../helpers/HelperFunctions";
import { Card } from "../../constants/MockData";

export const withDashboardMethods =
  (Component: React.FC<IDashboardProps>) => (): JSX.Element => {
    const [selectedCard, setSelectedCard] = useState<ICard>();
    const [showAddCardForm, setShowAddCardForm] = useState<boolean>(false);
    const [showConfirmationModal, setShowConfirmationModal] =
      useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [inputError, setInputError] = useState<{status: boolean, message: string}>({status: false, message: ''});

    const { availableCards } = useSelector<
      IReduxState,
      { availableCards: ICard[] }
    >((state) => ({
      availableCards: state.availableCards || [],
    }));

    const { fetchCards, setCards } = useAction();

    const handleCardSelection = (index: number): void => {
      const card = availableCards[index];
      setSelectedCard(card);
    };

    const handleCardAction = (action: CARD_ACTIONS): void => {
      if (action === CARD_ACTIONS.CHANGE_STATUS) {
        const index = availableCards.findIndex(
          (card) => card.cardId === selectedCard?.cardId
        );
        availableCards[index]["status"] =
          availableCards[index]["status"] === CARD_STATUS.FREEZED
            ? CARD_STATUS.UNFREEZED
            : CARD_STATUS.FREEZED;
        setCards({ availableCards: availableCards });
      }
      if (action === CARD_ACTIONS.CANCEL_CARD) {
        setShowConfirmationModal(true);
      }
    };

    const handleCancelCard = (): void => {
      const newCards = availableCards.filter(
        (card) => card.cardId !== selectedCard?.cardId
      );
      setCards({
        availableCards: newCards,
      });
      closeHandler();
    };

    const closeHandler = (): void => {
      setShowAddCardForm(false);
      setShowConfirmationModal(false);
    };

    const handleAddNewCard = (): void => {
        setShowAddCardForm(true);
    }

    const addCard = (): void => {
        if(inputRef.current?.value ===  ""){
          setInputError({
            status: true,
            message: 'Please enter a name'
          })
          return;
        }
        if(!validateString(inputRef.current?.value || "")){
          setInputError({
            status: true,
            message: 'Please enter a valid name'
          })
          return;
        }
        const card = {
            cardId: (Math.floor(Math.random() * 900) + 100), 
            cardNumber: getRandomCardNumber(),
            expiry: getRandomExpiry(),
            cvv: (Math.floor(Math.random() * 900) + 100).toString(),
            name: inputRef.current?.value,
            status: CARD_STATUS.UNFREEZED,
            transactions: Card.transactions
        }
        availableCards.push(card);
        setCards({
            availableCards: availableCards
        });
        setInputError({
          status: false,
          message: ''
        })
        closeHandler();
    }

    useEffect(() => {
      fetchCards();
    }, []);

    useEffect(() => {
      if (availableCards.length > 0) {
        setSelectedCard(availableCards[0]);
      }
    }, [availableCards]);

    return (
      <Component
        {...{
          selectedCard,
          availableCards,
          handleCardSelection,
          handleCardAction,
          closeHandler,
          showAddCardForm,
          showConfirmationModal,
          handleCancelCard,
          handleAddNewCard,
          addCard,
          inputRef,
          inputError
        }}
      />
    );
  };
