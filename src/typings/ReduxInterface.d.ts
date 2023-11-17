import { ICard, TRANSFER_TYPE } from "./Types";

export interface IReduxState {
    count: number,
    availableCards?: ICard[],
}

export interface IActionCreators {
    fetchCards: VoidFunction;
    setCards: (payload: {availableCards: ICard[]}) => void;
}