import manCategory from '../assets/img/men_category.jpg';

enum TransactionStatus {
    success,
    danger
}

export interface TransactionItemProps {
    id: number,
    img?: string | null,
    name: string, 
    datetime: Date,
    amount: number,
    status: TransactionStatus
}

const transactions: TransactionItemProps[] = [{
        id: 1,
        img: manCategory,
        name: 'Nathaniel', 
        datetime: new Date('19 Jan 2023 05:30 pm'),
        amount: 15.00,
        status: TransactionStatus.success
    },{
        id: 2,
        img: null,
        name: 'Ordered Potato', 
        datetime: new Date('19 Jan 2023 05:30 pm'),
        amount: 5.00,
        status: TransactionStatus.danger
    },{
        id: 3,
        img: null,
        name: 'Ordered Potato', 
        datetime: new Date('19 Jan 2023 05:30 pm'),
        amount: 5.00,
        status: TransactionStatus.danger
    },{
        id: 4,
        img: manCategory,
        name: 'Nathaniel', 
        datetime: new Date('19 Jan 2023 05:30 pm'),
        amount: 15.00,
        status: TransactionStatus.success
    }
];

export default class TransactionClass {
    public transactionList()
    {
        return transactions;
    }

    public getStatusString(status: TransactionStatus): string {
        switch (status) {
            case TransactionStatus.success:
                return 'success';
            case TransactionStatus.danger:
                return 'danger';
        }
    }
}