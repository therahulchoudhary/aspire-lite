import { CARD_ACTIONS, CARD_STATUS, TRANSACTION_CATEGORY, TRANSFER_TYPE } from "../typings/Types";
import Home from '../assets/Home.svg';
import CardIcon from '../assets/CardIcon.svg';
import Payments from '../assets/Payments.svg';
import Account from '../assets/Account.svg';
import Credit from '../assets/Credit.svg';
import FreezeCard from '../assets/Freeze card.svg';
import SetSpendLimit from '../assets/Set spend limit.svg';
import Gpay from '../assets/GPay.svg';
import ReplaceCard from '../assets/Replace card.svg';
import CancelCard from '../assets/Deactivate card.svg';
import LogoMobile from '../assets/LogoMobile.svg';
import AccountMobile from '../assets/AccountMobile.svg';
import CreditMobile from '../assets/CreditMobile.svg';
import PaymentsMobile from '../assets/PaymentsMobile.svg';

export const Card = {
    cardId: 1, 
    cardNumber: '1234 5678 9876 1234',
    expiry: '02/23',
    cvv: '012',
    name: 'Test Card',
    status: CARD_STATUS.UNFREEZED,
    transactions: [
        {
            type: TRANSACTION_CATEGORY.PAYMENT,
            amount: 151,
            date: '20 May 2020',
            name: 'Hamleys',
            transfer_type: TRANSFER_TYPE.CREDIT,
            message: 'Refund on debit card'
        },
        {
            type: TRANSACTION_CATEGORY.AIR_TICKET,
            amount: 149,
            date: '20 May 2020',
            name: 'Hamleys',
            transfer_type: TRANSFER_TYPE.DEBIT,
            message: 'Refund on debit card'
        },
        {
            type: TRANSACTION_CATEGORY.SUBSCRIPTION,
            amount: 130,
            date: '20 May 2020',
            name: 'Hamleys',
            transfer_type: TRANSFER_TYPE.CREDIT,
            message: 'Refund on debit card'
        }
    ]
};

export const NavbarOptions = [
    {
        title: 'Home',
        icon: Home,
        active: false,
    },
    {
        title: 'Cards',
        icon: CardIcon,
        active: true,
    },
    {
        title: 'Payments',
        icon: Payments,
        active: false,
    },
    {
        title: 'Credit',
        icon: Credit,
        active: false,
    },
    {
        title: 'Settings',
        icon: Account,
        active: false,
    },
]

export const NavbarOptionsMobile = [
    {
        title: 'Home',
        icon: LogoMobile,
        active: false,
    },
    {
        title: 'Cards',
        icon: CardIcon,
        active: true,
    },
    {
        title: 'Payments',
        icon: PaymentsMobile,
        active: false,
    },
    {
        title: 'Credit',
        icon: CreditMobile,
        active: false,
    },
    {
        title: 'Settings',
        icon: AccountMobile,
        active: false,
    },
]

export const CardActions = [
    {
        title: 'Freeze card',
        icon: FreezeCard,
        action: CARD_ACTIONS.CHANGE_STATUS
    },
    {
        title: 'Set spend limit',
        icon: SetSpendLimit,
        action: CARD_ACTIONS.SET_SPEND
    },
    {
        title: 'Add to GPay',
        icon: Gpay,
        action: CARD_ACTIONS.GPAY
    },
    {
        title: 'Replace Card',
        icon: ReplaceCard,
        action: CARD_ACTIONS.REPLACE_CARD
    },
    {
        title: 'Cancel Card',
        icon: CancelCard,
        action: CARD_ACTIONS.CANCEL_CARD
    }
]

export const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    customPaging: () => (
        <div>
          <div className="dot">&#x25cf;</div>
        </div>
    ),
    dotsClass: "slick-dots slick-thumb",
};