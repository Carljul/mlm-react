export interface RoleProps {
    id: number,
    code: string,
    name: string,
}

const roles: RoleProps[] = [
    {
        id: 1,
        code: 'admin',
        name: 'Administrator'
    },
    {
        id: 2,
        code: 'seller',
        name: 'Seller'
    },
    {
        id: 3,
        code: 'buyer',
        name: 'Buyer'
    }
];

export default roles;