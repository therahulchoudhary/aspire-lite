export enum TRANSFER_TYPE {
    CREDIT = "CREDIT",
    DEBIT = "DEBIT"
}

export enum CARD_STATUS {
    FREEZED = "FREEZED",
    UNFREEZED = "UNFREEZED"
}

export enum TRANSACTION_CATEGORY {
    AIR_TICKET = "AIR_TICKET",
    SUBSCRIPTION = "SUBSCRIPTION",
    PAYMENT = "PAYMENT"
}

export enum CARD_ACTIONS {
    CHANGE_STATUS = "CHANGE_STATUS",
    SET_SPEND = "SET_SPEND",
    CANCEL_CARD = "CANCEL_CARD",
    GPAY = "GPAY",
    REPLACE_CARD = "REPLACE_CARD"
}

export interface ICard {
    cardId: number, 
    cardNumber: string,
    expiry: string,
    cvv: string,
    name?: string,
    status: CARD_STATUS,
    transactions?: {
        type: TRANSACTION_CATEGORY,
        amount: number,
        date: string,
        name: string,
        transfer_type: TRANSFER_TYPE,
        message: string
    }[]
}