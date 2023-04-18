interface Card {
    id: number,
    number: string,
    expiry: string,
    cvc: string,
    name: string,
    default: boolean,
}

const Cards: Card[] = [
    {
        id: 1,
        number: '4242 4242 4242 4242',
        expiry: '10/25',
        cvc: '222',
        name: 'Julcarl L. Selma',
        default: true,
    },
    {
        id: 2,
        number: '5299 4242 4242 4242',
        expiry: '10/27',
        cvc: '222',
        name: 'Yasmin G. Tapado ',
        default: false,
    },
    {
        id: 3,
        number: '3714 496353 98431',
        expiry: '10/27',
        cvc: '222',
        name: 'Yasmin G. Tapado ',
        default: false,
    },
    {
        id: 4,
        number: '8171 9999 2766 0000',
        expiry: '10/27',
        cvc: '222',
        name: 'Yasmin G. Tapado ',
        default: false,
    },
    {
        id: 5,
        number: '5019 5555 4444 5555',
        expiry: '10/27',
        cvc: '222',
        name: 'Yasmin G. Tapado ',
        default: false,
    }
];

export default Cards;