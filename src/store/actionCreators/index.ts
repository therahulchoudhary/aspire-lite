import { ReduxConstant } from "../../constants/ReduxConstants";
import { ICard } from "../../typings/Types";

export interface IReturnActionObject {
    type: ReduxConstant,
    payload: any
}

const fetchCards = (payload: ICard[]): IReturnActionObject => ({
    type: ReduxConstant.FETCH_CARDS,
    payload
})

const setCards = (payload: {availableCards: ICard[]}): IReturnActionObject => ({
    type: ReduxConstant.ADD_CARD,
    payload
})

export const ActionCreators = {
    fetchCards,
    setCards
}