export interface WalletProps {
    id: number,
    user_id: number,
    balance: number,
    currency: string | "PHP",
    wallet_transactions: WalletTransactionProps[] | null
}

export interface WalletTransactionProps {
    id: number,
    wallet_id: number,
    amount: number,
    transaction_type: string | "deposit" | "purchase" | "withdrawal",
    transaction_date: Date
}

const walletTransactions: WalletProps = {
    id: 1,
    user_id: 1,
    balance: 100.00,
    currency: "PHP",
    wallet_transactions: [
        {
            id: 1,
            wallet_id: 1,
            amount: 20.00,
            transaction_type: "deposit",
            transaction_date: new Date()
        },
        {
            id: 2,
            wallet_id: 1,
            amount: 20.00,
            transaction_type: "withdrawal",
            transaction_date: new Date()
        },
        {
            id: 3,
            wallet_id: 1,
            amount: 20.00,
            transaction_type: "deposit",
            transaction_date: new Date()
        },
        {
            id: 4,
            wallet_id: 1,
            amount: 20.00,
            transaction_type: "deposit",
            transaction_date: new Date()
        },
        {
            id: 5,
            wallet_id: 1,
            amount: 20.00,
            transaction_type: "deposit",
            transaction_date: new Date()
        },
        {
            id: 6,
            wallet_id: 1,
            amount: 20.00,
            transaction_type: "deposit",
            transaction_date: new Date()
        },
        {
            id: 6,
            wallet_id: 1,
            amount: 20.00,
            transaction_type: "deposit",
            transaction_date: new Date()
        },
        {
            id: 6,
            wallet_id: 1,
            amount: 20.00,
            transaction_type: "deposit",
            transaction_date: new Date()
        },
        {
            id: 6,
            wallet_id: 1,
            amount: 20.00,
            transaction_type: "deposit",
            transaction_date: new Date()
        },
        {
            id: 6,
            wallet_id: 1,
            amount: 20.00,
            transaction_type: "deposit",
            transaction_date: new Date()
        },
        {
            id: 6,
            wallet_id: 1,
            amount: 20.00,
            transaction_type: "deposit",
            transaction_date: new Date()
        },
        {
            id: 6,
            wallet_id: 1,
            amount: 20.00,
            transaction_type: "deposit",
            transaction_date: new Date()
        },
    ]
}

export default walletTransactions;