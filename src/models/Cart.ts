import products, { Product } from "./Products";

export interface CartItemProps {
    id: number,
    quantity: number,
    variations?: object,
    product: Product
}

let carts: CartItemProps[] = [];

class CartClass {
    public cartList()
    {
        return carts;
    }

    public cartCount()
    {
        return carts.length;
    }

    public addItem(item: CartItemProps)
    {
        carts.push(item);
    }

    public showTotal()
    {
        let total = 0;
        carts.map((item, index) => (
            total += item.product.details.price * item.quantity
        ));
        return `$`+total.toFixed(2);
    }
}

export default CartClass;