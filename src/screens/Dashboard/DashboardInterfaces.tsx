import { MutableRefObject } from "react";
import { CARD_ACTIONS, ICard } from "../../typings/Types";

export interface IDashboardProps {
    selectedCard?: ICard;
    availableCards?: ICard[];
    showAddCardForm?: boolean;
    showConfirmationModal?: boolean;
    inputRef?: MutableRefObject<HTMLInputElement | null>;
    inputError: {status: boolean, message: string};
    addCard: VoidFunction;
    handleCardSelection: (index: number) => void;
    handleCardAction: (action: CARD_ACTIONS) => void;
    closeHandler: VoidFunction;
    handleCancelCard: VoidFunction;
    handleAddNewCard: VoidFunction;
};