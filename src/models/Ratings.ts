import user, { UserProps } from "./User"

export interface RatingProps {
    id: number,
    user_id: number,
    product_id: number,
    rating: number
    message: string,
    user: UserProps
}


const ratings: RatingProps[] = [
    {
        id: 1,
        user_id: 1,
        product_id: 1,
        rating: 1,
        message: 'Nindot baya siya, mas maayo kung maka tilaw jud kos mismong product amazing',
        user: user
    },{
        id: 2,
        user_id: 1,
        product_id: 1,
        rating: 3,
        message: 'amazing nindot baya jud siya ay',
        user: user
    },{
        id: 3,
        user_id: 1,
        product_id: 2,
        rating: 4,
        message: 'amazing',
        user: user
    }
];

export default ratings;