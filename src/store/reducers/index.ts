import { ReduxConstant } from "../../constants/ReduxConstants";
import { IReduxState } from "../../typings/ReduxInterface";

export interface ReduxAction<T> {
    type: string;
    payload: T;
}

export const initialState = {
    count : 0, 
    availableCards: []
}

export const Reducer = (
    state = initialState,
    action: ReduxAction<any>
): IReduxState => {
    switch (action.type) {
        case ReduxConstant.FETCH_CARDS:
            return {
                ...state,
                availableCards: action.payload
            }
        case ReduxConstant.ADD_CARD:
            return {
                ...state,
                availableCards: action.payload.availableCards
            }
        default:
            return state;
    }
};

export default Reducer;