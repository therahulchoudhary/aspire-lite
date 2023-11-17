import { useDispatch } from "react-redux";
import { IActionCreators } from "../../typings/ReduxInterface";
import { ActionCreators } from "../actionCreators";
import { ICard } from "../../typings/Types";
import { Card } from "../../constants/MockData";

export const useAction = (): IActionCreators => {
    const dispatch = useDispatch();

    const fetchCards = () => {
        const cards = [Card, {...Card, name: 'Rahul CHoudhary', cardId: 2}];
        dispatch(ActionCreators.fetchCards(cards));
    }

    const setCards = (payload: {availableCards: ICard[]}) => {
        dispatch(ActionCreators.setCards(payload));
    }
    
    return {
        fetchCards,
        setCards
    }
}