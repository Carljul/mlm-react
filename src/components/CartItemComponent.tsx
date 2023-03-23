import { IonIcon, IonImg, IonInput, IonLabel } from "@ionic/react";
import { add, remove } from "ionicons/icons";
import { useState } from "react";
import { Link } from "react-router-dom";

interface CartItemProps {
    id: number,
    name: string, 
    img: string,
    quantity: number,
    price: string,
    variations?: object
}

const CartItemComponent: React.FC<CartItemProps> = (props: CartItemProps) => {
    const [countItem, setCountItem] = useState<number>(1);
    const variations = props.variations ? JSON.stringify(props.variations)
        .replace(/[{}"]/g, '')
        .replace(/:/g, ': ')
        .replace(/,/g, ', ') : '';

    const addCount = () => {
        let currentCount = countItem;
        currentCount = currentCount + 1;
        setCountItem(currentCount);
    }

    const deductCount = () => {
        let currentCount = countItem;
        currentCount = currentCount - 1;
        if (currentCount > 0) {
            setCountItem(currentCount);
        }
    }

    const checkCountValue = (event: React.KeyboardEvent<HTMLIonInputElement>) => {
        let value = event.currentTarget.value;
        if (value === '' || value === null || value === 0 || typeof value === 'undefined') {
            setCountItem(1);
        } else {
            setCountItem(parseInt(value.toString()));
        }
    }


    return (
        <div className="cartItems d-flex center-align">
            <div className="img">
                <IonImg src={props.img} alt=""></IonImg>
            </div>
            <div className="description">
                <Link to={`/app/product/details/`+props.id}><IonLabel className='title'>Mens Casual Premium</IonLabel></Link>
                <IonLabel color='success'>$22.30</IonLabel>
                {
                    variations ?
                    <IonLabel className="variation">{variations}</IonLabel>
                    :
                    <></>
                }
                <div className="countItemMultiplier">
                    <IonIcon icon={remove} onClick={deductCount}></IonIcon>
                    <IonInput type="number" value={countItem} min={1} onKeyUp={checkCountValue}></IonInput>
                    <IonIcon icon={add} onClick={addCount}></IonIcon>
                </div>
            </div>
        </div>
    );
}

export default CartItemComponent;